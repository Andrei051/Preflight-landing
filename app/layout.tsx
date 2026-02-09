import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://preflightpayments.com"),
  title: "Preflight - Payment Risk & Compliance Engine",
  description: "Pre-execution risk and compliance engine for payments. Validate payments before execution and investigate failures with full evidence.",
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "https://preflightpayments.com/",
  },
  verification: {
    other: {
      "msvalidate.01": "E120944C37CE2BAD961E00AB2343BA0E",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://preflightpayments.com/#organization",
      name: "Preflight Payments",
      url: "https://preflightpayments.com/",
      sameAs: [
        "https://www.linkedin.com/company/preflight-payments",
      ],
    },
    {
      "@type": "WebSite",
      name: "Preflight Payments",
      url: "https://preflightpayments.com/",
      publisher: { "@id": "https://preflightpayments.com/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
