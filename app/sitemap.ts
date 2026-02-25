import type { MetadataRoute } from "next";

const base = "https://preflightpayments.com";

const referenceRoutes = [
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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();
  const home = {
    url: `${base}/`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 1,
  };
  const reference = referenceRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/reference" ? 0.9 : 0.7,
  }));
  return [home, ...reference];
}
