import React from "react";

const Button = ({ children }) => {
  return (
    <button className=" text-base xs:text-lg sm:text-xl text-support4 bg-emphasis1 font-medium px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-lg">
      {children}
    </button>
  );
};

export default Button;
