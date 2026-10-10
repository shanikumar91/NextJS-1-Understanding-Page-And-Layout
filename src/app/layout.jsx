import { Geist, Geist_Mono } from "next/font/google";
import "./main.css";
import Header from "@/components/Header";
// @ ka matlab root folder(src folder)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "hare krishna",
  description: "Radha Krishna",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <Header/>
      <body>{children}</body>
    </html>
  );
}
