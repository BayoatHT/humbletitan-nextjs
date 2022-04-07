import React, { useContext } from "react";
import Link from "next/link";
import { Store } from "../utils/store";

export default function BrowseByState() {
  const { dispatch } = useContext(Store);
  const states = [
    "Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    "North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming",
  ];

  return (
    <div className="px-[10px]">
      <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg  rounded-b-none">
        <h5 className="font-bold text-[18px] mt-12 ml-2 leading-[27px] text-[#023a51]">
          Browse By State:
        </h5>
      </div>

      <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg rounded-t-none">
        <div className="flex flex-wrap mx-4 mb-10 m-auto justify-start md:justify-between ">
          <div className="w-12/12 ">
            <ul className="flex flex-wrap justify-between ">
              {states.map((state, index) => {
                return (
                  <Link
                    onClick={() =>
                      dispatch({ type: "STATE_DATA", payload: state })
                    }
                    href={`/state/${state}`}
                    key={index}
                    passHref
                  >
                    <li className="mt-10 cursor-pointer font-bold-2 text-[#3b3a3a] text-[1rem] style-heading transition duration-150 ease-out w-[45%] md:w-[33.3%] lg:w-[20%] ">
                      {state}
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
