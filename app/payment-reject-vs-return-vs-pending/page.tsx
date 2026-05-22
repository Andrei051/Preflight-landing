import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbListJsonLd from "@/components/reference/BreadcrumbListJsonLd";
import ReferenceFooter from "@/components/reference/ReferenceFooter";
import FaqJsonLd from "@/components/reference/FaqJsonLd";
import {
  OutcomeComparisonDiagram,
  SwiftPipelineDiagram,
} from "@/components/reference/lifecycle";

export const metadata: Metadata = {
  title: "Payment reject vs return vs pending | Preflight",
  description:
    "Operator guide: when a payment is rejected (NACK/RJCT), returned (SEPA R-codes), still pending (PDNG), or settled — cross-rail triage and links to detailed reference.",
  alternates: {
    canonical: "/payment-reject-vs-return-vs-pending",
  },
};

const faq = [
  {
    question: "What is the difference between a payment reject and a return?",
    answer:
      "A reject means the payment was not accepted for processing or was stopped with a rejection status before a successful settlement outcome — e.g. SWIFT NACK at format validation or pacs.002 RJCT. A return means the payment entered processing but could not complete and was reversed with a scheme reason code — e.g. SEPA R01 insufficient funds.",
  },
  {
    question: "What does pending mean for a payment?",
    answer:
      "Pending means the payment is in-flight: accepted into the pipeline (e.g. ACSP or PDNG) but not yet settled or finally rejected. Pending is normal for a window; beyond the corridor SLA it becomes an operational stuck signal.",
  },
  {
    question: "Is a SWIFT NACK a reject or a return?",
    answer:
      "A SWIFT NACK is a network-level reject — the message failed format or structural validation and was not accepted for business processing. It is not a beneficiary return. Treat NACK separately from business returns in triage.",
  },
  {
    question: "When should I investigate vs wait on a pending payment?",
    answer:
      "Wait while elapsed time is within the expected settlement window for the rail and corridor. Investigate when status stays pending beyond SLA, when expected status messages never arrive, or when client or treasury escalation requires confirmation.",
  },
];

const breadcrumbs = [
  { label: "Preflight", href: "/" },
  { label: "Reject vs return vs pending" },
];

export default function PaymentRejectVsReturnVsPendingPage() {
  return (
    <article className="min-h-screen bg-white">
      <FaqJsonLd items={faq} />
      <BreadcrumbListJsonLd
        items={breadcrumbs}
        currentPagePath="/payment-reject-vs-return-vs-pending"
      />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            Preflight
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700 font-medium">Reject vs return vs pending</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Payment reject vs return vs pending
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Operators lose time when these outcomes are conflated. Reject, return, pending, and settled
            describe different lifecycle stages and require different triage — on SWIFT, SEPA, and ISO 20022
            status flows alike.
          </p>
          <p className="text-sm text-gray-500">
            This hub is the cross-rail narrative; linked pages hold scheme-specific codes and playbooks.
          </p>
        </header>

        <OutcomeComparisonDiagram />

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Definitions (operator-grade)</h2>
          <dl className="space-y-4 text-gray-700">
            <div>
              <dt className="font-semibold text-gray-900">Reject</dt>
              <dd className="mt-1">
                The payment or message was not accepted, or processing ended with an explicit rejection
                before settlement — e.g.{" "}
                <Link href="/swift/nack-format-error" className="text-blue-600 hover:underline">
                  SWIFT NACK
                </Link>
                , pacs.002 <strong>RJCT</strong>. Fix the message or data and resubmit where applicable.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Pending</dt>
              <dd className="mt-1">
                In-flight: accepted into the pipeline but no terminal outcome yet — e.g.{" "}
                <Link href="/iso20022/pacs002-status-codes" className="text-blue-600 hover:underline">
                  pacs.002 PDNG or ACSP
                </Link>
                . Monitor against corridor SLA; see{" "}
                <Link href="/why-payments-get-stuck" className="text-blue-600 hover:underline">
                  why payments get stuck
                </Link>
                .
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Return</dt>
              <dd className="mt-1">
                Processed but not completed; scheme or bank issues a return reason — e.g.{" "}
                <Link href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:underline">
                  SEPA R01
                </Link>
                , beneficiary-side SWIFT business return. Investigate reason code and client impact.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-900">Settled</dt>
              <dd className="mt-1">
                Terminal success — e.g. pacs.002 <strong>ACSC</strong>. Close monitoring; archive evidence
                if required.
              </dd>
            </div>
          </dl>
        </section>

        <SwiftPipelineDiagram />

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Triage order</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Identify the <strong>last known status</strong> and timestamp (status message, gateway, or ops console).</li>
            <li>Classify: reject vs pending vs return vs settled — do not assume “failed” without the code.</li>
            <li>Match to rail: SWIFT NACK/routing vs SEPA R-code vs pacs.002 status.</li>
            <li>Follow the linked reference or playbook; escalate if pending exceeds SLA.</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Deep reference</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/swift/error-codes-overview" className="text-blue-600 hover:underline font-medium">
                SWIFT error codes overview
              </Link>
              — NACK, routing, business rejects
            </li>
            <li>
              <Link href="/sepa/return-codes-overview" className="text-blue-600 hover:underline font-medium">
                SEPA return codes overview
              </Link>
            </li>
            <li>
              <Link href="/iso20022/pacs002-status-codes" className="text-blue-600 hover:underline font-medium">
                pacs.002 status codes
              </Link>
            </li>
            <li>
              <Link
                href="/playbooks/investigate-rejected-swift-payment"
                className="text-blue-600 hover:underline font-medium"
              >
                Investigate a rejected SWIFT payment
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10 p-6 border border-blue-200 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Preflight</h2>
          <p className="text-gray-700 mb-4">
            Model rejects, returns, and stuck pending states in sandbox before and after execution — same
            control plane for demos and investigation training.
          </p>
          <Link
            href="/api"
            className="inline-flex justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Open API reference
          </Link>
        </section>

        <p className="text-sm text-gray-500 mb-8">
          <Link href="/why-payments-fail" className="text-blue-600 hover:underline">
            Why payments fail (routing hub) →
          </Link>
          {" · "}
          <Link href="/reference" className="text-blue-600 hover:underline">
            Full reference index →
          </Link>
        </p>

        <ReferenceFooter />
      </div>
    </article>
  );
}
