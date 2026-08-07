import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import { BottomNav } from "@/components/BottomNav";
import { TopHeader } from "@/components/TopHeader";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display-family",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-family",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Emuca Sales Convention 2026",
  description: "Web oficial de la convención comercial interna de Emuca",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#1c2530",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <LocaleProvider>
          <div className="app-shell">
            <TopHeader />
            <main className="page">{children}</main>
            <BottomNav />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
