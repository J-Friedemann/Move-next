import Image from "next/image";
import React from "react";

const CardsMobileSection = () => {
  return (
    <section className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 mt-24 sm:mt-52 mx-auto justify-items-center lg:justify-around gap-12">
      <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8  max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
        <Image
          src="/Home/MobileApp/SVG/icon-3-music.svg"
          width={80}
          height={80}
          alt=""
        />
        <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
          Import Music Library
        </h2>
        <p className="text-base xs:text-lg text-support2 font-medium">
          You can easily import your music library into our app without having
          to search for music again.
        </p>
      </div>
      <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8  max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
        <Image
          src="/Home/MobileApp/SVG/icon-2-music.svg"
          width={80}
          height={80}
          alt=""
        />
        <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
          Music Without Internet
        </h2>
        <p className="text-base xs:text-lg text-support2 font-medium">
          Listen to music even when you don't have Internet access by
          downloading it to your smartphone.
        </p>
      </div>
      <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8 max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
        <Image
          src="/Home/MobileApp/SVG/icon-music.svg"
          width={80}
          height={80}
          alt=""
        />
        <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
          Music Without Limits
        </h2>
        <p className="text-base xs:text-lg text-support2 font-medium">
          There are no restrictions on listening to music in our app, enjoy
          music everywhere.
        </p>
      </div>
    </section>
  );
};

export default CardsMobileSection;
