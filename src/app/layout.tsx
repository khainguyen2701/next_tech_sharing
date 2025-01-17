import FooterMainLayout from "@/components/footer";
import HeaderMainLayout from "@/components/header";
import type { Metadata } from "next";
import { Inter, Montserrat, Inconsolata } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

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
    <html lang='en'>
      <body
        // data-theme=''
        className={`${inter.variable} ${montserrat.variable} ${inconsolata.variable} antialiased`}
      >
        <HeaderMainLayout />
        <main className='container mx-auto my-4'>{children}</main>
        <FooterMainLayout />
      </body>
    </html>
  );
}
