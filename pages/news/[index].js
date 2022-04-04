import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
export default function Index() {
  const router = useRouter();
  const { index } = router.query;
  console.log(index);
  return <Layout></Layout>;
}
