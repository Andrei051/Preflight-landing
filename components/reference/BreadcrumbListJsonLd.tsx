const BASE_URL = "https://preflightpayments.com";

export interface BreadcrumbListInputItem {
  label: string;
  href?: string;
}

export default function BreadcrumbListJsonLd({
  items,
  currentPagePath,
}: {
  items: BreadcrumbListInputItem[];
  currentPagePath?: string;
}) {
  if (!items?.length) return null;
  const itemListElement = items.map((item, i) => {
    const position = i + 1;
    const isLast = i === items.length - 1;
    const url = item.href
      ? `${BASE_URL}${item.href}`
      : currentPagePath
        ? `${BASE_URL}${currentPagePath}`
        : undefined;
    return {
      "@type": "ListItem" as const,
      position,
      name: item.label,
      ...(url && { item: url }),
    };
  });
  const schema = {
    "@context": "https://schema.org" as const,
    "@type": "BreadcrumbList" as const,
    itemListElement,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
