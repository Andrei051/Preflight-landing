import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "SLA Breach Monitoring for Payments (Settlement, Alerts) | Preflight Reference",
  description:
    "Settlement SLA by rail, event-driven monitoring, alert thresholds, and escalation for payment SLA breach detection.",
};

export default function PaymentSlaBreachMonitoringPage() {
  return (
    <ReferencePage
      title="SLA Breach Monitoring for Payments"
      lede="SLA breach monitoring tracks whether payments settle (or reach a terminal status) within the agreed or expected time. It is event-driven and typically defined per rail, corridor, or product."
      lastUpdated="2026-02-25"
      canonicalPath="/operations/payment-sla-breach-monitoring"
      sections={[
        {
          id: "what-it-means",
          heading: "What SLA breach means",
          body: (
            <p>
              A payment SLA is usually defined as the time from submission (or acceptance) to settlement or final status. A breach occurs when that time exceeds the threshold. Thresholds can be set by rail (e.g. SEPA, SWIFT), corridor, currency, or product. Monitoring is event-driven: settlement or rejection events are ingested and compared to submission time and the applicable SLA. Breaches trigger alerts, dashboards, or escalation so that operations and clients can be informed and remediation (e.g. investigation, compensation) can follow.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When to alert",
          body: (
            <p>
              Alert when the elapsed time for a given payment exceeds the SLA threshold. Optionally, warn when a configurable percentage of the SLA has elapsed (e.g. 80%) to allow proactive follow-up. Timing depends on when settlement (or final) status is received; if status is delayed, the breach may be detected late. Align threshold definition with the events actually available (e.g. ACSC in pacs.002) so that measurement is consistent.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm the payment identifier, submission time, and the SLA threshold that was applied (rail/corridor/product).</li>
              <li>Verify that the settlement or final-status event was received and correctly matched to the payment.</li>
              <li>Determine whether the breach is due to delayed settlement, delayed status ingestion, or a one-off exception.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Define SLAs explicitly per rail and corridor and store them in a config so monitoring and reporting are consistent.</li>
              <li>Use event-driven pipelines so that every settlement or rejection updates the same view and breach logic runs on a single source of truth.</li>
              <li>Escalate breaches into investigation or case management so that root cause and client communication are tracked.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/operations/stuck-payment-detection", label: "Stuck payment detection", kind: "scheme" },
        { href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure (cross-border)", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "Operations", href: "/reference#operations" },
        { label: "SLA breach monitoring" },
      ]}
      prev={{ href: "/operations/stuck-payment-detection", label: "Stuck payment detection" }}
      next={{ href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate rejected SWIFT payment" }}
    />
  );
}
