import Image from "next/image";
import React from "react";

const TransferSection = () => {
  return (
    <section className="mt-36 grid grid-cols-1 gap-10 lg:grid-cols-2 p-4">
      <div className="max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto space-y-4">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
          Transfer as much as you want!
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium">
          When using our banking service you can transfer money to your loved
          ones without commission and without restrictions.
        </p>
        <div className="grid grid-cols-2">
          <Image
            src="/Page/Business/Images/american.png"
            width={243}
            height={104}
            alt=""
          />
          <Image
            src="/Page/Business/Images/paypal.png"
            width={243}
            height={104}
            alt=""
          />{" "}
          <Image
            src="/Page/Business/Images/visa.png"
            width={243}
            height={104}
            alt=""
          />{" "}
          <Image
            src="/Page/Business/Images/mastercard.png"
            width={243}
            height={104}
            alt=""
          />
        </div>
      </div>
      <Image
        className="max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto"
        src="/Page/Business/Images/transferMoney.png"
        width={710}
        height={892}
        alt=""
      />
    </section>
  );
};

export default TransferSection;
