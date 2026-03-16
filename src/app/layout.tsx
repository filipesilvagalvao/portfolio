import type { Metadata } from "next";
import localFont from "next/font/local"
import { Poppins, } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Footer from "@/components/footer/Footer";

const expandedHeavy = localFont({
  src: "./fonts/sf-ns-expanded-heavy.ttf",
  display: "swap",
  variable: "--font-expanded-heavy",
})

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "Filipe DEV",
  description: "Bem vindo ao meu portfólio. Amostragem de projetos frontends e backends, sites, blogs e lojas.",
  authors: [{ name: "Filipe Silva Galvão", url: "https://filipedev.dev" }],
  icons: {
    icon: [
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
  },
  keywords: [
    "Desenvolvedor Web",
    "Desenvolvedor Front-End",
    "Desenvolvedor Full Stack",
    "Criação de Sites",
    "Desenvolvimento de Sites Profissionais",
    "Criação de Sites Responsivos",
    "Desenvolvimento Web Profissional",
    "Programador Web",
    "Desenvolvedor de Sites"
  ],
  openGraph: {
    title: "Filipe DEV | Desenvolvedor web",
    description: "Bem vindo ao meu portfólio. Amostragem de projetos frontends e backends, sites, blogs e lojas.",
    images: [
      {
        url: "/logo/logo.png",
        width: 512,
        height: 512,
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${poppins.variable} ${expandedHeavy.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
