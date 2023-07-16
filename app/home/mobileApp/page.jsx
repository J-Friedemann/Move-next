"use client";
import React from "react";

import IntroductionMoveMusic from "./Components/IntroductionMoveMusic";
import CardsMobileSection from "./Components/CardsMobileSection";
import TrendMusicSection from "./Components/TrendMusicSection";
import DownloadMusicSection from "./Components/DownloadMusicSection";
import CustomersLovingSection from "./Components/CustomersLovingSection";
import NumbersUsersSection from "./Components/NumbersUsersSection";
import SubscriptionSection from "./Components/SubscriptionSection";
import SubscriptionCards from "./Components/SubscriptionCards";

const page = () => {
  return (
    <main className="mt-40 md:mt-60 container max-w-7xl mx-auto ">
      <IntroductionMoveMusic />
      <CardsMobileSection />
      <TrendMusicSection />
      <DownloadMusicSection />
      <CustomersLovingSection />
      <NumbersUsersSection />
      <SubscriptionSection />
      <SubscriptionCards />
    </main>
  );
};

export default page;
