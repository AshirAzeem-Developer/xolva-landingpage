import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const posterama = localFont({
  src: "../../public/fonts/Posterama2001-Regular.ttf",
  variable: "--font-posterama",
  weight: "600", // optional
  style: "normal", // optional
});

export const metadata: Metadata = {
  title: "XOLVA",
  description: "Software and Services Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${posterama.variable} ${posterama.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
