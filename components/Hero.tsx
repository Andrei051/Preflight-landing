export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Preflight for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              international payments
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-4 leading-relaxed">
            Reduce SWIFT & SEPA payment rejects.
            <br />
            Predict risk before execution. Investigate failures with full evidence.
          </p>
          
          <p className="text-lg text-gray-500 mb-10">
            Supports cross-border SWIFT and SEPA (intra-EEA) payments.
            <br />
            <span className="text-base text-gray-400">
              SWIFT and SEPA supported today. Domestic rails follow the same model.
            </span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdaObTJLdmOyLTBI0ePwCreO718PMdm3N9abM4Z6xclhoVaMg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
            >
              Request Access
            </a>
            <a
              href="/api"
              className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              View API Reference
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Explore the API or request demo access.
          </p>
          <p className="text-sm text-gray-500 mt-1">
            ✅ No production access required for demo
          </p>
        </div>
      </div>
    </section>
  );
}
