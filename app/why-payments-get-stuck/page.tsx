import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbListJsonLd from "@/components/reference/BreadcrumbListJsonLd";
import ReferenceFooter from "@/components/reference/ReferenceFooter";
import FaqJsonLd from "@/components/reference/FaqJsonLd";
import {
  Pacs002FlowDiagram,
  StuckTimelineDiagram,
} from "@/components/reference/lifecycle";

export const metadata: Metadata = {
  title: "Why payments get stuck (delayed, pending, SLA) | Preflight",
  description:
    "Why international and cross-border payments appear stuck: state divergence, missing status events, cutoffs, and SLA breach — operator triage with diagrams and reference links.",
  alternates: {
    canonical: "/why-payments-get-stuck",
  },
};

const faq = [
  {
    question: "Why do international payments get stuck?",
    answer:
      "Common causes: payment remains in pending (ACSP/PDNG) without a follow-up status, status messages are delayed or not ingested, correspondent routing adds hops, cut-off windows delay settlement, or internal SLA thresholds are exceeded without a terminal reject or return.",
  },
  {
    question: "What is a stuck payment in operations terms?",
    answer:
      "A stuck payment has not reached a terminal outcome (settled or rejected/returned) within the expected time for its rail and corridor. Detection is driven by absence of expected events and elapsed time since the last status update.",
  },
  {
    question: "How is stuck different from rejected or returned?",
    answer:
      "Rejected or returned payments have a terminal failure signal (NACK, RJCT, SEPA R-code). Stuck means the outcome is unknown or overdue — the payment may still settle, return, or reject; triage confirms whether silence is delay or a missing event.",
  },
  {
    question: "What should I check first on a stuck payment?",
    answer:
      "Confirm payment ID and last status with timestamp; compare elapsed time to corridor SLA; verify whether a pacs.002 or return was sent but not ingested; check cutoffs and routing path if cross-border.",
  },
];

const breadcrumbs = [
  { label: "Preflight", href: "/" },
  { label: "Why payments get stuck" },
];

export default function WhyPaymentsGetStuckPage() {
  return (
    <article className="min-h-screen bg-white">
      <FaqJsonLd items={faq} />
      <BreadcrumbListJsonLd items={breadcrumbs} currentPagePath="/why-payments-get-stuck" />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            Preflight
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700 font-medium">Why payments get stuck</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why payments get stuck
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            “Stuck” is what businesses see; operators see <strong>state divergence</strong> — the payment
            is no longer moving toward a known terminal outcome within the corridor SLA. This page maps
            causes, signals, and investigation entry points without generic payment advice.
          </p>
          <p className="text-sm text-gray-500">
            Pair with{" "}
            <Link
              href="/payment-reject-vs-return-vs-pending"
              className="text-blue-600 hover:underline"
            >
              reject vs return vs pending
            </Link>{" "}
            when the last status is unclear.
          </p>
        </header>

        <StuckTimelineDiagram />
        <Pacs002FlowDiagram />

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Common stuck patterns</h2>
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>
              <strong>Pending without progression</strong> — ACSP or PDNG with no ACSC/RJCT within the
              expected window (
              <Link href="/iso20022/pacs002-status-codes" className="text-blue-600 hover:underline">
                pacs.002 reference
              </Link>
              ).
            </li>
            <li>
              <strong>Missing status ingestion</strong> — the event occurred upstream but your monitoring
              never received it; looks stuck locally.
            </li>
            <li>
              <strong>Routing and intermediary delay</strong> — extra hops or correspondent queues (
              <Link
                href="/swift/intermediary-routing-failure"
                className="text-blue-600 hover:underline"
              >
                intermediary routing failure
              </Link>
              ).
            </li>
            <li>
              <strong>Cut-off and liquidity timing</strong> — submission after value or FX cutoffs (
              <Link
                href="/operations/cutoff-failure-cross-border"
                className="text-blue-600 hover:underline"
              >
                cut-off failure (cross-border)
              </Link>
              ).
            </li>
            <li>
              <strong>SLA breach without terminal code</strong> — internal or corridor timer fired before
              a final status (
              <Link
                href="/operations/payment-sla-breach-monitoring"
                className="text-blue-600 hover:underline"
              >
                SLA breach monitoring
              </Link>
              ).
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Investigation flow</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Last status + timestamp → classify pending vs unknown.</li>
            <li>Elapsed time vs rail/corridor SLA → stuck flag or wait.</li>
            <li>Trace path for routing/cutoff; confirm ingestion of status/return messages.</li>
            <li>Escalate with evidence pack if client-facing SLA applies.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Operator reference</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link
                href="/operations/stuck-payment-detection"
                className="text-blue-600 hover:underline font-medium"
              >
                Stuck payment detection
              </Link>
            </li>
            <li>
              <Link
                href="/operations/payment-sla-breach-monitoring"
                className="text-blue-600 hover:underline font-medium"
              >
                SLA breach monitoring
              </Link>
            </li>
            <li>
              <Link href="/why-payments-fail" className="text-blue-600 hover:underline font-medium">
                Why payments fail (routing hub)
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10 p-6 border border-blue-200 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Preflight</h2>
          <p className="text-gray-700 mb-4">
            Simulate stuck and SLA-breach scenarios deterministically — train investigation and monitoring
            without production risk.
          </p>
          <Link
            href="/api"
            className="inline-flex justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Open API reference
          </Link>
        </section>

        <p className="text-sm text-gray-500 mb-8">
          <Link href="/reference" className="text-blue-600 hover:underline">
            Full reference index →
          </Link>
        </p>

        <ReferenceFooter />
      </div>
    </article>
  );
}
