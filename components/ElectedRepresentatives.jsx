import React from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";

export default function ElectedRepresentatives() {
  return (
    <section className="mx-auto ">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg">
            <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between">
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  text-[#023a51] mt-4">
                    {" "}
                    President{" "}
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <div className="relative img_container sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg mt-4 overflow-hidden">
                    <Image
                      src={placeholderImg}
                      className="absolute object-cover"
                      alt=""
                      layout="responsive"
                    />
                  </div>

                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] text-[#023a51] mt-4">
                    {" "}
                    Vice President
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <span className="sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg object-cover mt-4 overflow-hidden">
                    <Image src={placeholderImg} alt="" layout="responsive" />
                  </span>
                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12  mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  text-[#023a51] mt-4">
                    {" "}
                    U.S Senetor
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <span className="sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg object-cover mt-4 overflow-hidden">
                    <Image src={placeholderImg} alt="" layout="responsive" />
                  </span>
                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] text-[#023a51] mt-4">
                    {" "}
                    Governer
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <span className="sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg object-cover mt-4 overflow-hidden">
                    <Image src={placeholderImg} alt="" layout="responsive" />
                  </span>
                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12  mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] mt-4 text-[#023a51]">
                    {" "}
                    Governer
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <span className="sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg object-cover mt-4 overflow-hidden">
                    <Image src={placeholderImg} alt="" layout="responsive" />
                  </span>
                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 ">
                <div>
                  <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px] mt-4 text-[#023a51]">
                    {" "}
                    Governer
                  </h4>
                </div>
                <div className="flex justify-between items-center flex-col sm:flex-row">
                  <span className="sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg object-cover mt-4 overflow-hidden">
                    <Image src={placeholderImg} alt="" layout="responsive" />
                  </span>
                  <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                    <li className="font-regular text-[26px] leading-[35px] text-[#023a51] ">
                      Link
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
