import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Réplica | Marketing que no se ignora",
  description:
    "Agencia de marketing y comunicación para empresas que quieren crecer con estrategia, contenido, performance y tecnología.",
  keywords: [
    "Réplica",
    "agencia de marketing",
    "comunicación",
    "performance marketing",
    "estrategia de marca",
    "contenido"
  ],
  openGraph: {
    title: "Réplica | Creamos marcas que no se ignoran",
    description:
      "Estrategia, contenido y performance para empresas que quieren crecer en serio.",
    type: "website",
    locale: "es_CL",
    siteName: "Réplica"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F7FAF9"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
