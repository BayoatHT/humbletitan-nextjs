/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import SearchSection from "../../components/ElectedDirectoryFilter";
import ElectedDirectory from "../../components/ElectedDirectory";
import UpcommingElections from "../../components/UpcommingElections";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
import OtherOfficials from "../../components/OtherOfficials";
import BrowseByState from "../../components/BrowseByState";

export default function index() {
  return (
    <>
      <Layout>
        <TopTitle />
        <UpcommingElections state={"New York"} />
        <SearchSection />
        <ElectedRepresentatives />
        <OtherOfficials />
        <ElectedDirectory />
        <BrowseByState />
      </Layout>
    </>
  );
}
