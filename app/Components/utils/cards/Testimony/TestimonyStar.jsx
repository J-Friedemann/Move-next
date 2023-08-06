import Image from "next/image";
import React from "react";

export const TestimonyStar = ({ Star }) => {
  return (
    <Image
      className="sm:col-span-3 sm:pl-2"
      src={Star}
      width={222}
      height={42}
      alt=""
    />
  );
};
