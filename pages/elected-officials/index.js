import React from "react";
import "tailwindcss/tailwind.css";
import Layout from "../../components/Layout";
import ElectedRepresentatives from "../../components/ElectedRepresentatives";
export default function Home() {
  return (
    <Layout>
      <ElectedRepresentatives />
    </Layout>
  );
}
