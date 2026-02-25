export default function Solution() {
  const features = [
    {
      icon: "🛫",
      title: "Pre-execution risk simulation",
      description: "Validate payments before execution to reduce rejections",
    },
    {
      icon: "📉",
      title: "Corridor rejection intelligence",
      description: "Learn from historical failures to predict risks",
    },
    {
      icon: "🧭",
      title: "Post-execution investigation engine",
      description: "Auto-create cases for rejected and stuck payments",
    },
    {
      icon: "📦",
      title: "Evidence packs for every failure",
      description: "Complete audit trail with all validation details",
    },
    {
      icon: "🛠",
      title: "Resolution playbooks",
      description: "Step-by-step guidance for resolving payment issues",
    },
  ];

  return (
    <section id="pre-execution-simulation" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preflight acts as your payment control plane
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">
            Think of Preflight as a control plane for payment quality — not a gateway, not a screening engine.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">How Preflight works</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-3xl mb-3">🛫</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Before execution (Simulator)</h4>
                <p className="text-gray-600">
                  Validate payment instructions and predict corridor risk
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">📥</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">After execution (Outcomes)</h4>
                <p className="text-gray-600">
                  Ingest ACK/NACK / R-messages / status updates from your middleware → open cases, evidence, playbooks
                </p>
              </div>
            </div>
            <p className="text-gray-700 font-medium">
              🔒 No SWIFT SAA access required — integrate via your payments middleware / gateway / orchestration layer.
            </p>
            <p className="mt-4 text-sm text-gray-600">
              <a href="/reference" className="text-blue-600 hover:text-blue-800 hover:underline">
                See the operator reference →
              </a>
              <span className="mx-2">·</span>
              <a href="/sepa/r01-insufficient-funds" className="text-blue-600 hover:text-blue-800 hover:underline">SEPA rejects (R01, R02)</a>
              <span className="mx-2">·</span>
              <a href="/swift/nack-format-error" className="text-blue-600 hover:text-blue-800 hover:underline">SWIFT NACK and routing</a>
              <span className="mx-2">·</span>
              <a href="/iso20022/pacs002-status-codes" className="text-blue-600 hover:text-blue-800 hover:underline">pacs.002 status flows</a>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
