import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
          Preflight
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="/api"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            API
          </Link>
          <Link
            href="/reference"
            className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
          >
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
}
