import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Buddy App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-y-hidden bg-[url(../../public/4034811.jpg)] bg-cover text-slate-100 container mx-auto `}
      >
        {children}
      </body>
    </html>
  );
}
