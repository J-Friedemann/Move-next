import Image from "next/image";

import React from "react";

const Footer = () => {
  return (
    <footer className="mt-32 mb-10">
      <div className="grid grid-cols-2  sm:grid-cols-3 md:grid-cols-[minmax(270px,_1fr)repeat(3, minmax(0, 1fr)] xl:grid-cols-[minmax(270px,_1fr)repeat(4,1fr)] gap-8 place-items-start max-w-[16rem] xs:max-w-xs lg:max-w-7xl mx-auto md:max-w-2xl sm:max-w-lg lg:p-10 justify-items-center lg:gap-x-8 lg:gap-y-12">
        <div className="col-span-2 lg:col-span-1 grid grid-flow-row gap-6 text-center">
          <h1 className="text-3xl md:text-4xl xl:text-[2.5rem] font-bold text-TColor1 ">
            Move
          </h1>
          <p className="text-base max-w-[16rem] xs:max-w-xs sm:text-lg xl:text-xl font-medium text-TColor2">
            Move - Multipurpose Design Template will help you develop your
            website design.
          </p>
          <div className="grid grid-flow-col">
            <Image
              src="/Footer/SVG/Dribbble.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/Footer/SVG/Facebook.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/Footer/SVG/Twitter.svg"
              width={50}
              height={50}
              alt=""
            />
            <Image
              src="/Footer/SVG/YouTube.svg"
              width={50}
              height={50}
              alt=""
            />
          </div>
        </div>
        <div className="grid grid-flow-row">
          <h2 className="text-lg md:text-2xl font-semibold text-TColor1 mb-4">
            Home
          </h2>
          <ul className=" text-base md:text-xl text-TColor2 font-medium space-y-3 lg:space-y-5">
            <li>Desktop App</li>
            <li>Mobile App</li>
            <li>SaaS</li>
            <li>Event</li>
            <li>Software</li>
          </ul>
        </div>
        <div className="grid grid-flow-row">
          <h2 className="text-lg md:text-2xl font-semibold text-TColor1 mb-4">
            Pages
          </h2>
          <ul className=" text-base md:text-xl text-TColor2 font-medium space-y-3 lg:space-y-5">
            <li>About Us</li>
            <li>Careers</li>
            <li>Case Studies</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="grid grid-flow-row">
          <h2 className="text-lg md:text-2xl font-semibold text-TColor1 mb-4">
            Blog
          </h2>
          <ul className=" text-base md:text-xl text-TColor2 font-medium space-y-3 lg:space-y-5">
            <li>Blog Listing</li>
            <li>Blog Article</li>
            <li>Newsroom</li>
          </ul>
        </div>
        <div className="grid grid-flow-row">
          <h2 className="text-lg md:text-2xl font-semibold text-TColor1 mb-4">
            Portfolio
          </h2>
          <ul className=" text-base md:text-xl text-TColor2 font-medium space-y-3 lg:space-y-5">
            <li>Portfolio</li>
            <li>Single Case</li>
          </ul>
        </div>
      </div>
      <p className="text-lg  max-w-[16rem] xs:max-w-xs font-medium text-TColor2 text-center mt-16 mx-auto">
        © 2019-2020 Wave Multipurpose Design Template.
      </p>
    </footer>
  );
};

export default Footer;
