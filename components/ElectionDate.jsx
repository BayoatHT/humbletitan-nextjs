import React, { useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Store } from "../utils/store";
export default function ElectionDate({ data, stateName }) {
  const { state } = useContext(Store);
  return (
    <section className="mx-auto py-10 bg-[#f7f7f7]">
      <div className=" text-[#023a51]  container w-12/12 mx-auto max-w-screen-xl ">
        {data?.length !== 0 ? (
          <h4 className="text-[25px] sm:text-[35px] text-center">
            Upcomming Election(s) in ${stateName}
          </h4>
        ) : (
          <h4 className="text-[25px] sm:text-[35px] text-center">
            We provide data the nearer we are to an election. The next chance to
            vote in <span className="font-bold"> {stateName} </span> won&apos;t
            be here for a bit. In the meantime, prepare with our guide on
            what&apos;s coming and who&apos;s already represent you.
          </h4>
        )}
        {state.countyName && (
          <span className="font-bold text-[25px] sm:text-[35px]">
            and in {state.countyName}
          </span>
        )}

        <div className="flex mt-[20px] flex-col items-center justify-center">
          <div>
            {data
              ?.filter((item) => item.statusOfData !== "Expired")
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
    </section>
  );
}
