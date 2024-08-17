import { Rubik, Krub, League_Spartan } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Transport Flow is a logistics company." />
        <title>TransitFlow - logistics with high quality</title>
      </head>
      <body className={krub.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
