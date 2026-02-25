import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";
import FaqJsonLd from "@/components/reference/FaqJsonLd";

export const metadata: Metadata = {
  title: "Stuck Payment Detection (Absence-of-Event, SLA Thresholds) | Preflight Reference",
  description:
    "Absence-of-event detection, SLA breach thresholds, pacs.002 timing expectations, and operational triage for stuck payments.",
};

const stuckFaq = [
  { question: "What does a stuck payment mean?", answer: "A payment is stuck when it has not reached a terminal status (settled or rejected) within the expected time. Detection relies on absence of expected events and SLA thresholds; pacs.002 and similar flows are the primary source for last status and timing." },
  { question: "When should stuck payment detection trigger?", answer: "Detection runs when elapsed time since submission (or since last status update) exceeds the configured threshold. Thresholds can be set by rail, corridor, or product. The payment is then flagged for triage." },
  { question: "What should I check first for a stuck payment?", answer: "Confirm the payment identifier and last known status (e.g. ACSP, PDNG) and its timestamp; compare elapsed time to the expected settlement window for the rail and corridor; check whether a return or reject was sent but not yet ingested." },
  { question: "How can I prevent or handle stuck payments?", answer: "Ingest status updates (e.g. pacs.002) in near real time; define SLA and stuck thresholds per rail/corridor; use stuck detection to open cases or trigger client or internal escalation where appropriate." },
];

export default function StuckPaymentDetectionPage() {
  return (
    <>
      <FaqJsonLd items={stuckFaq} />
      <ReferencePage
      title="Stuck Payment Detection Guide"
      lede="A payment is “stuck” when it has not reached a terminal status (settled or rejected) within the expected time. Detection relies on absence of expected events and SLA thresholds."
      lastUpdated="2026-02-25"
      canonicalPath="/operations/stuck-payment-detection"
      sections={[
        {
          id: "what-it-means",
          heading: "What stuck means operationally",
          body: (
            <p>
              A stuck payment is one that has been submitted but has not yet received a final outcome (e.g. ACSC, RJCT, or scheme equivalent) within the expected window. The expectation is derived from scheme rules, corridor norms, or internal SLA. Detection is often event-driven: the absence of a settlement or rejection status by a given time triggers an alert or case. pacs.002 and similar status flows are the primary source for “last status” and timing.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When to trigger detection",
          body: (
            <p>
              Detection runs when the elapsed time since submission (or since last status update) exceeds the configured threshold. Thresholds can be set by rail, corridor, or product. Once triggered, the payment is flagged for triage: confirm whether it is genuinely stuck or delayed within normal variance. SLA breach thresholds may be aligned with the same or a different timer for escalation and client communication.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm the payment identifier and last known status (e.g. ACSP, PDNG) and the timestamp of that status.</li>
              <li>Compare elapsed time to the expected settlement window for the rail and corridor.</li>
              <li>Check whether a return or reject was sent but not yet ingested; trace the full path if needed.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Ingest status updates (e.g. pacs.002) in near real time so that “no update” is distinguishable from “not yet received”.</li>
              <li>Define SLA and stuck thresholds per rail/corridor and feed them into monitoring so alerts are consistent and actionable.</li>
              <li>Use stuck detection to open cases or investigations and to trigger client or internal escalation where appropriate.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/iso20022/pacs002-status-codes", label: "pacs.002 status codes", kind: "scheme" },
        { href: "/operations/payment-sla-breach-monitoring", label: "SLA breach monitoring", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "Operations", href: "/reference#operations" },
        { label: "Stuck payment detection" },
      ]}
      prev={{ href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure" }}
      next={{ href: "/operations/payment-sla-breach-monitoring", label: "SLA breach monitoring" }}
    />
    </>
  );
}
