import PrimaryButton from "@/app/Components/utils/buttons/PrimaryButton";
import BodyText from "@/app/Components/utils/text/BodyText";
import SmallText from "@/app/Components/utils/text/SmallText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const IntroductionMoveMusic = () => {
  return (
    <section className="grid grid-flow-row lg:grid-cols-2  mx-auto">
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md   mx-auto mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
        <Title>Introducing a new music app Move Music!</Title>
        <BodyText>
          Try the Movie Music app we are sure that it will expand the boundaries
          of your musical taste. You can also try the extended version for free
          for 14 days.
        </BodyText>
        <PrimaryButton>Start 14 Days Free Trial</PrimaryButton>
        <SmallText>No credit card enquired</SmallText>
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
