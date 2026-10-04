import localFont from "next/font/local";
import { Geist_Mono } from "next/font/google";

export const googleSans = localFont({
  src: "./font-assets/GoogleSans-Latin-Variable.ttf",
  variable: "--font-google-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});
export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
