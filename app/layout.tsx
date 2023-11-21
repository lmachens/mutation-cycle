import { PageFooter } from "@/components/page-footer";
import { PageHeader } from "@/components/page-header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:
    "Your New World Mutation Tracker - Uncover Mutated Expeditions and Earn Greater Rewards",
  description:
    "Stay ahead in New World with our Mutation Tracker. Discover the latest mutated expeditions, explore unique modifiers, and conquer challenges for greater rewards. Your guide to mastering the mutated cycles and maximizing your adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("font-sans antialiased dark", fontSans.variable)}>
        <PageHeader />
        <div className="min-h-screen pt-20 flex flex-col">
          {children}
          <PageFooter />
        </div>
      </body>
    </html>
  );
}
