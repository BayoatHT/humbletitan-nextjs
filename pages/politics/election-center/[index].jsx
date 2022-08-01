/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import axios from "axios";
import Layout from "../../../components/Layout";
import ElectionCenter from "../../../components/ElectionCenter";
export default function Index({ stateName, electionDates, contests, pollingLocations, stateDetails }) {

  return (
    <>
      <Layout>
      <Head>
                <title>{stateName}</title>
                <meta name="description" content="" />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="humbletitan.com" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="robots" content="noindex" />
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
        <meta name="true" content="true" />
        <meta name="next-head-count" content="32" />
            </Head>
        <ElectionCenter contests={contests} pollingLocations={pollingLocations} stateDetails={stateDetails} stateName={stateName} dates={electionDates} />
      </Layout>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    query: { index },
  } = context;
  const address = index;
  var stateName = "";
  var electionDates = [];
  await axios
    .get(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${address}`
    )
    .then((result) => {
      const state = result.data.normalizedInput.state;
      stateName =
        state === "AZ"
          ? "Arizona"
          : state === "AL"
            ? "Alabama"
            : state === "AK"
              ? "Alaska"
              : state === "AR"
                ? "Arkansas"
                : state === "CA"
                  ? "California"
                  : state === "CO"
                    ? "Colorado"
                    : state === "CT"
                      ? "Connecticut"
                      : state === "DE"
                        ? "Delaware"
                        : state === "FL"
                          ? "Florida"
                          : state === "GA"
                            ? "Georgia"
                            : state === "HI"
                              ? "Hawaii"
                              : state === "ID"
                                ? "Idaho"
                                : state === "IL"
                                  ? "Illinois"
                                  : state === "IN"
                                    ? "Indiana"
                                    : state === "IA"
                                      ? "Iowa"
                                      : state === "KS"
                                        ? "Kansas"
                                        : state === "KY"
                                          ? "Kentucky"
                                          : state === "LA"
                                            ? "Louisiana"
                                            : state === "ME"
                                              ? "Maine"
                                              : state === "MD"
                                                ? "Maryland"
                                                : state === "MA"
                                                  ? "Massachusetts"
                                                  : state === "MI"
                                                    ? "Michigan"
                                                    : state === "MN"
                                                      ? "Minnesota"
                                                      : state === "MS"
                                                        ? "Mississippi"
                                                        : state === "MO"
                                                          ? "Missouri"
                                                          : state === "MT"
                                                            ? "Montana"
                                                            : state === "NE"
                                                              ? "Nebraska"
                                                              : state === "NV"
                                                                ? "Nevada"
                                                                : state === "NH"
                                                                  ? "New Hampshire"
                                                                  : state === "NJ"
                                                                    ? "New Jersey"
                                                                    : state === "NM"
                                                                      ? "New Mexico"
                                                                      : state === "NY"
                                                                        ? "New York"
                                                                        : state === "NC"
                                                                          ? "North Carolina"
                                                                          : state === "ND"
                                                                            ? "North Dakota"
                                                                            : state === "OH"
                                                                              ? "Ohio"
                                                                              : state === "OK"
                                                                                ? "Oklahoma"
                                                                                : state === "OR"
                                                                                  ? "Oregon"
                                                                                  : state === "PA"
                                                                                    ? "Pennsylvania"
                                                                                    : state === "RI"
                                                                                      ? "Rhode Island"
                                                                                      : state === "SC"
                                                                                        ? "South Carolina"
                                                                                        : state === "SD"
                                                                                          ? "South Dakota"
                                                                                          : state === "TN"
                                                                                            ? "Tennessee"
                                                                                            : state === "TX"
                                                                                              ? "Texas"
                                                                                              : state === "UT"
                                                                                                ? "Utah"
                                                                                                : state === "VT"
                                                                                                  ? "Vermont"
                                                                                                  : state === "VA"
                                                                                                    ? "Virginia"
                                                                                                    : state === "WA"
                                                                                                      ? "Washington"
                                                                                                      : state === "WV"
                                                                                                        ? "West Virginia"
                                                                                                        : state === "WI"
                                                                                                          ? "Wisconsin"
                                                                                                          : state === "WY"
                                                                                                            ? "Wyoming"
                                                                                                            : state;
    })
    .catch((error) => {
      console.log(error.message);
    });

  const arr = [];

  await axios
    .get("https://h-t.vercel.app/api/stateelections")
    .then((result) => {
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
      electionDates =
        arr.length > 0 &&
        arr.filter((item) => {
          return item.state === stateName;
        });
      // console.log(electionDates);
    })
    .catch((error) => {
      console.log(error);
    });

  var majorElections = []
  var id;
  var stateDetails = []
  var pollingLocations = []
  var contests = []
  await axios
    .get(
      "https://civicinfo.googleapis.com/civicinfo/v2/elections?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY"
    )
    .then((result) => {
      majorElections = result.data.elections;
      // majorElections = majorElections?.filter(e => !e.name.includes("Test"))
      id = majorElections[0].id
    }).then(async () => {
      const { data } = await axios.get(`https://civicinfo.googleapis.com/civicinfo/v2/voterinfo?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${address}&electionId=${id}`)
      stateDetails = data?.state
      pollingLocations = data.pollingLocations ? data.pollingLocations : []
      contests = data?.contests
    }).catch((error) => {
      console.log(error)
    })

  return {
    props: {
      electionDates,
      stateName,
      stateDetails,
      pollingLocations,
      contests
    },
  };
}
