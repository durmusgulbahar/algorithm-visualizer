import type { Metadata } from "next";
import "./global.css";

import Footer from "@/src/components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description:
    "Algorithm Visualizer is a web application that visualizes algorithms. Provided by Akdeniz University",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Link href={"/"}>
          <h1
            style={{
              textAlign: "center",
              padding: "20px",
              fontSize: "1.5rem",
              color: "white",
              top: "0",
              left: "1%",
              position: "fixed",
              textDecoration: "none",
              border: "1px solid white",
            }}
          >
            Algorithm Visualizer
          </h1>
        </Link>

        {children}
        <Footer />
      </body>
    </html>
  );
}
