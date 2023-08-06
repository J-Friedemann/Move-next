import Image from "next/image";
import React from "react";
import Title from "../utils/text/Title";
import { Testimony } from "../utils/cards/Testimony";

const CustomersTestimony = () => {
  return (
    <section className="grid grid-flow-row mt-28 gap-8 ">
      <div className="lg:max-w-4xl mx-auto md:max-w-2xl sm:max-w-lg max-w-[16rem] xs:max-w-xs ">
        <Title className="text-center">
          Customers are loving our Move messenger
        </Title>
      </div>
      <div className=" grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto ">
        <Testimony.Root>
          <Testimony.Image path="/Utils/Images/Alpamys.png" />
          <Testimony.Name>Alpamys Moldashev</Testimony.Name>
          <Testimony.Occupation>Graphic Designer</Testimony.Occupation>
          <Testimony.Message>
            With the Move messenger I can correspond with clients from all over
            the world and never forget about important meetings.
          </Testimony.Message>
          <Testimony.Star Star="Utils/SVG/Icon_Star-2.svg" />
        </Testimony.Root>

        <Testimony.Root>
          <Testimony.Image path="/Utils/Images/Bogdan.png" />
          <Testimony.Name>Bogdan Krivenchenko</Testimony.Name>
          <Testimony.Occupation>UI/UX Designer</Testimony.Occupation>
          <Testimony.Message>
            Move messenger helps me a lot in performing normal tasks with
            reminders. It looks great and is easy to use!
          </Testimony.Message>
          <Testimony.Star Star="Utils/SVG/Icon_Star-2.svg" />
        </Testimony.Root>

        <Testimony.Root>
          <Testimony.Image path="/Utils/Images/Sergey.png" />
          <Testimony.Name>Sergey Filatov</Testimony.Name>
          <Testimony.Occupation>CEO at Mindset</Testimony.Occupation>
          <Testimony.Message>
            Move messenger is just a bomb! On it I have the opportunity to lead
            my own design community and share up to date information.
          </Testimony.Message>
          <Testimony.Star Star="Utils/SVG/Icon_Star-2.svg" />
        </Testimony.Root>
      </div>
      <div className="mx-auto">
        <button className="text-xl text-emphasis1 font-semibold flex gap-2 items-center p-6 border border-support4 hover:border-emphasis1">
          See all testmonials
          <Image
            className="w-4 h-4"
            src="/Utils/SVG/icon-arrow-right.svg"
            width={20}
            height={20}
            alt=""
          />
        </button>
      </div>
    </section>
  );
};

export default CustomersTestimony;
