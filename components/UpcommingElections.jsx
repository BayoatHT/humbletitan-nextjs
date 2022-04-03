import React, { useEffect } from "react";
import axios from "axios";

export default function UpcommingElections({ state }) {
  // const options = {
  //   method: "GET",
  //   url: "https://free-news.p.rapidapi.com/v1/search",
  //   params: { q: "new york", lang: "en", page: "2" },
  //   headers: {
  //     "X-RapidAPI-Host": "free-news.p.rapidapi.com",
  //     "X-RapidAPI-Key": "3be5ca2b13mshaf3263c772c5f80p1fc514jsnc025172a53f0",
  //   },
  // };
  // const fetchNews = async () => {
  //   axios
  //     .request(options)
  //     .then(function (response) {
  //       console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.error(error);
  //     });
  // };
  // useEffect(() => {
  //   fetchNews();
  // }, []);
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
