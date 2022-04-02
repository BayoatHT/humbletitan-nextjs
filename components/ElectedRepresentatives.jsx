import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import axios from "axios";
import { Store } from "../utils/store";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function ElectedRepresentatives() {
  const { state } = useContext(Store);
  const { voterAddress } = state;
  const [officials, setOfficials] = useState("");
  const [offices, setOffices] = useState("");
  const [officailIndeces, setOfficailIndeces] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${voterAddress}`
    );
    console.log(data);
    setOfficials(data.officials);
    setOffices(data.offices);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(officials);
  console.log(offices);
  return (
    <section className="mx-auto ">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg">
            <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between">
              {offices &&
                offices.map((office, index) => {
                  // setOfficailIndeces([
                  //   ...officailIndeces,
                  //   office.officailIndeces,
                  // ]);
                  return (
                    <div
                      key={index}
                      className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 "
                    >
                      <div>
                        <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  text-[#023a51] mt-4">
                          {office.name}
                        </h4>
                      </div>

                      <div className="flex justify-between items-center flex-col sm:flex-row">
                        <div className="relative  sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg mt-4 overflow-hidden">
                          <span className="img_container">
                            <Image
                              src={placeholderImg}
                              className="absolute object-cover"
                              alt=""
                              layout="responsive"
                            />
                          </span>
                        </div>

                        <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center p-5 rounded-lg mt-4">
                          <li className="font-regular text-[16px] leading-[20px] text-[#023a51] ">
                            <span>{office.officialIndices}</span>
                          </li>
                          <li className="font-regular text-[12px] leading-[20px] text-[#023a51] ">
                            {}
                          </li>
                          <li className="flex font-regular text-[12px] leading-[20px] text-[#023a51] ">
                            <FaPhoneAlt />
                            {}
                          </li>
                          {/* {item.emails && (
                            <li className="font-regular text-[12px] leading-[20px] text-[#023a51] ">
                              Email: {item.emails}
                            </li>
                          )} */}

                          {/* {item.channels &&
                            item.channels.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  {item.type} :{item.id}
                                </li>
                              );
                            })} */}
                          {/* {item.address &&
                            item.address.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  Address:{" "}
                                  {item.line1 +
                                    " " +
                                    item.city +
                                    " " +
                                    item.state +
                                    " " +
                                    item.zip}
                                </li>
                              );
                            })} */}
                          {/* {item.urls &&
                            item.urls.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular flex text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  <FaLink />
                                  {item}
                                </li>
                              );
                            })} */}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              {/* {officials &&
                officials.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 "
                    >
                      {/* {offices &&
                        offices.map((office, index) => {
                          return (
                            <div key={index}>
                              <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  text-[#023a51] mt-4">
                                {office.name}
                              </h4>
                            </div>
                          );
                        })} 

                      <div className="flex justify-between items-center flex-col sm:flex-row">
                        <div className="relative  sm:w-[45%] w-[100%] m-auto h-[200px] rounded-lg mt-4 overflow-hidden">
                          <span className="img_container">
                            <Image
                              src={placeholderImg}
                              className="absolute object-cover"
                              alt=""
                              layout="responsive"
                            />
                          </span>
                        </div>

                        <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center p-5 rounded-lg mt-4">
                          <li className="font-regular text-[16px] leading-[20px] text-[#023a51] ">
                            <span>{item.name}</span>
                          </li>
                          <li className="font-regular text-[12px] leading-[20px] text-[#023a51] ">
                            {item.party}
                          </li>
                          <li className="flex font-regular text-[12px] leading-[20px] text-[#023a51] ">
                            <FaPhoneAlt />
                            {item.phones}
                          </li>
                          {item.emails && (
                            <li className="font-regular text-[12px] leading-[20px] text-[#023a51] ">
                              Email: {item.emails}
                            </li>
                          )}

                          {item.channels &&
                            item.channels.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  {item.type} :{item.id}
                                </li>
                              );
                            })}
                          {item.address &&
                            item.address.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  Address:{" "}
                                  {item.line1 +
                                    " " +
                                    item.city +
                                    " " +
                                    item.state +
                                    " " +
                                    item.zip}
                                </li>
                              );
                            })}
                          {item.urls &&
                            item.urls.map((item, index) => {
                              return (
                                <li
                                  key={index}
                                  className="font-regular flex text-[12px] leading-[20px] text-[#023a51] "
                                >
                                  <FaLink />
                                  {item}
                                </li>
                              );
                            })}
                        </ul>
                      </div>
                    </div>
                  );
                })} */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
