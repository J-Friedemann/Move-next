import React from "react";
import HeroSoftware from "./components/HeroSoftware";
import OnePlace from "./components/OnePlace";
import UniversalAccess from "./components/UniversalAccess";
import GroundUp from "./components/GroundUp";
import GoMove from "./components/GoMove";

const page = () => {
  return (
    <main className="container max-w-7xl mt-40 mx-auto">
      <HeroSoftware />
      <OnePlace />
      <UniversalAccess />
      <GroundUp />
      <GoMove />
    </main>
  );
};

export default page;
