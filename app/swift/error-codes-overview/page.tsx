import type { Metadata } from "next";
import Link from "next/link";
import ReferenceSection from "@/components/reference/ReferenceSection";
import ReferenceFooter from "@/components/reference/ReferenceFooter";
import BreadcrumbListJsonLd from "@/components/reference/BreadcrumbListJsonLd";

export const metadata: Metadata = {
  title: "SWIFT Error Codes Overview (NACK, Routing, Business Rejects) | Preflight Reference",
  description:
    "Overview of common SWIFT error scenarios including network NACKs, format errors, intermediary routing failures, and business-level rejects. Includes lifecycle context and links to detailed references.",
};

const SCOPE_NOTE =
  "Operational reference. Not scheme legal text. Use scheme documentation for normative rules.";

const errorCategories = [
  {
    category: "Network format rejection (NACK)",
    signal: "NACK / negative acknowledgment",
    where: "At submission or gateway",
    detailHref: "/swift/nack-format-error",
    detailLabel: "Full reference →",
  },
  {
    category: "Intermediary routing failure",
    signal: "Return or reject with routing issue",
    where: "Correspondent / intermediary hop",
    detailHref: "/swift/intermediary-routing-failure",
    detailLabel: "Full reference →",
  },
  {
    category: "Invalid BIC / field error",
    signal: "Format validation failure",
    where: "Network validation stage",
    detailHref: "/swift/nack-format-error",
    detailLabel: "Covered in NACK reference",
  },
  {
    category: "Insufficient funds (beneficiary side)",
    signal: "Return / business reject",
    where: "Beneficiary bank",
    detailHref: "/sepa/r01-insufficient-funds",
    detailLabel: "See SEPA R01 equivalent",
  },
  {
    category: "Account closed",
    signal: "Return / business reject",
    where: "Beneficiary bank",
    detailHref: "/sepa/r02-account-closed",
    detailLabel: "See SEPA R02 equivalent",
  },
  {
    category: "Compliance / regulatory block",
    signal: "Return / reject",
    where: "Beneficiary or intermediary",
    detailHref: null,
    detailLabel: "—",
  },
];

const overviewBreadcrumbs = [
  { label: "Preflight", href: "/" },
  { label: "Reference", href: "/reference" },
  { label: "SWIFT", href: "/reference#swift" },
  { label: "Error codes overview" },
];

export default function SwiftErrorCodesOverviewPage() {
  return (
    <article className="min-h-screen bg-white">
      <BreadcrumbListJsonLd items={overviewBreadcrumbs} currentPagePath="/swift/error-codes-overview" />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">Preflight</Link>
          <span className="mx-1.5">/</span>
          <Link href="/reference" className="text-blue-600 hover:text-blue-800 hover:underline">Reference</Link>
          <span className="mx-1.5">/</span>
          <Link href="/reference#swift" className="text-blue-600 hover:text-blue-800 hover:underline">SWIFT</Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700 font-medium">Error codes overview</span>
        </nav>
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            SWIFT Error Codes Overview (NACK, Routing, Business Rejects)
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            SWIFT error scenarios fall into three broad categories: network-level format rejections (NACK), routing and intermediary failures, and business-level rejects such as funds, compliance, or account issues. This overview provides a structured reference and links to detailed pages where available.
          </p>
          <div className="mt-4 text-sm text-gray-500 space-y-1">
            <p>Last updated: 2026-02-25</p>
            <p><strong>Scope:</strong> {SCOPE_NOTE}</p>
          </div>
        </header>

        <ReferenceSection id="table" heading="Error categories at a glance">
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Typical signal</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Where it occurs</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Detail</th>
                </tr>
              </thead>
              <tbody>
                {errorCategories.map((row) => (
                  <tr key={row.category} className="border-b border-gray-100">
                    <td className="py-3 px-4 text-gray-900">{row.category}</td>
                    <td className="py-3 px-4 text-gray-700">{row.signal}</td>
                    <td className="py-3 px-4 text-gray-600">{row.where}</td>
                    <td className="py-3 px-4">
                      {row.detailHref ? (
                        <Link href={row.detailHref} className="text-blue-600 hover:text-blue-800 hover:underline">
                          {row.detailLabel}
                        </Link>
                      ) : (
                        <span className="text-gray-400">{row.detailLabel}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ReferenceSection>

        <ReferenceSection id="vs-sepa" heading="How SWIFT errors differ from SEPA returns">
          <p>
            SWIFT is a messaging network. Errors may occur before business processing (format), during routing (correspondent or intermediary logic), or during beneficiary-side processing (business reason such as funds or account status). In SEPA, returns are typically scheme-level reason codes (e.g. R01, R02) issued by the debtor or beneficiary bank. In SWIFT, you commonly see a NACK at the network or gateway when the message fails format or structural validation — that is distinct from a business reject returned later by the beneficiary. A SWIFT NACK is not the same as a business reject. NACK indicates the message was not accepted for processing; a business reject indicates the payment was processed but could not be completed (e.g. insufficient funds, account closed). Treating them separately in triage and monitoring avoids misdiagnosis and speeds resolution.
          </p>
        </ReferenceSection>

        <ReferenceSection id="lifecycle" heading="Lifecycle placement">
          <p className="mb-3">
            Commonly observed stages where errors surface:
          </p>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li><strong>Submission → Network validation (format).</strong> Invalid BIC, missing or malformed fields (e.g. field 59), or message-type issues typically produce a NACK at this stage. The message does not progress to routing or processing.</li>
            <li><strong>Gateway → Intermediary validation.</strong> Routing and correspondent logic (e.g. field 56/57, nostro alignment) can cause rejections or returns at the intermediary hop. The message may have passed format checks but fails routing or relationship rules.</li>
            <li><strong>Beneficiary bank processing.</strong> Business-level outcomes — insufficient funds, account closed, compliance blocks — are typically signalled here. The message reached the beneficiary; the reject is a business decision, not a format or routing failure.</li>
            <li><strong>Settlement / posting.</strong> Final settlement or posting failures may generate further status or return messages. Timing and status flows (e.g. pacs.002 in ISO 20022) help distinguish accepted vs settled vs rejected.</li>
          </ol>
          <p className="mt-3">
            Mapping the error category to the correct stage (network, intermediary, beneficiary, settlement) is essential for correct triage and escalation.
          </p>
        </ReferenceSection>

        <ReferenceSection id="triage" heading="What to check first (triage)">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Confirm whether you received a NACK or a business return. NACK = message not accepted; business return = processed but not completed.</li>
            <li>Identify the stage: network vs intermediary vs beneficiary. Use the typical signals and “where it occurs” from the table to narrow it down.</li>
            <li>Extract the exact reason text or code from the NACK or return message. This drives the next step (format fix, routing fix, or client/beneficiary follow-up).</li>
            <li>Check BIC, field formatting, and routing fields (56/57) when the failure is at network or intermediary stage. Commonly observed scenarios include invalid BIC, missing beneficiary, or nostro mismatch.</li>
            <li>Confirm whether the issue is structural (format, routing) or business (funds, account, compliance). Structural issues are corrected and resubmitted; business issues may require funding, account update, or compliance resolution.</li>
          </ul>
        </ReferenceSection>

        <ReferenceSection id="detail-pages" heading="Detailed reference pages">
          <p className="mb-3">
            Cross-cluster links to detailed references:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link href="/swift/nack-format-error" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                SWIFT NACK – Format Error
              </Link>
              {" "}→ /swift/nack-format-error
            </li>
            <li>
              <Link href="/swift/intermediary-routing-failure" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Intermediary Routing Failure
              </Link>
              {" "}→ /swift/intermediary-routing-failure
            </li>
            <li>
              <Link href="/validation/iban-validation-failure" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                IBAN Validation Failure
              </Link>
              {" "}→ /validation/iban-validation-failure
            </li>
            <li>
              <Link href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                SEPA R01 – Insufficient Funds
              </Link>
              {" "}→ /sepa/r01-insufficient-funds
            </li>
          </ul>
        </ReferenceSection>

        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
          <Link href="/reference#swift" className="text-blue-600 hover:text-blue-800 hover:underline">
            ← Reference (SWIFT)
          </Link>
          <Link href="/swift/nack-format-error" className="text-blue-600 hover:text-blue-800 hover:underline">
            SWIFT NACK – Format Error →
          </Link>
        </div>

        <ReferenceFooter />
      </div>
    </article>
  );
}
