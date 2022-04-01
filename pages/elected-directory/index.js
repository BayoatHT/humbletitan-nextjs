/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import ElectedDirectoryFilter from "../../components/ElectedDirectoryFilter";
import ElectedDirectory from "../../components/ElectedDirectory";
import { useRouter } from "next/router";
import BrowseByState from "../../components/BrowseByState";
import ViewElectionCenter from "../../components/ViewElectionCenter";
export default function Index() {
  const router = useRouter();
  const query = router.query;
  console.log(query);

  return (
    <>
      <Layout>
        <TopTitle />
        <ElectedDirectoryFilter />
        <ElectedDirectory />
        <BrowseByState />
        <ViewElectionCenter />
      </Layout>
    </>
  );
}
