import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://preflightpayments.com"),
  title: "Preflight - Payment Risk & Compliance Engine",
  description: "Pre-execution risk and compliance engine for payments. Validate payments before execution and investigate failures with full evidence.",
  keywords: "payment validation, payment risk, compliance engine, SWIFT, SEPA, payment preflight",
  icons: {
    icon: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    other: {
      "msvalidate.01": "E120944C37CE2BAD961E00AB2343BA0E",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
