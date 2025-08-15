import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FutureVerde - Tech-Driven Sustainability",
  description:
    "Paving the way for tech-driven sustainability through ESG reporting and green finance solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
