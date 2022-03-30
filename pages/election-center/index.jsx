/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import ElectionCenter from "../../components/ElectionCenter";
import Arrow from "../../components/Arrow";
import WhatElseWeOffer from "../../components/WhatElseWeOffer";

export default function Index() {
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
        <ElectionCenter />
        <Arrow />
        <WhatElseWeOffer />
      </Layout>
    </>
  );
}
