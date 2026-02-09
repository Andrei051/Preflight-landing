export default function Problem() {
  const failureReasons = [
    {
      title: "Invalid IBAN/BIC",
      description: "Format errors or invalid account identifiers",
    },
    {
      title: "Missing regulatory fields",
      description: "Required compliance data not provided",
    },
    {
      title: "Corridor-specific requirements",
      description: "Destination-specific validation rules",
    },
    {
      title: "Compliance holds",
      description: "Sanctions screening or regulatory blocks",
    },
    {
      title: "Intermediary routing failures",
      description: "Correspondent bank routing issues",
    },
    {
      title: "Cutoff breaches",
      description: "Payment submitted after processing deadlines",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Why international payments fail
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {failureReasons.map((reason, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-red-500"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {reason.title}
              </h3>
              <p className="text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg max-w-3xl mx-auto mb-6">
          <p className="text-lg text-gray-800 font-medium">
            Most teams only discover these after execution.
          </p>
        </div>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-lg text-gray-800">
            Each reject typically triggers manual investigation, SLA breaches, and client follow-ups — often costing more than the payment itself.
          </p>
        </div>
      </div>
    </section>
  );
}
