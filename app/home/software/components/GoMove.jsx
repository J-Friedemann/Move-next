import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import React from "react";
import { Features } from "./cards/features";

const GoMove = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-5xl mt-28 gap-6 md:gap-8 content-center mx-auto text-center mb-52">
      <Title>Go Move with ease</Title>
      <BodyText>
        Learn all the features and features to make your process even faster and
        more exciting. Our product is ready to give you a pleasant interaction
        experience.
      </BodyText>
      <div className="mt-20 grid grid-cols-1 gap-8 lg:grid-cols-3">
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-6.svg" />
          <Features.Name>Flexible planning</Features.Name>
          <Features.Description>
            The rich features of our platform make it easy for your team member
            to plan with your product.
          </Features.Description>
        </Features.Root>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-5.svg" />
          <Features.Name>Transparent execution</Features.Name>
          <Features.Description>
            Our software brings transparency to your work processes and the
            entire ecosystem.
          </Features.Description>
        </Features.Root>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-4.svg" />
          <Features.Name>Actionable results</Features.Name>
          <Features.Description>
            Extensive reporting functionality gives your team critical insight
            into their agile process.
          </Features.Description>
        </Features.Root>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-3.svg" />
          <Features.Name>Scalable evolution</Features.Name>
          <Features.Description>
            Move software helps people in your team work with project resolution
            without losing quality.
          </Features.Description>
        </Features.Root>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon-2.svg" />
          <Features.Name>Cloud Storage</Features.Name>
          <Features.Description>
            You can store your projects without leaving our product. Move Cloud
            will help you do this.
          </Features.Description>
        </Features.Root>
        <Features.Root>
          <Features.Image path="/Home/Software/SVG/icon.svg" />
          <Features.Name>Analytics API</Features.Name>
          <Features.Description>
            When working with metrica our API manager can help you connect it
            safely and get the latest statistics.
          </Features.Description>
        </Features.Root>
      </div>
    </section>
  );
};

export default GoMove;
