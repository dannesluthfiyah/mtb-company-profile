import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "PT. Mahir Trans Bersaudara",
  description: "Company Profile - PT. Mahir Trans Bersaudara",
};

// Font untuk heading & navbar
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "800"],
  variable: "--font-montserrat",
});

// Font untuk konten paragraf
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
