import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import { Store } from "../utils/store";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutubeCircular } from "react-icons/ti";

export default function ElectedRepresentatives({ officials }) {
  const aofficials = officials;
  console.log(aofficials);
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
  const colored =
    "bg-[#023a51]  w-[28%]  py-[5px] md:w-[18%] md-text[16px] lg:text-[18px] lg:py-[15px] whitespace-nowrap overflow-hidden text-ellipsis   rounded-[5px] mt-6 mx-[5px] font-bold text-[12px] leading-[25px] text-[#fff] border-yellow";
  const white =
    "bg-[#fff] w-[28%] py-[5px] md:w-[18%] md-text[16px] lg:text-[18px] lg:py-[15px] rounded-[5px] mt-6 mx-[5px] whitespace-nowrap overflow-hidden text-ellipsis font-bold text-[12px] leading-[25px] text-[#023a51] border-yellow";
  return (
    <>
      <section className="mx-auto py-4 pt-12">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="flex flex-col">
              <h2 className="font-bold text-[27px] md:text-[55px] leading-[50px] mb-2 text-[#023a51]">
                The Elected Directory
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
                  Administrative Area1
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
                  Administrative Area2
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
          </div>
        </div>
      </section>
      <section className="mx-auto ">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="container w-12/12 mx-auto max-w-screen-xl rounded-lg">
              <div className="flex flex-wrap mx-4 mb-10 m-auto justify-start">
                {filter.filterName === "all" &&
                  aofficials.map((item, index) => {
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
                    return (
                      <div
                        key={index}
                        className="card flex flex-col w-[100%] h-[550px] sm:h-[550px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%] "
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
                              className="grow-0 h-[100px] "
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
                              className="grow-0 h-[100px]"
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

                          <p className=" py-[5px]"> {party}</p>
                          {address?.map((item, index) => {
                            return (
                              <div key={index} className="flex">
                                <FaMapMarkerAlt
                                  color="#023a51"
                                  size={30}
                                  className="pt-[10px]"
                                />{" "}
                                <p className="ml-[5px] official_address py-[10px] ">
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
                                  <p className="ml-[5px] text-[#023a51] ">
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
                              <p className="float-left">Social Links: </p>;
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
                        <a href={`tel:${phones}`} className="contact_btn">
                          Contact
                        </a>
                      </div>
                    );
                  })}
                {filter.filterName !== "all" &&
                  aofficials
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
                      return (
                        <div
                          key={index}
                          className="card flex flex-col w-[100%] h-[450px] sm:h-[500px] md:w-[45%] mb-[20px] mx-[4px] lg:w-[32%]"
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
                              />
                            </div>
                          ) : (
                            <div className="img_container">
                              <Image
                                className="officialsImage"
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
                                    <p className="ml-[5px] text-[#023a51] ">
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
                                <p className="float-left">Social Links: </p>;
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
                          <a href={`tel:${phones}`} className="contact_btn">
                            Contact
                          </a>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
