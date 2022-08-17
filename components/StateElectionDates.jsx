import React, { useContext } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Store } from "../utils/store";

const dateToday = new Date()
export default function StateElectionDates({ data, stateName, majorElections }) {
    const { state } = useContext(Store);
    return (
        <section className=" bg-[#f7f7f7]  ">
            <div className="container mx-auto py-4 pt-16 flex flex-wrap max-w-screen-xl" >
                <div className="mx-auto flex flex-col  w-12/12 lg:w-6/12  py-10 bg-[#f7f7f7]">
                    <div className=" text-[#023a51]  ">
                        {data?.length !== 0 ? (
                            <h4 className=" sm:text-[35px] font-bold text-[35px] md:text-[2.5rem] text-center text-[#023a51] ">
                                Upcomming Election(s) <br /> in{" "}
                                <span className="font-bold"> {stateName} </span>
                            </h4>
                        ) : (
                            <h4 className="text-[25px] px-[15px] sm:text-[35px] text-[#023a51] text-justify">
                                We provide data the nearer we are to an election. The next election in <span className="font-bold"> {stateName} </span> won&apos;t
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
                                { data && data.filter((item) => item.statusOfData !== "Expired" && new Date(item.electionDate) >= dateToday)?.map((item, index) => {
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
                                    }
                                )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-12/12 lg:w-6/12 py-4 pt-12 md:border-left">
                    <div className="  mx-auto">
                        <div className="flex flex-wrap mx-4 mb-10 m-auto">
                            <div className="flex flex-col mb-10">
                                <h2 className="font-bold text-[35px] md:text-[2.5rem] text-center text-[#023a51] ">
                                    Upcomming Major Elections - U.S.A
                                </h2>
                            </div>

                            <div className="container mx-auto px-[10px] pb-[10px] bg-[#efeded] rounded-lg">
                                <div className="flex justify-between flex-row ">
                                    <h2 className="my-4 font-bold text-[1rem] leading-[40px] md:leading-[50px] md:text-[1.5rem] bg-[#e0ecf0]  w-[65%]  rounded-lg h-[40px] md:h-[50px]  text-center">
                                        Election Name
                                    </h2>
                                    <h2 className="my-4 font-bold text-[1rem] leading-[40px] md:leading-[50px] md:text-[1.5rem] bg-[#e0ecf0]  w-[30%]  rounded-lg h-[40px] md:h-[50px]  text-center">
                                        Date
                                    </h2>
                                </div>

                                {majorElections?.filter((item) => !item.name.includes("Test"))
                                    .map((item, index) => {
                                        return (
                                            <div key={index} className="flex justify-between flex-row ">
                                                <h2
                                                    key={index}
                                                    type="text"
                                                    className=" mb-2 font-bold leading-[30px] md:leading-[40px] md:text-[1rem] text-[.7rem]  bg-[#fff]  w-[65%] whitespace-nowrap text-ellipsis overflow-hidden rounded-lg h-[30px] md:h-[40px] px-[10px] "
                                                >
                                                    {item.name}
                                                </h2>
                                                <h2
                                                    key={index}
                                                    type="text"
                                                    className="mb-2 font-bold leading-[30px] md:leading-[40px] md:text-[1rem] text-[.7rem] bg-[#fff]  w-[30%]  rounded-lg h-[30px] md:h-[40px] text-center "
                                                >
                                                    {item.electionDay}
                                                </h2>
                                            </div>
                                        );
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}