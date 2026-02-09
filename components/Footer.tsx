export default function Footer() {
  return (
    <footer className="py-6 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-gray-500">
        <span>© {new Date().getFullYear()} Preflight Payments</span>
        <span className="hidden sm:inline" aria-hidden>·</span>
        <a
          href="https://www.linkedin.com/company/preflight-payments"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
