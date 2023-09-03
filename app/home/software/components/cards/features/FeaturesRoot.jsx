import React from "react";

export const FeaturesRoot = ({ children }) => {
  return (
    <div
      className="max-w-xs shadow hover:shadow-2xl grid grid-cols-1 justify-items-center gap-3 p-4 sm:p-8 sm:justify-items-start sm:text-left sm:max-w-sm lg:max-w-xs
  "
    >
      {children}
    </div>
  );
};
