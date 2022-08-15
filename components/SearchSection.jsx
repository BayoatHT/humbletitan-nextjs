import React, { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Store } from "../utils/store";
import { Puff } from 'react-loading-icons'


export default function SearchSection(props) {
  const { dispatch } = useContext(Store);
  const [searchText, setSearchText] = useState("Search");
  const router = useRouter();
  const [address, setAddress] = useState("");
  const searchHandler = () => {
    if (address == "") {
      alert("Input your full address");
    } else {
      setSearchText(<Puff />);
      dispatch({ type: "ADD_VOTER_ADDRESS", payload: address });
      localStorage.setItem("voter_address", address);
      router.push(`/politics/election-center/${address}`);
    }
  };

  return (
    <>
      <section className="mx-auto bg-[#e0ecf0] py-4">
        <div className="container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
          <div className="mx-auto w-10/12 md:w-10/12 ">
            <h2 className="font-bold  text-[40px] leading-[40px] md:leading-[50px] pt-8 text-center text-[#023a51]">
              Start with your address
            </h2>
            <p className="text-center font-regular text-[26px] leading-[35px] pt-8 m-auto text-[#023a51] w-[100%] lg:w-[70%] md:w-[95%] ">
              Find out where to vote. See what&apos;s on the ballot. Contact
              your election officials.
            </p>

            <div className="_vit py-8 relative flex gap-x-[1%] gap-y-[16px] items-center justify-center flex-col md:flex-row">
              <input
                id="autocomplete"
                type="text"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
                className=" border-width-[1px] pl-[16px] border-slate-700 border-solid lg:w-[70%] h-[60px]  rounded-[5px] w-[100%] placeholder:italic placeholder:font-regular placeholder: leading-[20px]"
                placeholder="e.g., 1452 E 53rd St, Chicago, IL"
                name="search"
              />

              <button
                onClick={searchHandler}
                className="bg-[#00d665] flex items-center justify-center text-[16px] h-[60px] font-bold leading-[15px]  lg:px-[1rem] px-[10px] rounded-[5px] w-[100%] md:w-[15%] text-[#fff]"
              >
                {searchText}
              </button>
            </div>
            <h6 className=" mb-2  font-regular text-[1rem] text-[#023a51] rounded-lg ml-[0%] lg:ml-[7%] ">
              Language
            </h6>
            <select className="bg-[#eeeeee]  mb-4 px-3 py-2 font-regular text-[1rem] text-[#023a51] rounded-[5px] ml-[0%] lg:ml-[7%] w-[100%] md:w-[20%]  border-width-[1px] border-slate-700 border-solid ">
              <option>English</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      officials,
    },
  };
}
