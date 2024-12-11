import Image from "next/image";
import React from "react";

const DressStyle = () => {
  return (
    <div className="container flex flex-col items-center justify-center p-6 mx-auto mb-10 space-y-16">
      <h1 className="mb-4 text-4xl text-center text-black font-bold-1">
        BROWSER BY DRESSING STYLE
      </h1>
      <div className="flex flex-col items-center justify-center p-4 bg-white rounded">
        <div className="grid items-center justify-center gap-2 space-y-2 md:grid-cols-2">
          <Image
            src={"/frame01.png"}
            alt='"'
            width={500}
            height={500}
            className="object-contain"
          />
          <Image
            src={"/frame02.png"}
            alt='"'
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
        <div className="grid items-center justify-center gap-2 mt-4 space-y-2 md:grid-cols-2">
          <Image
            src={"/frame03.png"}
            alt='"'
            width={500}
            height={500}
            className="object-contain"
          />
          <Image
            src={"/frame04.png"}
            alt='"'
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
export default DressStyle;
