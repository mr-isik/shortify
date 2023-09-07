import ToasterProvider from "@/providers/ToasterProvider";
import ContextProvider from "@/providers/ContextProvider";

import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shortify",
  description:
    "Fast and simple website to create short urls. Easy to remember and share.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <aside className="container mx-auto flex justify-center">
            <ToasterProvider />
            {children}
          </aside>
        </ContextProvider>
      </body>
    </html>
  );
}
