import React from "react";
import Head from 'next/head'
import "tailwindcss/tailwind.css";
import Layout from "../../../components/Layout";
import ElectedRepresentatives from "../../../components/ElectedRepresentatives";
import axios from "axios";
export default function Home({ formedOfficials }) {
    return (
        <Layout>
            <Head>
                <title>United States Elected Officials</title>
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
            <ElectedRepresentatives officials={formedOfficials} />
        </Layout>
    );
}
export async function getServerSideProps(context) {
    const {
        query: { index },
    } = context;
    var address = index;
    var officials = [];
    var offices = [];
    var formedOfficials = [];
    await axios
        .get(
            `https://civicinfo.googleapis.com/civicinfo/v2/representatives?key=AIzaSyCGCE_BQpdH1EhR0RnhJt9xMfIpkJMTmqY&address=${address}`
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
        }).catch((error) => {
            console.log(error.message)
        })

    return {
        props: {
            formedOfficials,
        },
    };
}
