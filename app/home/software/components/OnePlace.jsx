import BodyText from "@/app/Components/utils/text/BodyText";
import SmallText from "@/app/Components/utils/text/SmallText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const OnePlace = () => {
  return (
    <section className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
      <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
        <Title>Everything you need in one place</Title>
        <BodyText>
          Powerful metrics to better understand your business are right at your
          fingertips, once you start working with them!
        </BodyText>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <div className="flex items-center gap-3">
            <Image
              src="/Home/Software/SVG/Checkmark-18.svg"
              width={36}
              height={36}
              alt=""
            />
            <SmallText>Real-time data</SmallText>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Home/Software/SVG/Checkmark-18.svg"
              width={36}
              height={36}
              alt=""
            />
            <SmallText>End-to-end encyption</SmallText>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Home/Software/SVG/Checkmark-18.svg"
              width={36}
              height={36}
              alt=""
            />
            <SmallText>FDIC Insured</SmallText>
          </div>
          <div className="flex items-center gap-3">
            <Image
              src="/Home/Software/SVG/Checkmark-18.svg"
              width={36}
              height={36}
              alt=""
            />
            <SmallText>REST API enabled</SmallText>
          </div>
        </div>
        <button className="text-xl text-emphasis1 font-semibold flex gap-2 items-center p-6 border border-support4 hover:border-emphasis1">
          Explore more features
          <Image
            className="w-4 h-4"
            src="/Utils/SVG/icon-arrow-right.svg"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
      <Image
        src="/Home/Software/Images/Dashboard.png"
        className="max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-28"
        width={754}
        height={823}
        alt=""
      />
    </section>
  );
};

export default OnePlace;
