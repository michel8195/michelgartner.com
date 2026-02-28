import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Michel Gartner",
  description: "ML Engineer @ MercadoLibre. Building things with data and code.",
  openGraph: {
    title: "Michel Gartner",
    description: "ML Engineer @ MercadoLibre. Building things with data and code.",
    url: "https://michelgartner.com",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
