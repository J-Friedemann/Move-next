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
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Be in the trend of new music
        </h1>
        <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium ">
          Every week, we create new playlists with current music that most
          people listen to. Join them and be in the trend of new music.
        </p>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/smile.svg"
            width={74}
            height={74}
            alt=""
          />

          <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
            We adapt to you
          </h2>
          <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
            We analyze your media library and create playlists that match your
            mood and music preference.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/playlist-2.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
            Your music your rules
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
            You can import your playlist from other music platforms and not
            waste time adding music manually.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrendMusicSection;
