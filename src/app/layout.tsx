import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Fitness Assistant Chatbot",
  description: "AI Fitness Assistant Chatbot",
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
