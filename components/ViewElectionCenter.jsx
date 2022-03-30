import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import { useRouter } from "next/dist/client/router";

export default function ViewElectionCenter() {
  const router = useRouter();
  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl ">
        <div className="flex flex-wrap mx-4 mb-10 m-auto ">
          <div className="container w-[100%] lg:w-8/12 mx-auto bg-[#023a51] shadow-1 max-w-screen-xl rounded-lg relative flex flex-col items-center justify-center">
            <i className="fa-solid fa-xmark absolute right-[3%] top-[1%] md:top-[5%] text-[#d7d7d7] text-[30px]"></i>
            <Image
              src={placeholderImg}
              alt=""
              className="w-[80%] md:w-[50%] mt-10 rounded-lg"
            />
            <h2 className="font-bold text-[25px] md:text-[30px] leading-[35px] md:leading-[48px] text-[#fff] mt-10 text-center">
              Welcome to the Election Center
            </h2>
            <p className="font-regular text-[15px] md:text-[20px] leading-[28px] md:leading-[34px] text-[#fff] mt-4 md:mt-10 mx-8">
              The Election Center is your personalized platform where you can
              plan your ballot check your registration and even find your
              polling place. It&apos;s giving you everything you need to vote
              with confidence.
            </p>
            <button
              onClick={() => {
                router.push("/election-center");
              }}
              className="bg-[#15D16C] py-[10px] px-[30px] rounded-[1.5rem] text-[#fff] font-bold-2 mt-10 mb-10"
            >
              View Election Center
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
