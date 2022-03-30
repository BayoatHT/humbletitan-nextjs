import React from "react";

export default function DiscoverByState() {
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

  return (
    <section className="mx-auto py-4 pt-16">
      <div className="container w-10/12 mx-auto max-w-screen-xl ">
        <div className="flex flex-wrap mx-4 mb-10 m-auto ">
          <h2 className="font-bold text-[35px] md:text-[3rem] leading-[47px] leading-[47px] mb-8 text-[#023a51]">
            Discover elected representatives in each state
          </h2>

          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg  rounded-b-none">
            <h5 className="font-bold text-[18px] mt-12 ml-2 leading-[27px] text-[#023a51]">
              Browse By State:
            </h5>
          </div>

          <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg rounded-t-none">
            <div className="flex flex-wrap mx-4 mb-10 m-auto justify-start md:justify-between ">
              <div className="w-12/12 ">
                <ul className="flex flex-wrap ">
                  {states.map((state, index) => {
                    return (
                      <li
                        key={index}
                        className="mt-12 font-bold-2 text-[1rem] style-heading transition duration-150 ease-out w-[33.3%] md:w-[20%]"
                      >
                        {state}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          {/* <!-- <div className="container w-12/12 mx-auto  max-w-screen-xl rounded-lg rounded-t-none">
                                  <div className="flex flex-wrap mx-4 mb-10 m-auto justify-start md:justify-between ">
              
                                      <div className="w-12/12: w-[25%] md:w-2/12 line-set">
              
                                          <ul>
                                              <li className="mt-12 font-bold-2 text-[1rem] style-heading transition duration-150 ease-out ">1qAlaska</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-[2s] ease-out ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  transition duration-150 ease-out  ">California</li>
                                          </ul>
                                      </div>
                                      <div className="w-12/12 md:w-2/12 w-[25%] line-set">
                                          <ul>
                                              <li className="mt-12 font-bold-2 text-[1rem] style-heading text-[#3b3a3a] leading-[27px]">Alaska</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                          </ul>
              
                                      </div>
                                      <div className="w-12/12 md:w-2/12 w-[25%] line-set">
                                          <ul>
                                              <li className="mt-12 font-bold-2 text-[1rem] style-heading text-[#3b3a3a] leading-[27px]">Alaska</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                          </ul>
                                      </div>
                                      <div className="w-12/12 md:w-2/12 w-[25%] line-set">
                                          <ul>
                                              <li className="mt-12 font-bold-2 text-[1rem] style-heading text-[#3b3a3a] leading-[27px]">Alaska</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px] ">California</li>
                                          </ul>
                                      </div>
                                      <div className="w-12/12 md:w-2/12 w-[25%] line-set">
                                          <ul>
                                              <li className="mt-12 font-bold-2 text-[1rem] style-heading text-[#3b3a3a] leading-[27px] ">AAlaska</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]   ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]   ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]   ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]   ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]   ">California</li>
                                              <li className="font-bold-2 text-[1rem] mt-8 style-heading text-[#3b3a3a] leading-[27px]  ">California</li>
                                          </ul>
                                      </div>
              
                                  </div>
              
                              </div> --> */}

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
      </div>
    </section>
  );
}
