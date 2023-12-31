"use client";

import React from "react";
import MenuPage from "./components/MenuPage";
import Link from "next/link";
import PrimaryButton from "../utils/buttons/PrimaryButton";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <header className=" w-full bg-support4 fixed top-0 left-0  z-30">
      <div className=" sm:flex sm:justify-between items-center md:max-w-7xl md:mx-auto my-6 relative px-12 py-2 ">
        <div className="flex z-50 sm:w-auto w-full justify-between ">
          <Link href="/">
            <h1 className="text-5xl text-TColor1 ">Move</h1>
          </Link>
          <button className="text-3xl sm:hidden" onClick={() => setOpen(!open)}>
            <img
              width={30}
              height={30}
              src={`${
                open
                  ? "/Header/SVG/close-outline.svg"
                  : "/Header/SVG/menu-outline.svg"
              }`}
              alt=""
            />
          </button>
        </div>
        <div
          className={` absolute bg-support4 w-screen h-screen bottom-0 top-20 pl-8 space-y-6 duration-500 ${
            open ? "left-0" : "left-[-100%]"
          } sm:left-0 sm:relative sm:w-auto sm:h-auto sm:space-y-0 sm:duration-0 sm:pl-0 sm:content-center sm:flex sm:top-0 sm:items-center gap-6`}
        >
          <div className="sm:flex justify-between space-y-6 sm:space-y-0 sm:space-x-6">
            <MenuPage />
          </div>
          <PrimaryButton>Get Started</PrimaryButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
