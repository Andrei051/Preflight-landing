import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";

export const metadata: Metadata = {
  title: "SEPA R02 – Account Closed (Meaning, Lifecycle, Prevention) | Preflight Reference",
  description:
    "What SEPA return code R02 (account closed) means, when it occurs, and how it affects recurring and one-off payments.",
};

export default function R02AccountClosedPage() {
  return (
    <ReferencePage
      title="SEPA R02 – Account Closed"
      lede="R02 is the SEPA return reason code indicating that the debtor account has been closed. The payment cannot be executed because the account no longer exists in that state."
      lastUpdated="2026-02-25"
      canonicalPath="/sepa/r02-account-closed"
      sections={[
        {
          id: "what-it-means",
          heading: "What this reject means",
          body: (
            <p>
              In SEPA schemes, R02 denotes that the debtor account is closed. The beneficiary bank has returned the payment (and the return is propagated via the scheme) because the account used as the source of the transfer is no longer open or available for debits. This is an account-lifecycle outcome, not a balance or format issue. Recurring mandates or standing instructions that reference the old account will continue to fail until updated or cancelled.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When it occurs in the payment lifecycle",
          body: (
            <p>
              R02 is a post-submission outcome. The instruction may have passed validation; the reject is issued when the debtor bank determines that the account is closed. Timing depends on when the bank applies the closure and when the return is generated. For recurring flows, the first failure often occurs on the next execution after closure. One-off payments fail as soon as the return is processed.
            </p>
          ),
        },
        {
          id: "what-to-check",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Confirm with debtor or internal records that the account is closed or migrated.</li>
              <li>Check whether a new account or IBAN was provided and update the instruction if so.</li>
              <li>For recurring flows, stop retries and trigger mandate or instruction update workflow.</li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention signals",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Pre-execution IBAN validation cannot detect closure; only balance and format checks apply before submission.</li>
              <li>Monitor R02 rates by debtor or corridor to spot systematic account-lifecycle issues.</li>
              <li>Where supported, use account-status or balance checks before releasing high-value or recurring debits.</li>
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
        { label: "SEPA", href: "/reference#sepa" },
        { label: "R02 – Account Closed" },
      ]}
      prev={{ href: "/sepa/r01-insufficient-funds", label: "R01 – Insufficient Funds" }}
      next={{ href: "/iso20022/pacs002-status-codes", label: "pacs.002 status codes" }}
    />
  );
}
