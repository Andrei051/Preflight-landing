import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "Investigate Rejected SWIFT Payment (Trace, Evidence) | Preflight Reference",
  description:
    "Step-by-step trace reconstruction, network vs correspondent vs beneficiary rejection, and evidence pack elements.",
};

export default function InvestigateRejectedSwiftPaymentPage() {
  return (
    <ReferencePage
      title="How to Investigate a Rejected SWIFT Payment"
      lede="Investigation reconstructs the payment path and identifies where and why it was rejected. Distinguish network-level, correspondent, and beneficiary-level causes and gather evidence for repair or client communication."
      lastUpdated="2026-02-25"
      canonicalPath="/playbooks/investigate-rejected-swift-payment"
      sections={[
        {
          id: "what-it-means",
          heading: "Investigation objectives",
          body: (
            <p>
              The goal is to determine the rejection point (sender, network, intermediary, beneficiary) and the reason (format, routing, funds, compliance, or other). Trace reconstruction uses the message reference, timestamps, and any NACK or return messages. The output supports repair (correct and resubmit), client communication, and root-cause analysis. Evidence typically includes the original instruction, any NACK or return, status history, and relevant routing or account data.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When to start an investigation",
          body: (
            <p>
              Start when a payment is rejected (NACK, return, or negative status) or when it is stuck beyond the expected window. Triage first: confirm the payment id, last status, and whether the rejection or delay is already explained by a clear reason code. If the reason is unclear or client impact is high, open a formal investigation and follow the playbook steps.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Retrieve the full trace: original message, any NACK or return, and all status updates in order.</li>
              <li>Identify the rejection stage: network (format), intermediary (routing), or beneficiary (funds, account, compliance).</li>
              <li>Extract reason code or narrative from the NACK/return and map it to a known cause (format, routing, R01/R02, etc.).</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Evidence and trace elements",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Evidence pack should include: original instruction (sanitized if needed), NACK/return text or code, status timeline, and routing/BIC/IBAN used.</li>
              <li>Link to related reference pages (e.g. NACK format, R01, intermediary routing) so that operators can interpret codes and next steps.</li>
              <li>Use a consistent case format so that investigations are comparable and root-cause trends can be analyzed.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/swift/nack-format-error", label: "SWIFT NACK – Format Error", kind: "scheme" },
        { href: "/operations/stuck-payment-detection", label: "Stuck payment detection", kind: "operations" },
        { href: "/sepa/r01-insufficient-funds", label: "SEPA R01 – Insufficient Funds", kind: "scheme" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "Playbooks", href: "/reference#playbooks" },
        { label: "Investigate rejected SWIFT payment" },
      ]}
      prev={{ href: "/operations/payment-sla-breach-monitoring", label: "SLA breach monitoring" }}
    />
  );
}
