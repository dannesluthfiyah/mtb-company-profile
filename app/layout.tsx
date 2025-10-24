import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "PT. Mahir Trans Bersaudara",
  description:
    "PT. Mahir Trans Bersaudara berkomitmen memberikan layanan terbaik dalam penyewaan, perbaikan, trucking, ekspedisi, suplai, dan pabrikasi kendaraan berat di seluruh Indonesia.",
  openGraph: {
    title: "PT. Mahir Trans Bersaudara",
    description:
      "Perusahaan penyewaan, perbaikan, trucking, ekspedisi, suplai, dan pabrikasi kendaraan berat terpercaya di Indonesia.",
    url: "https://mtb-company-profile.vercel.app",
    siteName: "PT. Mahir Trans Bersaudara",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "PT. Mahir Trans Bersaudara Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT. Mahir Trans Bersaudara",
    description:
      "Layanan penyewaan, perbaikan, dan pabrikasi kendaraan berat berkualitas tinggi di Indonesia.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://mtb-company-profile.vercel.app"),
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
    <html lang="id">
      <body
        className={`${montserrat.variable} ${poppins.variable} font-sans bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  );
}
