import React from "react";
import { twMerge } from "tailwind-merge";

const BodyText = ({ children, ...rest }) => {
  return (
    <p
      className={twMerge(
        "text-base xs:text-lg md:text-xl text-support2 font-medium",
        rest.className
      )}
    >
      {children}
    </p>
  );
};

export default BodyText;
