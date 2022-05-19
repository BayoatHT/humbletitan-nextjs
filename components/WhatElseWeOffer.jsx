import React from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import Image1 from "../assets/images/us-president-barack-obama-meets-with-local-elected-officials-and-faith-E7D615.jpg";

export default function WhatElseWeOffer({ stateName }) {
  return (
    <section className="mx-auto py-4 pt-16 bg-[#efeded] ">
      <div className="container w-10/12 mx-auto max-w-screen-xl ">
        <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between ">
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
            <div className="img_container">
              <Image
                src={placeholderImg}
                alt=""
                className="w-[90%] object-cover rounded-lg m-auto"
              />
              <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6 ">
                What else can we offer based on the options above ?
              </h4>
            </div>
          </div>

          <Link href={stateName ? `/politics/elected-officials/${stateName}` : '#'} passHref>
            <a className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
              <div className="img_container">
                <Image
                  src={Image1}
                  alt=""
                  className="w-[90%] object-cover rounded-lg m-auto"
                />
                <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6  ">
                  Elected Directory of {stateName}
                </h4>
              </div>
            </a>
          </Link>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
            <div className="img_container">
              <Image
                src={placeholderImg}
                alt=""
                className="w-[90%] object-cover rounded-lg m-auto"
              />
              <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6  mx-6 ">
                Politics Dictionary
              </h4>
            </div>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6  mx-6 ">
              Learn about our mission
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6  mx-6 ">
              Donate
            </h4>
          </div>
          <div className="container w-12/12 sm:w-[45%] lg:w-[31%] mx-auto  max-w-screen-xl rounded-lg bg-[#fff] mt-8">
            <Image
              src={placeholderImg}
              alt=""
              className="w-[90%] object-cover rounded-lg m-auto"
            />
            <h4 className="font-bold text-[20px] leading-[30px] my-4 text-[#023a51] mx-6  mx-6 ">
              Humble Trader
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
