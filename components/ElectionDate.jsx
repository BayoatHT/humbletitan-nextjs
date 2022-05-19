import React, { useContext, useEffect, useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { GoLinkExternal } from 'react-icons/go';
import { BsFillPhoneFill } from 'react-icons/bs';
import { AiTwotoneMail } from 'react-icons/ai';
import { FaLink } from "react-icons/fa";
import { Store } from "../utils/store";
import { MdAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import Link from 'next/link'
export default function ElectionDate({ data, stateName, pollingLocations, stateDetails, contests }) {
  const { state, dispatch } = useContext(Store);
  const [contestsDetails, setContestsDetails] = useState(contests);
  const [locationInfo, setLocationInfo] = useState(pollingLocations)
  // const { absenteeVotingInfoUrl, ballotInfoUrl, correspondenceAddress, electionInfoUrl, electionRegistrationConfirmationUrl, electionRegistrationUrl, votingLocationFinderUrl } = stateDetails[0]?.electionAdministrationBody

  const dateToday = new Date().getTime()

  useEffect(() => {

    return () => {
      dispatch({ type: 'SET_COUNTY', payload: '' })
    }
  }, [dispatch])
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
                  Please Make Sure to Enter a correct address. <br />
                  We provide data the nearer we are to an election. The next chance to
                  vote in <span className="font-bold"> {stateName} </span> won&apos;t
                  be here for a bit. In the meantime, prepare with our guide on
                  what&apos;s coming and who&apos;s already represent you.
                </h4>
              )}
              {state.countyName && (
                <div className="flex justify-center">
                  <h4 className="font-bold text-[20px] max-w-fit bg-[#AAB7B8] p-[10px] rounded ">
                    {state.countyName && state.countyName}
                  </h4>
                </div>
              )}

              <div className="flex mt-[20px] flex-col items-center justify-center">
                <div>
                  {data
                    ?.filter(item => item.statusOfData !== "Expired" && new Date(item.electionDate) >= dateToday)
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
          {/* election location Information */}
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
                    locationInfo.length !== 0 ?
                      locationInfo.map((location, index) => {
                        return (
                          <div key={index} >
                            <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Name: <span className="mt-[10px]"> {location?.address.locationName}</span></h3>
                            <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Address: <span title="Get directions on map" className="mt-2 flex w-[min-contents] items-center bg-[#AAB7B8] p-[10px] rounded"> <FaMapMarkerAlt className="mr-2" />  {location?.address.line1} {location?.address.city} {location?.address.state} {location?.address.zip}</span></h3>
                            {
                              location.notes &&
                              <h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > Notes: <span className="mt-[10]"> {locationInfo?.notes}</span></h3>
                            }
                            {location?.pollingHours && (<h3 className="text-[14px] block sm:text-[20px] mb-[10px] font-bold" > PollingHours: <span className="mt-[10]"> {location?.notes}</span></h3>)}

                          </div>
                        )
                      })


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

      {/* Election Contests */}
      <section className=" bg-[#f7f7f7]">
        <div className="container mx-auto py-4 pt-16 max-w-screen-xl" >
          <div className="mx-auto flex flex-col justify-center w-11/12 py-10">
            <div className="p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
              {
                contests.length !== 0 &&
                (
                  <div >
                    <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2rem] mb-2 text-center text-[#023a51] ">
                      [ Contests ]
                    </h4>
                    {
                      contestsDetails?.map((contest, index) => {
                        const { office, district, candidates } = contest
                        if (office) {
                          return (
                            <div key={index} className="pb-20">
                              {
                                office &&
                                <h3 className="text-[14px] block sm:text-[35px] mt-6 mb-[10px] ml-3 font-bold" >Office {index + 1} : <span className="text-[14px] sm:text-[20px] mb-[10px] ml-3 font-normal mt-[10px]">{office} </span> </h3>

                              }
                              {
                                district &&
                                <h3 className="text-[14px] block sm:text-[20px] mb-[20px] ml-3 font-bold" >District Name : <span className="font-normal">{district.name} </span></h3>
                              }
                              {
                                candidates &&
                                <h3 className="text-[14px] block sm:text-[20px] mb-[20px] ml-3 font-bold" >Candidates : </h3>
                              }
                              <div className="flex flex-wrap md:justify-start justify-center" >
                                {candidates
                                  && candidates.map((candidate, index) => {
                                    const { name, party, channels, candidateUrl, email, phone } = candidate
                                    return (
                                      <div key={index} className="official_info bg[#85929E] border-4 rounded-lg w-[300px] mr-[20px] mb-[20px]">
                                        <h1 className="text-[20px] sm:text-[23px] text-[#023a51] font-bold ">
                                          {name}
                                        </h1>
                                        <p className=" py-[5px]">Party: {party}</p>
                                        {email && (
                                          <Link href={`mailto:${email}`} passHref>
                                            <a>
                                              <div className="flex">
                                                <MdAlternateEmail
                                                  title={email}
                                                  color="#023a51"
                                                  size={30}
                                                  className="pt-[3px] hover:text-[#000]"
                                                />
                                                <p title={email} className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
                                                  {email}
                                                </p>
                                              </div>
                                            </a>
                                          </Link>
                                        )}
                                        {phone && (
                                          <Link href={`tel:${phone}`} passHref>
                                            <a>
                                              <div className="flex">
                                                <BsFillPhoneFill
                                                  color="#023a51"
                                                  size={25}
                                                  className="pt-[3px] hover:text-[#000]"
                                                />
                                                <p title={phone} className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
                                                  {phone}
                                                </p>
                                              </div>
                                            </a>
                                          </Link>
                                        )}
                                        <div
                                          className="text-center flex items-center flex-wrap jutify-center "
                                          style={{ margin: "30px 0" }}
                                        >
                                          {channels?.map((item, index) => {
                                            return item.type == "Facebook" ? (
                                              <Link
                                                className="hover:text-[#000]"
                                                key={index}
                                                href={item.id}
                                                passHref
                                              >
                                                <a>
                                                  <TiSocialFacebookCircular
                                                    title={item.id}
                                                    color="#023a51"
                                                    size={30}
                                                    className="mx-[10px] mb-[5px] hover:text-[#000]"
                                                  />
                                                </a>
                                              </Link>
                                            ) : item.type == "Twitter" ? (
                                              <Link
                                                href={item.id}
                                                passHref
                                              >
                                                <a>
                                                  <TiSocialTwitter
                                                    title={item.id}
                                                    color="#023a51"
                                                    size={30}
                                                    className="mx-[10px] mb-[5px] hover:text-[#000]"
                                                  />
                                                </a>
                                              </Link>
                                            ) : item.type == "YouTube" ? (
                                              <Link
                                                href={item.id}
                                                passHref
                                              >
                                                <a>
                                                  <TiSocialYoutubeCircular
                                                    title={item.id}
                                                    color="#023a51"
                                                    size={30}
                                                    className="mx-[10px] mb-[5px] hover:text-[#000]"
                                                  />
                                                </a>
                                              </Link>
                                            ) : null;
                                          })}

                                          {candidateUrl &&
                                            (
                                              <Link
                                                className="hover:text-[#000] mb-[5px] "
                                                href={candidateUrl}
                                                passHref
                                              >
                                                <a>
                                                  <FaLink
                                                    title={candidateUrl}
                                                    size={"20px"}
                                                    color="#023a51"
                                                    className="mx-[10px]"
                                                  />
                                                </a>
                                              </Link>
                                            )
                                          }
                                        </div>
                                      </div>

                                    )
                                  })

                                }
                              </div>
                            </div>
                          )

                        }
                      })
                    }

                  </div>
                )
              }
            </div>

          </div>
        </div>

      </section>


      {/* State Information Links */}
      <section className=" bg-[#f7f7f7]  ">
        <div className="container mx-auto py-4 pt-16 flex flex-wrap max-w-screen-xl" >
          <div className="mx-auto flex flex-col justify-center w-12/12 lg:w-6/12  py-10 bg-[#f7f7f7]">
            <div className=" p-[20px] pb-[10px] bg-[#efeded] text-[#023a51] rounded-lg">
              {
                stateDetails.length !== 0 &&
                (
                  <div >
                    <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2rem] mb-5 text-center text-[#023a51] ">
                      State Informations
                    </h4>
                    {
                      stateDetails[0]?.electionAdministrationBody?.correspondenceAddress &&
                      <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} correspondence address: <br /> <span className="mt-[10]"> {stateDetails[0]?.electionAdministrationBody?.correspondenceAddress?.line1} {stateDetails[0]?.electionAdministrationBody?.correspondenceAddress?.city} {stateDetails[0]?.electionAdministrationBody?.correspondenceAddress?.state} {stateDetails[0]?.electionAdministrationBody?.correspondenceAddress?.zip}</span></h3>

                    }
                    {
                      stateDetails[0].local_jurisdiction?.name &&
                      <>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction: <br /> <span className="mt-[10]"> {stateDetails[0].local_jurisdiction.name} </span></h3>

                      </>
                    }
                    {stateDetails[0]?.electionAdministrationBody?.ballotInfoUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.ballotInfoUrl} passHref >
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' />Track your {stateName} Ballot</a>
                      </Link>
                    }
                    {
                      stateDetails[0]?.electionAdministrationBody?.votingLocationFinderUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.votingLocationFinderUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "><GoLinkExternal className='mr-2' /> Find Your voting location</a>
                      </Link>
                    }
                    {stateDetails[0]?.electionAdministrationBody?.electionRegistrationUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.electionRegistrationUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' /> Check Your Registration</a>
                      </Link>
                    }
                    {
                      stateDetails[0]?.electionAdministrationBody?.absenteeVotingInfoUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.absenteeVotingInfoUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' /> Absentee Voting Information</a>
                      </Link>
                    }
                    {
                      stateDetails[0]?.electionAdministrationBody?.electionInfoUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.electionInfoUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "> <GoLinkExternal className='mr-2' />Election Information</a>
                      </Link>
                    }
                    {
                      stateDetails[0]?.electionAdministrationBody?.electionRegistrationConfirmationUrl &&
                      <Link href={stateDetails[0]?.electionAdministrationBody?.electionRegistrationConfirmationUrl} passHref>
                        <a className="text-[14px] block sm:text-[20px] flex items-center mb-[20px] font-bold "><GoLinkExternal className='mr-2' /> Election Registration Confirmation </a>
                      </Link>
                    }

                    {
                      stateDetails[0].local_jurisdiction?.electionAdministrationBody?.electionOfficials &&
                      <>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction office phone: <br /> <span className="mt-[10] flex items-center"> <BsFillPhoneFill className="mr-2" /> {stateDetails[0].local_jurisdiction.electionAdministrationBody.electionOfficials[0].officePhoneNumber} </span></h3>
                        <h3 className="text-[14px] block sm:text-[20px] mb-[20px] font-bold" >{stateName} Local jurisdiction office email: <br /> <span className="mt-[10] flex items-center"> <AiTwotoneMail className="mr-2" /> {stateDetails[0].local_jurisdiction.electionAdministrationBody.electionOfficials[0].emailAddress} </span></h3>
                      </>
                    }
                  </div>
                )
              }
            </div>

          </div>
        </div>

      </section>

    </>
  );
}
