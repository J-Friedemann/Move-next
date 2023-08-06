import React from "react";
import PrimaryButton from "../utils/buttons/PrimaryButton";
import Image from "next/image";
import Title from "../utils/text/Title";
import BodyText from "../utils/text/BodyText";

const MessengerCapable = () => {
  return (
    <section className="grid grid-cols-1 grid-row-2 mt-28 xl:mt-72 gap-2 xl:grid-cols-2 max-w-[16rem] xs:max-w-xs  lg:max-w-7xl md:max-w-2xl sm:max-w-lg mx-auto">
      <div className="grid grid-flow-row auto-rows-max lg:max-w-3xl mx-auto  justify-items-start lg:content-center xl:pr-20  gap-6">
        <Title>Find out what Move Messenger is capable of</Title>
        <BodyText>
          Watch a short video that tells you about the useful features of our
          mobile app. Everything you need is always at hand with Move.
        </BodyText>
        <PrimaryButton>View More</PrimaryButton>
      </div>
      <div className="relative mx-auto max-w-[16rem] xs:max-w-xs sm:max-w-xl lg:max-w-3xl">
        <Image
          src="/Utils/Images/Group4.png"
          width={1528}
          height={1608}
          alt=""
        />
        <div className="absolute grid grid-cols-3 bg-support4 drop-shadow-xl rounded w-60 sm:w-80 lg:w-96 p-4 lg:p-7 bottom-0 sm:bottom-40 ">
          <Image
            className="h-10 w-10 sm:h-20 sm:w-20 row-span-2 "
            width={80}
            height={80}
            src="/Utils/SVG/smileIcon.svg"
            alt=""
          />
          <div className="flex flex-col col-span-2">
            <p className="text-sm sm:text-lg text-support2 font-medium">
              Notification
            </p>
            <h3 className="text-sm sm:text-xl text-support1 font-semibold">
              Try the messenger features!
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MessengerCapable;
