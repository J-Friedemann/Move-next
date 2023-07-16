import React from "react";
import TransactionSection from "./Components/TransactionSection";
import QuickPaymentsSection from "./Components/QuickPaymentsSection";
import CardsSection from "./Components/CardsSection";

const page = () => {
  return (
    <main className="container max-w-7xl mt-40 mx-auto">
      <QuickPaymentsSection />
      <CardsSection />
      <TransactionSection />
    </main>
  );
};

export default page;
