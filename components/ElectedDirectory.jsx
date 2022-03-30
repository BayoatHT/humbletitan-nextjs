import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";

export default function ElectedDirectory() {
  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex   flex-wrap mx-4 mb-10 m-auto justify-between gap-y-[25px]">
          <div className="w-12/12 md:w-[48%]">
            <h2 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  my-4 text-[#023a51]">
              Elected Directory
            </h2>
            <Image
              src={placeholderImg}
              alt=""
              layout="responsive"
              className="w-[100%] rounded-[20px]"
            />
            <p className="w-[100%] md:w-[100%] mt-6 font-regular text-[22px] leading-[34px] text-[#59667d]">
              Discover elected representatives in each state and county of the
              United states
            </p>
          </div>
          <div className="w-12/12 md:w-[48%]">
            <h2 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] my-4 text-[#023a51]">
              Dictionary of Politics
            </h2>
            <Image
              src={placeholderImg}
              layout="responsive"
              alt=""
              className="w-[100%] rounded-[20px]"
            />
            <p className="w-[100%] md:w-[100%] mt-6 font-regular  text-[22px] leading-[34px] text-[#59667d]">
              While you decide who best represents you, we&apos;ve put together
              a platform that seeks to clear up the noise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
