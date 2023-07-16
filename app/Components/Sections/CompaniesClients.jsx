import Image from "next/image";
import React from "react";

const CompaniesClients = () => {
  return (
    <section className="max-w-[16rem] xs:max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-lg mx-auto md:mt-46 mt-10 lg:mt-56">
      <p className="text-xl sm:text-2xl  text-support2 text-center">
        Companies that have already tried our messenger
      </p>
      <div className="grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-3  sm:grid-rows-2 mt-14 sm:mt-9 justify-items-center content-center ">
        <Image
          height={42}
          width={144}
          className="object-contain mb-5 lg:mb-0"
          src="/Utils/Images/aven.png"
          alt=""
        />
        <Image
          height={42}
          width={184}
          className="object-contain mb-5 lg:mb-0"
          src="/Utils/Images/goldline.png"
          alt=""
        />
        <Image
          height={40}
          width={153}
          className="object-contain mb-5 lg:mb-0"
          src="/Utils/Images/kanba.png"
          alt=""
        />
        <Image
          height={42}
          width={118}
          className="object-contain mb-5 lg:mb-0"
          src="/Utils/Images/kyan.png"
          alt=""
        />
        <Image
          height={47}
          width={158}
          className="object-contain mb-5 lg:mb-0"
          src="/Utils/Images/spotify.png"
          alt=""
        />
      </div>
    </section>
  );
};

export default CompaniesClients;
