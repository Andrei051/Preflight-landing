import Link from "next/link";
import ReferenceSection from "./ReferenceSection";
import RelatedLinks, { type RelatedLink } from "./RelatedLinks";
import ReferenceFooter from "./ReferenceFooter";
import BreadcrumbListJsonLd from "./BreadcrumbListJsonLd";

export interface ReferenceSectionProps {
  id: string;
  heading: string;
  body: React.ReactNode;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

const DEFAULT_SCOPE_NOTE =
  "Operational reference. Not scheme legal text. Use scheme documentation for normative rules.";

export interface ReferencePageProps {
  title: string;
  lede: string;
  sections: ReferenceSectionProps[];
  related: RelatedLink[];
  breadcrumbs?: BreadcrumbItem[];
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  lastUpdated?: string;
  scopeNote?: string;
  /** Current page path for BreadcrumbList JSON-LD (e.g. /sepa/r01-insufficient-funds). */
  canonicalPath?: string;
}

export default function ReferencePage({
  title,
  lede,
  sections,
  related,
  breadcrumbs,
  prev,
  next,
  lastUpdated,
  scopeNote = DEFAULT_SCOPE_NOTE,
  canonicalPath,
}: ReferencePageProps) {
  return (
    <article className="min-h-screen bg-white">
      {breadcrumbs && breadcrumbs.length > 0 && canonicalPath && (
        <BreadcrumbListJsonLd items={breadcrumbs} currentPagePath={canonicalPath} />
      )}
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-gray-500">
            {breadcrumbs.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-1.5">/</span>}
                {item.href != null ? (
                  <Link href={item.href} className="text-blue-600 hover:text-blue-800 hover:underline">
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-gray-700 font-medium">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{lede}</p>
          {(lastUpdated || scopeNote) && (
            <div className="mt-4 text-sm text-gray-500 space-y-1">
              {lastUpdated && (
                <p>Last updated: {lastUpdated}</p>
              )}
              {scopeNote && (
                <p><strong>Scope:</strong> {scopeNote}</p>
              )}
            </div>
          )}
        </header>

        {sections.map((s) => (
          <ReferenceSection key={s.id} id={s.id} heading={s.heading}>
            {s.body}
          </ReferenceSection>
        ))}

        <RelatedLinks links={related} />

        {(prev || next) && (
          <div className="mt-8 pt-6 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4 text-sm">
            {prev ? (
              <Link href={prev.href} className="text-blue-600 hover:text-blue-800 hover:underline">
                ← {prev.label}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link href={next.href} className="text-blue-600 hover:text-blue-800 hover:underline">
                {next.label} →
              </Link>
            ) : (
              <span />
            )}
          </div>
        )}

        <ReferenceFooter />
      </div>
    </article>
  );
}
