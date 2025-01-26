"use client";

import React from "react";
import Navbar from "../Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <main className="min-h-screen bg-neutral-950 px-8 py-4">
      <Navbar />
      <div className="mt-8">{children}</div>
    </main>
  );
};

export default Layout;
