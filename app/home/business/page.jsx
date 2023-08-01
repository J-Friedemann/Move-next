import React from "react";
import TransactionSection from "./Components/TransactionSection";
import QuickPaymentsSection from "./Components/QuickPaymentsSection";
import CardsSection from "./Components/CardsSection";
import TransferSection from "./Components/TransferSection";

const page = () => {
  return (
    <main className="container max-w-7xl mt-40 mx-auto">
      <QuickPaymentsSection />
      <CardsSection />
      <TransactionSection />
      <TransferSection />
    </main>
  );
};

export default page;
