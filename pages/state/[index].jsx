import React from "react";
import axios from "axios";
import Layout from "../../components/Layout";
import BrowsByState from "../../components/BrowseByState";
import SearchSection from "../../components/SearchSection";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
import StateNews from "../../components/StateNews";
import ElectionDate from "../../components/ElectionDate";
import UpcommingElections from "../../components/UpcommingElections";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StateElectionDates from "../../components/StateElectionDates";

export default function State({
  articles,
  data,
  index,
  formedOfficials,
  majorElections,
}) {
  return (
    <Layout>
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
      console.log(formedOfficials);
    })
    .catch((error) => {
      console.log(error.message);
    })

  const arr = [];

  await axios
    .get("https://h-t.vercel.app/api/stateelections")
    .then((result) => {
      console.log(result);
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
      console.log(error.message);
    });

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
      articles,
      data,
      index,
      formedOfficials,
      majorElections,
    },
  };
}
