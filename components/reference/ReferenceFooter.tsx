export default function ReferenceFooter() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-200 bg-gray-50 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-6 rounded-lg">
      <p className="text-sm text-gray-700 mb-3">
        Preflight models these scenarios deterministically before and after execution.
      </p>
      <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
        <a href="/#pre-execution-simulation" className="text-blue-600 hover:text-blue-800 hover:underline">
          Pre-execution simulation →
        </a>
        <a href="/#sla-breach-detection" className="text-blue-600 hover:text-blue-800 hover:underline">
          SLA breach detection →
        </a>
      </div>
    </div>
  );
}
