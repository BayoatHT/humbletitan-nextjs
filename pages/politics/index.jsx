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

export default function Index({ majorElections }) {
  return (
    <>
      <Head>
        <title>Politics - Humble Titan</title>
        <meta name="description" content="Find out where to vote. See what's on the ballot. Contact your election officials." /> 
        <meta
          name="keywords"
          content="stocks,The Humble Voter, polictics, ballot"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="humbletitan.com" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="true" />
        <meta property="og:description" content="true" />
        <meta property="og:url" content="true" />
        <meta property="og:site_name" content="true" />
        <meta property="og:image" content="true" />
        <meta name="twitter:card" content="true" />
        <meta name="twitter:site" content="true" />
        <meta name="twitter:creator" content="true" />
        <meta name="twitter:title" content="true" />
        <meta name="twitter:description" content="true" />
        <meta name="twitter:domain" content="true" />
        <meta name="twitter:image" content="true" />
        <meta name="twitter:url" content="true" />
        <meta itemProp="image" content="true" />
        <meta itemProp="name" content="true" />
        <meta itemProp="description" content="true" />
        <meta name="geo.region" content="true" />
        <meta name="geo.placename" content="true" />
        <meta name="geo.position" content="true" />
        <meta name="ICBM" content="true" />
        
        <meta name="next-head-count" content="32" />
      </Head>
      <Layout >
        {/* Hero */}
        <section className='heading py-10 md:py-20 bg-[#e0ecf0]'>
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
  console.log(process.env.NEXT_PUBLIC_API_KEY)
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/elections?key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
    .then((result) => {
      majorElections = result.data.elections;
      majorElections = majorElections?.filter(e => !e.name.includes("Test"))
    }).catch((error)=> {
      console.log(error.message)
    })
  return {
    props: {
      majorElections,
    },
  };
}
