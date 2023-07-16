import Image from "next/image";
import React from "react";

const DownloadMusicSection = () => {
  return (
    <section className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
      <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Listen and download music
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium ">
          In our app, you can download music both in the app itself and on your
          smartphone. Try this feature today
        </p>

        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/Music.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2 lg:col-span-3">
            Downloading in the app
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2 lg:col-span-3">
            Owners of the regular version of Move Music can only download music
            in the app and listen to it without the Internet.
          </p>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
          <Image
            className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Home/MobileApp/SVG/Iphone.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
            Downloading to your smartphone
          </h2>
          <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
            Users of the Move+ subscription can download music for free to their
            smartphone to listen to it without the Internet.
          </p>
        </div>
      </div>
      <Image
        className="max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10"
        src="/Home/MobileApp/Images/IphoneMockup3.png"
        width={633}
        height={974}
        alt=""
      />
    </section>
  );
};

export default DownloadMusicSection;
