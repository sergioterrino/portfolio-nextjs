import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css'; //importamos swiperJs
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Head from "next/head";

// Todo lo que esté en layout se compartirá en todas las páginas de la aplicación.

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sergio Terrino - Portfolio Web",
  description: "Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web",
};

// En el layout se pone el header y el footer de la página. Ya que estos elementos se repiten en todas las páginas.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Sergio Terrino - Portfolio Web</title>
        <meta name="title" content="Sergio Terrino - Portfolio Web" />
        <meta name="description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta name="image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="title" property="og:title" content="Sergio Terrino - Portfolio Web" />
        <meta name="description" property="og:description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta property="og:url" content="https://stb-portfolio.netlify.app/" />
        <meta property="og:type" content="website" />
        <meta name="image" property="og:image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sergio Terrino - Portfolio Web" />
        <meta name="twitter:description" content="Portfolio Web made by Sergio Terrino - Desarrollador y Programador Web y Móvil" />
        <meta name="twitter:image" content="https://github.com/user-attachments/assets/7a0738ee-e4aa-4b4c-bf2d-7cc0bde1ccd1" />
        <meta name="author" content="Sergio Terrino Brea"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={urbanist.className}>
        <Header />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
