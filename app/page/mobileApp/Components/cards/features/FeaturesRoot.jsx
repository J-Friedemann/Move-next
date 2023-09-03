import React from "react";

export const FeaturesRoot = ({ children }) => {
  return (
    <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8  max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
      {children}
    </div>
  );
};
