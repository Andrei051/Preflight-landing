import Link from "next/link";

const DEFAULT_HEADLINE = "See how this is detected before execution";
const DEFAULT_CTA = "Simulate this failure with Preflight →";

export default function ReferencePreflightApiCta({
  headline = DEFAULT_HEADLINE,
  ctaLabel = DEFAULT_CTA,
}: {
  headline?: string;
  ctaLabel?: string;
}) {
  return (
    <aside
      className="mb-10 p-5 border border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg"
      aria-label="Preflight product"
    >
      <h2 className="text-lg font-semibold text-gray-900 mb-3">{headline}</h2>
      <Link
        href="/api"
        className="inline-flex font-semibold text-blue-600 hover:text-blue-800 hover:underline"
      >
        {ctaLabel}
      </Link>
    </aside>
  );
}
