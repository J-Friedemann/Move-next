import Image from "next/image";
import React from "react";
import { Features } from "./cards/features/Index";

const CardsMobileSection = () => {
  return (
    <section className="grid grid-flow-row lg:grid-cols-2 xl:grid-cols-3 mt-24 sm:mt-52 mx-auto justify-items-center lg:justify-around gap-12">
      <Features.Root>
        <Features.Image path="/Home/MobileApp/SVG/icon-3-music.svg" />
        <Features.Name>Import Music Library</Features.Name>
        <Features.Description>
          You can easily import your music library into our app without having
          to search for music again.
        </Features.Description>
      </Features.Root>

      <Features.Root>
        <Features.Image path="/Home/MobileApp/SVG/icon-2-music.svg" />
        <Features.Name>Music Without Internet</Features.Name>
        <Features.Description>
          Listen to music even when you don't have Internet access by
          downloading it to your smartphone.
        </Features.Description>
      </Features.Root>

      <Features.Root>
        <Features.Image path="/Home/MobileApp/SVG/icon-music.svg" />
        <Features.Name>Music Without Limits</Features.Name>
        <Features.Description>
          There are no restrictions on listening to music in our app, enjoy
          music everywhere.
        </Features.Description>
      </Features.Root>
    </section>
  );
};

export default CardsMobileSection;
