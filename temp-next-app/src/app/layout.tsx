import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Sitemapper Surveys | Precision Surveying & Geomatic Engineering",
  description:
    "Delivering high-accuracy geospatial data and site engineering services to de-risk construction and design projects across the UK. Land surveys, setting out, 3D laser scanning, and more.",
  keywords: "Land Surveyor, Topographical Survey, Setting Out Engineer, 3D Laser Scanning, BIM, UK Surveying Firm",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen pt-20 bg-surface dark:bg-surface">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
