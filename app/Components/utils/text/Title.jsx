import React from "react";
import { twMerge } from "tailwind-merge";

const Title = ({ children, ...rest }) => {
  return (
    <h1
      className={twMerge(
        "text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl",
        rest.className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
