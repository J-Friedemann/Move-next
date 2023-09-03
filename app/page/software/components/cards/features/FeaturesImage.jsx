import Image from "next/image";
import React from "react";

export const FeaturesImage = ({ path }) => {
  return (
    <Image
      className="w-10 h-10 xs:h-14 xs:w-14 sm:h-20 sm:w-20"
      src={path}
      width={80}
      height={80}
      alt=""
    />
  );
};
