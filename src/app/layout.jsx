import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientProtection from "@/components/layout/ClientProtection"; // path may vary

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Basim Thakur | Frontend Developer",
    template: "%s | Basim Thakur",
  },
  description:
    "Professional portfolio of Basim Thakur, Frontend Developer!",
  // ... rest of your metadata
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and App Icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon.svg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon.svg" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProtection />
        {children}
      </body>
    </html>
  );
}
