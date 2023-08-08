import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const WhatAbout = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto text-center">
      <Title>What we're about</Title>
      <BodyText>
        View our weekdays at the office! We work hard every day to create great
        products that will help you in your work.
      </BodyText>
      <div className="flex relative justify-center ">
        <Image
          className="relative"
          src="/Home/Business/Images/Image-14.png"
          width={1028}
          height={571}
          alt=""
        />

        <Image
          className="absolute w-10 h-10 top-12 xs:top-16 sm:top-20 sm:w-16 sm:h-20 lg:top-48 cursor-pointer"
          src="/Home/Business/SVG/Button_Play.svg"
          width={77}
          height={77}
          alt=""
        />
      </div>
    </section>
  );
};

export default WhatAbout;
