import React from "react";
import ElectedRepresentatives from "./ElectedRepresentatives";

export default function ElectedDirectoryFilter() {
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
                <button className="bg-[#023a51] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#fff] ">
                  Fedral{" "}
                </button>
                <button className="bg-[#fff] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#023a51] border-yellow">
                  State{" "}
                </button>

                <button className="bg-[#fff] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#023a51] border-yellow">
                  Country
                </button>
                <button className="bg-[#fff] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#023a51] border-yellow">
                  Office
                </button>
                <button className="bg-[#fff] md:w-[18%] w-[45%] py-[20px]  rounded-[5px] mt-6 mx-[5px] font-bold text-[20px] leading-[25px] text-[#023a51] border-yellow">
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
