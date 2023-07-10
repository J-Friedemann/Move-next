import React from "react";
import Mail from "../public/icon-6.svg";
import Voice from "../public/icon-5.svg";
import Widget from "../public/icon-4.svg";
import Tags from "../public/icon-3.svg";
import Smile from "../public/icon-2.svg";
import Star from "../public/Icon_Star-2.svg";
import ArrowRight from "../public/icon-arrow-right.svg";
import Image from "next/image";
import Button from "./Components/utils/Button";

const page = () => {
  return (
    <section className="container max-w-7xl mx-auto ">
      <div className="text-center lg:max-w-4xl mx-auto md:max-w-2xl sm:max-w-lg max-w-[16rem] xs:max-w-xs mt-40 md:mt-60">
        <h1 className=" lg:text-7xl md:text-6xl sm:text-4xl font-bold text-support1  mt-32 text-3xl">
          A messenger that is ahead of its time
        </h1>
        <p className="md:text-xl text-support2 mt-6">
          Try the new Move messenger! It will definitely impress you with its
          amazing features that will make it easier for you to communicate
          between your friends.
        </p>
        <div className="grid grid-rows-2 sm:grid-cols-2 sm:grid-rows-1 sm:max-w-lg justify-items-center place-items-center mx-auto">
          <Button className="sm:my-9 my-3 ">Get Started</Button>
          <button className="text-xl text-emphasis1 bg-add1 font-medium px-8 py-4 rounded-lg sm:my-9 my-3">
            View more
          </button>
        </div>
      </div>
      <div className="hideen sm:grid sm:grid-cols-1 xl:grid-cols-[9.3rem_1fr_9.3rem] sm:h-[30rem] md:h-[40rem] justify-items-center content-center xl:justify-between sm:w-full mx-auto">
        <Image
          height={1222}
          width={508}
          className="hidden h-[38rem] object-cover object-left z-10 xl:block"
          src="/abstract-shapes-10.png"
          alt=""
        />
        <Image
          height={1228}
          width={2184}
          className="hidden h-[38rem] sm:object-contain sm:block sm:px-5 xl:px-0 shadow"
          src="/Messenger_Desktop.png"
          alt=""
        />

        <Image
          height={1224}
          width={580}
          className="hidden h-[38rem] object-cover object-right z-10 xl:block"
          src="/abstract-shapes-10-2.png"
          alt=""
        />
      </div>
      <div className="max-w-[16rem] xs:max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-lg mx-auto md:mt-46 mt-10 lg:mt-56">
        <p className="text-xl sm:text-2xl  text-support2 text-center">
          Companies that have already tried our messenger
        </p>
        <div className="grid grid-rows-5 lg:grid-cols-5 lg:grid-rows-1 sm:grid-cols-3  sm:grid-rows-2 mt-14 sm:mt-9 justify-items-center content-center ">
          <Image
            height={42}
            width={144}
            className="object-contain mb-5 lg:mb-0"
            src="/aven.png"
            alt=""
          />
          <Image
            height={42}
            width={184}
            className="object-contain mb-5 lg:mb-0"
            src="/goldline.png"
            alt=""
          />
          <Image
            height={40}
            width={153}
            className="object-contain mb-5 lg:mb-0"
            src="/kanba.png"
            alt=""
          />
          <Image
            height={42}
            width={118}
            className="object-contain mb-5 lg:mb-0"
            src="/kyan.png"
            alt=""
          />
          <Image
            height={47}
            width={158}
            className="object-contain mb-5 lg:mb-0"
            src="/spotify.png"
            alt=""
          />
        </div>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2  max-w-[16rem] xs:max-w-xs  lg:max-w-7xl md:max-w-2xl sm:max-w-lg xl:mt-56 sm:mt-40 xl:gap-16 mx-auto">
        <div className="row-start-2 lg:row-start-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2  xl:grid-rows-2 gap-8  justify-items-center mx-auto">
          <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
            <Image className="w-20 h-20" src={Mail} alt="" />
            <h2 className="text-2xl text-support1 font-bold">End-to-End</h2>
            <p className="font-medium text-lg text-support2">
              Our messenger uses only proven technologies. There fore, no one
              will read your messages.
            </p>
          </div>
          <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
            <Image className="w-20 h-20" src={Voice} alt="" />
            <h2 className="text-2xl text-support1 font-bold">Voice Message</h2>
            <p className="font-medium text-lg text-support2">
              When you don't have time to write a text, send your companion a
              voice message.
            </p>
          </div>
          <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
            <Image className="w-20 h-20" src={Widget} alt="" />
            <h2 className="text-2xl text-support1 font-bold">News Widget</h2>
            <p className="font-medium text-lg text-support2">
              All the news of the world is at hand, our messenger has a
              pre-installed news widget.
            </p>
          </div>
          <div className=" flex flex-col w-72 h-80 shadow hover:shadow-2xl gap-5 p-8">
            <Image className="w-20 h-20" src={Tags} alt="" />
            <h2 className="text-2xl text-support1 font-bold">Tags</h2>
            <p className="font-medium text-lg text-support2">
              Place messages in existing tags or create new ones. Using tags
              makes interaction easier.
            </p>
          </div>
        </div>
        <div className="grid grid-flow-row mx-auto lg:max-w-[28.75rem] mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Try the familiar functions in the new execution
          </h1>
          <p className="md:text-xl text-support2 font-medium ">
            The very functions that help you in everyday life are already built
            into our messenger and are not just built in but invented anew.
          </p>
          <Button>Get Started</Button>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-row-2 mt-28 xl:mt-72 gap-2 xl:grid-cols-2 max-w-[16rem] xs:max-w-xs  lg:max-w-7xl md:max-w-2xl sm:max-w-lg mx-auto">
        <div className="grid grid-flow-row auto-rows-max lg:max-w-3xl mx-auto  justify-items-start lg:content-center xl:pr-20  gap-6">
          <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Find out what Move Messenger is capable of
          </h1>
          <p className="md:text-xl text-support2 font-medium">
            Watch a short video that tells you about the useful features of our
            mobile app. Everything you need is always at hand with Move.
          </p>
          <Button>View More</Button>
        </div>
        <div className="relative mx-auto max-w-[16rem] xs:max-w-xs sm:max-w-xl lg:max-w-3xl">
          <Image src="/Group4.png" width={1528} height={1608} alt="" />
          <div className="absolute grid grid-cols-3 bg-support4 drop-shadow-xl rounded w-60 sm:w-80 lg:w-96 p-4 lg:p-7 bottom-0 sm:bottom-40 ">
            <Image
              className="h-10 w-10 sm:h-20 sm:w-20 row-span-2 "
              src={Smile}
              alt=""
            />
            <div className="flex flex-col col-span-2">
              <p className="text-sm sm:text-lg text-support2 font-medium">
                Notification
              </p>
              <h3 className="text-sm sm:text-xl text-support1 font-semibold">
                Try the messenger features!
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 grid-row-2 mt-28 xl:mt-72 gap-10 xl:grid-cols-2  max-w-[16rem] xs:max-w-xs lg:max-w-7xl md:max-w-2xl sm:max-w-lg mx-auto">
        <div className=" relative max-w-sm sm:max-w-xl lg:max-w-lg mx-auto">
          <Image src="/Group5.png" width={1510} height={1596} alt="" />
        </div>

        <div className="grid row-start-1 grid-flow-row auto-rows-max max-w-sm sm:max-w-md lg:max-w-3xl mx-auto  justify-items-start lg:content-center xl:pr-20  gap-6">
          <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Move will remind you when to complete a task
          </h1>
          <p className="md:text-xl text-support2 font-medium">
            You can use our messenger to set reminders for tasks that you want
            to complete on time. And you can choose the importance of tasks
            using tags.
          </p>
          <Button>View More</Button>
        </div>
      </div>
      <div className="grid grid-flow-row mt-28 gap-8 ">
        <div className="lg:max-w-4xl mx-auto md:max-w-2xl sm:max-w-lg max-w-[16rem] xs:max-w-xs ">
          <h1 className="text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
            Customers are loving our Move messenger
          </h1>
        </div>
        <div className=" grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto ">
          <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
            <Image
              width={80}
              height={80}
              className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
              src="/Image-8.png"
              alt=""
            />
            <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
              Alpamys Moldashev
            </h3>
            <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
              Graphic Designer
            </h4>
            <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
              With the Move messenger I can correspond with clients from all
              over the world and never forget about important meetings.
            </p>
            <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
          </div>
          <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
            <Image
              width={80}
              height={80}
              className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
              src="/Image-9.png"
              alt=""
            />
            <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
              Bogdan Krivenchenko
            </h3>
            <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
              UI/UX Designer
            </h4>
            <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
              Move messenger helps me a lot in performing normal tasks with
              reminders. It looks great and is easy to use!
            </p>
            <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
          </div>
          <div className="grid grid-flow-row sm:grid-cols-3 max-w-[16rem] xs:max-w-xs sm:max-w-[24.5rem] text-left sm:h-96 p-9 mx-auto shadow hover:shadow-xl gap-2 sm:gap-0">
            <Image
              width={80}
              height={80}
              className="sm:row-span-2 w-20 h-20 rounded-full place-self-center"
              src="/Image-7.png"
              alt=""
            />
            <h3 className="sm:col-span-2 sm:text-xl font-semibold text-support1 self-end">
              Sergey Filatov
            </h3>
            <h4 className=" sm:col-start-2 sm:col-span-2 text-sm sm:text-lg font-medium text-support2">
              CEO at Mindset
            </h4>
            <p className="sm:col-span-3 text-support2 sm:text-xl font-medium sm:leading-9 sm:pl-4">
              Move messenger is just a bomb! On it I have the opportunity to
              lead my own design community and share up to date information.
            </p>
            <Image className="sm:col-span-3 sm:pl-2" src={Star} alt="" />
          </div>
        </div>
        <div className="mx-auto">
          <button className="text-xl text-emphasis1 font-semibold flex gap-2 items-center p-6 border border-support4 hover:border-emphasis1">
            See all testmonials{" "}
            <Image className="w-4 h-4" src={ArrowRight} alt="" />
          </button>
        </div>
      </div>
      <div className="grid grid-flow-col justify-around content-center  items-center h-24 lg:h-36 xl:h-[13.375rem] bg-emphasis1 bg-[url('/Components.png')] bg-right bg-[length:50%_200%] bg-no-repeat sm:mx-4 gap-4 p-4 mx-auto rounded drop-shadow-md mt-10 sm:mt-20 lg:mt-32 xl:mt-40">
        <h2 className="xl:text-[2.5rem] sm:text-lg md:text-xl  lg:text-3xl text-support4 xl:leading-[3rem] min-w-[12.5rem] max-w-[32.3rem] font-bold text-left">
          Download our app to your smartphone!
        </h2>
        <button className=" text-sm lg:text-lg xl:text-xl bg-emphasis1 text-support4 font-semibold px-6 py-2 sm:px-8 sm:py-3 xl:px-12 xl:py-5 rounded">
          Download App
        </button>
      </div>
    </section>
  );
};

export default page;
