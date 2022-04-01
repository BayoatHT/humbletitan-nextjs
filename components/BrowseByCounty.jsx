import React from "react";

const counties = [
  {
    name: "Autauga County ",
  },
  {
    name: "Baldwin County ",
  },
  {
    name: "Barbour County ",
  },
  {
    name: "Bibb County ",
  },
  {
    name: "Blount County ",
  },
  {
    name: "Bullock County ",
  },
  {
    name: "Butler County ",
  },
  {
    name: "Calhoun County ",
  },
  {
    name: "Chambers County ",
  },
  {
    name: "Cherokee County ",
  },
  {
    name: "Chilton County ",
  },
  {
    name: "Choctaw County ",
  },
  {
    name: "Clarke County ",
  },
  {
    name: "Clay County ",
  },
  {
    name: "Cleburne County ",
  },
  {
    name: "Coffee County ",
  },
  {
    name: "Colbert County ",
  },
  {
    name: "Conecuh County ",
  },
  {
    name: "Coosa County ",
  },
  {
    name: "Covington County ",
  },
  {
    name: "Crenshaw County ",
  },
  {
    name: "Cullman County ",
  },
  {
    name: "Dale County ",
  },
  {
    name: "Dallas County ",
  },
  {
    name: "DeKalb County ",
  },
  {
    name: "Elmore County ",
  },
  {
    name: "Escambia County ",
  },
  {
    name: "Etowah County ",
  },
  {
    name: "Fayette County ",
  },
  {
    name: "Franklin County ",
  },
  {
    name: "Geneva County ",
  },
  {
    name: "Greene County ",
  },
  {
    name: "Hale County ",
  },
  {
    name: "Henry County ",
  },
  {
    name: "Houston County ",
  },
  {
    name: "Jackson County ",
  },
  {
    name: "Jefferson County ",
  },
  {
    name: "Lamar County ",
  },
  {
    name: "Lauderdale County ",
  },
  {
    name: "Lawrence County ",
  },
  {
    name: "Lee County ",
  },
  {
    name: "Limestone County ",
  },
  {
    name: "Lowndes County ",
  },
  {
    name: "Macon County ",
  },
  {
    name: "Madison County ",
  },
  {
    name: "Marengo County ",
  },
  {
    name: "Marion County ",
  },
  {
    name: "Marshall County ",
  },
  {
    name: "Mobile County ",
  },
  {
    name: "Monroe County ",
  },
  {
    name: "Montgomery County ",
  },
  {
    name: "Morgan County ",
  },
  {
    name: "Perry County ",
  },
  {
    name: "Pickens County ",
  },
  {
    name: "Pike County ",
  },
  {
    name: "Randolph County ",
  },
  {
    name: "Russell County ",
  },
  {
    name: "St. Clair County ",
  },
  {
    name: "Shelby County ",
  },
  {
    name: "Sumter County ",
  },
  {
    name: "Talladega County ",
  },
  {
    name: "Tallapoosa County ",
  },
  {
    name: "Tuscaloosa County ",
  },
];

export default function BrowseByCounty() {
  return (
    <div>
      <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg  rounded-b-none">
        <h5 className="font-bold text-[18px] mt-12 ml-2 leading-[27px] text-[#023a51]">
          Browse By County:
        </h5>
      </div>

      <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg rounded-t-none">
        <div className="flex flex-wrap mx-4 mb-10 m-auto justify-start md:justify-between ">
          <div className="w-12/12 ">
            <ul className="flex flex-wrap ">
              {counties.map((county, index) => {
                return (
                  <li
                    key={index}
                    className="mt-12 font-bold-2 text-[1rem] style-heading transition duration-150 ease-out w-[33.3%] md:w-[20%]"
                  >
                    {county.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
