import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import React from "react";
import { Features } from "./cards/features";

const GoMove = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto text-center">
      <Title>Go Move with ease</Title>
      <BodyText>
        Learn all the features and features to make your process even faster and
        more exciting. Our product is ready to give you a pleasant interaction
        experience.
      </BodyText>
      <div>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-6.svg" />
          <Features.Name>Flexible planning</Features.Name>
          <Features.Description>
            The rich features of our platform make it easy for your team member
            to plan with your product.
          </Features.Description>
        </Features.Root>
      </div>
    </section>
  );
};

export default GoMove;
