import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "Cut-Off Time Failure – Cross-Border (Submission, Value Date, SLA) | Preflight Reference",
  description:
    "Submission vs value cutoff, FX timing, liquidity timing, and SLA breach risk in cross-border payments.",
};

export default function CutoffFailureCrossBorderPage() {
  return (
    <ReferencePage
      title="Cut-Off Time Failure in Cross-Border Payments"
      lede="Missing the submission or value-date cutoff leads to delayed settlement, extra hops, or failed execution. Cross-border flows add FX and liquidity timing dependencies that tighten effective windows."
      lastUpdated="2026-02-25"
      canonicalPath="/operations/cutoff-failure-cross-border"
      sections={[
        {
          id: "what-it-means",
          heading: "What cutoff failure means",
          body: (
            <p>
              Cutoff failure means the payment instruction was submitted after the relevant cutoff: submission cutoff (after which the bank or scheme will not process same-day), or value-date cutoff (after which the requested value date cannot be met). In cross-border payments, correspondent and FX cutoffs add further constraints. The result can be next-day settlement, rejection, or routing through a different (e.g. more expensive) path. SLA breach risk increases when cutoffs are missed and the creditor or internal SLA assumed same-day or same-value-date settlement.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When it occurs",
          body: (
            <p>
              Failure is known when the instruction is rejected, when status indicates delayed or next-day settlement, or when monitoring compares submission time to cutoff tables. Cutoffs vary by bank, scheme, currency, and product. FX and liquidity timing can mean that funding or conversion must complete before a given cutoff for the payment to settle on the intended value date.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Compare submission timestamp to the applicable submission and value-date cutoffs for the corridor and product.</li>
              <li>Check whether FX or liquidity was confirmed in time for the chosen execution window.</li>
              <li>Confirm whether the payment was rerouted, delayed, or rejected and update SLA and client communication accordingly.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-execution: validate submission time against cutoff windows where cutoff data is available; warn or block if past cutoff.</li>
              <li>Align release of instructions with funding and FX timing so that value-date assumptions are achievable.</li>
              <li>Monitor cutoff-related delays and rejections by corridor and product to tune release and cutoff logic.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/sepa/r01-insufficient-funds", label: "SEPA R01 – Insufficient Funds", kind: "scheme" },
        { href: "/operations/stuck-payment-detection", label: "Stuck payment detection", kind: "operations" },
        { href: "/operations/payment-sla-breach-monitoring", label: "SLA breach monitoring", kind: "operations" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "Operations", href: "/reference#operations" },
        { label: "Cut-off time failure (cross-border)" },
      ]}
      prev={{ href: "/validation/iban-validation-failure", label: "IBAN validation failure" }}
      next={{ href: "/operations/stuck-payment-detection", label: "Stuck payment detection" }}
    />
  );
}
