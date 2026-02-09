export default function FinalCTA() {
  return (
    <section id="request-demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to reduce payment rejects?
        </h2>
        <p className="text-xl text-blue-100 mb-4">
          See how Preflight can transform your payment operations
        </p>
        <p className="text-sm text-blue-200 mb-10">
          Designed by teams who've run payment ops and investigations at scale.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
          <div className="flex flex-col items-center">
            <a
              href="mailto:demo@preflightpayments.com?subject=Preflight Demo Request - 15 Minutes&body=Hi,%0D%0A%0D%0AI'd like to schedule a 15-minute demo of Preflight.%0D%0A%0D%0APlease let me know your availability.%0D%0A%0D%0AThanks!"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
            >
              <span>📅</span>
              <span>Book a 15-min demo</span>
            </a>
            <p className="text-xs text-blue-200 mt-2">
              Prefer email? demo@preflightpayments.com
            </p>
          </div>
          <a
            href="mailto:simulator@preflightpayments.com?subject=Simulator%20Access%20Request&body=Hi,%0D%0A%0D%0AI'd%20like%20to%20explore%20the%20Preflight%20simulator.%0D%0A%0D%0ACompany:%0D%0ARole:%0D%0APayment%20rails%20of%20interest:%0D%0AWhat%20I'm%20trying%20to%20validate:%0D%0A%0D%0AThanks"
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <span>🧪</span>
            <span>Request simulator access</span>
          </a>
          <a
            href="mailto:early-access@preflightpayments.com?subject=Early Access Request - Preflight&body=Hi,%0D%0A%0D%0AI'm interested in early access to Preflight.%0D%0A%0D%0ACompany: [Your Company]%0D%0ARole: [Your Role]%0D%0AUse case: [Brief description]%0D%0A%0D%0AThanks!"
            className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-all transform hover:scale-105 flex items-center gap-2"
          >
            <span>🚀</span>
            <span>Get early access</span>
          </a>
        </div>
        <p className="text-xs text-blue-200 mt-4 max-w-2xl mx-auto">
          Demo includes live Swagger UI, deterministic test data, and full case management walkthrough. Early access includes priority onboarding and direct product feedback channel.
        </p>
        
        <div className="mt-12 pt-8 border-t border-blue-400/30">
          <p className="text-blue-100 text-sm mb-6">
            Status: MVP v0.1 - Ready for GTM demos with Swagger UI, deterministic data, and full case management UI
          </p>
          
          <div className="bg-white/10 rounded-lg p-6 mt-6">
            <h3 className="text-xl font-semibold text-white mb-4">What you'll see in the demo</h3>
            <div className="grid md:grid-cols-3 gap-4 text-left">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧪</span>
                <div>
                  <p className="font-medium text-white">Deterministic demo data</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📚</span>
                <div>
                  <p className="font-medium text-white">Swagger contract matches real payloads</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧾</span>
                <div>
                  <p className="font-medium text-white">Evidence pack + cases + playbooks included</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
