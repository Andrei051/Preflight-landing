import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";
import FaqJsonLd from "@/components/reference/FaqJsonLd";

export const metadata: Metadata = {
  title: "SWIFT NACK – Format Error (Causes & Triage) | Preflight Reference",
  description:
    "What SWIFT NACK format errors mean, typical causes (invalid BIC, missing field 59), and why pre-validation matters.",
};

const nackFaq = [
  { question: "What does a SWIFT NACK for format error mean?", answer: "The message was rejected at the network or format level before business processing. It did not meet structural or rule requirements — distinct from business-level rejects like insufficient funds or compliance." },
  { question: "What typically causes a SWIFT format NACK?", answer: "Typical causes include invalid or missing BIC, missing or malformed field 59 (beneficiary), incorrect message type or format version, or syntax errors. MT and MX have different format rules." },
  { question: "When does format rejection occur?", answer: "Format rejection occurs early in the pipeline: at submission, at the gateway, or at the first processing hop, before settlement or balance checks. The sender receives the NACK and must correct and resubmit." },
  { question: "How can I prevent SWIFT format NACKs?", answer: "Pre-execution validation of BIC, IBAN, and required fields reduces format NACKs. Use validated message templates and schemas; monitor NACK rates by message type and corridor to spot systematic issues." },
];

export default function SwiftNackFormatErrorPage() {
  return (
    <>
      <FaqJsonLd items={nackFaq} />
      <ReferencePage
      title="SWIFT NACK – Format Error"
      lede="A NACK indicates that the SWIFT message was rejected at the network or format level before business processing. Format errors prevent the message from being accepted by the network or the next hop."
      lastUpdated="2026-02-25"
      canonicalPath="/swift/nack-format-error"
      sections={[
        {
          id: "what-it-means",
          heading: "What this reject means",
          body: (
            <p>
              A SWIFT NACK (negative acknowledgment) for format reasons means the message did not meet structural or rule requirements. This is distinct from a business-level reject (e.g. insufficient funds, compliance). Typical causes include invalid or missing BIC, missing or malformed field 59 (beneficiary), incorrect message type or format version, or syntax errors. MT and MX (ISO 20022) have different format rules; the NACK will reference the applicable standard.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When it occurs",
          body: (
            <p>
              Format rejection occurs early in the pipeline: at submission, at the gateway, or at the first processing hop. It happens before settlement or balance checks. The sender receives the NACK and must correct and resubmit. Timing is usually short (same day or within the same cycle) depending on the network and the receiver.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Validate BIC and beneficiary (field 59) format and presence against the message type and scheme.</li>
              <li>Confirm message type and sub-type match the intended flow (e.g. MT103 vs 103+).</li>
              <li>Check the NACK reason text or code for the exact field or rule that failed.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-execution validation of BIC, IBAN (where applicable), and required fields reduces format NACKs before submission.</li>
              <li>Reuse validated message templates and schemas so that structural errors are caught in build or test.</li>
              <li>Monitor NACK rates by message type and corridor to spot systematic format or rule issues.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/swift/intermediary-routing-failure", label: "Intermediary bank routing failure", kind: "scheme" },
        { href: "/validation/iban-validation-failure", label: "IBAN validation failure", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "SWIFT", href: "/reference#swift" },
        { label: "NACK – Format Error" },
      ]}
      prev={{ href: "/iso20022/pacs002-status-codes", label: "pacs.002 status codes" }}
      next={{ href: "/swift/intermediary-routing-failure", label: "Intermediary routing failure" }}
    />
    </>
  );
}
