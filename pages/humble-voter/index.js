/* eslint-disable @next/next/no-sync-scripts */
import Head from "next/head";
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
      <Head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          referrerpolicy="no-referrer"
        />
      </Head>
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
