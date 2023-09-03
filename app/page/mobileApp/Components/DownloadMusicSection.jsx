import BodyText from "@/app/Components/utils/text/BodyText";
import Heading5 from "@/app/Components/utils/text/Heading5";
import SmallText from "@/app/Components/utils/text/SmallText";
import Title from "@/app/Components/utils/text/Title";
import Image from "next/image";
import React from "react";

const DownloadMusicSection = () => {
  return (
    <section className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
      <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
        <Title>Listen and download music</Title>
        <BodyText>
          In our app, you can download music both in the app itself and on your
          smartphone. Try this feature today.
        </BodyText>

        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Page/MobileApp/SVG/Music.svg"
            width={74}
            height={74}
            alt=""
          />
          <Heading5 className="ol-span-2 lg:col-span-3">
            Downloading in the app
          </Heading5>
          <SmallText className="col-span-3 xs:col-span-2 lg:col-span-3">
            Owners of the regular version of Move Music can only download music
            in the app and listen to it without the Internet.
          </SmallText>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Page/MobileApp/SVG/Iphone.svg"
            width={74}
            height={74}
            alt=""
          />
          <Heading5 className="col-span-2  lg:col-span-3">
            Downloading to your smartphone
          </Heading5>
          <SmallText className="col-span-3 xs:col-span-2 lg:col-span-3">
            Users of the Move+ subscription can download music for free to their
            smartphone to listen to it without the Internet.
          </SmallText>
        </div>
      </div>
      <Image
        className="max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10"
        src="/Page/MobileApp/Images/IphoneMockup3.png"
        width={633}
        height={974}
        alt=""
      />
    </section>
  );
};

export default DownloadMusicSection;
