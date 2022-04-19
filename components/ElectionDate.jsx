import React, { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Store } from "../utils/store";
import Link from 'next/link'
import axios from "axios";
export default function ElectionDate({ data, stateName, details }) {
  const { state } = useContext(Store);
  const [voterinfo, setVoterInfo] = useState(details);
  // const fetchdata = async () => {
  //   var majorElections = []
  //   var id;
  //   await axios
  //     .get(
  //       "https://civicinfo.googleapis.com/civicinfo/v2/elections?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY"
  //     )
  //     .then((result) => {
  //       majorElections = result.data.elections;
  //       majorElections = majorElections?.filter(e => !e.name.includes("Test"))
  //       id = majorElections[0].id
  //     }).then(async () => {
  //       const { data } = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${stateName}&electionId=${id}`)
  //       setDetails(data.state[0].electionAdministrationBody);
  //     })
  // }
  // useEffect(() => {
  //   fetchdata()

  // }, [])

  return (
    <section className=" bg-[#f7f7f7]  ">
      <div className="container mx-auto py-4 pt-16 flex flex-wrap max-w-screen-xl" >
        <div className="mx-auto flex flex-col justify-center w-12/12 lg:w-6/12  py-10 bg-[#f7f7f7]">
          <div className=" text-[#023a51]  ">
            {data?.length !== 0 ? (
              <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2rem] text-center text-[#023a51] ">
                Upcomming Election(s) <br /> in{" "}
                <span className="font-bold"> {stateName} </span>
              </h4>
            ) : (
              <h4 className="text-[25px] px-[15px] sm:text-[35px] text-[#023a51] text-justify">
                We provide data the nearer we are to an election. The next chance to
                vote in <span className="font-bold"> {stateName} </span> won&apos;t
                be here for a bit. In the meantime, prepare with our guide on
                what&apos;s coming and who&apos;s already represent you.
              </h4>
            )}
            {state.countyName && (
              <span className="font-bold text-[25px] sm:text-[35px]">
                and in {state.countyName}
              </span>
            )}

            <div className="flex mt-[20px] flex-col items-center justify-center">
              <div>
                {data
                  ?.filter((item) => item.statusOfData !== "Expired")
                  .map((item, index) => {
                    return (
                      <div
                        key={index}
                        className=" py-[20px] px-[5px] flex border-b-2 text-left w-mx"
                      >
                        <h2 className="text-[14px] sm:text-[20px] font-bold">
                          {index + 1}) {item.state} {item.electionDescription} ||
                        </h2>
                        <h3 className="sm:text-[22px] text-[14px] ml-[15px] flex flex-row items-center ">
                          <FaCalendarAlt />
                          <span className="font-bold  ml-[5px]">
                            {new Date(item.electionDate).toDateString()}
                          </span>
                        </h3>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-12/12 lg:w-6/12 py-4 pt-12 md:border-left">
          <div className="flex flex-wrap justify-center mx-4 mb-8 m-auto">
            <div className="flex flex-col mb-10">
              <h2 className="font-bold text-[35px] md:text-[2rem] text-center text-[#023a51] ">
                {stateName}, {details?.name}
              </h2>
            </div>
            <div className=" mx-auto p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
              {
                voterinfo && (
                  <div >
                    <Link href={voterinfo.ballotInfoUrl} passHref >
                      <a className="text-[14px] block sm:text-[20px] mb-[10px] font-bold ">Track your {stateName} Ballot</a>
                    </Link>
                    <Link href={details.votingLocationFinderUrl} passHref>
                      <a className="text-[14px] block sm:text-[20px] mb-[10px] font-bold ">Find Your voting location</a>
                    </Link>
                    <Link href={details.electionRegistrationUrl} passHref>
                      <a className="text-[14px] block sm:text-[20px]  mb-[10px] font-bold ">Check Your Registration</a>
                    </Link>
                    <Link href={details.absenteeVotingInfoUrl} passHref>
                      <a className="text-[14px] block sm:text-[20px]  mb-[10px] font-bold ">Absentee Voting Information</a>
                    </Link>
                    <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" >{stateName} correspondence address: <br /> <span className="mt-[10]"> {details.correspondenceAddress?.line1} {details.correspondenceAddress?.city} {details.correspondenceAddress?.state} {details.correspondenceAddress?.zip}</span></h3>
                  </div>
                )
              }
            </div>
          </div>
        </div>
      </div>

    </section>


  );
}
