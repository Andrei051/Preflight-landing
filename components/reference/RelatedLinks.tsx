type LinkKind = "scheme" | "operations" | "playbook";

export interface RelatedLink {
  href: string;
  label: string;
  kind: LinkKind;
}

export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  const byKind = (k: LinkKind) => links.filter((l) => l.kind === k);
  const scheme = byKind("scheme");
  const operations = byKind("operations");
  const playbook = byKind("playbook");

  return (
    <div className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Related</h2>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        {scheme.length > 0 && (
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-gray-500 font-medium">Scheme:</span>
            {scheme.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </span>
        )}
        {operations.length > 0 && (
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-gray-500 font-medium">Operations:</span>
            {operations.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </span>
        )}
        {playbook.length > 0 && (
          <span className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-gray-500 font-medium">Playbook:</span>
            {playbook.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                {l.label}
              </a>
            ))}
          </span>
        )}
      </div>
    </div>
  );
}
