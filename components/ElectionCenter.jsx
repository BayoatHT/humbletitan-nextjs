import React, { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ElectionCenter() {
  const [elections, setElections] = useState([]);
  const upcommingElections = [];
  const nextElection = "";
  const nextElectionFormatted = "";

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/elections?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY`
    );
    console.log(data);
    setElections(data.elections);
    elections &&
      elections.map((election) => {
        const date = new Date(election.electionDay);
        const result = date.getTime();
        upcommingElections.push(result);
      });
    console.log(upcommingElections);
    if (upcommingElections) {
      nextElection = Math.min(...upcommingElections);
      nextElection = new Date(nextElection);
      nextElectionFormatted = nextElection.toDateString();
      console.log(nextElectionFormatted);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <section className="mx-auto py-4 pt-16">
        <div className="container w-12/12 mx-auto max-w-screen-xl ">
          <div className="flex flex-wrap mx-4 mb-10 m-auto ">
            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg relative flex justify-between items-center flex-col sm:flex-row">
              <div className="w-[90%] sm:w-[75%] bg-[#f7f7f7]  border-ea">
                <div className=" bg-[#f7f7f7] flex flex-col justify-center items-center border-ea-bot ">
                  <p className="font-regular pt-2 text-[10px] text-[#023a51]">
                    WELCOME TO THE
                  </p>
                  <h3 className="font-bold text-[35px] md:text-[2rem] leading-[47px] mb-1 text-[#023a51]">
                    Election Center
                  </h3>
                  <p className="text-[#023a51] font-regular mb-4 text-[10px] ">
                    Every vote matters. We&apos;re here to help you inform guys.
                  </p>
                </div>
                <div className="flex justify-around items-center my-4 flex-wrap  gap-y-[20px] pb-[15px]">
                  <Link href="/elected-officials">
                    <a className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-2 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                      <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                      <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                        Elected And Appointed Officials
                      </h5>
                      <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">
                        View who currently represents you at all level of
                        governments
                      </p>
                    </a>
                  </Link>

                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-2 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                    <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                      Find out how to vote
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] pb-[18px]">
                      Set a time, date, go to address.{" "}
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8 px-2 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                    <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                      Get Involved
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">
                      Help your community vote informed with BallotReady
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-2 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow">
                    <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                    <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                      Contribute
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">
                      Support BallotReady&apos;s mission to promote an active
                      and informed electorate.
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-2 bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow">
                    <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                    <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                      Reasearch Your Ballot
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">
                      View who currently represents you at all level of
                      governments
                    </p>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] absolute bottom-[0%]">
                      <i>Available when there is an upcoming elections</i>
                    </p>
                  </div>
                  <div className="w-[90%] sm:w-[45%] lg:w-[30%] h-[200px] pt-8  px-2 bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow">
                    <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                    <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">
                      Check Registration
                    </h5>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">
                      View who currently represents you at all level of
                      governments
                    </p>
                    <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] absolute bottom-[0%]">
                      <i>Available when there is an upcoming elections</i>
                    </p>
                  </div>
                </div>
                {/* <!-- <div className="flex justify-around items-center my-4 flex-wrap md:flex-row flex-col ">
                                            <div className="w-[80%] md:w-[30%] h-[200px] pt-8  px-2 bg-[#fff] mt-4 flex flex-col justify-center cards-shadow" > 
                                                <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                                                <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">Contribute</h5>
                                                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">Support BallotReady&apos;s mission to promote an active and informed electorate.</p>
                                            </div>
                                            <div className="w-[80%] md:w-[30%] h-[200px] pt-8  px-2 bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow" > 
                                                <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                                                <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">Reasearch Your Ballot</h5>
                                                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">View who currently represents you at all level of governments</p>
                                                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] absolute bottom-[0%]"><i>Available when there is an upcoming elections</i></p>
                                            </div>
                                            <div className="w-[80%] md:w-[30%] h-[200px] pt-8  px-2 bg-[#ececec] mt-4 flex flex-col justify-center relative cards-shadow" > 
                                                <i className="fas fa-user text-[#2d5672] text-[20px]"></i>
                                                <h5 className="font-bold text-[12px] pt-2 leading-[15px] text-[#2d5672]">Check Registration</h5>
                                                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] ">View who currently represents you at all level of governments</p>
                                                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98] absolute bottom-[0%]"><i>Available when there is an upcoming elections</i></p>
                                            </div>
                                            
                                        </div> --> */}
              </div>
              <div className="sm:w-[25%] w-[90%]  h-[100%] border-ea border-ea-left">
                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98]  pl-2 border-ea-bot"></p>
                <p className="text-[#b3bbc2] pt-2 font-regular text-[10px] text-[#a39c98]  pl-2 border-ea-bot">
                  Spread the word. Every person who shares help us reach three
                  more voters.{" "}
                </p>
                <div className="flex flex-wrap justify-start gap-[10%] mt-4 ml-2">
                  <i className="fa-brands fa-twitter bg-[#55a4ff] p-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-brands fa-twitter bg-[#55a4ff] p-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-brands fa-facebook-f bg-[#55a4ff] py-[10px] px-[10px] rounded-full text-[#fff]"></i>
                  <i className="fa-solid fa-envelope bg-[#a660e5] p-[10px] rounded-full text-[#fff]"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
