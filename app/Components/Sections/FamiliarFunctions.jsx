import React from "react";
import PrimaryButton from "../utils/buttons/PrimaryButton";
import Image from "next/image";
import SmallText from "../utils/text/SmallText";
import Heading4 from "../utils/text/Heading4";
import Title from "../utils/text/Title";
import BodyText from "../utils/text/BodyText";

const FamiliarFunctions = () => {
  return (
    <section className=" grid grid-cols-1 lg:grid-cols-2  max-w-[16rem] xs:max-w-xs  lg:max-w-7xl md:max-w-2xl sm:max-w-lg xl:mt-56 sm:mt-40 xl:gap-16 mx-auto">
      <div className="row-start-2 lg:row-start-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  xl:grid-rows-2 gap-8  justify-items-center mx-auto">
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            src="/Utils/SVG/mailIcon.svg"
            width={80}
            height={80}
            alt=""
          />
          <Heading4>End-to-End</Heading4>
          <SmallText>
            Our messenger uses only proven technologies. There fore, no one will
            read your messages.
          </SmallText>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            src="/Utils/SVG/voiceIcon.svg"
            width={80}
            height={80}
            alt=""
          />
          <Heading4>Voice Message</Heading4>
          <SmallText>
            When you don't have time to write a text, send your companion a
            voice message.
          </SmallText>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            src="/Utils/SVG/widgetIcon.svg"
            width={80}
            height={80}
            alt=""
          />
          <Heading4>News Widget</Heading4>
          <SmallText>
            All the news of the world is at hand, our messenger has a
            pre-installed news widget.
          </SmallText>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            width={80}
            height={80}
            src="/Utils/SVG/tagsIcon.svg"
            alt=""
          />
          <Heading4>Tags</Heading4>
          <SmallText>
            Place messages in existing tags or create new ones. Using tags makes
            interaction easier.
          </SmallText>
        </div>
      </div>
      <div className="grid grid-flow-row mx-auto lg:max-w-[28.75rem] mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
        <Title>Try the familiar functions in the new execution</Title>
        <BodyText>
          The very functions that help you in everyday life are already built
          into our messenger and are not just built in but invented anew.
        </BodyText>
        <PrimaryButton>Get Started</PrimaryButton>
      </div>
    </section>
  );
};

export default FamiliarFunctions;
