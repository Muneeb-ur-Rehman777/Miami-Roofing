import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Miami Roofing | Professional Roofing Services",
  description:
    "Miami Roofing provides roof replacement, roof repair, commercial roofing, storm damage restoration, and emergency roofing services across Miami, Florida.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}