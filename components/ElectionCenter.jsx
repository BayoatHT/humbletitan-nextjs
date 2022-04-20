import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import ElectionDate from "./ElectionDate";
import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineUser, AiOutlineUsergroupAdd } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { BsListCheck } from "react-icons/bs";
import { MdHowToVote } from "react-icons/md";
import WhatElseWeOffer from "./WhatElseWeOffer";

export default function ElectionCenter({ stateName, dates, pollingLocations, stateDetails, contests }) {

  return (
    <>
      <ElectionDate pollingLocations={pollingLocations} stateDetails={stateDetails} contests={contests} stateName={stateName} data={dates} />
      <WhatElseWeOffer stateName={stateName} />
      <section>
        <div>
          <div className="flex flex-wrap mb-10 ">
            <div className=" mx-auto  rounded-lg relative flex justify-between items-center flex-col sm:flex-row">
              <div className="w-[100%] bg-[#f7f7f7]  border-ea">
                {/* <div className=" bg-[#f7f7f7] flex flex-col justify-center items-center border-ea-bot ">
                  <p className="font-regular pt-2 text-[13px] text-[#023a51]">
                    WELCOME TO THE
                  </p>
                  <h3 className="font-bold text-[40px] md:text-[2rem] leading-[47px] mb-1 text-[#023a51]">
                    Election Center
                  </h3>
                  <p className="text-[#023a51] font-regular mb-4 text-[13px] ">
                    Every vote matters. We&apos;re here to help you inform guys.
                  </p>
                </div> */}

                {/* <div className="flex justify-around items-center my-4 flex-wrap  gap-y-[20px] pb-[15px]">
                  <Link href={`/elected-officials/${stateName}`}>
                    <a className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] hover:bg-[#ececec] pt-8 pb-[10px] px-6 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                      <AiOutlineUser
                        size={35}
                        color="#2d5672"
                        className=" mb-2 "
                      />
                      <h5 className="font-bold text-[20px] py-2  leading-[22px] text-[#2d5672]">
                        Elected And Appointed Officials
                      </h5>
                      <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] ">
                        View who currently represents you at all level of
                        governments
                      </p>
                    </a>
                  </Link>

                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  hover:bg-[#ececec] px-6 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <BiSearchAlt2
                      size={35}
                      color="#2d5672"
                      className=" mb-2 "
                    />
                    <h5 className="font-bold text-[20px] pt-2 leading-[15px] text-[#2d5672]">
                      Check Registration
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] pb-[18px]">
                      View who currently represents you at all level of
                      governments
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8 px-6 hover:bg-[#ececec] bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <HiOutlineSpeakerphone
                      size={35}
                      color="#2d5672"
                      className=" mb-2 "
                    />
                    <h5 className="font-bold text-[20px] pt-2 leading-[15px] text-[#2d5672]">
                      Get Involved
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] ">
                      Help your community vote informed with BallotReady
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8 hover:bg-[#ececec] px-6 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <AiOutlineUsergroupAdd
                      size={35}
                      color="#2d5672"
                      className=" mb-2 "
                    />
                    <h5 className="font-bold text-[20px] pt-2 leading-[15px] text-[#2d5672]">
                      Contribute
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] ">
                      Support BallotReady&apos;s mission to promote an active
                      and informed electorate.
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8 hover:bg-[#ececec] px-6 bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow">
                    <BsListCheck size={35} color="#2d5672" className=" mb-2 " />
                    <h5 className="font-bold text-[20px] pt-2 leading-[15px] text-[#2d5672]">
                      Reasearch Your Ballot
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] ">
                      View who currently represents you at all level of
                      governments
                    </p>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[12px] text-[#a39c98] absolute bottom-[2%]">
                      <i>* Available when there is an upcoming elections</i>
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-6 hover:bg-[#ececec] bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow">
                    <MdHowToVote size={35} color="#2d5672" className=" mb-2 " />
                    <h5 className="font-bold text-[20px] pt-2 leading-[15px] text-[#2d5672]">
                      Find out how to vote
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98] ">
                      Set a time, Data, go to address
                    </p>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[12px] text-[#a39c98] absolute bottom-[2%]">
                      <i>* Available when there is an upcoming elections</i>
                    </p>
                  </div>
                </div> */}
              </div>
              {/* <div className="sm:w-[25%] w-[90%]  h-[100%] border-ea border-ea-left">
                <div className="border-ea-bot">
                  <h1 className="text-[#023a51] pt-2 font-regular text-[20px]   pl-2 ">
                    Election Date
                  </h1>
                  {dates?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="text-[#b3bbc2] pt-2 font-regular text-[16px] text-[#a39c98]  pl-2"
                      >
                        {item.electionDate}
                      </p>
                    );
                  })}
                </div>
                <p className=" pt-2 font-regular text-[10px] text-[#a39c98]  pl-2 border-ea-bot">
                  Spread the word. Every person who shares help us reach three
                  more voters.{" "}
                </p>
                <div className="flex flex-wrap justify-start gap-[10%] mt-4 ml-2">
                  <i className="fa-brands fa-twitter bg-[#55a4ff] p-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-brands fa-twitter bg-[#55a4ff] p-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-brands fa-facebook-f bg-[#55a4ff] py-[10px] px-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-solid fa-envelope bg-[#a660e5] p-[10px] rounded-full text-[#fff]"></i>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
