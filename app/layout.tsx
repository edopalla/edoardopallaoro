import type { Metadata, Viewport } from "next";
import { Archivo, EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600"],
});

export const metadata: Metadata = {
  title: "Edoardo Pallaoro, Photography",
  description:
    "Edoardo Pallaoro is a fashion and editorial photographer. Selected work for Kaltblut Magazine, Tinted Issue, Vanguard Magazine, LE Management and Vero Model Management.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${garamond.variable} ${archivo.variable}`}>
      <body className="min-h-svh">{children}</body>
    </html>
  );
}
