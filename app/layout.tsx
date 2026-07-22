import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "Sean Kuhlman | Senior Backend & Platform Engineer";
const description =
  "Portfolio of Sean Kuhlman, a senior software engineer building distributed systems, enterprise search, fintech platforms, AI-assisted workflows, and cloud infrastructure.";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.startsWith("localhost") ? "http" : "https");
  const metadataBase = new URL(
    host ? `${protocol}://${host}` : "https://seankuhlman.dev",
  );
  const socialImage = new URL("/og.png", metadataBase).toString();

  return {
    metadataBase,
    title,
    description,
    keywords: [
      "Sean Kuhlman",
      "Senior Software Engineer",
      "Backend Engineer",
      "Platform Engineer",
      "Python",
      "Go",
      "AWS",
      "Kubernetes",
    ],
    authors: [{ name: "Sean Kuhlman" }],
    icons: { icon: "/favicon.svg" },
    openGraph: {
      type: "website",
      title,
      description,
      images: [{ url: socialImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
