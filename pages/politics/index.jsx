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
        <title>Politics - Humble Titan</title>
      </Head>
      <Layout >
        {/* Hero */}
        <section className='heading md:py-20 bg-[#e0ecf0]'>
          <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
            <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
              <div className='md:w-7/12' >
                <h1 className=' text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >The Humble Voter<span className='text-[#2cbc63]'>.</span></h1>
              </div>
            </div>
          </div>
        </section>
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
