import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navigation from "@/components/Navigation";
import { Providers } from "@/app/providers";

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
    <html lang="en">
      <body
        className={clsx(
          inter.className,
          "antialiased bg-white dark:bg-black text-primary width-full"
        )}
      >
        <div
          vaul-drawer-wrapper=""
          className="min-h-[100vh] bg-white dark:bg-black"
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navigation />
            <div className="mx-auto max-w-[700px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
              <Providers>{children}</Providers>
            </div>
          </ThemeProvider>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
