import React from "react";
import { twMerge } from "tailwind-merge";

const SubTitle = ({ children, ...rest }) => {
  return (
    <h2
      className={twMerge(
        "text-xl md:text-2xl font-semibold text-support1",
        rest.className
      )}
    >
      {children}
    </h2>
  );
};

export default SubTitle;
