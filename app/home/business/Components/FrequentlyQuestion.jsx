"use client";
import BodyText from "@/app/Components/utils/text/BodyText";
import Title from "@/app/Components/utils/text/Title";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const FrequentlyQuestion = () => {
  return (
    <section className="grid grid-flow-row max-w-[16rem] xs:max-w-xs sm:max-w-md lg:max-w-4xl mt-28 gap-6 md:gap-8 content-center mx-auto text-center">
      <Title className="text-center">Frequently asked question</Title>
      <BodyText className="text-center">
        Jobs that are available from us and looking for their own people! Browse
        our vacancies and find the one that is right for you!
      </BodyText>
      <div className="grid grid-cols-1 gap-4 lg:gap-8 mt-10">
        <div className="mx-auto w-full max-w-md lg:max-w-xl rounded-2xl bg-support3/20 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-emphasis1 ">
                  <BodyText className="font-semibold text-support1">
                    Can I use this template for commercial purposes?
                  </BodyText>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nesciunt aut sed quo omnis, corrupti itaque officiis adipisci
                  deleniti ratione facere nemo inventore? Vero cum expedita
                  rerum sequi unde nesciunt?
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-md  lg:max-w-xl rounded-2xl bg-support3/20 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-emphasis1 ">
                  <BodyText className="font-semibold text-support1">
                    Can support help me work with the template?
                  </BodyText>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nesciunt aut sed quo omnis, corrupti itaque officiis adipisci
                  deleniti ratione facere nemo inventore? Vero cum expedita
                  rerum sequi unde nesciunt?
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-md  lg:max-w-xl rounded-2xl bg-support3/20 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-emphasis1 ">
                  <BodyText className="font-semibold text-support1">
                    Will there be updates related to the store?
                  </BodyText>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nesciunt aut sed quo omnis, corrupti itaque officiis adipisci
                  deleniti ratione facere nemo inventore? Vero cum expedita
                  rerum sequi unde nesciunt?
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mx-auto w-full max-w-md  lg:max-w-xl rounded-2xl bg-support3/20 p-2">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg  px-4 py-2 text-left text-lg font-medium text-emphasis1 ">
                  <BodyText className="font-semibold text-support1">
                    In which applications can I edit your template?
                  </BodyText>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-10 w-10 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  nesciunt aut sed quo omnis, corrupti itaque officiis adipisci
                  deleniti ratione facere nemo inventore? Vero cum expedita
                  rerum sequi unde nesciunt?
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyQuestion;
