import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-xl text-support4 bg-emphasis1 font-medium px-8 py-4 rounded-lg">
      {children}
    </button>
  );
};

export default Button;
