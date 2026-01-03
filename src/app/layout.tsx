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
  description: "You can share your work here",
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
          <main className="bg-secondary/20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
