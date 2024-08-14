import type { Metadata } from "next";
import { Rubik, Krub, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const krub = Krub({
  subsets: ["latin"],
  weight: ["500", "700", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-krub",
});

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["500", "700", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-rubik",
});

export const league_spartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-league_spartan",
});

export const metadata: Metadata = {
  title: "Transit Flow",
  description: "Transit Flow is a web site of logistics company Transit Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={krub.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
