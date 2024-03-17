import { Poppins } from "next/font/google";
import "./globals.css";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "400", "600", "800",]
});

export const metadata = {
  title: "Foodie Restaurant Menu",
  description: "Menu for a foodie restaurant",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
      <Header/>
        {children}
      <Footer/>
      </body>
    </html>
  );
}
