import React from "react";

const NumbersUsersSection = () => {
  return (
    <section className="grid grid-flow-row gap-8 text-center mt-10 max-w-[16rem] xs:max-w-xs sm:max-w-md lg:grid-flow-col lg:text-left lg:gap-20 lg:max-w-6xl mx-auto lg:mt-24">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-emphasis2">900K+</h1>
        <h2 className="text-2xl font-semibold text-support1">Active Users</h2>
        <p className="text-lg text-support2 font-medium">
          We are proud to provide our music app to so many people.
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-emphasis3">2M+</h1>
        <h2 className="text-2xl font-semibold text-support1">Downloads</h2>
        <p className="text-lg text-support2 font-medium">
          Our app has been downloaded by more than 2 million people.{" "}
        </p>
      </div>
      <div className="space-y-4">
        <h1 className="text-6xl font-bold text-emphasis4">99.99%</h1>
        <h2 className="text-2xl font-semibold text-support1">
          Positive feedback
        </h2>
        <p className="text-lg text-support2 font-medium">
          We get mostly positive ratings for the quality of our app.{" "}
        </p>
      </div>
    </section>
  );
};

export default NumbersUsersSection;
