import Image from "next/image";
import React from "react";

const TransactionSection = () => {
  return (
    <section className="grid grid-flow-row mx-auto gap-10 xl:gap-24 lg:grid-cols-2 p-4 mt-36 ">
      <Image
        className=" max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto content-center"
        src="/Page/Business/Images/CreditCard.png"
        width={1408}
        height={1852}
        alt="Imagem de um cartão de credito"
      />
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto content-center gap-4 px-5">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          All transactions are at hand!
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium">
          Try to control your expenses directly from our app! You will see that
          it is very easy and convenient!
        </p>
        <div className="grid grid-flow-row sm:grid-cols-4 gap-3 mt-4">
          <Image
            className="w-9 h-9 xs:w-[4.625rem] xs:h-[4.625rem] "
            src="/Page/Business/SVG/chart-pie.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2 className="text-support1 font-semibold text-lg xs:text-xl sm:text-2xl sm:col-span-3">
            Set limits on spending per month
          </h2>
          <p className="text-support2 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:col-span-3">
            Don't want to spend a lot and calculate your budget? Don't worry,
            you can limit your monthly expenses in our app!
          </p>
        </div>
        <div className="grid grid-flow-row sm:grid-cols-4 gap-3 mt-4">
          <Image
            className="w-9 h-9 xs:w-[4.625rem] xs:h-[4.625rem]"
            src="/Page/Business/SVG/sale.svg"
            width={74}
            height={74}
            alt=""
          />
          <h2 className="text-support1 font-semibold text-lg xs:text-xl sm:text-2xl sm:col-span-3">
            Close cooperation with Payonpie
          </h2>
          <p className="text-support2 font-medium text-sm xs:text-base sm:text-lg sm:col-start-2 sm:col-span-3">
            You can get profitable applications from the global payment system
            Payonpie and receive increased cashback from purchases.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TransactionSection;
