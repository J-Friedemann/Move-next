import React from "react";
import PrimaryButton from "../utils/PrimaryButton";
import Image from "next/image";

const RemindTask = () => {
  return (
    <section className="grid grid-cols-1 grid-row-2 mt-28 xl:mt-72 gap-10 xl:grid-cols-2  max-w-[16rem] xs:max-w-xs lg:max-w-7xl md:max-w-2xl sm:max-w-lg mx-auto">
      <div className=" relative max-w-sm sm:max-w-xl lg:max-w-lg mx-auto">
        <Image
          src="/Utils/Images/Group5.png"
          width={1510}
          height={1596}
          alt=""
        />
      </div>

      <div className="grid row-start-1 grid-flow-row auto-rows-max max-w-sm sm:max-w-md lg:max-w-3xl mx-auto  justify-items-start lg:content-center xl:pr-20  gap-6">
        <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
          Move will remind you when to complete a task
        </h1>
        <p className="md:text-xl text-support2 font-medium">
          You can use our messenger to set reminders for tasks that you want to
          complete on time. And you can choose the impo rtance of tasks using
          tags.
        </p>
        <PrimaryButton>View More</PrimaryButton>
      </div>
    </section>
  );
};

export default RemindTask;
