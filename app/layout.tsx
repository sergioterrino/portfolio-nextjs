import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";

//importamos swiperJs
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";

// Todo lo que esté en layout se compartirá en todas las páginas de la aplicación.

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Terrino - portfolio",
  description: "Portfolio web made by Sergio Terrino",
};

// En el layout se pone el header y el footer de la página. Ya que estos elementos se repiten en todas las páginas.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
