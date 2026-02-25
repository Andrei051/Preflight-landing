import type { Metadata } from "next";
import ReferencePage from "@/components/reference/ReferencePage";
import FaqJsonLd from "@/components/reference/FaqJsonLd";

export const metadata: Metadata = {
  title: "SEPA R01 – Insufficient Funds (Meaning, Lifecycle, Prevention) | Preflight Reference",
  description:
    "What SEPA return code R01 (insufficient funds) means, when it occurs in the payment lifecycle, operational impact, and how to detect and prevent it.",
};

const r01Faq = [
  { question: "What does SEPA return code R01 mean?", answer: "R01 indicates insufficient funds on the debtor account at the time of settlement or execution. It is a funds-availability outcome issued by the debtor bank and propagated via the scheme, not a format or compliance failure." },
  { question: "When does R01 occur in the payment lifecycle?", answer: "R01 is a post-submission outcome. The payment may have passed pre-validation; the reject occurs when the scheme or debtor bank determines the account cannot cover the amount at execution or settlement time. Returns can appear later in the lifecycle." },
  { question: "What should I check first when I see R01?", answer: "Check debtor balance or funding confirmation before resubmission; look for duplicate debit or retry loops; and confirm timing vs cutoff window — funding or value date vs execution time." },
  { question: "How can I prevent or reduce R01?", answer: "Use balance or funding checks before submission, apply retry policies with backoff, and align submission timing with cutoffs and value dates. Pre-execution checks and monitoring of R01 rates by corridor or debtor help." },
];

export default function R01InsufficientFundsPage() {
  return (
    <>
      <FaqJsonLd items={r01Faq} />
      <ReferencePage
      title="SEPA R01 – Insufficient Funds"
      lede="R01 is the SEPA return reason code indicating insufficient funds on the debtor account at the time of settlement or execution."
      lastUpdated="2026-02-25"
      canonicalPath="/sepa/r01-insufficient-funds"
      sections={[
        {
          id: "what-it-means",
          heading: "What this reject means",
          body: (
            <p>
              In SEPA schemes, R01 denotes that the debtor account did not have
              sufficient available balance to complete the payment. The return
              is issued by the debtor bank (and propagated via the scheme)
              and indicates a funds-related rejection, not a format or compliance
              failure. Treat R01 as a funds-availability outcome, not a format/compliance failure.
              The definition is scheme-accurate: insufficient funds on
              the debtor account at the point of execution or settlement.
            </p>
          ),
        },
        {
          id: "when-it-occurs",
          heading: "When it occurs in the payment lifecycle",
          body: (
            <p>
              R01 is a post-submission outcome. The payment has been accepted
              for processing and may have passed pre-validation; the reject
              occurs when the scheme or the debtor bank determines that the
              account cannot cover the amount at execution or settlement time.
              This can arrive after acceptance and processing steps, so
              operational timelines must account for returns that appear later
              in the lifecycle. Timing varies by scheme and institution.
            </p>
          ),
        },
        {
          id: "operational-impact",
          heading: "Operational impact",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Customer impact:</strong> Failed payment, possible
                late-payment consequences for the debtor and notification
                burden for the creditor.
              </li>
              <li>
                <strong>Reconciliation and repair:</strong> Return must be
                matched to the original instruction; books and liquidity
                positions need to be updated; repair or retry workflows may be
                triggered.
              </li>
              <li>
                <strong>Retry behavior risk:</strong> Automatic retries without
                funding checks can repeat the same reject and add noise.
              </li>
              <li>
                <strong>Liquidity assumptions:</strong> Outgoing liquidity
                assumptions may be wrong if returns are not factored in; incoming
                flows for the creditor are delayed until a successful retry or
                alternative payment.
              </li>
            </ul>
          ),
        },
        {
          id: "why-it-happens",
          heading: "Why it happens",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Balance not sufficient at execution or settlement time.</li>
              <li>Funds reserved or committed elsewhere (e.g. other pending
                debits, holds).</li>
              <li>Account-level limits or blockings, where the available balance
                is reduced by institutional rules.</li>
              <li>Timing mismatch: funding expected to arrive before the debit
                does not arrive in time.</li>
            </ul>
          ),
        },
        {
          id: "triage",
          heading: "What to check first (triage)",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>Debtor balance or funding confirmation before (re)submission.</li>
              <li>Duplicate debit or retry loop — same instruction sent repeatedly without funding.</li>
              <li>Timing mismatch vs cutoff window — funding or value date vs execution time.</li>
            </ul>
          ),
        },
        {
          id: "detect-early",
          heading: "How to detect it early",
          body: (
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Balance checks:</strong> Where supported, confirm
                available balance (or equivalent) before releasing the payment
                instruction.
              </li>
              <li>
                <strong>Funding confirmation:</strong> Require confirmation that
                funding has been received or released before submitting
                time-critical debits.
              </li>
              <li>
                <strong>Hold/reservation model:</strong> If the scheme or
                platform supports holds or reservations, use them so that
                sufficient funds are set aside before execution.
              </li>
              <li>
                <strong>Monitoring:</strong> Track spikes in R01 by debtor,
                corridor, or time-of-day to spot systemic funding or timing
                issues.
              </li>
            </ul>
          ),
        },
        {
          id: "prevention",
          heading: "Prevention logic",
          body: (
            <p>
              Controls commonly used include: requiring a confirmed funding
              state (or balance check) before submission; applying a retry window
              policy with a maximum number of attempts and backoff to avoid
              repeated immediate retries; and aligning submission timing with
              cutoffs and value dates so that funding and execution windows are
              consistent. Pre-execution checks are deterministic where balance or
              funding signals are available; monitoring triggers can flag
              corridors or debtors with elevated R01 rates for review.
            </p>
          ),
        },
      ]}
      related={[
        { href: "/sepa/r02-account-closed", label: "SEPA R02 – Account Closed", kind: "scheme" },
        { href: "/operations/cutoff-failure-cross-border", label: "Cut-off time failure (cross-border)", kind: "operations" },
        { href: "/playbooks/investigate-rejected-swift-payment", label: "Investigate a rejected SWIFT payment", kind: "playbook" },
      ]}
      breadcrumbs={[
        { label: "Preflight", href: "/" },
        { label: "Reference", href: "/reference" },
        { label: "SEPA", href: "/reference#sepa" },
        { label: "R01 – Insufficient Funds" },
      ]}
      next={{ href: "/sepa/r02-account-closed", label: "R02 – Account Closed" }}
    />
    </>
  );
}
