import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Austin Byers — Senior Backend & Data Platform Engineer",
  description: "Portfolio of Austin Byers, a senior software engineer building healthcare data platforms, distributed systems, and cloud infrastructure.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
