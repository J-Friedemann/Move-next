import React from "react";
import Button from "../utils/Button";
import Image from "next/image";

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
          <h2 className="text-2xl text-support1 font-bold">End-to-End</h2>
          <p className="font-medium text-lg text-support2">
            Our messenger uses only proven technologies. There fore, no one will
            read your messages.
          </p>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            src="/Utils/SVG/voiceIcon.svg"
            width={80}
            height={80}
            alt=""
          />
          <h2 className="text-2xl text-support1 font-bold">Voice Message</h2>
          <p className="font-medium text-lg text-support2">
            When you don't have time to write a text, send your companion a
            voice message.
          </p>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            src="/Utils/SVG/widgetIcon.svg"
            width={80}
            height={80}
            alt=""
          />
          <h2 className="text-2xl text-support1 font-bold">News Widget</h2>
          <p className="font-medium text-lg text-support2">
            All the news of the world is at hand, our messenger has a
            pre-installed news widget.
          </p>
        </div>
        <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
          <Image
            className="w-20 h-20"
            width={80}
            height={80}
            src="/Utils/SVG/tagsIcon.svg"
            alt=""
          />
          <h2 className="text-2xl text-support1 font-bold">Tags</h2>
          <p className="font-medium text-lg text-support2">
            Place messages in existing tags or create new ones. Using tags makes
            interaction easier.
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row mx-auto lg:max-w-[28.75rem] mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Try the familiar functions in the new execution
        </h1>
        <p className="md:text-xl text-support2 font-medium ">
          The very functions that help you in everyday life are already built
          into our messenger and are not just built in but invented anew.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default FamiliarFunctions;
