import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/arrow.png";

export default function OtherOfficials() {
  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="w-12/12 md:w-12/12 relative flex items-center justify-center m-auto">
            <div className="relative img_container w-[100%] h-[480px] md:h-[550px]">
              <Image src={placeholderImg} layout="responsive" alt="" />
            </div>

            <p className="bg-[#ffde59]  font-bold-2 rounded-[50%] absolute p-[60px] leading-[44px] text-[36px] md:text-[48px] md:leading-[58px] text-[#023a51]">
              other elected officials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
