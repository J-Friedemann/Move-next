import React from "react";
import { Menu } from "@headlessui/react";
import Image from "next/image";

const MenuHome = () => {
  const home = [
    { href: "/", label: "Desktop App" },
    { href: "/home/business", label: "Business" },
    { href: "/home/mobileApp", label: "Mobile App" },
    { href: "/home/software", label: "Software" },
  ];
  return (
    <Menu>
      <div className="relative">
        <Menu.Button className="text-xl font-semibold text-support2 flex items-center  ">
          Home
          <Image
            width={20}
            height={20}
            className=" ml-2 h-5 w-5"
            src="/Header/SVG/icon-chevron-down-3.svg"
            alt=""
          />
        </Menu.Button>
        <Menu.Items className="top-8 absolute mt-2 w-56 rounded-md shadow-lg bg-support4 ring-1 ring-support3 ring-opacity-5 divide-y divide-support3 focus:outline-none z-50">
          {home.map((link) => (
            <Menu.Item
              as="a"
              key={link.href}
              href={link.href}
              className="flex items-center px-4 py-2 text-lg text-support2 font-medium hover:bg-support5"
            >
              {link.label}
            </Menu.Item>
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};

export default MenuHome;
