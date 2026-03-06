import type { Metadata } from "next";
import Link from "next/link";

const REQUEST_ACCESS_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaObTJLdmOyLTBI0ePwCreO718PMdm3N9abM4Z6xclhoVaMg/viewform";

const SWAGGER_URL = process.env.NEXT_PUBLIC_SWAGGER_URL || "";

export const metadata: Metadata = {
  title: "Preflight API Reference | Preflight",
  description:
    "Investigate payment failures and automate operational workflows for SWIFT and SEPA payments. Ingest outcomes, trace payments, and analyze corridor intelligence.",
};

export default function ApiReferencePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preflight API Reference
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Investigate payment failures and automate operational workflows for SWIFT and SEPA payments.
          </p>
          <p className="text-gray-700 mb-4">
            Preflight ingests payment outcomes (ACK/NACK, pacs.002, pacs.004, internal status events) and automatically:
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-4">
            <li>creates investigation cases</li>
            <li>generates evidence timelines</li>
            <li>classifies failure reasons</li>
            <li>provides corridor intelligence</li>
          </ul>
          <p className="text-sm text-gray-500">
            Designed for payment platforms, orchestration layers, and ISO 20022 pipelines.
          </p>
        </div>
      </section>

      {/* 2. API execution note */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-amber-50 border-b border-amber-100">
        <div className="max-w-3xl">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Interactive execution</h2>
          <p className="text-gray-700 mb-3">
            Public API reference is available below. Interactive requests require a demo API key.
          </p>
          <ol className="list-decimal pl-6 space-y-1 text-gray-700 text-sm mb-3">
            <li>Click <strong>Authorize</strong> in Swagger</li>
            <li>Enter your demo API key</li>
            <li>Use <strong>Try it out</strong> to run requests</li>
          </ol>
          <p className="text-sm">
            Need a key?{" "}
            <a
              href={REQUEST_ACCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium underline"
            >
              Request access
            </a>
          </p>
        </div>
      </section>

      {/* 3. Quick example */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ingest payment outcome</h2>
          <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto text-sm font-mono">
{`curl -X POST https://api.preflightpayments.com/api/outcomes/ingest \\
  -H "x-api-key: YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
  "payment_id": "demo_001",
  "sender_country": "GB",
  "recipient_country": "DE",
  "payment_currency": "EUR",
  "rail": "SEPA",
  "amount": "1000",
  "status": "REJECTED",
  "raw_reason": "Invalid IBAN",
  "timestamp": "2026-03-06T10:00:00Z"
}'`}
          </pre>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="font-semibold text-gray-900 mb-2">Result</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
              <li>Investigation case created</li>
              <li>Evidence timeline generated</li>
              <li>Failure reason classified</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. What you can do with the API */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Core capabilities</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Outcome ingestion</h3>
              <p className="text-gray-700 mb-3">
                Send payment execution outcomes from your middleware.
              </p>
              <p className="text-sm text-gray-500">
                Examples: SWIFT ACK/NACK · SEPA pacs.002 · SEPA pacs.004 returns · internal status events
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Trace &amp; investigation</h3>
              <p className="text-gray-700 mb-3">
                Retrieve a complete operational trace for any payment.
              </p>
              <p className="text-sm text-gray-500">
                Includes: outcome timeline · evidence records · case lifecycle · phase classification
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Operational intelligence</h3>
              <p className="text-gray-700 mb-3">
                Analyze returns across corridors and identify avoidable failures.
              </p>
              <p className="text-sm text-gray-500">
                Example insights: top return reasons · corridor return patterns · avoidable failure rate
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Swagger UI */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-5xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">API reference</h2>
          <p className="text-sm text-gray-600 mb-6">
            The OpenAPI specification below reflects the live API used in the demo environment.
          </p>
          {SWAGGER_URL ? (
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <iframe
                src={SWAGGER_URL}
                title="Preflight API - Swagger UI"
                className="w-full h-[800px] border-0"
              />
            </div>
          ) : (
            <div className="border border-gray-200 rounded-lg p-8 bg-gray-50 text-center text-gray-600">
              <p className="font-medium mb-2">Swagger UI will appear here</p>
              <p className="text-sm">
                Set <code className="bg-gray-200 px-1 rounded">NEXT_PUBLIC_SWAGGER_URL</code> in your environment to embed the API docs.
              </p>
              <p className="text-sm mt-2">
                Example: <code className="bg-gray-200 px-1 rounded">https://api.preflightpayments.com/docs</code>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 6. Example workflow */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Example workflow</h2>
          <ol className="space-y-6">
            <li className="flex gap-4">
              <span className="text-2xl font-bold text-blue-600 shrink-0">1</span>
              <div>
                <p className="font-semibold text-gray-900">Payment submitted</p>
                <p className="text-sm text-gray-600"><code>status = PENDING</code></p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl font-bold text-blue-600 shrink-0">2</span>
              <div>
                <p className="font-semibold text-gray-900">Network reject arrives</p>
                <p className="text-sm text-gray-600 mb-3"><code>status = REJECTED</code></p>
                <p className="text-sm text-gray-700">Preflight automatically: opens investigation case, links outcome to payment trace, attaches evidence.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl font-bold text-blue-600 shrink-0">3</span>
              <div>
                <p className="font-semibold text-gray-900">Operations investigate</p>
                <p className="text-sm text-gray-600">Use: <code>GET /api/payments/&#123;id&#125;/trace</code></p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="text-2xl font-bold text-blue-600 shrink-0">4</span>
              <div>
                <p className="font-semibold text-gray-900">Analyze returns across corridors</p>
                <p className="text-sm text-gray-600"><code>GET /api/intelligence/returns</code></p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* 7. Sandbox note */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200 bg-gray-50">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Sandbox environment</h2>
          <p className="text-gray-700 mb-4">
            The API reference uses a deterministic demo dataset.
          </p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
            <li>safe to experiment</li>
            <li>no real payment data</li>
            <li>environment resets periodically</li>
          </ul>
          <p className="text-gray-600 mt-4">Perfect for exploring workflows.</p>
        </div>
      </section>

      {/* 8. Integration model */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration model</h2>
          <p className="text-gray-700 mb-4">
            Preflight integrates beside your execution stack.
          </p>
          <p className="text-sm text-gray-600 mb-3">Typical event sources:</p>
          <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm mb-4">
            <li>payment middleware</li>
            <li>SWIFT gateways</li>
            <li>ISO 20022 pipelines</li>
            <li>orchestration layers</li>
          </ul>
          <p className="text-gray-700 font-medium">
            Preflight does not execute payments. It observes execution events and builds an operational intelligence layer.
          </p>
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Request demo access</h2>
          <p className="text-blue-100 mb-8">
            Get a demo API key and access to the full case management UI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={REQUEST_ACCESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Request Access
            </a>
            <p className="text-sm text-blue-200">
              Contact:{" "}
              <a href="mailto:demo@preflightpayments.com" className="text-white hover:underline">
                demo@preflightpayments.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
