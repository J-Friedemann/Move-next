import React from "react";
import { twMerge } from "tailwind-merge";

const Heading4 = ({ children, ...rest }) => {
  return (
    <h2 className={twMerge("text-2xl text-support1 font-bold", rest.className)}>
      {children}
    </h2>
  );
};

export default Heading4;
