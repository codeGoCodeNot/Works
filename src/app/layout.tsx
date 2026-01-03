import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ThemeProvider from "@/components/theme/theme-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Our Works",
  description:
    "This is a community space where creators can display their apps, AI tools, SaaS solutions, and innovative projects. It’s about real launches, true makers, and honest feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <Header />
          <main className="bg-secondary/20 min-h-screen overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
