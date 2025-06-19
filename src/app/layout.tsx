import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecommerce App",
  description:
    "A modern e-commerce platform for browsing, purchasing, and managing products with a seamless shopping experience.",
};

// app/layout.tsx or a layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col ">
        <Header />
        <main className="flex-1 p-4 bg-white text-[#1F2937]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
