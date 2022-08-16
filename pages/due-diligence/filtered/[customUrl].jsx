import Head from 'next/head'
import Layout from '../../../components/Layout'
import CustomCard from '../../../components/CustomCard'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

export default function FilterData({ contents }) {
  const query = {
    filterlabel: contents.filterlabel,
    filterCondition: contents.filterCondition,
    filterValue: contents.filterValue,
  }

  // this is code has been abandoned
  // useEffect(() => {
  //   const getData = async () => {
  //     // const url = `http://localhost:8000/filtered-data?filterlabel=${query?.filterlabel}&filterCondition=${query?.filterCondition}&filterValue=${query?.filterValue}`
  //     const url = `http://localhost:8000/filtered-data/${query.customUrl}`
  //     try {
  //       const { data } = await axios.get(url)
  //       console.log('resData', data)
  //       setCustomPages(data)
  //     } catch (error) {
  //       console.log(error.message)
  //     }
  //   }
  //   getData()
  // }, [query])

  return (
    <div>
      <Head>
        <title>Filtered Pages || Humble Titan</title>
        <meta
          name="description"
          content={`Humble Titan is providing you data of more than seven thousands tickers from all over the world.`}
        />
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
      <Layout>
        <CustomCard
          headerText={contents.headerText}
          query={query}
          customPages={contents.data}
        />
      </Layout>
    </div>
  )
}

export async function getServerSideProps(ctx) {
  const {
    query: { customUrl },
  } = ctx
  let contents = {}
  const url = `https://humbletitan-stocks.herokuapp.com/filtered-data/${customUrl}`
  try {
    const { data } = await axios.get(url)
    contents = JSON.parse(JSON.stringify(data))
  } catch (error) {
    console.log(error.message)
  }
  return {
    props: { contents },
  }
}
