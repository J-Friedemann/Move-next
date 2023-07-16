import React from "react";

const BannerDownload = () => {
  return (
    <section className="grid grid-flow-col justify-around content-center  items-center h-24 lg:h-36 xl:h-[13.375rem] bg-emphasis1 bg-[url('/Components.png')] bg-right bg-[length:50%_200%] bg-no-repeat sm:mx-4 gap-4 p-4 mx-auto rounded drop-shadow-md mt-10 sm:mt-20 lg:mt-32 xl:mt-40">
      <h2 className="xl:text-[2.5rem] sm:text-lg md:text-xl  lg:text-3xl text-support4 xl:leading-[3rem] min-w-[12.5rem] max-w-[32.3rem] font-bold text-left">
        Download our app to your smartphone!
      </h2>
      <button className=" text-sm lg:text-lg xl:text-xl bg-emphasis1 text-support4 font-semibold px-6 py-2 sm:px-8 sm:py-3 xl:px-12 xl:py-5 rounded">
        Download App
      </button>
    </section>
  );
};

export default BannerDownload;
