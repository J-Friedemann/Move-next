import React from "react";
import PrimaryButton from "../utils/buttons/PrimaryButton";
import Image from "next/image";
import SecondaryButton from "../utils/buttons/SecondaryButton";
import BodyText from "../utils/text/BodyText";
import Title from "../utils/text/Title";

const IntroductionMessenger = () => {
  return (
    <section className="mt-36 sm:mt-2">
      <div className="text-center lg:max-w-4xl mx-auto md:max-w-2xl sm:max-w-lg max-w-[16rem] xs:max-w-xs ">
        <Title className="mt-6 xl:text-7xl">
          A messenger that is ahead of its time
        </Title>
        <BodyText className="mt-6">
          Try the new Move messenger! It will definitely impress you with its
          amazing features that will make it easier for you to communicate
          between your friends.
        </BodyText>

        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:max-w-lg justify-items-center items-center mx-auto sm:my-9 my-3 space-y-4 sm:space-y-0">
          <PrimaryButton>Get Started</PrimaryButton>
          <SecondaryButton>View more</SecondaryButton>
        </div>
      </div>
      <div className="hideen sm:grid sm:grid-cols-1 xl:grid-cols-[9.3rem_1fr_9.3rem] sm:h-[30rem] md:h-[40rem] justify-items-center content-center xl:justify-between sm:w-full mx-auto">
        <Image
          height={1222}
          width={508}
          className="hidden h-[38rem] object-cover object-left z-10 xl:block"
          src="/Utils/Images/abstract-shapes-10.png"
          alt=""
        />
        <Image
          height={1228}
          width={2184}
          className="hidden h-[38rem] sm:object-contain sm:block sm:px-5 xl:px-0 "
          src="/Utils/Images/Messenger_Desktop.png"
          alt=""
        />

        <Image
          height={1224}
          width={580}
          className="hidden h-[38rem] object-cover object-right z-10 xl:block"
          src="/Utils/Images/abstract-shapes-10-2.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default IntroductionMessenger;
