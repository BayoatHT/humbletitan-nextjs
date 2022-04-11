import axios from "axios";
import nc from "next-connect";

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

var officials = [];
var offices = [];
var formedOfficials = [];

const handler = nc();
export default handler.get(async (req, res) => {
  for (let i = 0; i < states.length; i++) {
    await axios
      .get(
        `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${states[i]}`
      )
      .then((result) => {
        var officialsResult = [...result.data.officials];
        var officesResult = [...result.data.offices];
        officesResult &&
          officesResult.map((office) => {
            office.officialIndices.map((item) => {
              officialsResult[item].office = office;
              officials = [...officials, ...officialsResult];
            });
          });
      })
      .catch((error) => {
        console.log(states[i], error.message);
      });
  }
  //   offices &&
  //     offices.map((office) => {
  //       office.officialIndices.map((item) => {
  //         officials[item].office = office;
  //       });
  //     });
  //   formedOfficials = [...officials];
  res.json(officials);
});
