import React from "react";
import Image from "next/image";

const CardsSection = () => {
  return (
    <section className="mt-20 grid grid-flow-row lg:grid-cols-2 gap-x-6 gap-y-8 mx-auto lg:place-content-evenly px-5">
      <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
        <Image
          className="w-10 h-10 sm:w-20 sm:h-20"
          src="/Home/Business/SVG/CreditCard.svg"
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
          src="/Home/Business/SVG/PayAnywhere.svg"
          width={80}
          height={80}
          alt=""
        />
        <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
          Pay anywhere
        </h2>
        <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
          Our payment system cooperates with many services and stores so we you
          can safely use our payment system.
        </p>
      </div>
      <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
        <Image
          className="w-10 h-10 sm:w-20 sm:h-20"
          src="/Home/Business/SVG/Increased.svg"
          width={80}
          height={80}
          alt=""
        />
        <h2 className="col-span-4 sm:col-span-5 text-support1 font-bold text-lg xs:text-xl sm:text-2xl">
          Increased cashback
        </h2>
        <p className="col-span-5 text-base xs:text-lg text-support2 font-medium">
          Each month you are presented with a choice of 3 categories of products
          with increased cashback choose wisely.
        </p>
      </div>
      <div className="grid grid-cols-5 max-w-[16rem] xs:max-w-xs sm:max-w-md md:max-w-[37.75rem] mx-auto gap-y-4 gap-x-3 items-center bg-support4 p-4 rounded-md shadow-xl">
        <Image
          className="w-10 h-10 sm:w-20 sm:h-20"
          src="/Home/Business/SVG/FreeDebit.svg"
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
    </section>
  );
};

export default CardsSection;
