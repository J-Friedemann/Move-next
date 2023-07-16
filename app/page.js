import React from "react";
import IntroductionMessenger from "./Components/Sections/IntroductionMessenger";
import CompaniesClients from "./Components/Sections/CompaniesClients";
import FamiliarFunctions from "./Components/Sections/FamiliarFunctions";
import MessengerCapable from "./Components/Sections/MessengerCapable";
import RemindTask from "./Components/Sections/RemindTask";
import CustomersTestimony from "./Components/Sections/CustomersTestimony";
import BannerDownload from "./Components/Sections/BannerDownload";

const page = () => {
  return (
    <main className="container max-w-7xl mx-auto ">
      <IntroductionMessenger />
      <CompaniesClients />
      <FamiliarFunctions />
      <MessengerCapable />
      <RemindTask />
      <CustomersTestimony />
      <BannerDownload />
    </main>
  );
};

export default page;
