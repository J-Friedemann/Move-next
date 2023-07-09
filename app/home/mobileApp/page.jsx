"use client";

import Button from "@/app/Components/utils/Button";
import Smile from "../../../public/smile.svg";
import Playlist from "../../../public/playlist-2.svg";
import Iphone from "../../../public/Iphone.svg";
import Music from "../../../public/Music.svg";
import ControlRight from "../../../public/Control_Right.svg";
import ControlLeft from "../../../public/Control_Left.svg";
import Image from "next/image";
import React from "react";
import { Switch } from "@headlessui/react";

const page = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <section className="mt-40 md:mt-60 container max-w-7xl mx-auto ">
      <div className="grid grid-flow-row lg:grid-cols-2  mx-auto">
        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md   mx-auto mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
            Introducing a new music app Move Music!
          </h1>
          <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium ">
            Try the Movie Music app we are sure that it will expand the
            boundaries of your musical taste. You can also try the extended
            version for free for 14 days.
          </p>
          <Button>Start 14 Days Free Trial</Button>
          <p className="md:text-lg text-support2 font-medium ">
            No credit card enquired
          </p>
        </div>
        <Image
          className=" max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10 "
          src="/Group3.png"
          width={634}
          height={974}
          alt=""
        />
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 mt-24 sm:mt-52 mx-auto justify-items-center lg:justify-around gap-12">
        <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8  max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
          <Image src="/icon-3-music.svg" width={80} height={80} alt="" />
          <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Import Music Library
          </h2>
          <p className="text-base xs:text-lg text-support2 font-medium">
            You can easily import your music library into our app without having
            to search for music again.
          </p>
        </div>
        <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8  max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
          <Image src="/icon-2-music.svg" width={80} height={80} alt="" />
          <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Music Without Internet
          </h2>
          <p className="text-base xs:text-lg text-support2 font-medium">
            Listen to music even when you don't have Internet access by
            downloading it to your smartphone.
          </p>
        </div>
        <div className="grid grid-flow-row justify-items-start gap-4 xs:gap-8 max-h-96 sm:max-h-80 p-4 xs:p-8 hover:shadow-2xl rounded-md max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem]">
          <Image src="/icon-music.svg" width={80} height={80} alt="" />
          <h2 className="text-2xl xs:text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Music Without Limits
          </h2>
          <p className="text-base xs:text-lg text-support2 font-medium">
            There are no restrictions on listening to music in our app, enjoy
            music everywhere.
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row justify-items-center lg:grid-flow-col lg:items-center lg:mt-40 mx-auto">
        <Image
          className="row-start-2 lg:row-start-1 max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10 "
          src="/Group1.png"
          width={604}
          height={974}
          alt=""
        />

        <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
            Be in the trend of new music
          </h1>
          <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium ">
            Every week, we create new playlists with current music that most
            people listen to. Join them and be in the trend of new music.
          </p>
          <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
            <Image
              className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
              src={Smile}
              width={74}
              height={74}
              alt=""
            />

            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
              We adapt to you
            </h2>
            <p className=" text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
              We analyze your media library and create playlists that match your
              mood and music preference.
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
            <Image
              className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
              src={Playlist}
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
              Your music your rules
            </h2>
            <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
              You can import your playlist from other music platforms and not
              waste time adding music manually.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
        <div className="grid grid-flow-row auto-rows-max max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl">
            Listen and download music
          </h1>
          <p className="text-base xs:text-lg md:text-xl text-support2 font-medium ">
            In our app, you can download music both in the app itself and on
            your smartphone. Try this feature today
          </p>

          <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
            <Image
              className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
              src={Music}
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2 lg:col-span-3">
              Downloading in the app
            </h2>
            <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2 lg:col-span-3">
              Owners of the regular version of Move Music can only download
              music in the app and listen to it without the Internet.
            </p>
          </div>
          <div className="grid grid-cols-3 lg:grid-cols-4 items-center xs:items-start justify-items-center xs:justify-items-start gap-y-4 mt-4 xs:gap-x-8">
            <Image
              className="xs:justify-self-end xs:row-span-2 w-14 h-14 xs:w-[4.625rem] xs:h-[4.625rem]"
              src={Iphone}
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2  lg:col-span-3">
              Downloading to your smartphone
            </h2>
            <p className="text-base xs:text-lg md:text-xl text-support2 font-medium col-span-3 xs:col-span-2  lg:col-span-3">
              Users of the Move+ subscription can download music for free to
              their smartphone to listen to it without the Internet.
            </p>
          </div>
        </div>
        <Image
          className="max-w-[16rem] xs:max-w-xs sm:max-w-md mx-auto mt-10"
          src="/Group2.png"
          width={633}
          height={974}
          alt=""
        />
      </div>
      <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto">
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl text-2xl text-center">
          Customers are loving our Move Music
        </h1>
        <p className="text-base xs:text-lg md:text-xl text-support2 font-medium text-center">
          Read the reviews that we regularly receive from users of our music
          app. We are proud to have created a product that gives a vivid
          impression.
        </p>
        <div className="min-w-72 mx-auto grid grid-cols-3 lg:grid-cols-[18.5rem_repeat(2,_minmax(0,_1fr))] justify-items-start relative shadow-2xl p-6 lg:w-[51rem] lg:h-[22.6rem] lg:p-1.375rem lg:gap-x-5">
          <button className="absolute z-10 -left-6 w-10 h-10 lg:w-20 lg:h-20 lg:-left-10 self-center drop-shadow-xl">
            <Image src={ControlLeft} width={80} height={80} alt="" />
          </button>
          <Image
            className="w-20 h-20 col-start-2 xs:col-start-1 rounded xs:rounded-full lg:rounded xs:row-span-2 lg:row-span-3 lg:w-[18.5rem] lg:h-[19.9rem] object-cover object-top"
            src="/Image.png"
            width={445}
            height={478}
            alt=""
          />
          <h2 className="row-start-3 xs:row-start-1 col-span-3  xs:col-span-2 xs:col-start-2 self-end lg:text-2xl font-semibold text-support1">
            Bogdan Krivenchenko
          </h2>
          <h3 className="row-start-4 xs:row-start-2 col-span-3 xs:col-span-2 xs:col-start-2 font-medium lg:text-lg text-support2">
            UI/UX Designer
          </h3>
          <p className="col-span-3 my-4 font-medium text-support2 lg:text-xl lg:leading-[2.18rem] lg:col-span-2 lg:max-w-xs">
            Move Music app that changed my opinion about music! I would never
            have thought that you can import your music from another app!
          </p>
          <button className="absolute z-10 -right-6 w-10 h-10  lg:w-20 lg:h-20 lg:-right-10 self-center drop-shadow-xl">
            <Image src={ControlRight} width={80} height={80} alt="" />
          </button>
        </div>
      </div>
      <div className="grid grid-flow-row gap-8 text-center mt-10 max-w-[16rem] xs:max-w-xs sm:max-w-md lg:grid-flow-col lg:text-left lg:gap-20 lg:max-w-6xl mx-auto lg:mt-24">
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
      </div>
      <div className="grid grid-flow-row mx-auto max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 lg:mt-52 gap-6 md:gap-8 lg:content-center ">
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
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col lg:max-w-6xl mx-auto mt-6 lg:mt-28">
        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
          <h2 className="text-2xl xs:text-3xl font-bold text-emphasis3">
            Move
          </h2>
          <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">
            Free
          </h1>
          <p className="text-lg xs:text-xl font-medium text-support2">
            Per Users
          </p>

          <div className="mt-4 xs:mt-7 grid grid-flow-row gap-4">
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No ads in the app
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No download restrictions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Customization of profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Stickers as a gift
              </p>
            </div>
          </div>
          <Button>Get Started</Button>
        </div>

        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
          <h2 className="text-2xl xs:text-3xl font-bold text-emphasis4">
            Move+
          </h2>
          <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">
            $9.99
          </h1>
          <p className="text-lg xs:text-xl font-medium text-support2">
            Per User / Per Year
          </p>
          <div className="mt-7 grid grid-flow-row gap-4">
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No ads in the app
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No download restrictions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Customization of profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Stickers as a gift
              </p>
            </div>
          </div>
          <Button>Get Started</Button>
        </div>
        <div className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-96 gap-5 p-9">
          <h2 className="text-2xl xs:text-3xl  font-bold text-emphasis2">
            Family
          </h2>
          <h1 className="text-5xl xs:text-6xl font-bold text-support1 ">
            $12.99
          </h1>
          <p className="text-lg xs:text-xl font-medium text-support2">
            Per Users / Per Year
          </p>

          <div className="mt-7 grid grid-flow-row gap-4">
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No ads in the app
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                No download restrictions
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Customization of profile
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                className="w-6 h-6 xs:w-9 xs:h-9"
                src="/Checkmark-5.svg"
                width={36}
                height={36}
                alt=""
              />
              <p className="text-lg xs:text-xl font-medium text-support2">
                Stickers as a gift
              </p>
            </div>
          </div>
          <Button>Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default page;
