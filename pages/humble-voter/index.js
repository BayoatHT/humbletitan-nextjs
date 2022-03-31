/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Layout from "../../components/Layout";
import SearchSection from "../../components/SearchSection";
import TopTitle from "../../components/TopTitle";
import UpcommingElections from "../../components/UpcommingElections";
import ElectedDirectory from "../../components/ElectedDirectory";
import GetPolls from "../../components/GetPolls";
import DiscoverByState from "../../components/DiscoverByState";

export default function index() {
  return (
    <>
      <Layout>
        <TopTitle />
        <SearchSection />
        <ElectedDirectory />
        <UpcommingElections />
        <GetPolls />
        <DiscoverByState />
      </Layout>
    </>
  );
}
