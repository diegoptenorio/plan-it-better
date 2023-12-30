import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'tailwindcss/tailwind.css';
import "@style";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plan It Better",
  description:
    "Ferramenta para ajudar times nas estimativas de atividades ágeis",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

export default RootLayout;
