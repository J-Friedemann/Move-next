import Image from "next/image";
import React from "react";

const Statistics = () => {
  return (
    <section className="grid grid-flow-row mx-auto gap-10 xl:gap-24 lg:grid-cols-2 p-4 mt-36 ">
      <Image
        className="max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
        src="/Home/Business/Images/statistics.png"
        width={707}
        height={922}
        alt=""
      />
      <div className="max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto space-y-4">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Nothing will be hidden from you!
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium">
          You can track all transactions in special statistics that will show
          the ratio of spending to your account balance.
        </p>
        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto content-center gap-4 px-5">
          <div className="grid grid-flow-row sm:grid-cols-4 gap-3 mt-4">
            <Image
              className="w-9 h-9 xs:w-[4.625rem] xs:h-[4.625rem]"
              src="/Home/Business/SVG/takeControl.svg"
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-support1 font-semibold text-lg xs:text-xl sm:text-2xl sm:col-span-3">
              Take control of your spending
            </h2>
            <p className="text-support2 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:col-span-3">
              All operations that you perform through the selected card are
              automatically entered in statistics.
            </p>
          </div>
          <div className="grid grid-flow-row sm:grid-cols-4 gap-3 mt-4">
            <Image
              className="w-9 h-9 xs:w-[4.625rem] xs:h-[4.625rem]"
              src="/Home/Business/SVG/shield.svg"
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-support1 font-semibold text-lg xs:text-xl sm:text-2xl sm:col-span-3">
              Take control of your spending
            </h2>
            <p className="text-support2 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:col-span-3">
              All operations that you perform through the selected card are
              automatically entered in statistics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Statistics;
