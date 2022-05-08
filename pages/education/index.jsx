import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import GetAQuote from '../../components/GetAQuote'

import humblePoliticians from '../../assets/imgs/humble-politicians-400x174.jpg'
import humblePoliticalCampaigns from '../../assets/imgs/humble-political-campaigns-400x174.jpg'
import humbleNgos from '../../assets/imgs/humble-ngos-400x174.jpg'
import humbleCharities from '../../assets/imgs/humble-charities-400x174.jpg'
import homeContentManagementService from '../../assets/imgs/home-content-management-service.jpg'
import homeSeoService from '../../assets/imgs/home-seo-service.jpg'
import homeWebAndMobileDesign from '../../assets/imgs/home-web-and-mobile-design.jpg'
import homeWebManagement from '../../assets/imgs/home-web-management.jpg'
import DigitalServices from '../../assets/imgs/home-content-Humble-Digital-Services.jpg'
import HumbleTrader from '../../assets/imgs/home-content-Humble-Trader.jpg'
import HumbleVoter from '../../assets/imgs/home-content-Humble-Voter.jpg'
import TRAMSEO from '../../assets/imgs/home-content-TRAM-SEO.jpg'
import Humblemind from '../../assets/imgs/home-content-Humble-mind.jpg'

import { FaChevronDown } from 'react-icons/fa';

export default function Education() {
    return (
        <>
            <Head>
                <title>Education - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>Education</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Educational resources for the humble mind<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>The more you know, the more you can achieve. Here you&apos;ll find carefully curated content intended to empower decision-making.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Educational Dictionaries */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ' >The more you know. The more you can.</p>
                            <p className=' text-[30px] md:text-[35px] text-[#00989e] font-bold leading-[39px] md:leading-[44px] tracking-[-2px] py-4 ' >“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”</p>



                            <div className='md:flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Business Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Economics Dictionary</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>NGOs</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Charities</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div>

                            </div>

                        </div>





                    </div>
                </section>


                {/* Discover our full SEO course */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover our full SEO course</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* Learn SEO & Online Success */}


                            <p className=' text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ' >Learn SEO & Online Success</p>


                            <div className='md:flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Technical SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Relevance SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Authority SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Monitoring SEO</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div>

                            </div>

                        </div>





                    </div>
                </section>



                {/* Discover the HT Magazine */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover the HT Magazine</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* Learn SEO & Online Success */}
                            <div className='flex justify-center'>
                                <div className='p-10 bg-[#eefaf3] w-[80%] mt-10 rounded-xl'>
                                    <p className='text-[24px] text-[#2cbc63] font-bold  '>Discover what the internet can do for your business or idea.</p>
                                    <button className='green_roudend_btn mt-4' >Talk to us!</button>
                                </div>
                            </div>



                            <p className=' text-[50px] md:text-[60px] text-[#023A51] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ' > <span className='text-[#2cbc63]'>Our Services.</span> Don’t miss out on what else we can do for you<span className='text-[#2cbc63]'>.</span></p>


                            <div className='mx-auto text-[#023A51] py-20 flex flex-wrap justify-between text-center '>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%]  ' >
                                    <Image src={homeWebAndMobileDesign} alt="image" />
                                    <h1 className='text-[30px] py-2' >Web & Mobile <br /> Design</h1>
                                    <p className='text-[18px] text-left  p-4' >More than design. We transform your vision into an online reality.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Get Design</button>
                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] '>
                                    <Image src={homeSeoService} alt="image" />
                                    <h1 className='text-[30px] py-2' >Search Engine Optimization</h1>
                                    <p className='text-[18px] text-left p-4' >Extend your brand&apos;s organic reach. Attract thousands of new visitors to your website.</p>
                                    <button className='text-[#fff] text-[20px] py-2 font-bold border rounded-[50px] px-10 bg-[#2cbc63] hover:bg-[#fff] hover:text-[#59667d] transition duration-300  ' >Optimize your site</button>

                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] '>
                                    <Image src={homeContentManagementService} alt="image" />
                                    <h1 className='text-[30px] py-2' >Content <br /> Marketing</h1>
                                    <p className='text-[18px] text-left p-4' >With a focus on engagement, we specialize in brand elevating web content.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Reach more users</button>

                                </div>
                                <div className=' sm:w-[50%] lg:w-[25%] w-[100%] '>
                                    <Image src={homeWebManagement} alt="image" />
                                    <h1 className='text-[30px] py-2' >Website <br /> Management</h1>
                                    <p className='text-[18px] text-left p-4' >Let&apos;s take care of your bsuiness. We will manage the day-to-day operations of your website.</p>
                                    <button className='text-[#59667d] text-[20px] py-2 font-bold border rounded-[50px] px-10 hover:bg-[#2cbc63] hover:text-[#fff] transition duration-300  ' >Get a web manager</button>

                                </div>

                            </div>

                        </div>





                    </div>
                </section>




                {/* HT Mind Mag */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <p className=' text-[50px] md:text-[60px] text-[#00989e] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] py-20 ' >HT Mind Mag</p>

                            <div className='md:flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Activism</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticians} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Quotes</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humblePoliticalCampaigns} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Biographies</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleNgos} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Humble Mind Mag</p>
                                    <p className='text-[20px] py-3' >Nullam et cursus neque, eget fringilla dolor, curabitur ac leo nunc. Vestibulum et mauris vel ante finibus.</p>
                                    <Image className='rounded-xl' src={humbleCharities} alt="image" />
                                </div>

                            </div>

                        </div>

                    </div>
                </section>


                {/* Discover the HT Magazine */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover the HT Magazine</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            <p className='text-[24px] text-[#023A51] py-4 font-bold text-center ' >We built this site to show you what we are capable of. </p>
                            <p className='text-[24px] text-[#023A51] font-bold text-center '>Explore our offering:</p>

                            <div className='flex justify-around flex-wrap py-10 ' >
                                <div className='hover:scale-105 transition duration-300 group ' >
                                    <Image className=' rounded-xl group-hover:drop-shadow-lg cursor-pointer ' src={DigitalServices} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Digital Marketing <br /> Services</p>
                                </div>
                                <div className='hover:scale-105 transition duration-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={HumbleTrader} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Stocks & Business <br /> Analysis</p>
                                </div>
                                <div className='hover:scale-105 transition duration-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={TRAMSEO} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >TRAM SEO <br /> Course</p>
                                </div>
                                <div className='hover:scale-105 transition duration-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={HumbleVoter} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Politics & Ballot <br /> Information</p>
                                </div>
                                <div className='hover:scale-105 transition duration-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={Humblemind} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Educational <br /> Resources</p>
                                </div>
                            </div>

                        </div>





                    </div>
                </section>


                {/* get a qoute */}

                <GetAQuote />


            </Layout>
        </>

    )
}
