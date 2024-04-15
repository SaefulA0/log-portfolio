import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation/Navbar";
import { satoshi, lato } from "@/utils/customFonts";

export const metadata: Metadata = {
  title: "Software House | Lead On Global",
  description: "LOG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${lato.variable}`}>
      <body className="relative min-w-full min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
