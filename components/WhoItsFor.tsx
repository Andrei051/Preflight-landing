export default function WhoItsFor() {
  const personas = [
    { title: "Heads of Payments", line: "Own KPIs and SLA targets across corridors" },
    { title: "Payment Product Managers", line: "Ship features that reduce rejects and improve UX" },
    { title: "Ops & Investigations teams", line: "Resolve failures faster with evidence and playbooks" },
    { title: "Compliance & Risk", line: "Ensure validation coverage and maintain audit trails" },
    { title: "Payment infrastructure teams", line: "Integrate into middleware and orchestration layers" },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Who it&apos;s for
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
                <p className="text-lg font-semibold text-gray-900">{persona.title}</p>
                <p className="text-sm text-gray-600 mt-2">{persona.line}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
