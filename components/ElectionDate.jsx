import React, { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoLinkExternal } from 'react-icons/go'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiTwotoneMail } from 'react-icons/ai'
import { Store } from "../utils/store";
import Link from 'next/link'
export default function ElectionDate({ data, stateName, pollingLocations, stateDetails, contests }) {
  const { state } = useContext(Store);
  const [stateInfo, setStateInfo] = useState(stateDetails)
  const [contestsDetails, setContestsDetails] = useState(contests);
  const [locationInfo, setLocationInfo] = useState(pollingLocations)
  const { electionAdministrationBody: { absenteeVotingInfoUrl, ballotInfoUrl, correspondenceAddress, electionInfoUrl, electionRegistrationConfirmationUrl, electionRegistrationUrl, votingLocationFinderUrl } } = stateInfo[0]


  return (
    <>
      <section className=" bg-[#f7f7f7]  ">
        <div className="container mx-auto py-4 pt-16 flex flex-wrap max-w-screen-xl" >
          <div className="mx-auto flex flex-col justify-center w-12/12 lg:w-6/12  py-10 bg-[#f7f7f7]">
            <div className=" text-[#023a51]  ">
              {data?.length !== 0 ? (
                <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2rem] text-center text-[#023a51] ">
                  Next Election(s) <br /> in{" "}
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
          {
            locationInfo &&
            <div className="mx-auto w-12/12 lg:w-6/12 py-4 pt-12 md:border-left">
              <div className=" justify-center mx-4 mb-8 m-auto">
                <div className="flex flex-col mb-10">
                  <h2 className="font-bold text-[35px] md:text-[2rem] text-center text-[#023a51] ">
                    Your Polling Location Details:
                  </h2>
                </div>
                <div className=" mx-auto p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
                  {
                    locationInfo.length !== 0 ? (
                      <div >
                        <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Polling location Name: <span className="mt-[10px]"> {locationInfo[0]?.address.locationName}</span></h3>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Polling location address:  <br /> <span title="Get directions on map" className="mt-2 flex cursor-pointer w-[max-content] items-center bg-[#AAB7B8] p-[10px] rounded"> <FaMapMarkerAlt className="mr-2" />  {locationInfo[0]?.address.line1} {locationInfo[0]?.address.city} {locationInfo[0]?.address.state} {locationInfo[0]?.address.zip}</span></h3>
                        {
                          locationInfo[0].notes &&
                          <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Notes: <span className="mt-[10]"> {locationInfo[0]?.notes}</span></h3>
                        }
                        {locationInfo[0]?.pollingHours && (<h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > PollingHours: <br /> <span className="mt-[10]"> {locationInfo[0]?.notes}</span></h3>)}

                      </div>
                    )
                      : (
                        <div >
                          <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > No Polling locations for this address </h3>


                        </div>
                      )
                  }
                </div>
              </div>
            </div>
          }
        </div>

      </section>
      <section className=" bg-[#f7f7f7]  ">
        <div className="container mx-auto py-4 pt-16 flex flex-wrap max-w-screen-xl" >
          <div className="mx-auto flex flex-col justify-center w-12/12 lg:w-6/12  py-10 bg-[#f7f7f7]">
            <div className=" p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
              {
                stateInfo.length !== 0 &&
                (
                  <div >
                    <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2rem] mb-5 text-center text-[#023a51] ">
                      State Informations
                    </h4>
                    {
                      correspondenceAddress &&
                      <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} correspondence address: <br /> <span className="mt-[10]"> {correspondenceAddress?.line1} {correspondenceAddress?.city} {correspondenceAddress?.state} {correspondenceAddress?.zip}</span></h3>

                    }
                    {
                      stateInfo[0].local_jurisdiction?.name &&
                      <>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction: <br /> <span className="mt-[10]"> {stateInfo[0].local_jurisdiction.name} </span></h3>

                      </>
                    }
                    {ballotInfoUrl &&
                      <Link href={ballotInfoUrl} passHref >
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' />Track your {stateName} Ballot</a>
                      </Link>
                    }
                    {
                      votingLocationFinderUrl &&
                      <Link href={votingLocationFinderUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "><GoLinkExternal className='mr-2' /> Find Your voting location</a>
                      </Link>
                    }
                    {electionRegistrationUrl &&
                      <Link href={electionRegistrationUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' /> Check Your Registration</a>
                      </Link>
                    }
                    {
                      absenteeVotingInfoUrl &&
                      <Link href={absenteeVotingInfoUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' /> Absentee Voting Information</a>
                      </Link>
                    }
                    {
                      electionInfoUrl &&
                      <Link href={electionInfoUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' />Election Information</a>
                      </Link>
                    }
                    {
                      electionRegistrationConfirmationUrl &&
                      <Link href={electionRegistrationConfirmationUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "><GoLinkExternal className='mr-2' /> Election Registration Confirmation </a>
                      </Link>
                    }

                    {
                      stateInfo[0].local_jurisdiction?.electionAdministrationBody?.electionOfficials &&
                      <>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction office phone: <br /> <span className="mt-[10] flex items-center"> <BsFillTelephoneFill className="mr-2" /> {stateInfo[0].local_jurisdiction.electionAdministrationBody.electionOfficials[0].officePhoneNumber} </span></h3>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction office email: <br /> <span className="mt-[10] flex items-center"> <AiTwotoneMail className="mr-2" /> {stateInfo[0].local_jurisdiction.electionAdministrationBody.electionOfficials[0].emailAddress} </span></h3>
                      </>
                    }
                  </div>
                )
              }
            </div>
            <div className="mx-auto w-12/12 lg:w-6/12 py-4 pt-12 md:border-left">
              <div className="flex flex-wrap justify-center mx-4 mb-8 m-auto">
                <div className="flex flex-col mb-10">
                  <h2 className="font-bold text-[35px] md:text-[2rem] text-center text-[#023a51] ">
                    {/* {stateName}, {details?.name} */}
                  </h2>
                </div>
                {/* <div className=" mx-auto p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
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
              } */}
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  );
}
