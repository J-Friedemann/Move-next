import PrimaryButton from "@/app/Components/utils/buttons/PrimaryButton";
import React from "react";
import Image from "next/image";
import SecondaryButton from "@/app/Components/utils/buttons/SecondaryButton";

const QuickPaymentsSection = () => {
  return (
    <section className="grid grid-flow-row mx-auto gap-10 lg:grid-cols-2 p-4">
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto gap-4 lg:gap-8 lg:place-content-center">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Quick payments with Move!
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium">
          Try the new fast payment system with no Commission and no time to
          authorize payments. It is designed to help you conquer new horizons!
        </p>
        <div className="grid grid-flow-row justify-items-center gap-4 lg:grid-flow-col sm:my-4">
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>View more</SecondaryButton>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:gap-8 sm:grid-cols-[1fr_3fr] gap-x-5 lg:grid-cols-[1fr_1fr_3fr]">
          <Image
            className="w-10 h-10 lg:w-[4.625rem] lg:h-[4.5rem] justify-self-end sm:row-start-1"
            src="/Page/Business/SVG/Card_Apple.svg"
            width={74}
            height={72}
            alt=""
          />
          <Image
            className="w-10 h-10 lg:w-[4.625rem] lg:h-[4.5rem] sm:row-start-2 lg:row-start-1 sm:justify-self-end"
            src="/Page/Business/SVG/Card_Google.svg"
            width={74}
            height={72}
            alt=""
          />
          <p className="row-start-1 col-span-2 text-support3 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:row-span-2 sm:self-center lg:row-span-1 lg:col-start-3">
            Compatible with Google Pay and Apple Pay.
          </p>
        </div>
      </div>
      <Image
        className=" max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
        src="/Page/Business/Images/WomenSmiling.png"
        width={730}
        height={892}
        alt=""
      />
    </section>
  );
};

export default QuickPaymentsSection;
