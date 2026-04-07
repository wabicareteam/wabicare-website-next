import type { Metadata } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WabiCare — Health OS",
  description: "Intelligent ABA practice management. Harmonizing patient care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body className="w-full min-h-screen bg-[#FAFAFA] text-black m-0 p-0 font-mono flex flex-col relative">
        {children}
      </body>
    </html>
  );
}
