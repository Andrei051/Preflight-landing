export default function ProductLoop() {
  const steps = [
    {
      number: "1",
      title: "Simulate payment before execution",
      description: "Run risk assessment and compliance checks",
    },
    {
      number: "2",
      title: "Learn from real failures",
      description: "Ingest payment outcomes and analyze patterns",
    },
    {
      number: "3",
      title: "Feed intelligence back into simulation",
      description: "Update risk models with real-world data",
    },
    {
      number: "4",
      title: "Continuously reduce rejects",
      description: "Improve success rates over time",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Product Loop
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your closed-loop system for payment success
          </p>
        </div>
        
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-4">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-blue-600 transform -translate-y-1/2">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold">
              Closed-loop intelligence
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
