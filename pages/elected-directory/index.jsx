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
  await axios.get("http://localhost:8000/").then(({ data }) => {
    officials = data;
  });

  return {
    props: {
      officials,
    },
  };
}
