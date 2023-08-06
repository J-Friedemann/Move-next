import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const WhatAbout = () => {
  return (
    <section>
      <Title>What we're about</Title>
      <p>
        View our weekdays at the office! We work hard every day to create great
        products that will help you in your work.
      </p>
      <Image
        src="/Home/Business/Images/Image-14.png"
        width={1028}
        height={571}
        alt=""
      />
    </section>
  );
};

export default WhatAbout;
