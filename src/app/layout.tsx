import type { Metadata } from "next";
import "./globals.css";
import MainNav from "@/components/Navigation/Navbar";
import { satoshi, lato } from "@/utils/customFonts";

export const metadata: Metadata = {
  title: "LeadOnGlobal",
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
        <MainNav />
        {children}
      </body>
    </html>
  );
}
