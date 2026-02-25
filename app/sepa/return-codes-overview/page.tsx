import type { Metadata } from "next";
import Link from "next/link";
import ReferenceSection from "@/components/reference/ReferenceSection";
import ReferenceFooter from "@/components/reference/ReferenceFooter";
import BreadcrumbListJsonLd from "@/components/reference/BreadcrumbListJsonLd";

export const metadata: Metadata = {
  title: "SEPA Return Codes Overview (R01, R02, R03…) | Preflight Reference",
  description:
    "Overview of SEPA direct debit and credit transfer return reason codes: R01 insufficient funds, R02 account closed, and other common codes. Operational reference with links to detailed pages.",
};

const SCOPE_NOTE =
  "Operational reference. Not scheme legal text. Use scheme documentation for normative rules.";

const returnCodes = [
  { code: "R01", meaning: "Insufficient funds", detailHref: "/sepa/r01-insufficient-funds", summary: "Debtor account did not have sufficient available balance at execution or settlement." },
  { code: "R02", meaning: "Account closed", detailHref: "/sepa/r02-account-closed", summary: "Debtor account has been closed; payment cannot be executed." },
  { code: "R03", meaning: "No mandate / invalid mandate", detailHref: null, summary: "Mandate missing, invalid, or revoked; often used for SEPA direct debit." },
  { code: "R04", meaning: "Invalid creditor", detailHref: null, summary: "Creditor identifier or account details invalid or not authorised." },
  { code: "R05", meaning: "Unpaid (reason not specified)", detailHref: null, summary: "Payment returned without a specific reason code; requires investigation." },
  { code: "R06", meaning: "Duplicate payment", detailHref: null, summary: "Same payment already received or processed; duplicate detection." },
  { code: "R07", meaning: "Technical reason", detailHref: null, summary: "Technical or processing failure; scheme or bank-specific." },
  { code: "R08", meaning: "Regulatory / compliance", detailHref: null, summary: "Return due to regulatory, sanctions, or compliance reasons." },
];

const overviewBreadcrumbs = [
  { label: "Preflight", href: "/" },
  { label: "Reference", href: "/reference" },
  { label: "SEPA", href: "/reference#sepa" },
  { label: "Return codes overview" },
];

export default function SepaReturnCodesOverviewPage() {
  return (
    <article className="min-h-screen bg-white">
      <BreadcrumbListJsonLd items={overviewBreadcrumbs} currentPagePath="/sepa/return-codes-overview" />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Preflight</Link>
          <span className="mx-1.5">/</span>
          <Link href="/reference" className="text-blue-600 hover:text-blue-800 hover:underline">Reference</Link>
          <span className="mx-1.5">/</span>
          <Link href="/reference#sepa" className="text-blue-600 hover:text-blue-800 hover:underline">SEPA</Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700 font-medium">Return codes overview</span>
        </nav>
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SEPA Return Codes Overview (R01, R02, R03…)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            SEPA return reason codes indicate why a direct debit or credit transfer was rejected or returned. This overview lists the most common codes and links to detailed reference pages where we have full coverage. Use it to quickly look up a code or to understand the scheme’s return landscape.
          </p>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>Last updated: 2026-02-25</p>
            <p><strong>Scope:</strong> {SCOPE_NOTE}</p>
          </div>
        </header>

        <ReferenceSection
          id="summary-table"
          heading="Return codes at a glance"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Code</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Meaning</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Summary</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Detail</th>
                </tr>
              </thead>
              <tbody>
                {returnCodes.map((row) => (
                  <tr key={row.code} className="border-b border-gray-100">
                    <td className="py-3 px-4 font-mono font-medium text-gray-900">{row.code}</td>
                    <td className="py-3 px-4 text-gray-800">{row.meaning}</td>
                    <td className="py-3 px-4 text-gray-600">{row.summary}</td>
                    <td className="py-3 px-4">
                      {row.detailHref ? (
                        <Link href={row.detailHref} className="text-blue-600 hover:text-blue-800 hover:underline">
                          Full reference →
                        </Link>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReferenceSection>

        <ReferenceSection
          id="how-codes-work"
          heading="How return codes are used"
        >
          <p>
            In SEPA Credit Transfer (SCT) and SEPA Direct Debit (SDD), the debtor bank (or the clearing mechanism) returns a payment with a reason code when the transaction cannot be completed. The code is passed back along the scheme so the originator and creditor can understand why the payment failed. R01 and R02 are among the most frequent; R01 is a funds-availability outcome, R02 an account-lifecycle outcome. Other codes cover mandates, duplicates, technical issues, and regulatory blocks. For normative definitions and the full official list, refer to the EPC scheme documentation (e.g. SEPA Core, SEPA B2B).
          </p>
        </ReferenceSection>

        <ReferenceSection
          id="detail-pages"
          heading="Detailed reference pages"
        >
          <p className="mb-3">
            We provide in-depth operator reference for the following codes. Each page covers meaning, lifecycle, impact, triage, and prevention.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                R01 – Insufficient Funds
              </Link>
              — When it occurs, operational impact, what to check first, and how to detect or prevent it.
            </li>
            <li>
              <Link href="/sepa/r02-account-closed" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                R02 – Account Closed
              </Link>
              — Account lifecycle; impact on recurring and one-off payments; triage and prevention.
            </li>
          </ul>
        </ReferenceSection>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link href="/reference#sepa" className="text-blue-600 hover:text-blue-800 hover:underline">
            ← Reference (SEPA)
          </Link>
          <Link href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:text-blue-800 hover:underline">
            R01 – Insufficient Funds →
          </Link>
        </div>

        <ReferenceFooter />
      </div>
    </article>
  );
}
