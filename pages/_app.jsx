import Head from "next/head";
import "../styles/globals.css";
import Script from "next/script";
import { useEffect } from "react";
import { StoreProvider } from "../utils/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta name="theme-color" content="#2CBC63" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export const getServerSideProps = async () => {
  var contents;
  await axios.get(`https://humbletitan-strapi.herokuapp.com/api/our-mission`)
      .then(({ data }) => {
          contents = data
          console.log("_page",contents);
      }).catch((error) => {
          console.log(error)
      })
  return {
      props: {
          contents: JSON.parse(JSON.stringify(contents))
      }
  }
}  


export default MyApp;
