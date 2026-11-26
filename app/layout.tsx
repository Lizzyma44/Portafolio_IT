import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Andy | Portafolio Digital – Ciencia, Datos y Proyectos Web",
  description:
    "Portafolio profesional con las 7 secciones obligatorias, proyectos de Machine Learning y análisis de datos, formación académica y contacto.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased selection:bg-purple-200 selection:text-purple-950">
        {children}
      </body>
    </html>
  );
}