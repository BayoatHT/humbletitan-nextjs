/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "../../components/Layout";
import ElectionCenter from "../../components/ElectionCenter";
import Arrow from "../../components/Arrow";
import WhatElseWeOffer from "../../components/WhatElseWeOffer";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const { index } = router.query;
  console.log(index);
  return (
    <>
      <Layout>
        <ElectionCenter address={index} />
        <Arrow />
        <WhatElseWeOffer />
      </Layout>
    </>
  );
}
