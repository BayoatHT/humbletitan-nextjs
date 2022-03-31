import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import placeholderImg from "../assets/images/PLACE-HOLDER-600x348.jpg";
import axios from "axios";
import { Store } from "../utils/store";
import { FaPhoneAlt } from "react-icons/fa";

export default function ElectedRepresentatives() {
  const { state } = useContext(Store);
  const { voterAddress } = state;
  const [officials, setOfficials] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${voterAddress}`
    );
    console.log(data);
    setOfficials(data.officials);
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(officials);
  return (
    <section className="mx-auto ">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg">
            <div className="flex flex-wrap mx-4 mb-10 m-auto justify-between">
              {officials &&
                officials.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-6/12 mt-10 "
                    >
                      {/* <div>
                        <h4 className="font-bold text-[28px] lg:text-[35px] xl:text-[3rem] leading-[47px]  text-[#023a51] mt-4">
                          President
                        </h4>
                      </div> */}
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

                        <ul className="bg-[#e0ecf0] sm:w-[45%] w-[100%] m-auto h-[200px] flex flex-col justify-center items-center rounded-lg mt-4">
                          <li className="font-regular text-[20px] leading-[35px] text-[#023a51] ">
                            <span>{item.name}</span>
                          </li>
                          <li className="font-regular text-[16px] leading-[35px] text-[#023a51] ">
                            {item.party}
                          </li>
                          <li className="font-regular text-[16px] leading-[35px] text-[#023a51] ">
                            <FaPhoneAlt />
                            {item.phones}
                          </li>
                          <li className="font-regular text-[18px] leading-[35px] text-[#023a51] ">
                            {item.emails}
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
