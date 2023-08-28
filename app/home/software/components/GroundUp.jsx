import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const GroundUp = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto text-center">
      <Title>Build it from the ground up</Title>
      <BodyText>
        Create your projects from scratch with the powerful Move Toolkit. We
        will tell you more about it in our video.
      </BodyText>
      <div className="relative flex justify-center citems-center">
        <Image
          src="/Home/Software/Images/Image-10.png"
          width={1028}
          height={567}
          alt=""
        />
        <Image
          src="/Home/Software/SVG/Button_Play.svg"
          className="absolute self-center w-10 h-10 sm:w-14 sm:h-14 lg:w-20 lg:h-20"
          width={77}
          height={77}
          alt=""
        />
      </div>
    </section>
  );
};

export default GroundUp;
