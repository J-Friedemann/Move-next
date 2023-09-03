import Image from "next/image";
import React from "react";

export const FeaturesImage = ({ path }) => {
  return <Image src={path} width={80} height={80} alt="" />;
};
