import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/Profile_avatar_placeholder_large.png";
import Joseph from "../assets/images/P20210303AS-1901-cropped.webp";
import Kamala from "../assets/images/Kamala_Harris_Vice_Presidential_Portrait.jpg";
import { Store } from "../utils/store";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { useRouter } from "next/router";
import axios from "axios";
export default function AllRepresentatives({ officials }) {
  const [allofficials, setAllOfficials] = useState(officials);

  const [filter, setFilter] = useState({
    all: true,
    administrativeArea1: false,
    administrativeArea2: false,
    country: false,
    international: false,
    locality: false,
    regional: false,
    special: false,
    subLocality1: false,
    subLocality2: false,
    filterName: "all",
  });
  const [selectedOffice, setSelectedOffice] = useState("all");
  const [selectedParty, setSelectedParty] = useState("all");
  const [partyInput, setPartyInput] = useState("all");

  const colored =
    "bg-[#023a51]  w-[28%]  py-[5px] md:w-[18%] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px]   rounded-[5px] mt-4 mx-[5px] font-bold text-[12px] leading-[13px] text-[#fff]  border-yellow";
  const white =
    "bg-[#fff] w-[28%] py-[5px] md:w-[18%] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]  border-yellow";

  const officeFilter = async () => {
    setSelectedParty(partyInput);
    if (selectedOffice === "all") {
      setAllOfficials(officials);
    } else if (selectedOffice !== "all") {
      setFilter({
        all: true,
        administrativeArea1: false,
        administrativeArea2: false,
        country: false,
        international: false,
        locality: false,
        regional: false,
        special: false,
        subLocality1: false,
        subLocality2: false,
        filterName: "all",
      });
      try {
        await axios
          .get(`https://humble-titan.herokuapp.com/${selectedOffice}`)
          .then(({ data }) => {
            setAllOfficials(data);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  };
  return (
    <>
      <section className="mx-auto py-4 pt-12">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="flex flex-col">
              <h2 className="font-bold text-[27px] md:text-[55px] leading-[50px] mb-2 text-[#023a51]">
                The Elected Directory U.S.A
              </h2>
            </div>
            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg mt-[0.5rem]">
              <h6 className="font-bold text-[23px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">
                Filter by Official Level&apos;s: ({filter.filterName})
              </h6>
              <div className="flex flex-wrap mb-10 mt-[0.5rem]  justify-between  items-center m-auto">
                <button
                  onClick={() => {
                    setFilter({
                      all: true,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "all",
                    });
                  }}
                  className={filter.all ? colored : white}
                >
                  All
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: true,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "country",
                    });
                  }}
                  className={filter.country ? colored : white}
                >
                  Country
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: true,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "administrativeArea1",
                      filterName: "administrativeArea1",
                    });
                  }}
                  className={filter.administrativeArea1 ? colored : white}
                >
                  Admin Area1
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: true,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "administrativeArea2",
                    });
                  }}
                  className={filter.administrativeArea2 ? colored : white}
                >
                  Admin Area2
                </button>

                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: true,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "international",
                    });
                  }}
                  className={filter.international ? colored : white}
                >
                  International
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: true,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "locality",
                    });
                  }}
                  className={filter.locality ? colored : white}
                >
                  Locality
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: true,
                      special: false,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "regional",
                    });
                  }}
                  className={filter.regional ? colored : white}
                >
                  Regional
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: true,
                      subLocality1: false,
                      subLocality2: false,
                      filterName: "special",
                    });
                  }}
                  className={filter.special ? colored : white}
                >
                  Special
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: true,
                      subLocality2: false,
                      filterName: "subLocality1",
                    });
                  }}
                  className={filter.subLocality1 ? colored : white}
                >
                  Sub Locality1
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      administrativeArea1: false,
                      administrativeArea2: false,
                      country: false,
                      international: false,
                      locality: false,
                      regional: false,
                      special: false,
                      subLocality1: false,
                      subLocality2: true,
                      filterName: "subLocality2",
                    });
                  }}
                  className={filter.subLocality2 ? colored : white}
                >
                  Sub Locality2
                </button>
              </div>
            </div>
            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg mt-[0.5rem]">
              <h6 className="font-bold text-[23px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">
                Filter by Offices: ()
              </h6>
              <div className="flex flex-wrap mb-10 mt-[0.5rem]  justify-start  items-center m-auto">
                <select
                  value={selectedOffice}
                  onChange={(e) => {
                    setSelectedOffice(e.target.value);
                    setPartyInput("all");
                  }}
                  className="bg-[#fff] w-[100%] outline-0 cursor-pointer py-[5px] lg:w-[58%] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]  border-yellow"
                >
                  <option value="all">All</option>
                  <option value="president">
                    President of the United States
                  </option>
                  <option value="visePresident">
                    Vice President of the United States
                  </option>
                  <option value="senators">U.S. Senator</option>
                  <option value="USRepresentative">U.S. Representative</option>
                  <option value="governors">Governor</option>
                  <option value="lieutenantGovernors">
                    Lieutenant Governor
                  </option>
                  <option value="SupremeCourtJustice">
                    Supreme Court Justice
                  </option>
                  <option value="CourtOfAppealsJudge">
                    Court of Appeals Judge
                  </option>
                  <option value="PublicServiceCommissioner">
                    Public Service Commissioner
                  </option>
                  <option value="AttorneyGeneral">Attorney General</option>
                  <option value="StateTreasurer">State Treasurer</option>
                  <option value="CommissionerOfAgriculture">
                    Commissioner of Agriculture
                  </option>
                  <option value="StateAuditor">State Auditor</option>
                  <option value="SecretaryOfState">Secretary of State</option>
                  <option value="PublicServiceCommissionPresident">
                    Public Service Commission President
                  </option>
                  <option value="SupremeCourtAssociateJustice">
                    Supreme Court Associate Justice
                  </option>
                  <option value="SupremeCourtChiefJustice">
                    Supreme Court Chief Justice
                  </option>
                  <option value="CommissionerOfStateLands">
                    Commissioner of State Lands
                  </option>
                  <option value="StateSupremeCourtJustice">
                    State Supreme Court Justice
                  </option>
                  <option value="StateMineInspector">
                    State Mine Inspector
                  </option>
                  <option value="SuperintendentOfPublicInstruction">
                    Superintendent of Public Instruction
                  </option>
                  <option value="CorporationCommissioner">
                    Corporation Commissioner
                  </option>
                  <option value="StateController">State Controller</option>
                  <option value="InsuranceCommissioner">
                    Insurance Commissioner
                  </option>
                  <option value="StateComptroller">State Comptroller</option>
                  <option value="Mayor">Mayor</option>
                  <option value="CityCouncilChairman">
                    City Council Chairman
                  </option>
                  <option value="CityCouncilMember">City Council Member</option>
                  <option value="AuditorOfAccounts">Auditor of Accounts</option>
                  <option value="ChiefFinancialOfficer">
                    Chief Financial Officer
                  </option>
                  <option value="OfficeOfHawaiianAffairsTrustee">
                    Office of Hawaiian Affairs Trustee
                  </option>
                  <option value="StateAuditorOfPublicAccounts">
                    State Auditor of Public Accounts
                  </option>
                  <option value="BoardofElementaryandSecondaryEducationMember">
                    Board of Elementary and Secondary Education Member
                  </option>
                  <option value="CommissionerofInsurance">
                    Commissioner of Insurance
                  </option>
                  <option value="SecretaryoftheCommonwealth">
                    Secretary of the Commonwealth
                  </option>
                  <option value="StateBoardofEducationMember">
                    State Board of Education Member
                  </option>
                  <option value="UniversityTrustee">University Trustee</option>
                  <option value="Regent">Regent</option>
                  <option value="UniversityGovernor">
                    University Governor
                  </option>
                  <option value="CommissionerofLabor">
                    Commissioner of Labor
                  </option>
                  <option value="TaxCommissioner">Tax Commissioner</option>
                  <option value="PublicAdvocate">Public Advocate</option>
                  <option value="CityComptroller">City Comptroller</option>
                  <option value="CourtofCriminalAppealsJudge">
                    Court of Criminal Appeals Judge
                  </option>
                  <option value="AuditorGeneral">Auditor General</option>
                  <option value="GeneralTreasurer">General Treasurer</option>
                  <option value="SuperintendentofEducation">
                    Superintendent of Education
                  </option>
                  <option value="PublicUtilitiesCommissioner">
                    Public Utilities Commissioner
                  </option>
                  <option value="SchoolandStateLandCommissioner">
                    School and State Land Commissioner
                  </option>
                  <option value="RailroadCommissioner">
                    Railroad Commissioner
                  </option>
                  <option value="CommissionerofGeneralLandOffice">
                    Commissioner of General Land Office
                  </option>
                  <option value="ComptrollerofPublicAccounts">
                    Comptroller of Public Accounts
                  </option>
                </select>
                <select
                  value={partyInput}
                  onChange={(e) => setPartyInput(e.target.value)}
                  className="bg-[#fff] w-[100%] outline-0 cursor-pointer md:w-[20%] py-[5px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#023a51]  border-yellow"
                >
                  <option value="all">All</option>
                  <option value="Democratic Party">Democratic Party</option>
                  <option value="Republican Party">Republican Party</option>
                  <option value="Unaffiliated">Unaffiliated</option>
                  <option value="Democratic-Farmer-Labor Party">
                    Democratic-Farmer-Labor Party
                  </option>
                  <option value="Nonpartisan">Nonpartisan</option>
                  <option value="Unknown">Unknown</option>
                </select>
                <button
                  onClick={officeFilter}
                  className="bg-[#023a51] w-[100%] outline-0 cursor-pointer md:w-[17%] py-[5px] md:text[16px] lg:text-[18px] md:leading-[18px] lg:py-[15px] rounded-[5px] mt-4 mx-[5px]  font-bold text-[12px] leading-[13px] text-[#fff]  border-yellow"
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
              <div className="flex flex-wrap mx-2 mb-10 m-auto justify-start">
                {filter.filterName === "all" &&
                  allofficials.map((item, index) => {
                    const {
                      name,
                      address,
                      party,
                      urls,
                      emails,
                      photoUrl,
                      office,
                      channels,
                      phones,
                    } = item;
                    if (selectedParty === "all") {
                      return (
                        <div
                          key={index}
                          className="card flex flex-col w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%] rounded-lg "
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
                            <p className=" text-[14px] office_name py-[5px] ">
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
                                  <p className="ml-[5px] text-[14px] official_email official_address py-[10px] ">
                                    {item.line1} {item.city} {item.state}{" "}
                                    {item.zip}
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
                                    <p className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
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
                      );
                    }
                    if (party === selectedParty) {
                      return (
                        <div
                          key={index}
                          className="card flex flex-col w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%] rounded-lg "
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
                            <p className=" text-[14px] office_name py-[5px] ">
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
                                  <p className="ml-[5px] text-[14px] official_email official_address py-[10px] ">
                                    {item.line1} {item.city} {item.state}{" "}
                                    {item.zip}
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
                                    <p className="ml-[5px] mt-[5px] text-[#023a51] truncate  ">
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
                      );
                    }
                  })}
                {filter.filterName !== "all" &&
                  allofficials
                    ?.filter(
                      (official) =>
                        official.office.levels[0] === filter.filterName
                    )
                    .map((item, index) => {
                      const {
                        name,
                        address,
                        party,
                        urls,
                        emails,
                        photoUrl,
                        office,
                        channels,
                        phones,
                      } = item;
                      if (party === selectedParty) {
                        return (
                          <div
                            key={index}
                            className="card flex flex-col rounded-lg w-[100%] h-[600px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%]"
                          >
                            {photoUrl ? (
                              <div className="img_container">
                                <Image
                                  src={`/api/imageProxy?url=${encodeURIComponent(
                                    photoUrl
                                  )}`}
                                  alt="photo"
                                  width={"100%"}
                                  height={"100px"}
                                  layout="responsive"
                                  className="rounded-lg"
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
                                  className="officialsImage rounded-lg"
                                  src={placeholderImg}
                                  alt="photo"
                                  width={"100%"}
                                  height={"80px"}
                                  layout="responsive"
                                />
                              </div>
                            )}
                            <div className="official_info grow">
                              <p className=" office_name py-[5px] ">
                                {office.name}
                              </p>
                              <h1 className="text-[23px] text-[#023a51] font-bold ">
                                {name}
                              </h1>
                              <p className=" py-[5px]">{party}</p>
                              {address?.map((item, index) => {
                                return (
                                  <div key={index} className="flex">
                                    <FaMapMarkerAlt
                                      color="#023a51"
                                      size={30}
                                      className="pt-[10px]"
                                    />{" "}
                                    <p className=" ml-[5px] official_address py-[10px] ">
                                      {item.line1} {item.city} {item.state}{" "}
                                      {item.zip}
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
                                      <p className="ml-[5px] mt-[5px] text-[#023a51] truncate   ">
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
                        );
                      }
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
