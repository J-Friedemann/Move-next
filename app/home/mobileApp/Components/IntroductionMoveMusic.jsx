import PrimaryButton from "@/app/Components/utils/PrimaryButton";
import Image from "next/image";
import React from "react";

const IntroductionMoveMusic = () => {
  return (
    <section className="grid grid-flow-row lg:grid-cols-2  mx-auto">
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md   mx-auto mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Introducing a new music app Move Music!
        </h1>
        <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium ">
          Try the Movie Music app we are sure that it will expand the boundaries
          of your musical taste. You can also try the extended version for free
          for 14 days.
        </p>
        <PrimaryButton>Start 14 Days Free Trial</PrimaryButton>
        <p className="md:text-lg text-support2 font-medium ">
          No credit card enquired
        </p>
      </div>
      <Image
        className=" max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10 "
        src="/Home/MobileApp/Images/IphoneMockup1.png"
        width={634}
        height={974}
        alt=""
      />
    </section>
  );
};

export default IntroductionMoveMusic;
