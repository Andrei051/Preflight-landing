/**
 * Local SEO / discovery checks. Run after starting the app (e.g. npm run start).
 *
 * Usage:
 *   BASE_URL=http://localhost:3000 node scripts/seo-check.js
 *   # Or against production:
 *   BASE_URL=https://preflightpayments.com node scripts/seo-check.js
 *
 * Expects BASE_URL to be the app origin (no trailing slash).
 */

const BASE_URL = process.env.BASE_URL || "http://localhost:3000";

const EXPECTED_SITEMAP_PATHS = [
  "/",
  "/reference",
  "/sepa/return-codes-overview",
  "/sepa/r01-insufficient-funds",
  "/sepa/r02-account-closed",
  "/swift/error-codes-overview",
  "/swift/nack-format-error",
  "/swift/intermediary-routing-failure",
  "/iso20022/pacs002-status-codes",
  "/validation/iban-validation-failure",
  "/operations/cutoff-failure-cross-border",
  "/operations/stuck-payment-detection",
  "/operations/payment-sla-breach-monitoring",
  "/playbooks/investigate-rejected-swift-payment",
];

const SAMPLE_PAGES_FOR_CANONICAL = [
  "/",
  "/reference",
  "/sepa/r01-insufficient-funds",
  "/swift/error-codes-overview",
];

function log(name, ok, detail = "") {
  const icon = ok ? "✓" : "✗";
  const msg = detail ? `${name}: ${detail}` : name;
  console.log(`${icon} ${msg}`);
  return ok;
}

async function fetchText(path) {
  const url = `${BASE_URL}${path}`;
  const res = await fetch(url, { redirect: "follow" });
  if (!res.ok) throw new Error(`${path} returned ${res.status}`);
  return res.text();
}

async function checkSitemap() {
  let allOk = true;
  try {
    const xml = await fetchText("/sitemap.xml");
    const hasUrlset = xml.includes("<urlset") && xml.includes("</urlset>");
    allOk = log("Sitemap: valid XML with <urlset>", hasUrlset) && allOk;

    // Sitemap is built with metadataBase (preflightpayments.com), not BASE_URL — check by path in <loc>
    for (const path of EXPECTED_SITEMAP_PATHS) {
      const pathInLoc = path === "/" ? "/</loc>" : `${path}</loc>`;
      const found = xml.includes("<loc>") && xml.includes(pathInLoc);
      allOk = log(`Sitemap: contains ${path || "/"}`, found) && allOk;
    }

    const hasHttps = xml.includes("https://");
    if (hasHttps) log("Sitemap: uses HTTPS URLs", true);
  } catch (e) {
    allOk = false;
    log("Sitemap: fetch/parse", false, e.message);
  }
  return allOk;
}

async function checkRobots() {
  let allOk = true;
  try {
    const txt = await fetchText("/robots.txt");
    const hasSitemap = /Sitemap:\s*https?:\/\//i.test(txt);
    allOk = log("robots.txt: has Sitemap directive", hasSitemap) && allOk;

    const hasAllow = /Allow:\s*\//i.test(txt) || /User-agent:/i.test(txt);
    allOk = log("robots.txt: has Allow or User-agent", hasAllow) && allOk;
  } catch (e) {
    allOk = false;
    log("robots.txt: fetch", false, e.message);
  }
  return allOk;
}

function extractCanonical(html) {
  const match = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)
    || html.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  return match ? match[1] : null;
}

async function checkCanonicals() {
  let allOk = true;
  for (const path of SAMPLE_PAGES_FOR_CANONICAL) {
    try {
      const html = await fetchText(path);
      const canonical = extractCanonical(html);
      const hasCanonical = !!canonical;
      allOk = log(`Canonical: ${path || "/"}`, hasCanonical, hasCanonical ? canonical : "missing") && allOk;
      if (hasCanonical && canonical && !canonical.startsWith("http")) {
        allOk = log(`Canonical absolute URL: ${path || "/"}`, false, "should be absolute") && allOk;
      }
    } catch (e) {
      allOk = false;
      log(`Canonical: ${path || "/"}`, false, e.message);
    }
  }
  return allOk;
}

async function checkMetaAndStructured() {
  let allOk = true;
  try {
    const html = await fetchText("/");
    const hasTitle = /<title>[^<]+<\/title>/.test(html);
    allOk = log("Home: has <title>", hasTitle) && allOk;

    const hasMetaDesc = /<meta[^>]+name=["']description["'][^>]+content=["']/.test(html) || /<meta[^>]+content=["'][^"']+["'][^>]+name=["']description["']/.test(html);
    allOk = log("Home: has meta description", hasMetaDesc) && allOk;

    const hasJsonLd = /<script[^>]+type=["']application\/ld\+json["']/.test(html);
    allOk = log("Home: has JSON-LD (Organization/WebSite)", hasJsonLd) && allOk;
  } catch (e) {
    allOk = false;
    log("Meta/structured: fetch home", false, e.message);
  }
  return allOk;
}

async function checkReferencePageMeta() {
  let allOk = true;
  try {
    const html = await fetchText("/sepa/r01-insufficient-funds");
    const hasBreadcrumbList = /BreadcrumbList|ListItem/.test(html) && /application\/ld\+json/.test(html);
    allOk = log("R01 page: has BreadcrumbList JSON-LD", hasBreadcrumbList) && allOk;

    const hasFaq = /FAQPage|Question/.test(html);
    allOk = log("R01 page: has FAQPage JSON-LD", hasFaq) && allOk;
  } catch (e) {
    allOk = false;
    log("Reference page meta: fetch", false, e.message);
  }
  return allOk;
}

async function checkSitemapUrlsReachable() {
  let allOk = true;
  const base = BASE_URL.replace(/\/$/, "");
  for (const path of EXPECTED_SITEMAP_PATHS) {
    const url = path === "/" ? base + "/" : base + path;
    try {
      const res = await fetch(url, { redirect: "follow" });
      allOk = log(`Reachable: ${path || "/"}`, res.ok, res.status.toString()) && allOk;
    } catch (e) {
      allOk = false;
      log(`Reachable: ${path || "/"}`, false, e.message);
    }
  }
  return allOk;
}

async function main() {
  console.log(`\nSEO / discovery checks (BASE_URL=${BASE_URL})\n`);
  let ok = true;
  ok = (await checkSitemap()) && ok;
  ok = (await checkRobots()) && ok;
  ok = (await checkCanonicals()) && ok;
  ok = (await checkMetaAndStructured()) && ok;
  ok = (await checkReferencePageMeta()) && ok;
  ok = (await checkSitemapUrlsReachable()) && ok;
  console.log("");
  if (ok) {
    console.log("All checks passed.");
    process.exit(0);
  } else {
    console.log("Some checks failed. Fix before deploying.");
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
