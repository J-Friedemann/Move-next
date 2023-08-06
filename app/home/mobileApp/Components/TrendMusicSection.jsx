import BodyText from "@/app/Components/utils/text/BodyText";
import Heading5 from "@/app/Components/utils/text/Heading5";
import SmallText from "@/app/Components/utils/text/SmallText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const TrendMusicSection = () => {
  return (
    <section className="grid grid-flow-row justify-items-center lg:grid-flow-col lg:items-center lg:mt-40 mx-auto">
      <Image
        className="row-start-2 lg:row-start-1 max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10 "
        src="/Home/MobileApp/Images/IphoneMockup2.png"
        width={604}
        height={974}
        alt=""
      />

      <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
        <Title>Be in the trend of new music</Title>
        <BodyText>
          Every week, we create new playlists with current music that most
          people listen to. Join them and be in the trend of new music.
        </BodyText>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/smile.svg"
            width={74}
            height={74}
            alt=""
          />

          <Heading5 className="col-span-2  lg:col-span-3">
            We adapt to you
          </Heading5>
          <SmallText className="col-span-3 xs:col-span-2 lg:col-span-3">
            We analyze your media library and create playlists that match your
            mood and music preference.
          </SmallText>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/playlist-2.svg"
            width={74}
            height={74}
            alt=""
          />
          <Heading5 className="col-span-2  lg:col-span-3">
            Your music your rules
          </Heading5>
          <SmallText className="col-span-3 xs:col-span-2  lg:col-span-3">
            You can import your playlist from other music platforms and not
            waste time adding music manually.
          </SmallText>
        </div>
      </div>
    </section>
  );
};

export default TrendMusicSection;
