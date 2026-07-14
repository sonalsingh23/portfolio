import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Sora } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const body = Sora({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Sonal Kumari | Full Stack Developer",
  description:
    "Portfolio of Sonal Kumari — full-stack developer building scalable products with React, Node.js, Express, Next.js, LLM, RAG, and cloud-ready APIs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}
