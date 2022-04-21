import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "../../components/Layout";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
import axios from "axios";
export default function Home({ formedOfficials }) {
  return (
    <Layout>
      <ElectedRepresentatives officials={formedOfficials} />
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const {
    query: { index },
  } = context;
  var address = index;
  console.log(address);
  var officials = [];
  var offices = [];
  var formedOfficials = [];
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${address}`
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
      formedOfficials = officials;
      console.log(formedOfficials);
    }).catch((error) => {
      console.log(error.message)
    })

  return {
    props: {
      formedOfficials,
    },
  };
}
