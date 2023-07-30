import React from "react";

const BannerDownload = () => {
  return (
    <section className="bg-[url('/Utils/Images/Rectangle-8.png')] bg-cover bg-no-repeat mx-3 grid grid-flow-row sm:grid-flow-col gap-4 place-content-center place-items-center p-4 sm:gap-20">
      <h2 className="text-sm xs:text-base xl:text-[2.5rem] sm:text-lg md:text-xl  lg:text-3xl text-support4 xl:leading-[3rem] min-w-[12.5rem] max-w-[32.3rem] font-bold text-center sm:text-left">
        Download our app to your smartphone!
      </h2>
      <button className=" text-sm lg:text-lg xl:text-xl bg-emphasis1 text-support4 font-semibold px-6 py-2 sm:px-8 sm:py-3 xl:px-12 xl:py-5 rounded border-2 border-emphasis3 sm:border-none">
        Download App
      </button>
    </section>
  );
};

export default BannerDownload;
