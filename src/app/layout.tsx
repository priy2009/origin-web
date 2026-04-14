import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "ORIGIN AI | Building the Future with Artificial Intelligence",
  description: "Building Agentic Artificial Intelligence and AGI for the betterment of the 21st century.",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans bg-background text-text selection:bg-accent selection:text-white" suppressHydrationWarning>
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
