import Button from "@/app/Components/utils/Button";
import Smile from "../../../public/smile.svg";
import ElipseSmile from "../../../public/Ellipse-20.svg";
import Playlist from "../../../public/playlist-2.svg";
import ElipsePlaylist from "../../../public/Ellipse-19.svg";
import IphoneMockup2 from "../../../public/Group1.png";
import IphoneMockup from "../../../public/Group2.png";
import Iphone from "../../../public/Iphone.svg";
import Music from "../../../public/Music.svg";
import Bogdan from "../../../public/Image.png";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section className="mt-40 md:mt-60 container max-w-7xl mx-auto ">
      <div className="grid grid-flow-row lg:grid-cols-2">
        <div className="grid grid-flow-row auto-rows-max max-w-sm sm:max-w-md  mx-auto mt-28 sm:mt-2 justify-items-start lg:content-center gap-6 md:gap-8">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Introducing a new music app Move Music!
          </h1>
          <p className="md:text-xl text-support2 font-medium ">
            Try the Movie Music app we are sure that it will expand the
            boundaries of your musical taste. You can also try the extended
            version for free for 14 days.
          </p>
          <Button>Start 14 Days Free Trial</Button>
          <p className="md:text-lg text-support2 font-medium ">
            No credit card enquired
          </p>
        </div>
        <div className="grid relative justify-items-center mt-10">
          <Image src="/Components-10.png" width={605} height={887} alt="" />
          <Image
            className="absolute ml-16"
            src="/iPhone_Mockup-3.png"
            width={544}
            height={974}
            alt=""
          />
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 mt-52 mx-auto justify-items-center lg:justify-around">
        <div className="grid grid-flow-row justify-items-start gap-8 w-[24.5rem] h-80 p-8 hover:shadow-2xl rounded-md">
          <Image src="/icon-3-music.svg" width={80} height={80} alt="" />
          <h2 className="text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Import Music Library
          </h2>
          <p className="text-lg text-support2 font-medium">
            You can easily import your music library into our app without having
            to search for music again.
          </p>
        </div>
        <div className="grid grid-flow-row justify-items-start gap-8 w-[24.5rem] h-80 p-8 hover:shadow-2xl rounded-md">
          <Image src="/icon-2-music.svg" width={80} height={80} alt="" />
          <h2 className="text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Music Without Internet
          </h2>
          <p className="text-lg text-support2 font-medium">
            Listen to music even when you don't have Internet access by
            downloading it to your smartphone.
          </p>
        </div>
        <div className="grid grid-flow-row justify-items-start gap-8 w-[24.5rem] h-80 p-8 hover:shadow-2xl rounded-md">
          <Image src="/icon-music.svg" width={80} height={80} alt="" />
          <h2 className="text-[1.75rem] font-bold leading-[2.125rem] text-support1">
            Music Without Limits
          </h2>
          <p className="text-lg text-support2 font-medium">
            There are no restrictions on listening to music in our app, enjoy
            music everywhere.
          </p>
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
        <div className="row-start-2 lg:row-start-1 mt-10 max-w-sm sm:max-w-md  mx-auto">
          <Image src={IphoneMockup2} width={604} height={974} alt="" />
        </div>
        <div className="grid grid-flow-row auto-rows-max max-w-sm sm:max-w-md lg:max-w-lg mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8 ">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Be in the trend of new music
          </h1>
          <p className="md:text-xl text-support2 font-medium ">
            Every week, we create new playlists with current music that most
            people listen to. Join them and be in the trend of new music.
          </p>
          <div className="grid grid-cols-3 justify-items-start gap-y-4 mt-4">
            <div className="relative row-span-2">
              <Image
                className="relative"
                src={ElipseSmile}
                height={74}
                width={74}
                alt=""
              ></Image>
              <Image
                className="absolute top-[1.125rem] left-[1.125rem] "
                src={Smile}
                width={39}
                height={39}
                alt=""
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2">
              We adapt to you
            </h2>
            <p className="md:text-lg font-medium text-support2 col-span-2">
              We analyze your media library and create playlists that match your
              mood and music preference.
            </p>
          </div>
          <div className="grid grid-cols-3 justify-items-start gap-y-4">
            <div className="relative row-span-2">
              <Image src={ElipsePlaylist} height={74} width={74} alt=""></Image>
              <Image
                className="absolute top-[1.125rem] left-[1.125rem] "
                src={Playlist}
                width={39}
                height={39}
                alt=""
              />
            </div>
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2">
              Your music your rules
            </h2>
            <p className="md:text-lg font-medium text-support2 col-span-2">
              You can import your playlist from other music platforms and not
              waste time adding music manually.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col lg:items-center lg:mt-40">
        <div className="grid grid-flow-row auto-rows-max max-w-sm sm:max-w-md lg:max-w-lg  mx-auto mt-28 justify-items-start lg:content-center gap-6 md:gap-8 ">
          <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl">
            Listen and download music
          </h1>
          <p className="md:text-xl text-support2 font-medium ">
            In our app, you can download music both in the app itself and on
            your smartphone. Try this feature today
          </p>

          <div className="grid grid-cols-3 justify-items-start gap-y-4  mt-4">
            <Image
              className="row-span-2"
              src={Music}
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2">
              Downloading in the app
            </h2>
            <p className="md:text-lg font-medium text-support2 col-span-2">
              Owners of the regular version of Move Music can only download
              music in the app and listen to it without the Internet.
            </p>
          </div>
          <div className="grid grid-cols-3 justify-items-start gap-y-4">
            <Image
              className="row-span-2"
              src={Iphone}
              width={74}
              height={74}
              alt=""
            />
            <h2 className="text-xl md:text-2xl font-semibold text-support1 col-span-2">
              Downloading to your smartphone
            </h2>
            <p className="md:text-lg font-medium text-support2 col-span-2">
              Users of the Move+ subscription can download music for free to
              their smartphone to listen to it without the Internet.
            </p>
          </div>
        </div>
        <div className="max-w-sm sm:max-w-md  mx-auto mt-10">
          <Image src={IphoneMockup} width={633} height={974} alt="" />
        </div>
      </div>
      <div>
        <h1 className=" text-support1 font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center">
          Customers are loving our Move Music
        </h1>
        <p className="md:text-xl text-support2 font-medium text-center">
          Read the reviews that we regularly receive from users of our music
          app. We are proud to have created a product that gives a vivid
          impression.
        </p>
        <div className="w-96 mx-auto grid grid-cols-3">
          <Image
            className="w-20  rounded-full row-span-3"
            src={Bogdan}
            width={296}
            height={319}
            alt=""
          />
          <h2 className="col-span-2">Bogdan Krivenchenko</h2>
          <h3 className="col-span-2">UI/UX Designer</h3>
          <p className="col-span-2">
            Move Music app that changed my opinion about music! I would never
            have thought that you can import your music from another app!
          </p>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default page;
