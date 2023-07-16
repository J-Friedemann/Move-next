import Image from "next/image";
import React from "react";

const CustomersLovingSection = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto">
      <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-center">
        Customers are loving our Move Music
      </h1>
      <p className="text-base xs:text-lg md:text-xl text-support2 font-medium text-center">
        Read the reviews that we regularly receive from users of our music app.
        We are proud to have created a product that gives a vivid impression.
      </p>
      <div className="min-w-72 mx-auto grid grid-cols-3 lg:grid-cols-[18.5rem_repeat(2,_minmax(0,_1fr))] justify-items-start relative shadow-2xl p-6 lg:w-[51rem] lg:h-[22.6rem] lg:p-1.375rem lg:gap-x-5">
        <button className="absolute z-10 -left-6 w-10 h-10 lg:w-20 lg:h-20 lg:-left-10 self-center drop-shadow-xl">
          <Image
            src="/Home/MobileApp/SVG/Control_Left.svg"
            width={80}
            height={80}
            alt=""
          />
        </button>
        <Image
          className="w-20 h-20 col-start-2 xs:col-start-1 rounded xs:rounded-full lg:rounded xs:row-span-2 lg:row-span-3 lg:w-[18.5rem] lg:h-[19.9rem] object-cover object-top"
          src="/Home/MobileApp/Images/BogdanImage.png"
          width={445}
          height={478}
          alt=""
        />
        <h2 className="row-start-3 xs:row-start-1 col-span-3  xs:col-span-2 xs:col-start-2 self-end lg:text-2xl font-semibold text-support1">
          Bogdan Krivenchenko
        </h2>
        <h3 className="row-start-4 xs:row-start-2 col-span-3 xs:col-span-2 xs:col-start-2 font-medium lg:text-lg text-support2">
          UI/UX Designer
        </h3>
        <p className="col-span-3 my-4 font-medium text-support2 lg:text-xl lg:leading-[2.18rem] lg:col-span-2 lg:max-w-xs">
          Move Music app that changed my opinion about music! I would never have
          thought that you can import your music from another app!
        </p>
        <button className="absolute z-10 -right-6 w-10 h-10  lg:w-20 lg:h-20 lg:-right-10 self-center drop-shadow-xl">
          <Image
            src="/Home/MobileApp/SVG/Control_Right.svg"
            width={80}
            height={80}
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default CustomersLovingSection;
