import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanjay Bhel",
  description: "Best food & snacks in your area",
  icons: {
    icon: "/logo.jpg", // Your logo
    apple: "/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-white text-gray-900"}>
        <Navbar /> {/* ✅ Navbar added here */}
        <div className="pt-32">
          {" "}
          {/* to avoid overlap */}
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
