import React from "react";
import Image from "next/image";
import arrowImage from "../assets/images/arrow.png";

export default function Arrow() {
  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="w-12/12 md:w-12/12 relative flex items-center justify-center m-auto">
            <Image src={arrowImage} alt="" className="w-[100%] h-[200px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
