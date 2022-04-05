const offices = [
  {
    name: "President of the United States",
    divisionId: "ocd-division/country:us",
    levels: ["country"],
    roles: ["headOfGovernment", "headOfState"],
    officialIndices: [0],
  },
  {
    name: "Vice President of the United States",
    divisionId: "ocd-division/country:us",
    levels: ["country"],
    roles: ["deputyHeadOfGovernment"],
    officialIndices: [1],
  },
  {
    name: "U.S. Senator",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["country"],
    roles: ["legislatorUpperBody"],
    officialIndices: [2, 3],
  },
  {
    name: "U.S. Representative",
    divisionId: "ocd-division/country:us/state:il/cd:17",
    levels: ["country"],
    roles: ["legislatorLowerBody"],
    officialIndices: [4],
  },
  {
    name: "Governor of Illinois",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["headOfGovernment"],
    officialIndices: [5],
  },
  {
    name: "Lieutenant Governor of Illinois",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["deputyHeadOfGovernment"],
    officialIndices: [6],
  },
  {
    name: "IL State Comptroller",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["governmentOfficer"],
    officialIndices: [7],
  },
  {
    name: "IL State Treasurer",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["governmentOfficer"],
    officialIndices: [8],
  },
  {
    name: "IL Secretary of State",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["governmentOfficer"],
    officialIndices: [9],
  },
  {
    name: "IL Attorney General",
    divisionId: "ocd-division/country:us/state:il",
    levels: ["administrativeArea1"],
    roles: ["governmentOfficer"],
    officialIndices: [10],
  },
  {
    name: "Henry County State's Attorney",
    divisionId: "ocd-division/country:us/state:il/county:henry",
    levels: ["administrativeArea2"],
    roles: ["governmentOfficer"],
    officialIndices: [11],
  },
  {
    name: "Henry County Clerk and Recorder",
    divisionId: "ocd-division/country:us/state:il/county:henry",
    levels: ["administrativeArea2"],
    roles: ["governmentOfficer"],
    officialIndices: [12],
  },
  {
    name: "Henry County Coroner",
    divisionId: "ocd-division/country:us/state:il/county:henry",
    levels: ["administrativeArea2"],
    roles: ["governmentOfficer"],
    officialIndices: [13],
  },
  {
    name: "Henry County Treasurer",
    divisionId: "ocd-division/country:us/state:il/county:henry",
    levels: ["administrativeArea2"],
    roles: ["governmentOfficer"],
    officialIndices: [14],
  },
  {
    name: "Henry County Sheriff",
    divisionId: "ocd-division/country:us/state:il/county:henry",
    levels: ["administrativeArea2"],
    roles: ["governmentOfficer"],
    officialIndices: [15],
  },
];
const officials = [
  {
    name: "Joseph R. Biden",
    address: [
      {
        line1: "1600 Pennsylvania Avenue Northwest",
        city: "Washington",
        state: "DC",
        zip: "20500",
      },
    ],
    party: "Democratic Party",
    phones: ["(202) 456-1111"],
    urls: [
      "https://www.whitehouse.gov/",
      "https://en.wikipedia.org/wiki/Joe_Biden",
    ],
    channels: [
      {
        type: "Twitter",
        id: "potus",
      },
    ],
    geocodingSummaries: [
      {
        queryString:
          "The White House 1600 Pennsylvania Avenue NW Washington, DC 20500",
        featureId: {
          cellId: "9923602325795527449",
          fprint: "11513381022022344111",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 126.14545494347092,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Kamala D. Harris",
    address: [
      {
        line1: "1600 Pennsylvania Avenue Northwest",
        city: "Washington",
        state: "DC",
        zip: "20500",
      },
    ],
    party: "Democratic Party",
    phones: ["(202) 456-1111"],
    urls: [
      "https://www.whitehouse.gov/",
      "https://en.wikipedia.org/wiki/Kamala_Harris",
    ],
    channels: [
      {
        type: "Twitter",
        id: "VP",
      },
    ],
    geocodingSummaries: [
      {
        queryString:
          "The White House 1600 Pennsylvania Avenue NW Washington, DC 20500",
        featureId: {
          cellId: "9923602325795527449",
          fprint: "11513381022022344111",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 126.14545494347092,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Richard J. Durbin",
    address: [
      {
        line1: "711 Hart Senate Office Building",
        city: "Washington",
        state: "DC",
        zip: "20510",
      },
    ],
    party: "Democratic Party",
    phones: ["(202) 224-2152"],
    urls: [
      "https://www.durbin.senate.gov/",
      "https://en.wikipedia.org/wiki/Dick_Durbin",
    ],
    photoUrl: "http://bioguide.congress.gov/bioguide/photo/D/D000563.jpg",
    channels: [
      {
        type: "Facebook",
        id: "SenatorDurbin",
      },
      {
        type: "Twitter",
        id: "SenatorDurbin",
      },
      {
        type: "YouTube",
        id: "SenatorDurbin",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "711 Hart Senate Office Building, Washington DC 20510",
        featureId: {
          cellId: "9923602661160726555",
          fprint: "13491012159388313795",
        },
        featureType: "typePostalCode",
        positionPrecisionMeters: 500,
        addressUnderstood: false,
      },
    ],
  },
  {
    name: "Tammy Duckworth",
    address: [
      {
        line1: "524 Hart Senate Office Building",
        city: "Washington",
        state: "DC",
        zip: "20510",
      },
    ],
    party: "Democratic Party",
    phones: ["(202) 224-2854"],
    urls: [
      "https://www.duckworth.senate.gov/",
      "https://en.wikipedia.org/wiki/Tammy_Duckworth",
    ],
    photoUrl: "http://bioguide.congress.gov/bioguide/photo/D/D000622.jpg",
    channels: [
      {
        type: "Facebook",
        id: "SenDuckworth",
      },
      {
        type: "Twitter",
        id: "SenDuckworth",
      },
      {
        type: "YouTube",
        id: "SenDuckworth",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "524 Hart Senate Office Building, Washington DC 20510",
        featureId: {
          cellId: "9923602661160726555",
          fprint: "13491012159388313795",
        },
        featureType: "typePostalCode",
        positionPrecisionMeters: 500,
        addressUnderstood: false,
      },
    ],
  },
  {
    name: "Cheri Bustos",
    address: [
      {
        line1: "1233 Longworth House Office Building",
        city: "Washington",
        state: "DC",
        zip: "20515",
      },
    ],
    party: "Democratic Party",
    phones: ["(202) 225-5905"],
    urls: [
      "https://bustos.house.gov/",
      "https://en.wikipedia.org/wiki/Cheri_Bustos",
    ],
    photoUrl:
      "https://bustos.house.gov/wp-content/uploads/2016/05/Layer-91.png",
    channels: [
      {
        type: "Facebook",
        id: "RepCheri",
      },
      {
        type: "Twitter",
        id: "RepCheri",
      },
      {
        type: "YouTube",
        id: "RepCheri",
      },
      {
        type: "YouTube",
        id: "BustosForCongress",
      },
    ],
    geocodingSummaries: [
      {
        queryString:
          "1233 Longworth House Office Building, Washington, DC 20515-1317",
        featureId: {
          cellId: "9923602795423060423",
          fprint: "18411854889169102830",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 123.49476568652042,
        addressUnderstood: false,
      },
    ],
  },
  {
    name: "J.B. Pritzker",
    address: [
      {
        line1: "207 State House",
        city: "Springfield",
        state: "IL",
        zip: "62706",
      },
    ],
    party: "Democratic Party",
    phones: ["(217) 782-6830"],
    urls: [
      "https://www2.illinois.gov/sites/GOV/Pages/default.aspx",
      "https://en.wikipedia.org/wiki/J._B._Pritzker",
    ],
    channels: [
      {
        type: "Facebook",
        id: "GovPritzker",
      },
      {
        type: "Twitter",
        id: "govpritzker",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "207 State House, Springfield, IL 62706",
        featureId: {
          cellId: "9832828895273496829",
          fprint: "4415203838716649494",
        },
        featureType: "typePostalCode",
        positionPrecisionMeters: 104.3726010743036,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Juliana Stratton",
    address: [
      {
        line1: "214 State House",
        city: "Springfield",
        state: "IL",
        zip: "62706",
      },
    ],
    party: "Democratic Party",
    phones: ["(217) 782-8492"],
    urls: [
      "https://www2.illinois.gov/sites/ltg/Pages/default.aspx",
      "https://en.wikipedia.org/wiki/Juliana_Stratton",
    ],
    emails: ["ltgovstratton@illinois.gov"],
    channels: [
      {
        type: "Facebook",
        id: "ltgovstratton",
      },
      {
        type: "Twitter",
        id: "LtGovStratton",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "214 State House, Springfield, IL 62706",
        featureId: {
          cellId: "9832828895273496829",
          fprint: "4415203838716649494",
        },
        featureType: "typePostalCode",
        positionPrecisionMeters: 104.3726010743036,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Susana A. Mendoza",
    address: [
      {
        line1: "325 West Adams Street",
        city: "Springfield",
        state: "IL",
        zip: "62704",
      },
    ],
    party: "Democratic Party",
    phones: ["(217) 782-6000"],
    urls: [
      "https://illinoiscomptroller.gov/",
      "https://en.wikipedia.org/wiki/Susana_Mendoza",
    ],
    emails: ["info@illinoiscomptroller.gov"],
    channels: [
      {
        type: "Facebook",
        id: "ILComptroller",
      },
      {
        type: "Twitter",
        id: "ILComptroller",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "325 West Adams, Springfield, IL 62704",
        featureId: {
          cellId: "9832828921251765573",
          fprint: "14713825309315934337",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 44.685023869584818,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Michael W. Frerichs",
    address: [
      {
        line1: "219 State House",
        city: "Springfield",
        state: "IL",
        zip: "62705",
      },
    ],
    party: "Democratic Party",
    phones: ["(866) 458-7327"],
    urls: [
      "https://illinoistreasurer.gov/",
      "https://en.wikipedia.org/wiki/Mike_Frerichs",
    ],
    channels: [
      {
        type: "Facebook",
        id: "TreasurerMichaelFrerichs",
      },
      {
        type: "Twitter",
        id: "ILTreasurer",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "219 State House, Springfield, IL 62705",
        featureId: {
          cellId: "9832829038191908781",
          fprint: "1542321615854527898",
        },
        featureType: "typePostalCode",
        positionPrecisionMeters: 500,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Jesse White",
    address: [
      {
        line1: "213 Illinois State Capitol",
        city: "Springfield",
        state: "IL",
        zip: "62756",
      },
    ],
    party: "Democratic Party",
    phones: ["(800) 252-8980"],
    urls: [
      "https://www.ilsos.gov/",
      "https://en.wikipedia.org/wiki/Jesse_White_%28politician%29",
    ],
    channels: [
      {
        type: "Facebook",
        id: "JesseWhiteSOS",
      },
      {
        type: "Twitter",
        id: "ILSecOfState",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "213 State Capitol Springfield, IL 62756",
        featureId: {
          cellId: "9832828896697000917",
          fprint: "2455316838655083030",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 102.73673734846295,
        addressUnderstood: false,
      },
    ],
  },
  {
    name: "Kwame Raoul",
    address: [
      {
        line1: "500 South 2nd Street",
        city: "Springfield",
        state: "IL",
        zip: "62701",
      },
    ],
    party: "Democratic Party",
    phones: ["(217) 782-1090"],
    urls: [
      "https://illinoisattorneygeneral.gov/",
      "https://en.wikipedia.org/wiki/Kwame_Raoul",
    ],
    channels: [
      {
        type: "Twitter",
        id: "ILAttyGeneral",
      },
    ],
    geocodingSummaries: [
      {
        queryString: "500 S Second St, Springfield, IL 62701",
        featureId: {
          cellId: "9832828892007837203",
          fprint: "16012837583742126400",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 34.198041368037856,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Cathy Runty",
    address: [
      {
        line1: "307 West Center Street",
        city: "Cambridge",
        state: "IL",
        zip: "61238",
      },
    ],
    party: "Republican Party",
    phones: ["(309) 937-3582"],
    urls: ["https://www.henrycty.com/Departments/States-Attorney"],
    emails: ["stattorney@henrycty.com"],
    geocodingSummaries: [
      {
        queryString: "307 W. Center St. , Cambridge, IL ,61238",
        featureId: {
          cellId: "9791421238503751591",
          fprint: "6511423102342545271",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 75.133018117149447,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Barbara M. Link",
    address: [
      {
        line1: "307 West Center Street",
        city: "Cambridge",
        state: "IL",
        zip: "61238",
      },
    ],
    party: "Democratic Party",
    phones: ["(309) 937-3575"],
    urls: ["https://www.henrycty.com/Departments/County-Clerk"],
    emails: ["blink@henrycty.com"],
    geocodingSummaries: [
      {
        queryString: "307 W. Center St., Cambridge, IL , 61238",
        featureId: {
          cellId: "9791421238503751591",
          fprint: "6511423102342545271",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 75.133018117149447,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Melissa Watkins",
    address: [
      {
        line1: "307 West Center Street",
        city: "Cambridge",
        state: "IL",
        zip: "61238",
      },
    ],
    party: "Republican Party",
    phones: ["(309) 937-5550"],
    urls: ["http://www.henrycty.com/Departments/Coroner/tabid/96/Default.aspx"],
    emails: ["coroner@henrycty.com"],
    geocodingSummaries: [
      {
        queryString: "307 W. Center St. , Cambridge, IL ,61238",
        featureId: {
          cellId: "9791421238503751591",
          fprint: "6511423102342545271",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 75.133018117149447,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Tim Wells",
    address: [
      {
        line1: "307 West Center Street",
        city: "Cambridge",
        state: "IL",
        zip: "61238",
      },
    ],
    party: "Republican Party",
    phones: ["(309) 937-3576"],
    urls: [
      "http://www.henrycty.com/Departments/TreasurerPropertyTaxes/tabid/94/Default.aspx",
    ],
    emails: ["treasurer@henrycty.com"],
    geocodingSummaries: [
      {
        queryString: "307 W. Center St. , Cambridge, IL ,61238",
        featureId: {
          cellId: "9791421238503751591",
          fprint: "6511423102342545271",
        },
        featureType: "typeCompoundBuilding",
        positionPrecisionMeters: 75.133018117149447,
        addressUnderstood: true,
      },
    ],
  },
  {
    name: "Kerry Loncka",
    address: [
      {
        line1: "311 West Center Street",
        city: "Cambridge",
        state: "IL",
        zip: "61238",
      },
    ],
    party: "Republican Party",
    phones: ["(309) 937-3901"],
    urls: [
      "http://www.henrycty.com/Departments/SheriffsOffice/tabid/109/Default.aspx",
    ],
    emails: ["sheriff@henrycty.com"],
    geocodingSummaries: [
      {
        queryString: "311 W. Center St. , Cambridge, IL ,61238",
        featureId: {
          cellId: "9791421238397662351",
          fprint: "839128079445814992",
        },
        featureType: "typeGeocodedAddress",
        positionPrecisionMeters: 0,
        addressUnderstood: true,
      },
    ],
  },
];
offices.map((office) => {
  office.officialIndices.map((item) => {
    officials[item].office = office;
  });
});

console.log(officials);
