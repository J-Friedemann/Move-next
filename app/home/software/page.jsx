import React from "react";
import HeroSoftware from "./components/HeroSoftware";
import OnePlace from "./components/OnePlace";

const page = () => {
  return (
    <main className="container max-w-7xl mt-40 mx-auto">
      <HeroSoftware />
      <OnePlace />
    </main>
  );
};

export default page;
