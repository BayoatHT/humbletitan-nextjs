import React from 'react'
import { useRouter } from 'next/router'
import Layout from "../../components/Layout";
import Image from 'next/image'
import Head from 'next/head'

import { newsByCategories } from './newsByCategories';

export default function Category() {
    const { query: { index } } = useRouter()
    const categorySearch = index

    const news = newsByCategories.find((item) => item.category === categorySearch)

    const { category, title, h1_1, h1_2, h2_1, h2_2 } = news
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Layout >
                {/* Hero */}
                <section className='heading bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex flex-wrap w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] '>
                                <h1 className='text-[50px] md:text-[60px] text-[#023A51] pt-3 md:pt-10   leading-[69px] ' >Business and politics <br /> made digital<span className='text-[#2cbc63]'>.</span> </h1>
                                <h2 className='text-[24px]  text-[#023A51] leading-7 py-10 ' >Products and services that empower you to <br /> make better decisions.</h2>
                                <button className='green_roudend_btn text-[18px] mb-10'>Stock Due Diligence Reports </button>
                            </div>
                            <div className='' >

                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
