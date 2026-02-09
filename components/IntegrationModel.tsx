export default function IntegrationModel() {
  const integrations = [
    "Payments middleware",
    "Orchestration layers",
    "ISO 20022 pipelines",
    "SWIFT gateways",
  ];

  const eventSources = [
    "pacs.002",
    "camt",
    "SWIFT ACK/NAK",
    "R-messages",
    "internal status events",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Integration Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for real payment stacks
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 mb-6">
            <p className="text-gray-800 mb-6 leading-relaxed">
              🔌 We connect to payment middleware / ISO pipelines to ingest outcomes and statuses. Preflight doesn't execute payments.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Integration is event-based (webhooks or batch ingestion) and does not sit on the critical execution path unless you choose it to.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-blue-500 transition-colors"
                >
                  <p className="text-gray-800 font-medium">{integration}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Typical event sources:</p>
              <div className="flex flex-wrap gap-2">
                {eventSources.map((source, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-white rounded-md text-sm text-gray-700 border border-gray-300"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-gray-800">
                🤖 Works for human-initiated and agent-initiated payments — every payment can pass through the same preflight gate.
              </p>
            </div>
          </div>
          
          <div className="text-center bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg mb-6">
            <p className="text-lg text-gray-800 font-medium">
              Preflight sits beside execution — not inside it.
            </p>
          </div>
          
          <div className="bg-gray-100 border-l-4 border-gray-400 p-6 rounded-lg">
            <p className="text-sm text-gray-700">
              Preflight complements — not replaces — sanctions engines, screening tools, or execution gateways.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
