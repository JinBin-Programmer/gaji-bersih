import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import Link from "next/link";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageToggle from "@/components/LanguageToggle";

export const metadata: Metadata = {
  metadataBase: new URL("https://gaji.themalaysianinfo.online"),
  title: {
    default: "Kalkulator Gaji Bersih Malaysia — EPF SOCSO PCB",
    template: "%s — Kalkulator Gaji Bersih",
  },
  description:
    "Kira gaji bersih anda selepas potongan EPF, SOCSO, EIS dan cukai pendapatan (PCB). Calculate your Malaysia take-home salary after EPF, SOCSO, EIS and income tax deductions.",
  keywords: [
    "gaji bersih calculator", "kalkulator gaji bersih", "take home salary malaysia",
    "epf calculator malaysia", "pcb calculator", "potongan gaji malaysia",
    "income tax calculator malaysia", "socso calculator",
  ],
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>💰</text></svg>",
  },
  openGraph: { type: "website", locale: "ms_MY", siteName: "Kalkulator Gaji Bersih Malaysia" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ms">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7019273666606982"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <LanguageProvider>
          <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10 shadow-sm">
            <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="flex items-center gap-2 font-bold text-white text-lg">
                <span className="text-2xl">💰</span>
                <div>
                  <div className="leading-none">Gaji Bersih MY</div>
                  <div className="text-[10px] text-white/40 font-normal leading-none">Malaysia Salary Calculator</div>
                </div>
              </Link>
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex items-center gap-4 text-sm font-medium text-white/60">
                  <Link href="/" className="hover:text-white transition-colors">Kalkulator</Link>
                  <Link href="/about" className="hover:text-white transition-colors">Tentang</Link>
                </div>
                <LanguageToggle />
              </div>
            </div>
          </nav>

          <main className="flex-1">{children}</main>

          <footer className="border-t border-white/10 bg-black/60 py-6 text-center text-xs text-white/30 space-y-1">
            <p>Pengiraan berdasarkan kadar EPF, SOCSO, EIS dan PCB semasa · Based on current EPF, SOCSO, EIS & PCB rates</p>
            <p className="text-white/20">* Anggaran sahaja. Semak dengan majikan atau LHDN untuk pengesahan. / For reference only.</p>
            <p className="mt-2">© {new Date().getFullYear()} Kalkulator Gaji Bersih Malaysia</p>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
