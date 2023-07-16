import Button from "@/app/Components/utils/Button";
import Image from "next/image";
import React from "react";

const SubscriptionCards = () => {
  return (
    <section className="grid grid-flow-row lg:grid-flow-col lg:max-w-6xl mx-auto mt-6 lg:mt-28">
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
        <h2 className="text-2xl xs:text-3xl font-bold text-emphasis3">Move</h2>
        <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">Free</h1>
        <p className="text-lg xs:text-xl font-medium text-support2">
          Per Users
        </p>

        <div className="mt-4 xs:mt-7 grid grid-flow-row gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No ads in the app
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No download restrictions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Customization of profile
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Stickers as a gift
            </p>
          </div>
        </div>
        <Button>Get Started</Button>
      </div>

      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
        <h2 className="text-2xl xs:text-3xl font-bold text-emphasis4">Move+</h2>
        <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">$9.99</h1>
        <p className="text-lg xs:text-xl font-medium text-support2">
          Per User / Per Year
        </p>
        <div className="mt-7 grid grid-flow-row gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No ads in the app
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No download restrictions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Customization of profile
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Stickers as a gift
            </p>
          </div>
        </div>
        <Button>Get Started</Button>
      </div>
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
        <h2 className="text-2xl xs:text-3xl  font-bold text-emphasis2">
          Family
        </h2>
        <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">
          $12.99
        </h1>
        <p className="text-lg xs:text-xl font-medium text-support2">
          Per Users / Per Year
        </p>

        <div className="mt-7 grid grid-flow-row gap-4">
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No ads in the app
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              No download restrictions
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Customization of profile
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Image
              className="w-6 h-6 xs:w-9 xs:h-9"
              src="/Checkmark-5.svg"
              width={36}
              height={36}
              alt=""
            />
            <p className="text-lg xs:text-xl font-medium text-support2">
              Stickers as a gift
            </p>
          </div>
        </div>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default SubscriptionCards;
