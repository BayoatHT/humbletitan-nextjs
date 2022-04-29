import React, { useState } from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from "react-icons/fa";

export default function Categories() {

    const categories = ['economics', 'tram-seo', 'business-dictionary']
    const [search, setSearch] = useState('')
    const [filterdCategories, setFilterdCategories] = useState([])

    const handleFilter = (e) => {
        setSearch(e)
        setFilterdCategories(categories.filter((item) => item.includes(search)))
    }
    return (
        <>
            <Head>
                <title>Magazine - Humble Titan</title>
            </Head>
            <Layout>

                {/* Hero */}
                <section className='heading py-10 md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 '>
                            <div >
                                <h1 className=' text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 leading-[69px] ' >Magazine</h1>
                            </div>
                            <div className='flex justify-center mt-6 md:mt-10' >
                                <div className='flex relative text-[22px] rounded' >
                                    <FaSearch className='absolute top-[35%] left-[10px] text-[#023A51]' />
                                    <input value={search} onChange={(e) => handleFilter(e.target.value)} placeholder='What are you looking for?' className='rounded-xl text-[#023A51] pl-10 p-4 border' type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className='heading py-10 md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex flex-wrap justify-around w-10/12 md:w-11/12 '>
                            {
                                search.length === 0 ? (
                                    categories.map((item, index) => {
                                        return (
                                            <Link href={`category/${item}`} passHref key={index}  >
                                                <a className='rounded-xl bg-[#fff] shadow-sm mb-2 flex justify-center group transition duration-300 cursor-pointer itmes-center p-2 md:w-[20%] '>
                                                    <p className=' text-[18px] text-center md:text-[20px] text-[#023A51] group-hover:text-[#2cbc63]   leading-[35px] ' >{item}</p>
                                                </a>
                                            </Link>
                                        )
                                    })
                                )
                                    : (
                                        filterdCategories.map((item, index) => {
                                            return (
                                                <Link href={`category/${item}`} passHref key={index}  >
                                                    <a className='rounded-xl bg-[#fff] shadow-sm mb-2 flex justify-center group transition duration-300 cursor-pointer itmes-center p-2 md:w-[20%] '>
                                                        <p className=' text-[18px] text-center md:text-[20px] text-[#023A51] group-hover:text-[#2cbc63]   leading-[35px] ' >{item}</p>
                                                    </a>
                                                </Link>
                                            )
                                        })
                                    )
                            }

                        </div>
                    </div>
                </section>


            </Layout>
        </>
    )
}
