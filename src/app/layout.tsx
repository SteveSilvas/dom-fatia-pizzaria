import type { Metadata } from "next";
import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-default',
});

export const metadata: Metadata = {
  title: "Dom Fatia Pizzaria",
  description: "A melhor pizzaria de Cotia - SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${openSans.variable} font-sans flex flex-col min-h-screen`}>
        <header className="w-full fixed top-0 left-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow w-full mt-13 md:mt-15">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
