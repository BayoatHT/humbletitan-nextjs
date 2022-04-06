import React from "react";

export default function UpcommingElections({ majorElections }) {
  return (
    <section className="mx-auto py-4 pt-12">
      <div className="container w-10/12 mx-auto max-w-screen-xl">
        <div className="flex flex-wrap mx-4 mb-10 m-auto">
          <div className="flex flex-col mb-10">
            <h2 className="font-bold text-[35px] md:text-[3rem] mb-10 text-[#023a51] leading-[47px]">
              Upcoming Us Major Elections
            </h2>
          </div>

          <div className="container w-12/12 mx-auto px-[20px] bg-[#efeded] max-w-screen-xl rounded-lg">
            <div className="flex justify-between flex-row ">
              <h2 className="my-4 font-bold text-[1.5rem] bg-[#e0ecf0]  w-[63%]  rounded-lg h-[50px] pt-[5px] text-center">
                Election Name
              </h2>
              <h2 className="my-4 font-bold text-[1.5rem] bg-[#e0ecf0]  w-[32%]  rounded-lg h-[50px] pt-[5px] text-center">
                Date
              </h2>
            </div>

            {majorElections?.map((item, index) => {
              return (
                <div key={index} className="flex justify-between flex-row ">
                  <h2
                    key={index}
                    type="text"
                    className=" my-4 font-bold text-[1rem] bg-[#fff]  w-[63%]  rounded-lg leading-loose h-[40px] py-[5px] px-[10px] "
                  >
                    {item.name}
                  </h2>
                  <h2
                    key={index}
                    type="text"
                    className="my-4 font-bold text-[1rem] bg-[#fff]  w-[32%]  rounded-lg leading-loose h-[40px] py-[5px] px-[10px] "
                  >
                    {item.electionDay}
                  </h2>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
