import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const interVF = localFont({
  src: "./fonts/intervf.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGroteskVF = localFont({
  src: "./fonts/spacegrotsekvf.ttf",
  variable: "--font-space-grotesk",
  weight: "300 400 500 600 700",
});

export const metadata: Metadata = {
  title: "Dev Overflow",
  description:
    "A community-drivenplatform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: "/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interVF.className} ${spaceGroteskVF.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
