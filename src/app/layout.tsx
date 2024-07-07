"use client";
import { Inter } from "next/font/google";
import "~/styles/scss/globals.scss";
import Navbar from "~/components/navbar/Navbar";
import Sidebar from "~/components/sidebar/Sidebar";
import React, { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
          <Navbar />
          <div
            className="layout"
            style={{
              padding: "20px",
              marginLeft: "250px",
              paddingTop: "100px",
            }}
          >
            <Sidebar />
            <main className="content">{children}</main>
          </div>
        </>
      </body>
    </html>
  );
}
