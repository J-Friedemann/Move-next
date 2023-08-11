import PrimaryButton from "@/app/Components/utils/buttons/PrimaryButton";
import SecondaryButton from "@/app/Components/utils/buttons/SecondaryButton";
import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import React from "react";

const HeroSoftware = () => {
  return (
    <section className="grid grid-flow-row mx-auto gap-10 lg:grid-cols-2 p-4">
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto gap-4 lg:gap-8 lg:place-content-center">
        <Title>Move is the perfect development tool</Title>
        <BodyText>
          We have created software for each employee of your team to help them
          do their work more efficiently and better to plan, track and release
          great software!
        </BodyText>
        <div>
          <SecondaryButton>View on Github</SecondaryButton>
          <PrimaryButton>Go Premium</PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default HeroSoftware;
