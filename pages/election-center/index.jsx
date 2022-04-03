/* eslint-disable @next/next/no-sync-scripts */
import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import Layout from "../../components/Layout";
import ElectionCenter from "../../components/ElectionCenter";
import Arrow from "../../components/Arrow";
import WhatElseWeOffer from "../../components/WhatElseWeOffer";
import axios from "axios";

// const fetchData = async () => {
//   const arr = [];
//   const { data } = await axios.get("api/sheets");
//   data.values.map((item) => {
//     arr.push({
//       name: item[0] || "",
//       electionDescription: item[1] || "",
//       electionDate: item[2] || "",
//       statusOfData: item[3] || "",
//       electionId: item[4] || "",
//     });
//   });
//   console.log(arr);
// };

export default function Index() {
  // useEffect(() => {
  //   fetchData();
  // }, []);
  return (
    <>
      <Layout>
        <ElectionCenter />
        <Arrow />
        <WhatElseWeOffer />
      </Layout>
    </>
  );
}
