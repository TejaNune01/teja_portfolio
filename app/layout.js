import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Teja Nune",
  description: "Teja Nune",
};

import fonts from "./fonts";
import TN from "@/public/TN.svg";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fonts.variable} font-sans`}>
        <Nav></Nav>
        {children}
      </body>
    </html>
  );
}

const Nav = () => (
  <div className="w-screen h-[8vh] border-b-2 border-black px-[2vw] flex items-center justify-between absolute top-0">
    <Image className="h-[6.4vh] w-[6.4vh]" alt={""} src={TN}></Image>
    <h3 className="font-bold">ABOUT</h3>
  </div>
);
