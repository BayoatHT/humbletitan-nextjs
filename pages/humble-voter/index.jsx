/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Layout from "../../components/Layout";
import Head from 'next/head'
import SearchSection from "../../components/SearchSection";
import TopTitle from "../../components/TopTitle";
import UpcommingElections from "../../components/UpcommingElections";
import ElectedDirectory from "../../components/ElectedDirectory";
import GetPolls from "../../components/GetPolls";
import BrowseByState from "../../components/BrowseByState";
import axios from "axios";
import Heading from "../../components/Heading";

export default function index({ majorElections }) {
  return (
    <>
      <Head>
        <title>Humble voter</title>
      </Head>
      <Layout >
        <Heading />
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
      majorElections = majorElections?.filter(e => !e.name.includes("Test"))
    });
  return {
    props: {
      majorElections,
    },
  };
}
