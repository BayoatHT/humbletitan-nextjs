import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import TopGainerCard from '../../components/TopGainerCard'
import Layout from '../../components/Layout'
import Script from 'next/script'


export default function Home() {

    const [allcompany, setAllcompany] = useState([])
    const getData = () => {

        const url = `https://humbletitanapi.herokuapp.com/topgainers`
        axios.get(url)
            .then(res => {
                console.log(res)
                setAllcompany(res?.data)
            })
    }


    useEffect(() => {
        getData()
    }, [])

    return (
        <div >
            <Head>
                <title>ALL TOP GAINERS TICKERS || Humble Titan</title>
                <meta name="description" content="" />
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

            <Layout>
                <div className="pt-5_abcd pb-5_abcd">
                    <h1 className='pb-5_abcd abcd_row abcd_justify-center blue-color_abcd f-60_abcd text-transform_abcd'>Top Gainers</h1>
                    <div className="abcd_container">
                        <div className="abcd_row keyvaluecards_abcd abcd_justify-betwee n  row_wraper_abcd">
                            {allcompany && allcompany?.map((data, kay) =>
                                data?.Info?.companyname && <TopGainerCard data={data} key={kay} />

                            )}

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    )
}
