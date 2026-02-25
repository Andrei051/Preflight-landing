import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";
import FaqJsonLd from "@/components/reference/FaqJsonLd";

export const metadata: Metadata = {
  title: "pacs.002 Status Codes (ACSP, ACSC, RJCT, PDNG) | Preflight Reference",
  description:
    "Technical breakdown of pacs.002 status codes: ACSP, ACSC, RJCT, PDNG and their operational meaning and timing.",
};

const pacs002Faq = [
  { question: "What are the main pacs.002 status codes?", answer: "Common codes include ACSP (accepted for settlement/processing), ACSC (accepted and settled), RJCT (rejected), and PDNG (pending). ACSP is not final settlement; ACSC or equivalent indicates settlement." },
  { question: "What is the difference between ACSP and ACSC?", answer: "ACSP means the payment has been accepted but may not yet be settled. ACSC means the payment has been settled. For SLA measurement, use settlement (ACSC) or final status, not acceptance only." },
  { question: "When does pacs.002 get used?", answer: "Status updates are sent as the payment moves through the pipeline. Order is typically acceptance (ACSP), then settlement (ACSC) or rejection (RJCT). PDNG can appear when waiting for a condition or next step." },
  { question: "What should I do if status is RJCT or stuck in PDNG?", answer: "For RJCT, use the reason code or narrative to determine cause and next steps. If stuck in PDNG or ACSP beyond the expected window, trigger stuck-payment or SLA logic." },
];

export default function Pacs002StatusCodesPage() {
  return (
    <>
      <FaqJsonLd items={pacs002Faq} />
      <ReferencePage
      title="pacs.002 Status Codes Explained"
      lede="pacs.002 carries payment status information in ISO 20022 flows. Status codes indicate acceptance, completion, rejection, or pending; ACSP is not final settlement."
      lastUpdated="2026-02-25"
      canonicalPath="/iso20022/pacs002-status-codes"
      sections={[
        {
          id: "what-it-means",
          heading: "Status code definitions",
          body: (
            <p>
              In pacs.002 (and related status messages), common status codes include: ACSP (accepted for settlement/processing) — the payment has been accepted but may not yet be settled; ACSC (accepted and settled) — the payment has been settled; RJCT (rejected) — the payment was rejected; PDNG (pending) — the payment is in a pending state. ACSP does not mean final settlement; it indicates acceptance into the process. Settlement confirmation is typically ACSC or equivalent. Operational meaning and exact code sets can vary by scheme and implementation.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "Timing and operational meaning",
          body: (
            <p>
              Status updates are sent as the payment moves through the pipeline. Order of events is typically: acceptance (e.g. ACSP), then settlement (e.g. ACSC) or rejection (RJCT). Pending (PDNG) can appear when waiting for a condition or next step. Timing depends on the scheme, the institution, and cutoffs. For monitoring and SLA, distinguish between “accepted” and “settled” so that SLAs are measured against the right event.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm the exact status code and transaction identification to match the right payment.</li>
              <li>If status is RJCT, use the reason code or narrative to determine cause and next steps.</li>
              <li>If stuck in PDNG or ACSP beyond expected window, trigger stuck-payment or SLA logic.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Ingest pacs.002 (or equivalent) into a single view so acceptance, settlement, and rejection are tracked consistently.</li>
              <li>Define SLA and “stuck” thresholds based on settlement (ACSC) or final status, not acceptance only.</li>
              <li>Use status flows to drive investigation and case creation when RJCT or timeout occurs.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/sepa/r01-insufficient-funds", label: "SEPA R01 – Insufficient Funds", kind: "scheme" },
        { href: "/operations/stuck-payment-detection", label: "Stuck payment detection", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "ISO 20022", href: "/reference#iso20022" },
        { label: "pacs.002 status codes" },
      ]}
      prev={{ href: "/sepa/r02-account-closed", label: "R02 – Account Closed" }}
      next={{ href: "/swift/nack-format-error", label: "NACK – Format Error" }}
    />
    </>
  );
}
