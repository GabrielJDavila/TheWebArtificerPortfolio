import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description: "Portfolio of web development projects for freelance work.",
  keywords: "web development, web design, website creation, freelance web development, freelance web design, small business web design, JavaScript, React, HTML, CSS"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
