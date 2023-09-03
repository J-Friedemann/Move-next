import React from "react";
import { Switch } from "@headlessui/react";

const SubscriptionSection = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <section className="grid grid-flow-row mx-auto max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 lg:mt-52 gap-6 md:gap-8 lg:content-center ">
      <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-center ">
        Expand your options with a subscription
      </h1>
      <p className="text-base xs:text-lg md:text-xl text-support2 font-medium lg:max-w-2xl text-center mx-auto">
        Choose the plan that suits you best! More features will be available
        thanks to individual plans.
      </p>
      <div className="grid grid-flow-col w-60 justify-items-center mx-auto gap-2 lg:w-80">
        <span className="md:text-xl text-support2 font-medium ">
          Bill Monthly
        </span>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-emphasis1" : "bg-support3"
          } relative inline-flex h-6 w-11 items-center rounded-full justify-self-center`}
        >
          <span
            className={`${
              enabled ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-support4 transition`}
          />
        </Switch>
        <span className="md:text-xl text-support2 font-medium ">
          Bill Anually
        </span>
      </div>
    </section>
  );
};

export default SubscriptionSection;
