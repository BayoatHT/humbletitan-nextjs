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
    fedral: false,
    state: false,
    local: false,
    filterName: "all",
  });
  const colored =
    "bg-[#023a51] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#fff] border-yellow";
  const white =
    "bg-[#fff] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#023a51] border-yellow";
  return (
    <>
      <section className="mx-auto py-4 pt-12">
        <div className="container w-10/12 mx-auto max-w-screen-xl">
          <div className="flex flex-wrap mx-4 mb-10 m-auto">
            <div className="flex flex-col">
              <h2 className="font-bold text-[40px] md:text-[55px] leading-[50px] mb-2 text-[#023a51]">
                The Elected Directory
              </h2>
            </div>
            <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg mt-[0.5rem]">
              <h6 className="font-bold text-[28px] lg:text-[28px] leading-[47px]  my-4 text-[#023a51]">
                Filters
              </h6>
              <div className="flex flex-wrap mb-10 mt-[0.5rem]  justify-between  items-center m-auto">
                <button
                  onClick={() => {
                    setFilter({
                      all: true,
                      fedral: false,
                      state: false,
                      local: false,
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
                      fedral: true,
                      state: false,
                      local: false,
                      filterName: "administrativeArea1",
                    });
                  }}
                  className={filter.fedral ? colored : white}
                >
                  administrativeArea1
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      fedral: false,
                      state: true,
                      local: false,
                      filterName: "administrativeArea2",
                    });
                  }}
                  className={filter.state ? colored : white}
                >
                  administrativeArea2
                </button>
                <button
                  onClick={() => {
                    setFilter({
                      all: false,
                      fedral: false,
                      state: false,
                      local: true,
                    });
                  }}
                  className={filter.local ? colored : white}
                >
                  Local
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
              <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between">
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
                      <div key={index} className="card">
                        {photoUrl ? (
                          <Image
                            src={`/api/imageProxy?url=${encodeURIComponent(
                              photoUrl
                            )}`}
                            alt="John"
                            width={"100%"}
                            height={"100px"}
                            layout="responsive"
                          />
                        ) : (
                          <Image
                            className="officialsImage"
                            src={placeholderImg}
                            layout="responsive"
                            alt="official name"
                          />
                        )}
                        <div className="official_info">
                          <h1>{name}</h1>
                          <p>{office.name}</p>
                          <p>{party}</p>
                          {address?.map((item, index) => {
                            return (
                              <div key={index} className="flex">
                                <FaMapMarkerAlt
                                  color="#023a51"
                                  size={24}
                                  className="pt-[5px]"
                                />{" "}
                                <p className="ml-[5px]">
                                  {item.line1} {item.city} {item.state}{" "}
                                  {item.zip}
                                </p>
                              </div>
                            );
                          })}
                          {emails && (
                            <div className="flex">
                              <MdAlternateEmail
                                color="#023a51"
                                size={24}
                                className="pt-[5px]"
                              />
                              <p className="ml-[5px]">{emails}</p>
                            </div>
                          )}
                          <div
                            className="social_links"
                            style={{ margin: "24px 0" }}
                          >
                            {channels?.map((item, index) => {
                              return item.type == "Facebook" ? (
                                <Link
                                  className="hover:text-[#000]"
                                  key={index}
                                  href={`https://www.facebook.com/${item.id}`}
                                  passHref
                                >
                                  <TiSocialFacebookCircular
                                    color="#3b5998"
                                    size={"24px"}
                                  />
                                </Link>
                              ) : item.type == "Twitter" ? (
                                <Link
                                  href={`https://www.twitter.com/${item.id}`}
                                  passHref
                                >
                                  <TiSocialTwitter
                                    color="#1DA1F2"
                                    size={"24px"}
                                  />
                                </Link>
                              ) : item.type == "YouTube" ? (
                                <Link
                                  href={`https://www.youtube.com/${item.id}`}
                                  passHref
                                >
                                  <TiSocialYoutubeCircular
                                    color="#FF0000"
                                    size={"24px"}
                                  />
                                </Link>
                              ) : null;
                            })}
                          </div>
                          <div className="flex mr-[10px] cursor-pinter justify-center items-center">
                            {urls?.map((item, index) => {
                              return (
                                <Link
                                  className="hover:text-[#000] "
                                  key={index}
                                  href={item}
                                  passHref
                                >
                                  <a>
                                    <FaLink size={"20px"} color="#023a51" />
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
                        <div key={index} className="card">
                          {photoUrl ? (
                            <Image
                              src={`/api/imageProxy?url=${encodeURIComponent(
                                photoUrl
                              )}`}
                              alt="John"
                              width={"100%"}
                              height={"100%"}
                              layout="responsive"
                            />
                          ) : (
                            <Image
                              className="officialsImage"
                              src={placeholderImg}
                              layout="responsive"
                              alt="official name"
                            />
                          )}
                          <div className="official_info">
                            <h1>{name}</h1>
                            <p>{office.name}</p>
                            <p>{party}</p>
                            {address?.map((item, index) => {
                              return (
                                <div key={index} className="flex">
                                  <FaMapMarkerAlt
                                    color="#023a51"
                                    size={24}
                                    className="pt-[5px]"
                                  />{" "}
                                  <p className="ml-[5px]">
                                    {item.line1} {item.city} {item.state}{" "}
                                    {item.zip}
                                  </p>
                                </div>
                              );
                            })}
                            {emails && (
                              <div className="flex">
                                <MdAlternateEmail
                                  color="#023a51"
                                  size={24}
                                  className="pt-[5px]"
                                />
                                <p className="ml-[5px]">{emails}</p>
                              </div>
                            )}
                            <div
                              className="social_links"
                              style={{ margin: "24px 0" }}
                            >
                              {channels?.map((item, index) => {
                                return item.type == "Facebook" ? (
                                  <Link
                                    className="hover:text-[#000]"
                                    key={index}
                                    href={`https://www.facebook.com/${item.id}`}
                                    passHref
                                  >
                                    <TiSocialFacebookCircular
                                      color="#3b5998"
                                      size={"24px"}
                                    />
                                  </Link>
                                ) : item.type == "Twitter" ? (
                                  <Link
                                    href={`https://www.twitter.com/${item.id}`}
                                    passHref
                                  >
                                    <TiSocialTwitter
                                      color="#1DA1F2"
                                      size={"24px"}
                                    />
                                  </Link>
                                ) : item.type == "YouTube" ? (
                                  <Link
                                    href={`https://www.youtube.com/${item.id}`}
                                    passHref
                                  >
                                    <TiSocialYoutubeCircular
                                      color="#FF0000"
                                      size={"24px"}
                                    />
                                  </Link>
                                ) : null;
                              })}
                            </div>
                            <div className="flex mr-[10px] cursor-pinter justify-center items-center">
                              {urls?.map((item, index) => {
                                return (
                                  <Link
                                    className="hover:text-[#000]"
                                    key={index}
                                    href={`https://www.facebook.com/${item.id}`}
                                    passHref
                                  >
                                    <FaLink size={"20px"} color="#023a51" />
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
