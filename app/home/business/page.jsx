import Button from "@/app/Components/utils/Button";
import React from "react";
import Apple from "../../../public/Card_Apple.svg";
import Google from "../../../public/Card_Google.svg";
import Image from "next/image";
import CreditCard from "../../../public/CreditCard.svg";
import PayAny from "../../../public/PayAnywhere.svg";
import Increased from "../../../public/Increased.svg";
import FreeDebit from "../../../public/FreeDebit.svg";

const page = () => {
  return (
    <section className="container max-w-7xl mt-40 mx-auto">
      <div className="grid grid-flow-row mx-auto gap-10 lg:grid-cols-2 p-4">
        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto gap-4 lg:gap-8 lg:place-content-center">
          <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
            Quick payments with Move!
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-support2 font-medium">
            Try the new fast payment system with no Commission and no time to
            authorize payments. It is designed to help you conquer new horizons!
          </p>
          <div className="grid grid-flow-row justify-items-center gap-4 lg:grid-flow-col sm:my-4">
            <Button>Get Started</Button>
            <button className="text-base xs:text-lg sm:text-xl text-emphasis1 bg-alternative1 font-medium px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-lg ">
              View more
            </button>
          </div>
          <div className="grid grid-cols-2 gap-3 lg:gap-8 sm:grid-cols-[1fr_3fr] gap-x-5 lg:grid-cols-[1fr_1fr_3fr]">
            <Image
              className="w-10 h-10 lg:w-[4.625rem] lg:h-[4.5rem] justify-self-end sm:row-start-1"
              src={Apple}
              width={74}
              height={72}
              alt=""
            />
            <Image
              className="w-10 h-10 lg:w-[4.625rem] lg:h-[4.5rem] sm:row-start-2 lg:row-start-1 sm:justify-self-end"
              src={Google}
              width={74}
              height={72}
              alt=""
            />
            <p className="row-start-1 col-span-2 text-support3 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:row-span-2 sm:self-center lg:row-span-1 lg:col-start-3">
              Compatible with Google Pay and Apple Pay.
            </p>
          </div>
        </div>
        <Image
          className=" max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto"
          src="/Group6.png"
          width={730}
          height={892}
          alt=""
        />
      </div>
      <div className="mt-20 grid grid-flow-row lg:grid-cols-2 gap-x-6 gap-y-8 mx-auto lg:place-content-evenly px-5">
        <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
          <Image
            className="w-10 h-10 sm:w-20 sm:h-20"
            src={CreditCard}
            width={80}
            height={80}
            alt=""
          />
          <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
            Transfers without a fee
          </h2>
          <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
            You can transfer money to your relatives and friends to accounts in
            other banks without commission.
          </p>
        </div>
        <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
          <Image
            className="w-10 h-10 sm:w-20 sm:h-20"
            src={PayAny}
            width={80}
            height={80}
            alt=""
          />
          <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
            Pay anywhere
          </h2>
          <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
            Our payment system cooperates with many services and stores so we
            you can safely use our payment system.
          </p>
        </div>
        <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
          <Image
            className="w-10 h-10 sm:w-20 sm:h-20"
            src={Increased}
            width={80}
            height={80}
            alt=""
          />
          <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
            Increased cashback
          </h2>
          <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
            Each month you are presented with a choice of 3 categories of
            products with increased cashback choose wisely.
          </p>
        </div>
        <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
          <Image
            className="w-10 h-10 sm:w-20 sm:h-20"
            src={FreeDebit}
            width={80}
            height={80}
            alt=""
          />
          <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
            Free debit card service
          </h2>
          <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
            If you have more than $500 on your card, the card service will cost
            you free of charge.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;
