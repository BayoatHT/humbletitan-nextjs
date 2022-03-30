import React from "react";

export default function UpcommingElections({ state }) {
  return (
    <section className="mx-auto py-4 pt-12">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="flex flex-col mb-10">
            {state ? (
              <h2 className="font-bold text-[40px] md:text-[60px] leading-[70px] mb-4 text-[#023a51]">
                {state}
              </h2>
            ) : null}
            <h2 className="font-bold text-[35px] md:text-[3rem] mb-10 text-[#023a51] leading-[47px]">
              Upcoming Us Elections
            </h2>
          </div>

          <div className="container w-12/12 mx-auto bg-[#efeded] max-w-screen-xl rounded-lg">
            <div className="flex flex-wrap mx-4 mb-10 mt-10 justify-between  m-auto">
              <div className="w-12/12 md:w-6/12 items-center flex flex-col w-full md:w-[50%]">
                <h2 className="my-4 font-bold text-[1.5rem] bg-[#e0ecf0] w-[100%] md:w-[90%]  rounded-lg h-[50px] pt-[5px] text-center">
                  Where
                </h2>
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
              </div>
              <div className="w-12/12 md:w-6/12 items-center flex flex-col w-full md:w-[50%]">
                <h2 className="my-4 font-bold text-[1.5rem] bg-[#e0ecf0]  w-[100%] md:w-[90%] rounded-lg h-[50px] pt-[5px] text-center">
                  When
                </h2>
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
                <input
                  type="text"
                  className=" w-[100%] md:w-[90%] rounded-lg border-none my-2 h-[50px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
