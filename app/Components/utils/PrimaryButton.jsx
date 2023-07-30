import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <button className=" text-base xs:text-lg sm:text-xl text-support4 bg-emphasis1 font-medium px-4 py-2 xs:px-6 xs:py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-[#2738E8] hover:shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      {children}
    </button>
  );
};

export default PrimaryButton;
