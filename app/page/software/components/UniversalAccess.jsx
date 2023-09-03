import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const UniversalAccess = () => {
  return (
    <section className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40 items-center lg:content-center ">
      <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 lg:mt-0 justify-items-start lg:content-center gap-6 md:gap-8 lg:col-start-2">
        <Title>Universal access to your data</Title>
        <BodyText>
          Get access to your data through any additional software or try
          integrating it into our system, while we show you resource usage
          statistics.
        </BodyText>
        <div className="grid grid-cols-1 md:grid-cols-3 justify-center mx-auto gap-4 lg:gap-7">
          <div className="grid grid-flow-row">
            <h2 className="text-3xl text-emphasis2 font-semibold">5.0/5.0</h2>
            <BodyText>Review Score</BodyText>
          </div>
          <div className="grid grid-flow-row">
            <h2 className="text-3xl text-emphasis1 font-semibold">300K+</h2>
            <BodyText>Monthly Installs</BodyText>
          </div>
          <div className="grid grid-flow-row">
            <h2 className="text-3xl text-emphasis3 font-semibold">99.99%</h2>
            <BodyText>Satisfaction</BodyText>
          </div>
        </div>
      </div>
      <Image
        src="/Page/Software/Images/comands.png"
        className=" max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto mt-16 lg:mt-10"
        width={704}
        height={767}
        alt=""
      />
    </section>
  );
};

export default UniversalAccess;
