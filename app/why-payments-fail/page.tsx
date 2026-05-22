import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbListJsonLd from "@/components/reference/BreadcrumbListJsonLd";
import ReferenceFooter from "@/components/reference/ReferenceFooter";

const REQUEST_ACCESS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaObTJLdmOyLTBI0ePwCreO718PMdm3N9abM4Z6xclhoVaMg/viewform";

export const metadata: Metadata = {
  title: "Why payments fail (SWIFT, SEPA, stuck payments) | Preflight",
  description:
    "Operator routing hub: rejected SWIFT messages, SEPA returns, stuck or SLA-breached payments — with links to detailed reference.",
  alternates: {
    canonical: "/why-payments-fail",
  },
};

const breadcrumbs = [
  { label: "Preflight", href: "/" },
  { label: "Why payments fail" },
];

export default function WhyPaymentsFailPage() {
  return (
    <article className="min-h-screen bg-white">
      <BreadcrumbListJsonLd items={breadcrumbs} currentPagePath="/why-payments-fail" />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800 hover:underline">
            Preflight
          </Link>
          <span className="mx-1.5">/</span>
          <span className="text-gray-700 font-medium">Why payments fail</span>
        </nav>

        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why payments fail
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-3">
            Preflight is a pre-execution and post-execution control layer for payments. This page routes common mid-intent questions into the reference library: network rejects, scheme returns, and operational stuck states — not generic advice.
          </p>
          <p className="text-sm text-gray-500">
            Use the sections below to jump to operator-grade pages; then use the API reference to see how scenarios are modeled in the sandbox.
          </p>
        </header>

        <section className="mb-10 p-4 border border-gray-200 rounded-lg bg-gray-50/50">
          <h2 className="text-sm font-semibold text-gray-900 mb-2">Start with outcome clarity</h2>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>
              <Link
                href="/payment-reject-vs-return-vs-pending"
                className="text-blue-600 hover:underline font-medium"
              >
                Reject vs return vs pending
              </Link>
              — cross-rail definitions and triage order
            </li>
            <li>
              <Link href="/why-payments-get-stuck" className="text-blue-600 hover:underline font-medium">
                Why payments get stuck
              </Link>
              — delayed, pending, and SLA breach patterns
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">SWIFT failures</h2>
          <p className="text-gray-700 mb-3">
            Format NACKs, routing issues, and business-level rejects on SWIFT — distinct lifecycle stages.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/swift/error-codes-overview" className="text-blue-600 hover:underline font-medium">
                SWIFT error codes overview
              </Link>
              — NACK, routing, business rejects
            </li>
            <li>
              <Link href="/swift/nack-format-error" className="text-blue-600 hover:underline font-medium">
                SWIFT NACK — format error
              </Link>
            </li>
            <li>
              <Link href="/swift/intermediary-routing-failure" className="text-blue-600 hover:underline font-medium">
                Intermediary routing failure
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">SEPA returns</h2>
          <p className="text-gray-700 mb-3">
            Scheme reason codes (e.g. R01, R02) and when the debtor or beneficiary bank returns a payment.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/sepa/return-codes-overview" className="text-blue-600 hover:underline font-medium">
                SEPA return codes overview
              </Link>
            </li>
            <li>
              <Link href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:underline font-medium">
                R01 — insufficient funds
              </Link>
            </li>
            <li>
              <Link href="/sepa/r02-account-closed" className="text-blue-600 hover:underline font-medium">
                R02 — account closed
              </Link>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-gray-900 mb-3">Stuck payments &amp; SLA</h2>
          <p className="text-gray-700 mb-3">
            Payments that never reach a final status in time, or breach internal or corridor SLAs.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <Link href="/operations/stuck-payment-detection" className="text-blue-600 hover:underline font-medium">
                Stuck payment detection
              </Link>
            </li>
            <li>
              <Link href="/operations/payment-sla-breach-monitoring" className="text-blue-600 hover:underline font-medium">
                SLA breach monitoring
              </Link>
            </li>
            <li>
              <Link href="/iso20022/pacs002-status-codes" className="text-blue-600 hover:underline font-medium">
                pacs.002 status codes
              </Link>
              — ACSP vs ACSC vs RJCT vs PDNG
            </li>
          </ul>
        </section>

        <section className="mb-10 p-6 border border-blue-200 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Preflight</h2>
          <p className="text-gray-700 mb-4">
            Detect failures before execution and investigate outcomes after — same control plane for sandbox and demos.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/api"
              className="inline-flex justify-center px-5 py-2.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Open API reference
            </Link>
            <a
              href={REQUEST_ACCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center px-5 py-2.5 border border-blue-600 text-blue-700 rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Request access
            </a>
          </div>
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
