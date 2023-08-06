import React from "react";

export const TestimonyRoot = ({ children, ...rest }) => {
  return (
    <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
      {children}
    </div>
  );
};
