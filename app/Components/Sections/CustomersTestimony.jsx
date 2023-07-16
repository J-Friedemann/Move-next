import Image from "next/image";
import React from "react";
import Star from "../../../public/Utils/SVG/Icon_Star-2.svg";

const CustomersTestimony = () => {
  return (
    <section className="grid grid-flow-row mt-28 gap-8 ">
      <div className="lg:max-w-4xl mx-auto md:max-w-2xl sm:max-w-lg max-w-[16rem] xs:max-w-xs ">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
          Customers are loving our Move messenger
        </h1>
      </div>
      <div className=" grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto ">
        <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
          <Image
            width={80}
            height={80}
            className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
            src="/Utils/Images/Alpamys.png"
            alt=""
          />
          <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
            Alpamys Moldashev
          </h3>
          <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
            Graphic Designer
          </h4>
          <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
            With the Move messenger I can correspond with clients from all over
            the world and never forget about important meetings.
          </p>
          <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
        </div>
        <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
          <Image
            width={80}
            height={80}
            className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
            src="/Utils/Images/Bogdan.png"
            alt=""
          />
          <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
            Bogdan Krivenchenko
          </h3>
          <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
            UI/UX Designer
          </h4>
          <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
            Move messenger helps me a lot in performing normal tasks with
            reminders. It looks great and is easy to use!
          </p>
          <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
        </div>
        <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
          <Image
            width={80}
            height={80}
            className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
            src="/Utils/Images/Sergey.png"
            alt=""
          />
          <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
            Sergey Filatov
          </h3>
          <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
            CEO at Mindset
          </h4>
          <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
            Move messenger is just a bomb! On it I have the opportunity to lead
            my own design community and share up to date information.
          </p>
          <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
        </div>
      </div>
      <div className="mx-auto">
        <button className="text-xl text-emphasis1 font-semibold flex gap-2 items-center p-6 border border-support4 hover:border-emphasis1">
          See all testmonials{" "}
          <Image
            className="w-4 h-4"
            src="/Utils/SVG/icon-arrow-right.svg"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default CustomersTestimony;
