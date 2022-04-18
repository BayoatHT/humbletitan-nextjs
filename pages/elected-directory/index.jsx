import React from "react";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import BrowseByState from "../../components/BrowseByState";
import AllRepresentatives from "../../components/AllRepresentatives";
import axios from "axios";

export default function index({ officials }) {
  return (
    <>
      <Layout>
        <TopTitle />
        <AllRepresentatives officials={officials} />
        <BrowseByState />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  var officials = [];
  // await axios.get("https://humble-titan.herokuapp.com/").then(({ data }) => {
  //   officials = data;
  // });
  let stateOfficials = []
  let stateOffices = []
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=Alaska`
    )
    .then((result) => {
      stateOfficials = [...result.data.officials];
      stateOffices = [...result.data.offices];
    })
    .then(() => {
      stateOffices &&
        stateOffices.map((office) => {
          office.officialIndices.map((item) => {
            stateOfficials[item].office = office;
          });
        });
      officials = stateOfficials;
    });

  return {
    props: {
      officials,
    },
  };
}
