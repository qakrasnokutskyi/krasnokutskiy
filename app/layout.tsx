import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata: Metadata = {
  metadataBase: new URL("https://krasnokutskiy.vercel.app/"),
  title: "Home | Krasnokutskiy",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
    openGraph: {
      title: "Vadim Krasnokutskiy",
      url: "https://krasnokutskiy.vercel.app/",
      images: [{ url: "https://krasnokutskiy.vercel.app/api/og?title=krasnokutskiy.vercel.app", alt: "krasnokutskiy.vercel.app" }],
    },
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <ClerkProvider>
        <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <body className="width-full bg-contrast text-primary antialiased">
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Navigation />
  
              <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
                {children}
              </div>
            </ThemeProvider>
            <Analytics />
          </body>
        </html>
      </ClerkProvider>
    );
  }
