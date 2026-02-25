import type { Metadata } from "next";
import Link from "next/link";
import ReferenceFooter from "@/components/reference/ReferenceFooter";

export const metadata: Metadata = {
  title: "Reference | Preflight",
  description:
    "Operator-grade reference for payment failure codes, status flows, validation, operations, and playbooks. SEPA, SWIFT, ISO 20022.",
};

const startHereCards = [
  {
    title: "SEPA rejects & returns",
    href: "/sepa/return-codes-overview",
    description: "Return reason codes (R01, R02, R03…) with table summary and links to detailed pages.",
  },
  {
    title: "SWIFT network & routing failures",
    href: "/swift/error-codes-overview",
    description: "NACK, routing, and business rejects overview with links to detailed pages.",
  },
  {
    title: "ISO 20022 status flows",
    href: "/iso20022/pacs002-status-codes",
    description: "pacs.002 status codes (ACSP, ACSC, RJCT, PDNG) and timing.",
  },
];

const groups: { id: string; title: string; links: { href: string; label: string; description: string }[] }[] = [
  {
    id: "sepa",
    title: "SEPA",
    links: [
      { href: "/sepa/return-codes-overview", label: "Return codes overview (R01, R02, R03…)", description: "Table summary of SEPA return reason codes with links to detailed pages." },
      { href: "/sepa/r01-insufficient-funds", label: "R01 – Insufficient Funds", description: "Funds-availability outcome; when it occurs, impact, and prevention." },
      { href: "/sepa/r02-account-closed", label: "R02 – Account Closed", description: "Account lifecycle; beneficiary bank returns; impact on recurring flows." },
    ],
  },
  {
    id: "iso20022",
    title: "ISO 20022",
    links: [
      { href: "/iso20022/pacs002-status-codes", label: "pacs.002 status codes", description: "ACSP, ACSC, RJCT, PDNG; operational meaning and timing." },
    ],
  },
  {
    id: "swift",
    title: "SWIFT",
    links: [
      { href: "/swift/error-codes-overview", label: "Error codes overview (NACK, routing, business rejects)", description: "Structured reference and lifecycle context; links to detailed pages." },
      { href: "/swift/nack-format-error", label: "NACK – Format Error", description: "Network-level rejection; invalid BIC, missing field 59; pre-validation." },
      { href: "/swift/intermediary-routing-failure", label: "Intermediary routing failure", description: "Field 56/57, nostro alignment, unexpected routing." },
    ],
  },
  {
    id: "validation",
    title: "Validation",
    links: [
      { href: "/validation/iban-validation-failure", label: "IBAN validation failure", description: "Checksum vs scheme acceptance; BIC mismatch, closed account." },
    ],
  },
  {
    id: "operations",
    title: "Operations",
    links: [
      { href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure (cross-border)", description: "Submission vs value cutoff; FX and liquidity timing; SLA risk." },
      { href: "/operations/stuck-payment-detection", label: "Stuck payment detection", description: "Absence-of-event detection; SLA thresholds; triage." },
      { href: "/operations/payment-sla-breach-monitoring", label: "SLA breach monitoring", description: "Settlement SLA by rail; event-driven monitoring; escalation." },
    ],
  },
  {
    id: "playbooks",
    title: "Playbooks",
    links: [
      { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", description: "Trace reconstruction; network vs correspondent vs beneficiary; evidence pack." },
    ],
  },
];

const howToUse = [
  "Look up the code — find the reject or status and its scheme-accurate meaning.",
  "Confirm lifecycle stage — when it occurs (pre-settlement, post-return, etc.).",
  "Follow investigation playbook — step-by-step trace and evidence.",
  "Link to related scenarios — scheme sibling, operations, playbook cross-links.",
];

export default function ReferenceIndexPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-800 hover:underline mb-4 inline-block">
            ← Preflight
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Reference</h1>
          <p className="text-gray-600 mt-2">
            Operator-grade reference for payment failure codes, status flows, validation, operations, and playbooks. SEPA, SWIFT, ISO 20022.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Start here</h2>
          <div className="grid sm:grid-cols-1 gap-4">
            {startHereCards.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50/30 transition-colors"
              >
                <span className="font-medium text-gray-900">{c.title}</span>
                <p className="text-sm text-gray-600 mt-1">{c.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">How to use this library</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            {howToUse.map((item, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-gray-400 shrink-0">{i + 1}.</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-8">
          {groups.map((g) => (
            <section key={g.title} id={g.id}>
              <h2 className="text-lg font-semibold text-gray-900 mb-3">{g.title}</h2>
              <ul className="space-y-3">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                    >
                      {l.label}
                    </Link>
                    <p className="text-sm text-gray-600 mt-0.5">{l.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <ReferenceFooter />
      </div>
    </div>
  );
}
