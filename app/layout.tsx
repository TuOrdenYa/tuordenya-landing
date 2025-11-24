import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 Import GA4 Script
import Script from "next/script";
// 👇 Import Analytics para pageviews automáticos
import Analytics from "@/app/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuOrdenYa – Menús digitales y gestión para restaurantes",
  description:
    "Menús digitales con QR, pedidos por WhatsApp y operación completa para restaurantes. Versiones Light, Plus y Pro.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ==========================================
             🔥 GOOGLE ANALYTICS 4 — INIT
          ========================================== */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WZMB6KBB54"
          strategy="afterInteractive"
        />

        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-WZMB6KBB54', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        {/* Registrar pageviews automáticos */}
        <Analytics />

        {children}
      </body>
    </html>
  );
}
