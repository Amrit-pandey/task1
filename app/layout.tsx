'use client'

import { Nunito } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { Content } from "@/components/Content";
import { useState } from "react";

const font = Nunito({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggleCollapse, setToggleCollapse] = useState(false)
  return (
    <html lang="en">
      <body className={font.className}>
        <div className="flex min-h-screen">
        <Sidebar toggleCollapse={toggleCollapse} setToggleCollapse={setToggleCollapse}></Sidebar>
        {/* <Header></Header> */}
        <Content>
        {children}
        </Content>
        </div>
      </body>
    </html>
  );
}
