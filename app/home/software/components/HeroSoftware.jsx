import PrimaryButton from "@/app/Components/utils/buttons/PrimaryButton";
import SecondaryButton from "@/app/Components/utils/buttons/SecondaryButton";
import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const HeroSoftware = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-52 gap-6 md:gap-8 content-center mx-auto text-center">
      <Title>Move is the perfect development tool</Title>
      <BodyText>
        We have created software for each employee of your team to help them do
        their work more efficiently and better to plan, track and release great
        software!
      </BodyText>
      <div className="flex flex-wrap justify-center align-middle sm:gap-x-4">
        <SecondaryButton className="mb-4 sm:mb-0">
          View on Github
        </SecondaryButton>
        <PrimaryButton>Go Premium</PrimaryButton>
        <Image
          src="/Home/Software/Images/HeroImg.png"
          width={1333}
          height={630}
          alt=""
        />
      </div>
    </section>
  );
};

export default HeroSoftware;
