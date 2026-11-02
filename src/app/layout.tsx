import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cricut sheets",
  description: "Pack outlined stickers onto Cricut A4 Print Then Cut sheets. Runs in your browser, offline.",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = { themeColor: "#070707" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
