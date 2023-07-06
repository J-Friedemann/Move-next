"use client";

import React from "react";
import MenuHome from "./components/menuHome";
import MenuPage from "./components/MenuPage";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" w-full bg-support4 fixed top-0 left-0  z-30">
      <div className="sm:flex sm:justify-between items-center md:max-w-7xl md:mx-auto my-6">
        <Link href="/">
          <h1 className="text-5xl text-TColor1 px-5 py-2">Move</h1>
        </Link>

        <div className="flex justify-between space-x-6">
          <MenuHome />
          <MenuPage />
        </div>
        <button className="text-xl text-support4 bg-emphasis1 font-medium px-8 py-4 rounded-lg mr-4">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
