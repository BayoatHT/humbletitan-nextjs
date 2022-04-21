import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/Profile_avatar_placeholder_large.png";
import Joseph from "../assets/images/P20210303AS-1901-cropped.webp";
import Kamala from "../assets/images/Kamala_Harris_Vice_Presidential_Portrait.jpg";
import { FaLink } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import states from "../utils/states";
import axios from "axios";
export default function AllRepresentatives() {
  const [defaultOfficials, setDefaultOfficials] = useState([])
  const [allOfficials, setAllOfficials] = useState([]);
  const levels = defaultOfficials?.map((item) => {
    return item.office.levels[0]
  })
  const parties = defaultOfficials?.map((item) => {
    return item.party
  })
  const offices = defaultOfficials?.map((item) => {
    return item.office.name
  })
  let uniq = a => [...new Set(a)];
  const filteredLevels = uniq(levels);
  const filteredParties = uniq(parties);
  const filteredOffices = uniq(offices);

  const [levelInput, setLevelInput] = useState('all')
  const [stateInput, setStateInput] = useState('Alaska')
  const [partyInput, setPartyInput] = useState("all");
  const [officeInput, setOfficeInput] = useState("all");
  const [loading, setLoading] = useState(false)

  const [filterBtnShown, setFilterBtnShown] = useState(false);


  const colored =
    "bg-[#023a51] py-[5px] px-[15px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px]   rounded-[5px] mt-4 mx-[5px] font-bold text-[12px] leading-[13px] text-[#fff]  border-yellow";
  const white =
    "bg-[#fff] py-[5px] px-[15px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]  border-yellow";


  const filterHandler = async () => {
    setLevelInput('all')
    setOfficeInput('all')
    setPartyInput('all')
    setFilterBtnShown(false)
    let stateOfficials = []
    let stateOffices = []
    await axios
      .get(
        `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${stateInput}`
      )
      .then((result) => {
        stateOfficials = [...result.data.officials];
        stateOffices = [...result.data.offices];
      })
      .then(() => {
        stateOffices &&
          stateOffices.map((office) => {
            office.officialIndices.map((item) => {
              stateOfficials[item].office = office;
            });
          });
        setDefaultOfficials(stateOfficials);
        setAllOfficials(stateOfficials)
      });
  }
  const levelChange = (level) => {
    if (level !== 'all') {
      setLevelInput(level)
      setAllOfficials(defaultOfficials.filter((a) => a.office.levels[0] === level))
    } else {
      setAllOfficials(allOfficials)
    }
  }
  const partyChange = (party) => {
    if (party !== 'all') {
      setPartyInput(party)
      setAllOfficials(defaultOfficials.filter((a) => a.party === party))
    } else {
      setAllOfficials(allOfficials)
    }
  }
  const officeChange = (office) => {
    if (office !== 'all') {
      setOfficeInput(office)
      setAllOfficials(defaultOfficials.filter((a) => a.office.name === office))
    } else {
      setAllOfficials(allOfficials)
    }

  }

  useEffect(() => {
    let stateOfficials = []
    let stateOffices = []
    async function fetchData() {
      await axios
        .get(
          `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=Alaska`
        )
        .then((result) => {
          stateOfficials = [...result.data.officials];
          stateOffices = [...result.data.offices];
        })
        .then(() => {
          stateOffices &&
            stateOffices.map((office) => {
              office.officialIndices.map((item) => {
                stateOfficials[item].office = office;
              });
            });
          setDefaultOfficials(stateOfficials);
          setAllOfficials(stateOfficials)
        });
    }
    fetchData()

  }, [])
  return (
    <>
      <section className="mx-auto py-4 pt-12">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="flex flex-col">
              <h2 className="font-bold text-[27px] md:text-[55px] leading-[50px] mb-8 text-[#023a51]">
                The Elected Directory U.S.A
              </h2>
            </div>

            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg mt-[0.5rem]">
              <h6 className="font-bold text-[23px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">
                Filter:
              </h6>
              <div className="flex flex-wrap mb-10 mt-[0.5rem] relative justify-start  items-center m-auto">

                <select
                  value={levelInput}
                  onChange={(e) => levelChange(e.target.value)}
                  className="bg-[#F2F3F4] rounded-[50px] w-[100%] md:w-[20%] outline-0 cursor-pointer py-[5px] px-[10px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]"
                >
                  <option value="all">Level</option>
                  {filteredLevels?.map((level, index) => {
                    return (<option key={index} value={level}>{level}</option>)
                  })}


                </select>
                <select
                  value={stateInput}
                  onChange={(e) => {
                    setFilterBtnShown(true)
                    setStateInput(e.target.value === 'all' ? 'Alaska' : e.target.value)
                  }}
                  className="bg-[#F2F3F4] rounded-[50px] w-[100%] outline-0 cursor-pointer md:w-[20%] py-[5px] px-[10px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] mt-4 mx-[5px] lg:ml-[20px] font-bold text-[12px] leading-[13px] text-[#023a51] "
                >
                  <option value="all">State</option>
                  {states?.map((state, index) => {
                    return (<option key={index} value={state}>{state}</option>)
                  })}


                </select>
                <select
                  value={partyInput}
                  onChange={(e) => partyChange(e.target.value)}
                  className="bg-[#F2F3F4] rounded-[50px] w-[100%] outline-0 cursor-pointer md:w-[20%] py-[5px] px-[10px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] mt-4 mx-[5px] lg:ml-[20px] font-bold text-[12px] leading-[13px] text-[#023a51] "
                >
                  <option value="all">Party</option>
                  {
                    filteredParties?.map((party, index) => {
                      return (
                        <option key={index} value={party}>{party}</option>
                      )
                    })
                  }

                </select>
                <select
                  value={officeInput}
                  onChange={(e) => officeChange(e.target.value)}
                  className="bg-[#F2F3F4] rounded-[50px] w-[100%] outline-0 cursor-pointer md:w-[20%] lg:w-[30%] py-[5px] px-[10px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] mt-4 mx-[5px] lg:ml-[20px] font-bold text-[12px] leading-[13px] text-[#023a51] "
                >
                  <option value="all">Office</option>
                  {
                    filteredOffices?.map((office, index) => {
                      return (
                        <option key={index} value={office}>{office}</option>
                      )
                    })
                  }

                </select>

                <button
                  onClick={() => filterHandler()}
                  style={{ display: filterBtnShown ? 'block' : 'none' }}
                  className=" absolute top-[170px] lg:top-[70px] md:top-[40px] bg-[#023a51] w-[100%] outline-0 cursor-pointer md:w-[20%] py-[5px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[50px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#fff] hover:opacity-90"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto ">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mb-10 m-auto">
            <div className="container w-12/12 mx-auto max-w-screen-xl rounded-lg">
              <div className="flex flex-wrap mx-2 mb-10 m-auto justify-start transition ease-in-out delay-150">
                {
                  allOfficials?.length <= 0 && (
                    <span className="text-center text-[#023a51] font-bold text-[25px]">Loading...</span>
                  )
                }

                {
                  allOfficials?.map((official, index) => {
                    const {
                      name,
                      address,
                      party,
                      levels,
                      urls,
                      emails,
                      photoUrl,
                      office,
                      channels,
                      phones,
                    } = official;
                    return (
                      <div
                        key={index}
                        className="animate-pulse card flex flex-col w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%] rounded-lg "
                      >
                        {photoUrl ? (
                          <div className="img_container">
                            <Image
                              src={`/api/imageProxy?url=${encodeURIComponent(
                                photoUrl
                              )}`}
                              alt="photo"
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        ) : name === "Joseph R. Biden" ? (
                          <div className="img_container">
                            <Image
                              src={Joseph}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        ) : name === "Kamala D. Harris" ? (
                          <div className="img_container">
                            <Image
                              src={Kamala}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        ) : (
                          <div className="img_container">
                            <Image
                              src={placeholderImg}
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                              alt="photo"
                              className="grow-0 h-[100px] rounded-lg"
                            />
                          </div>
                        )}
                        <div className="official_info grow">
                          <p title={office.name} className=" text-[14px] office_name py-[5px] ">
                            {office.name}
                          </p>
                          <h1 className="text-[20px] sm:text-[23px] text-[#023a51] font-bold ">
                            {name}
                          </h1>

                          <p className=" py-[5px]"> {party}</p>
                          {address?.map((item, index) => {
                            return (
                              <div key={index} className="flex">
                                <FaMapMarkerAlt
                                  color="#023a51"
                                  size={30}
                                  className="pt-[10px]"
                                />{" "}
                                <p title={item?.line1 + " " + item?.city + " " + item?.state + " " + item?.zip} className="ml-[5px] text-[14px] official_email official_address py-[10px] ">
                                  {item?.line1} {item?.city} {item?.state}{" "}
                                  {item?.zip}
                                </p>
                              </div>
                            );
                          })}
                          {emails && (
                            <Link href={`mailto:${emails}`} passHref>
                              <a>
                                <div className="flex">
                                  <MdAlternateEmail
                                    color="#023a51"
                                    size={30}
                                    className="pt-[3px] hover:text-[#000]"
                                  />
                                  <p title={emails} className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
                                    {emails}
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
                                  href={`https://www.facebook.com/${item.id}`}
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
                                  href={`https://www.twitter.com/${item.id}`}
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
                                  href={`https://www.youtube.com/${item.id}`}
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

                            {urls?.map((item, index) => {
                              return (
                                <Link
                                  className="hover:text-[#000] mb-[5px] "
                                  key={index}
                                  href={item}
                                  passHref
                                >
                                  <a>
                                    <FaLink
                                      title={item}
                                      size={"20px"}
                                      color="#023a51"
                                      className="mx-[10px]"
                                    />
                                  </a>
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                        <a
                          href={`tel:${phones}`}
                          className="contact_btn rounded-b-lg"
                        >
                          Contact
                        </a>
                      </div>
                    )
                  })

                }


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
