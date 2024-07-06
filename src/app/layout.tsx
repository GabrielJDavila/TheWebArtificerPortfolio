import type { Metadata } from "next";
import { Inter, Grenze_Gotisch } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";
import LightDarkMode from "./ui/colormode";

const inter = Inter({ subsets: ["latin"] });
const grenze = Grenze_Gotisch({ subsets: ["latin"] })

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
      <body className={`${grenze.className} dark:bg-zinc-900 dark:text-white`}>
        <Nav/>
        {children}
      </body>
    </html>
  );
}
