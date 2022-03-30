import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";

export default function WhatElseWeOffer() {
  return (
    <section className="mx-auto py-4 pt-16 bg-[#efeded] ">
      <div className="container w-10/12 mx-auto max-w-screen-xl ">
        <div className="flex flex-wrap mx-4 mb-10 m-auto ">
          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg bg-[#fff] ">
            <h4 className="font-bold text-[36px] leading-[47px] text-[#023a51] my-8 ml-4">
              No Upcomming Election Messages
            </h4>
          </div>
        </div>
      </div>
      <div className="container w-10/12 mx-auto max-w-screen-xl ">
        <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between ">
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6 ">
              What else can we offer based on the options above ?
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6  ">
              Elected Directory
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6  mx-6 ">
              Politics Dictionary
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6  mx-6 ">
              Politics Dictionary
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6  mx-6 ">
              Politics Dictionary
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] pt-4 mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-8 text-[#023a51] mx-6  mx-6 ">
              Politics Dictionary
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
