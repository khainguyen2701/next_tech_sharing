import type { Metadata } from "next";
import { Inconsolata, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "dayjs/locale/zh-cn";
import HeaderMainLayout from "./Layout/header";
import FooterMainLayout from "./Layout/footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat"
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  variable: "--font-inconsolata"
});

export const metadata: Metadata = {
  title: "Bài viết mới nhất",
  description: "Authorization by Khải Nguyễn"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${montserrat.variable} ${inconsolata.variable} antialiased`}
    >
      <body className='font-sans'>
        <HeaderMainLayout />
        <main>{children}</main>
        <FooterMainLayout />
      </body>
    </html>
  );
}
