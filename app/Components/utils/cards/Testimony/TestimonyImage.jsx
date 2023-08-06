import Image from "next/image";
import React from "react";

export const TestimonyImage = ({ path }) => {
  return (
    <Image
      width={80}
      height={80}
      className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
      src={path}
      alt=""
    />
  );
};
