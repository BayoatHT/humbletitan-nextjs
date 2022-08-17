import React from "react";
import Head from 'next/head'
import axios from "axios";
import Layout from "../../../components/Layout";
import BrowsByState from "../../../components/BrowseByState";
import SearchSection from "../../../components/SearchSection";
import ElectedRepresentatives from "../../../components/ElectedRepresentatives";
import StateNews from "../../../components/StateNews";
import ElectionDate from "../../../components/ElectionDate";
import UpcommingElections from "../../../components/UpcommingElections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StateElectionDates from "../../../components/StateElectionDates";

export default function State({
  articles,
  data,
  index,
  formedOfficials,
  majorElections,
}) {
  return (
    <Layout>
      <Head>
                <title>{`Election Details for ${index}`}</title>
                <meta name="description" content="true" />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
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
      <StateElectionDates data={data} majorElections={majorElections} stateName={index} />
      <SearchSection />
      <ElectedRepresentatives officials={formedOfficials} address={index} />
      <BrowsByState />
      <StateNews stateName={index} articles={articles} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { index },
  } = context;

  var articles = [];
  var data = [];

  const options = {
    method: "GET",
    url: "https://free-news.p.rapidapi.com/v1/search",
    params: { q: index + " Elections", lang: "en", page: "1" },
    headers: {
      "X-RapidAPI-Host": "free-news.p.rapidapi.com",
      "X-RapidAPI-Key": "3be5ca2b13mshaf3263c772c5f80p1fc514jsnc025172a53f0",
    },
  };

  try {
    await axios.request(options).then(function (response) {
      articles = response.data.articles;
    });
  } catch (error) {
    console.log(error.message);
  }

  var officials = [];
  var offices = [];
  var formedOfficials = [];
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${index}`
    )
    .then((result) => {
      officials = [...result.data.officials];
      offices = [...result.data.offices];
    })
    .then(() => {
      offices &&
        offices.map((office) => {
          office.officialIndices.map((item) => {
            officials[item].office = office;
          });
        });
      formedOfficials = officials;
    })
    .catch((error) => {
      console.log(error.message);
    })

  const arr = [];

  await axios
    .get("http://localhost:3000/api/stateelections")
    .then((result) => {
      console.log("result", result);
      result.data.values.map((item) => {
        arr.push({
          state: item[0] || "",
          electionDescription: item[1] || "",
          electionDate: item[2] || "",
          statusOfData: item[3] || "",
          electionId: item[4] || "",
        });
      });
    })
    .then(() => {
      data =
        arr.length > 0 &&
        arr.filter((item) => {
          return item.state === index;
        });
    })
    .catch((error) => {
      data = ''
      console.log("statesError",error.message);
    });

  var majorElections = [];
  await axios
    .get(
      "https://civicinfo.googleapis.com/civicinfo/v2/elections?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY"
    )
    .then((result) => {
      majorElections = result.data.elections;
    });

  return {
    props: {
      articles,
      data,
      index,
      formedOfficials,
      majorElections,
    },
  };
}
