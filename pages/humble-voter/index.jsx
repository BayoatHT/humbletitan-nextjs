/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Layout from "../../components/Layout";
import SearchSection from "../../components/SearchSection";
import TopTitle from "../../components/TopTitle";
import UpcommingElections from "../../components/UpcommingElections";
import ElectedDirectory from "../../components/ElectedDirectory";
import GetPolls from "../../components/GetPolls";
import BrowseByState from "../../components/BrowseByState";
import axios from "axios";

export default function index({ majorElections }) {
  return (
    <>
      <Layout>
        <TopTitle />
        <SearchSection />
        <ElectedDirectory />
        <UpcommingElections majorElections={majorElections} />
        <GetPolls />
        <BrowseByState />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  var majorElections = [];
  await axios
    .get(
      "https://civicinfo.googleapis.com/civicinfo/v2/elections?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY"
    )
    .then((result) => {
      majorElections = result.data.elections;
      console.log(majorElections);
    });
  return {
    props: {
      majorElections,
    },
  };
}
