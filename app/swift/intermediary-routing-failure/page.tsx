import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "SWIFT Intermediary Routing Failure (Field 56/57, Triage) | Preflight Reference",
  description:
    "SWIFT intermediary and correspondent routing issues: field 56/57, nostro alignment, and operational impact.",
};

export default function IntermediaryRoutingFailurePage() {
  return (
    <ReferencePage
      title="Intermediary Bank Routing Failure"
      lede="Failures due to missing, incorrect, or inconsistent intermediary or correspondent data (e.g. SWIFT field 56/57) and nostro or routing alignment. The payment cannot be routed or settled as instructed."
      lastUpdated="2026-02-25"
      canonicalPath="/swift/intermediary-routing-failure"
      sections={[
        {
          id: "what-it-means",
          heading: "What this means",
          body: (
            <p>
              In SWIFT flows, intermediary (field 56) and correspondent (field 57) identify the institutions used for routing and settlement. If these are wrong, missing where required, or inconsistent with the ordering and beneficiary banks’ nostro arrangements, the message may be rejected or delayed. Routing failures can also arise when the path does not match the currency, corridor, or product (e.g. direct vs correspondent). Operational impact includes returns, investigations, and possible repair or resubmission.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When it occurs",
          body: (
            <p>
              Routing failures are typically detected at the sender’s bank, the intermediary, or the beneficiary’s bank when the message is processed. Rejection can occur before or during settlement depending on how early validation is performed. Time to detect varies; some systems validate at submission, others at the correspondent or beneficiary hop.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify field 56/57 (or equivalent in MX) against the agreed routing and nostro matrix for the corridor and currency.</li>
              <li>Confirm the ordering and beneficiary BICs and account details are correct and consistent with the routing.</li>
              <li>Check whether the failure is due to a one-off misconfiguration or a change in correspondent or product rules.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Maintain a routing and nostro matrix and validate instructions against it before release where possible.</li>
              <li>Use pre-execution checks that validate BIC and routing rules for the given currency and corridor.</li>
              <li>Monitor routing-related rejections by corridor and product to spot systematic misconfigurations.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/swift/nack-format-error", label: "SWIFT NACK – Format Error", kind: "scheme" },
        { href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure (cross-border)", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "SWIFT", href: "/reference#swift" },
        { label: "Intermediary routing failure" },
      ]}
      prev={{ href: "/swift/nack-format-error", label: "NACK – Format Error" }}
      next={{ href: "/validation/iban-validation-failure", label: "IBAN validation failure" }}
    />
  );
}
