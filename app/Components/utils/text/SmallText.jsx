import React from "react";
import { twMerge } from "tailwind-merge";

const SmallText = ({ children, ...rest }) => {
  return (
    <p
      className={twMerge(
        "text-base xs:text-lg text-support2 font-medium",
        rest.className
      )}
    >
      {children}
    </p>
  );
};

export default SmallText;
