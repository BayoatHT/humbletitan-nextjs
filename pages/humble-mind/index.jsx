import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'

import UnemploymentTrap from '../../assets/imgs/Unemployment-Trap-min-600x423.jpg'
import UndergroundEconomy from '../../assets/imgs/Underground-Economy-min-600x423.jpg'


export default function Magzine() {
    return (
        <>
            <Head>
                <title>Magazine - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading py-20 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 '>
                            <div >
                                <h1 className=' text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 font-extralight leading-[69px] ' >Magazine</h1>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Magazines */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className=' md:flex flex-wrap justify-around '>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#fff] cursor-pointer transition p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] ' >
                                        <Image className='rounded' src={UnemploymentTrap} alt="image" />
                                        <p className='text-[30px] text-center md:text-[40px] text-[#023A51] pt-3 font-extralight leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Friendly Assessment 2021</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-10 p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <Image className='rounded' src={UndergroundEconomy} alt="image" />
                                        <p className='text-[30px] text-center md:text-[40px] text-[#023A51] pt-3 font-extralight leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Approaches to Increase Online Dating Sites Profile (for Women)</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Newsletter */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className="md:flex items-center justify-around p-10 shadow-lg shadow-[#888] rounded-xl  text-[#023A51]">
                                <div >
                                    <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px]  py-10  ' >Join to newsletter<span className='text-[#2cbc63]' >.</span></p>
                                    <p className='text-[20px]' >Don’t miss out on the latest from Humble Titan.</p>
                                </div>
                                <div className=' '>
                                    <h2 className='text-[24px] font-bold py-6 ' >Hear from us first</h2>
                                    <input className='block outline-[#2cbc63] border p-2 rounded-xl text-[20px] w-[100%]' type="text" placeholder='Enter your email' />
                                    <button className='green_roudend_btn my-10 px-10' >Subscribe</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Magazines */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className=' md:flex flex-wrap justify-around '>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#fff] cursor-pointer transition p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] ' >
                                        <Image className='rounded' src={UnemploymentTrap} alt="image" />
                                        <p className='text-[30px] text-center md:text-[40px] text-[#023A51] pt-3 font-extralight leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Friendly Assessment 2021</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-10 p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <Image className='rounded' src={UndergroundEconomy} alt="image" />
                                        <p className='text-[30px] text-center md:text-[40px] text-[#023A51] pt-3 font-extralight leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Approaches to Increase Online Dating Sites Profile (for Women)</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
