/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import TopTitle from "../../components/TopTitle";
import ElectedDirectoryFilter from "../../components/ElectedDirectoryFilter";
import ElectedDirectory from "../../components/ElectedDirectory";
import { useRouter } from "next/router";
import DiscoverByState from "../../components/DiscoverByState";
import ViewElectionCenter from "../../components/ViewElectionCenter";
export default function Index() {
  const router = useRouter();
  const query = router.query;
  console.log(query);

  const fetchData = async () => {
    const { data } = await axios.get(
      `/api/officials/?address=${query.address}`
    );
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <>
      <Layout>
        <TopTitle />
        <ElectedDirectoryFilter />
        <ElectedDirectory />
        <DiscoverByState />
        <ViewElectionCenter />
      </Layout>
    </>
  );
}
