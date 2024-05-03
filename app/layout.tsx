import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";

import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Krasnokutskiy",
  description:
    "I am a full-stack software engineer who basically just enjoys creating things.",
  };

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body
            className={clsx(
              inter.className,
              "width-full bg-primary text-primary antialiased",
            )}
          >
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
