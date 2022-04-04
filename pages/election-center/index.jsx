/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "../../components/Layout";
import ElectionCenter from "../../components/ElectionCenter";
import Arrow from "../../components/Arrow";
import WhatElseWeOffer from "../../components/WhatElseWeOffer";

export default function Index() {
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
