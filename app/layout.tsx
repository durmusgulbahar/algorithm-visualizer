import type { Metadata } from "next";
import './global.css'

export const metadata: Metadata = {
  title: "Algorithm Visualizer",
  description: "Algorithm Visualizer is a web application that visualizes algorithms. Provided by Akdeniz University",
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
  
        <body>{children}</body>
 
    </html>
  );
}