import type { Metadata, Viewport } from "next";
import { Archivo, EB_Garamond } from "next/font/google";
import { Footer } from "./components/Footer";
import { Frame } from "./components/Frame";
import { site } from "./lib/site";
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
  title: {
    default: `${site.name}, Photography`,
    template: `%s, ${site.name}`,
  },
  description:
    "Edoardo Pallaoro is a fashion and portrait photographer. Selected work for Kaltblut Magazine, Tinted Issue, Vanguard Magazine, LE Management and Vero Model Management.",
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${garamond.variable} ${archivo.variable}`}>
      <body className="min-h-svh">
        <Frame />
        {children}
        <Footer />
      </body>
    </html>
  );
}
