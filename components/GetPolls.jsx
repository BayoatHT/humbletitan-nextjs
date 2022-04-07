import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import Image1 from "../assets/images/196224814_196223307-3d98ee55a0804500ba0bbd7f9da439b1_t800.jpg";
import Image2 from "../assets/images/hG7uo-1577649974-154205-blog-S097092219-300.jpg";
import Image3 from "../assets/images/3316.webp";

export default function GetPolls() {
  return (
    <section className="mx-auto py-4 pt-12">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <h2 className="font-bold text-[35px] md:text-[3rem] leading-[47px] mb-4 text-[#023a51]">
            Getting you to the polls in three easy steps
          </h2>

          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg">
            <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between gap-y-[25px]">
              <div className="w-12/12 md:w-[48%]  xl:w-[30%] flex md:block justify-center flex-col items-center">
                <div className="relative w-[100%] md:w-[100%]">
                  <div className="img_container">
                    <Image
                      src={Image1}
                      layout="responsive"
                      alt=""
                      className=" w-[100%] md:w-[100%] h-[200px] object-cover mt-4 rounded-lg"
                    />
                  </div>

                  <h2 className="absolute top-[70%] left-[10%] text-[#fedc4b] text-[2rem] font-bold">
                    01
                  </h2>
                </div>
                <h4 className="font-bold text-[25px] md:text-[1.5rem] lg:text-[1.5rem] xl:text-[1.5rem]   mt-4 text-[#023a51] leading-[30px]">
                  Find your ballot
                </h4>
                <p className="font-regular text-[18px] leading-[30px] text-[#59667d] text-center md:text-left mt-2 w-[100%] md:w-[90%]">
                  Choose and vote for the candidate who best represents your
                  values
                </p>
              </div>
              <div className="w-12/12 md:w-[48%]  xl:w-[30%] flex md:block justify-center flex-col items-center">
                <div className="relative w-[100%] md:w-[100%]">
                  <div className="img_container">
                    <Image
                      src={Image2}
                      layout="responsive"
                      alt=""
                      className="w-[100%] md:w-[100%] h-[200px] object-cover mt-4 rounded-lg"
                    />
                  </div>
                  <h2 className="absolute top-[70%] left-[10%] text-[#fedc4b] text-[2rem] font-bold">
                    02
                  </h2>
                </div>
                <h4 className="font-bold text-[25px] text-center md:text-[1.5rem] lg:text-[1.5rem]  xl:text-[1.5rem]   mt-4 text-[#023a51] leading-[30px]">
                  Consider your options
                </h4>
                <p className="font-regular  text-[18px] leading-[30px] text-[#59667d] text-center md:text-left mt-2 w-[100%] md:w-[80%]">
                  Choose and vote for the candidate who best represents your
                  values
                </p>
              </div>
              <div className="w-12/12 md:w-[48%]  xl:w-[30%] flex md:block justify-center flex-col items-center">
                <div className="relative w-[100%] md:w-[100%]">
                  <div className="img_container">
                    <Image
                      src={Image3}
                      layout="responsive"
                      alt=""
                      className="w-[100%] md:w-[100%] h-[200px] object-cover mt-4 rounded-lg"
                    />
                  </div>
                  <h2 className="absolute top-[70%] left-[10%] text-[#fedc4b] text-[2rem] font-bold">
                    03
                  </h2>
                </div>
                <h4 className="font-bold text-[25px] md:text-[1.5rem] lg:text-[1.5rem]  xl:text-[1.5rem]  mt-4 text-[#023a51] leading-[30px]">
                  Vote
                </h4>
                <p className="font-regular  text-[18px] leading-[30px] text-[#59667d] text-center md:text-left mt-2 w-[100%] md:w-[80%]">
                  Choose and vote for the candidate who best represents your
                  values
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
