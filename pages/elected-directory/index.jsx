import React from "react";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import ElectedDirectory from "../../components/ElectedDirectory";
import BrowseByState from "../../components/BrowseByState";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
import axios from "axios";

export default function index({ formedOfficials }) {
  return (
    <>
      <Layout>
        <TopTitle />
        <ElectedRepresentatives officials={formedOfficials} />
        <ElectedDirectory />
        <BrowseByState />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
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

  // all US representatives data
  // async function getData() {
  //   for (let i = 0; i < states.length; i++) {
  //     console.log(states[i]);
  //     await axios
  //       .get(
  //         `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${states[i]}`
  //       )
  //       .then((result) => {
  //         officials = [...result.data.officials];
  //         offices = [...result.data.offices];
  //       })
  //       .then(() => {
  //         offices &&
  //           offices.map((office) => {
  //             office.officialIndices.map((item) => {
  //               officials[item].office = office;
  //             });
  //           });
  //         formedOfficials = [...officials];
  //       });
  //     console.log("end");
  //   }
  // }
  // getData();
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${states[5]}`
    )
    .then((result) => {
      officials = [...result.data.officials];
      offices = [...result.data.offices];
    })
    .then(() => {
      offices &&
        offices.map((office) => {
          office.officialIndices.map((item) => {
            officials[item].office = office;
          });
        });
      formedOfficials = [...officials];
      console.log(formedOfficials);
    });

  return {
    props: {
      formedOfficials,
    },
  };
}
