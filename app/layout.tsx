import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redmachineusa.com"),
  title: "Red Machine USA | Classic Blues & Gritty Rock 'n' Roll (NJ / NYC)",
  description:
    "Official Electronic Press Kit, Live Booking & Original Music for Red Machine USA (5-Piece Electric Band) and Owen Corso (Solo Acoustic).",
  openGraph: {
    title: "Red Machine USA | Live Band & Solo Acoustic",
    description:
      "Roots in classic blues. Heart in gritty rock & roll. Book the 5-piece electric band or solo acoustic act in NJ & NYC.",
    url: "https://redmachineusa.com",
    siteName: "Red Machine USA",
    images: [
      {
        url: "/img/rmnj-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Red Machine USA Live on Stage",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Machine USA | Live Band & Solo Acoustic",
    description:
      "Roots in classic blues. Heart in gritty rock & roll. Official EPK & Live Booking.",
    images: ["/img/rmnj-hero.jpg"],
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
