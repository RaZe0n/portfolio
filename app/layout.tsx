import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { Meteors } from "@/components/ui/meteors";

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Finn Bruinzeel - Software Engineer",
  description: "Portfolio of Finn Bruinzeel, student at Bit Academy",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased relative`}>
        {children}
      </body>
    </html>
  );
}
