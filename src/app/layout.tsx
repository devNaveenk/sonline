import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NadiaChatWidget from "@/components/NadiaChatWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Sonline — AI-Driven Digital Transformation Consultancy",
  description:
    "Sonline transforms enterprises with AI-driven strategy, seamless integration, and proprietary platforms. Experience. Integrate. Visualize. Act.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
        <NadiaChatWidget />
      </body>
    </html>
  );
}
