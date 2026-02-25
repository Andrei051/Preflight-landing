import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "IBAN Validation Failure (Checksum, Scheme, Triage) | Preflight Reference",
  description:
    "Checksum vs scheme acceptance: why a valid MOD97 IBAN can still lead to rejection (BIC mismatch, closed account, format constraints).",
};

export default function IbanValidationFailurePage() {
  return (
    <ReferencePage
      title="IBAN Validation Failure – Why Payments Still Reject"
      lede="An IBAN can pass checksum (MOD97) validation but still be rejected by the scheme or beneficiary bank. Format validity does not guarantee account existence, openness, or eligibility."
      lastUpdated="2026-02-25"
      canonicalPath="/validation/iban-validation-failure"
      sections={[
        {
          id: "what-it-means",
          heading: "What validation can and cannot guarantee",
          body: (
            <p>
              IBAN validation typically checks length, character set, and checksum (MOD97). That confirms the IBAN is structurally valid for the country and that the check digits are correct. It does not confirm that the account exists, is open, is reachable on the given rail, or that the BIC (if used) matches the IBAN. Rejections can therefore occur later due to closed account, BIC mismatch, name or mandate mismatch, or scheme/country-specific rules. Operators often search for “IBAN valid but payment rejected” or “MOD97 passed but rejected” when they see this pattern.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When rejections occur despite valid format",
          body: (
            <p>
              Rejection happens after submission, when the beneficiary bank or the scheme validates the instruction against their records. Timing is post-acceptance; the payer may have done pre-validation and still receive a return or NACK. Causes include account closed (e.g. SEPA R02), wrong BIC for the IBAN, or country/scheme rules that go beyond checksum.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm BIC (or equivalent) matches the IBAN and the chosen rail or scheme.</li>
              <li>Check return or reject reason code (e.g. R02 for closed account) to distinguish lifecycle vs format.</li>
              <li>Verify country and scheme rules (length, structure) for the specific IBAN if checksum passed but scheme rejects.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-execution checks: run MOD97 and scheme format rules; validate BIC/IBAN pair where data is available.</li>
              <li>Cannot prevent closed-account or mandate rejections with format checks alone; combine with outcome ingestion and monitoring.</li>
              <li>Track rejections by reason code to separate format vs lifecycle vs compliance issues.</li>
            </ul>
          ),
        },
      ]}
      related={[
        { href: "/sepa/r02-account-closed", label: "SEPA R02 – Account Closed", kind: "scheme" },
        { href: "/swift/nack-format-error", label: "SWIFT NACK – Format Error", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "Validation", href: "/reference#validation" },
        { label: "IBAN validation failure" },
      ]}
      prev={{ href: "/swift/intermediary-routing-failure", label: "Intermediary routing failure" }}
      next={{ href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure" }}
    />
  );
}
