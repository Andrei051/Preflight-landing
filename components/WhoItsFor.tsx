export default function WhoItsFor() {
  const personas = [
    "Heads of Payments",
    "Payment Product Managers",
    "Ops & Investigations teams",
    "Compliance & Risk",
    "Payment infrastructure teams",
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Who it's for
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Typically owned by Payments or Platform teams, used daily by Ops and Investigations.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
              >
                <p className="text-lg font-semibold text-gray-900">{persona}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
