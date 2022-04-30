import React from 'react'
import Layout from "../components/Layout";
import Image from 'next/image'
import Head from 'next/head'
import heroImg from '../assets/imgs/bayo-ht-homepage-600x586.jpg'
import htgoforit from '../assets/imgs/ht-go-for-it-we-got-you.jpg'
import workTogether from '../assets/imgs/home-page-work-together.jpg'
import humbleLogo from '../assets/imgs/humble-home-logo.png'
import DigitalServices from '../assets/imgs/home-content-Humble-Digital-Services.jpg'
import HumbleTrader from '../assets/imgs/home-content-Humble-Trader.jpg'
import HumbleVoter from '../assets/imgs/home-content-Humble-Voter.jpg'
import TRAMSEO from '../assets/imgs/home-content-TRAM-SEO.jpg'
import Humblemind from '../assets/imgs/home-content-Humble-mind.jpg'
import helloicon from '../assets/imgs/hello-icon.png'
import humbeleTraderBanner from '../assets/imgs/Home-banner-humble-trader-600x625.jpg'
import homePageSeoTram from '../assets/imgs/home-page-seo-tram.jpg'
import homePageSeoCourse from '../assets/imgs/home-page-seo-course.jpg'
import htNewsletterBanner from '../assets/imgs/ht-newsletter-banner.jpg'
import HTHomeVoterBanner from '../assets/imgs/HT-home-voter-banner.jpg'
import HTHomeIndivisual from '../assets/imgs/ht-home-individuals-400x400.png'
import HTHomeBusiness from '../assets/imgs/ht-home-business-400x400.png'
import HTHomeEntrepreneur from '../assets/imgs/ht-home-entrepreneur-400x400.png'
import HTHomeBanner from '../assets/imgs/ht-home-banner-2.jpg'
import homeContentManagementService from '../assets/imgs/home-content-management-service.jpg'
import homeSeoService from '../assets/imgs/home-seo-service.jpg'
import homeWebAndMobileDesign from '../assets/imgs/home-web-and-mobile-design.jpg'
import homeWebManagement from '../assets/imgs/home-web-management.jpg'
import rocketIcon from '../assets/imgs/rocket-icon.png'


import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'


export default function Home() {
    return (
        <>
            <Head>
                <title>Elite Digital Marketing Services | Business & Politics Made Digital</title>
            </Head>
            <Layout >
                {/* Hero */}
                <section className='heading bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex flex-wrap w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] '>
                                <h1 className='text-[50px] md:text-[60px] text-[#023A51] pt-3 md:pt-10 leading-[69px] ' >Business and politics <br /> made digital<span className='text-[#2cbc63]'>.</span> </h1>
                                <h2 className='text-[24px]  text-[#023A51] leading-7 py-10 ' >Products and services that empower you to <br /> make better decisions.</h2>
                                <button className='green_roudend_btn text-[18px] mb-10'>Stock Due Diligence Reports </button>
                            </div>
                            <div className='' >
                                <Image src={heroImg} alt="image" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* middle */}

                <section className='heading my-20  '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex flex-wrap justify-around w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] '>
                                <div className='flex items-center ' >
                                    <Image className='rounded-xl' src={htgoforit} alt="img" />
                                    <div className='ml-8'  >
                                        <Image className='rounded-xl' src={workTogether} alt="img" />
                                        <div>
                                            <Image className='rounded-xl block ' src={humbleLogo} alt="img" />
                                        </div>
                                    </div>


                                </div>
                            </div>
                            <div className='mt-10  md:pl-10'>
                                <div className='flex items-center' >
                                    <Image src={helloicon} alt="img" />
                                    <p className='text-[20px] extralight text-[#023A51] ' >Hey, there! We are a digital marketing agency. </p>
                                </div>

                                <p className='text-[50px] md:text-[60px] text-[#023A51] py-10 ' style={{ lineHeight: '69px', letterSpacing: '-2px' }} >We boost online <br /> performance with <br /> our digital products <br /> & services <span className='text[#2cbc63]'>.</span></p>

                                <div className=' md:flex justify-between items-center '>
                                    <p className='text-[22px] extralight text-[#023A51] ' >Discover how much more <br /> you could be <br /> achieving online</p>
                                    <button className='green_roudend_btn my-6  ' >Select a service</button>
                                </div>

                                <a className=' text-[18px]  md:text-[20px] extralight text-[#023A51] py-10  ' href="#">Learn about our founder, Bayo</a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* explore */}
                <section className=' '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 text-[#023A51] '>
                            <h1 className=' text-[50px] md:text-[60px] text-center md:text-left font-semibold ' >Explore</h1>
                            <h2 className='text-[24px] py-4 block font-semibold text-center ' >We built this site to show you what we are capable of. </h2>
                            <h2 className='text-[24px] block font-semibold text-center '>Explore our offering:</h2>

                            <div className='flex justify-around flex-wrap py-10 ' >
                                <div className='hover:scale-105 transition delay-300 group ' >
                                    <Image className=' rounded-xl group-hover:drop-shadow-lg cursor-pointer ' src={DigitalServices} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Digital Marketing <br /> Services</p>
                                </div>
                                <div className='hover:scale-105 transition delay-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={HumbleTrader} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Stocks & Business <br /> Analysis</p>
                                </div>
                                <div className='hover:scale-105 transition delay-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={TRAMSEO} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >TRAM SEO <br /> Course</p>
                                </div>
                                <div className='hover:scale-105 transition delay-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={HumbleVoter} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Politics & Ballot <br /> Information</p>
                                </div>
                                <div className='hover:scale-105 transition delay-300 group '>
                                    <Image className=' rounded-xl hover:shadow-lg group-hover:drop-shadow-lg cursor-pointer' src={Humblemind} alt="image" />
                                    <p className='text-[26px] mb-6 text-center' >Educational <br /> Resources</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Services */}
                <section className='heading ' >
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 ' >
                            <h1 className=' text-[50px]  md:text-[60px] text-center md:text-left text-[#023A51] font-semibold py-20' >Our Services</h1>
                        </div>

                        <div className=' mx-auto flex flex-wrap  w-12/12 md:w-11/12 text-[#023A51]' style={{ backgroundImage: `url(${HTHomeBanner.src})`, width: '100%', height: '100%', backgroundPosition: 'cover', backgroundRepeat: 'no-repeat' }}>

                            <div className='bg-[#fff] rounded-xl mx-10 md:mx-0 p-10 md:mt-10 md:ml-10 drop-shadow-md ' >
                                <p className='text-[40px] md:text-[60px] text-[#023A51] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >
                                    Market smarter. <br /> Take full <br /> advantage of the <br /> internet
                                </p>
                                <p className='text-[20px] ' >Data. Design. Content & a mastery our <br /> your target audience. We do the hard <br /> work, so it&apos;s easy to perform better.</p>
                                <button className='green_roudend_btn my-5'>Got a challenge? Let us know!</button>
                            </div>

                        </div>


                        <div className='mx-auto text-[#023A51] py-20 flex flex-wrap justify-around text-center w-10/12 md:w-11/12 '>
                            <div className='text-center sm:w-[50%] lg:w-[25%] w-[100%]' >
                                <Image src={homeWebAndMobileDesign} alt="image" />
                                <h1 className='text-[30px] py-2' >Web & Mobile <br /> Design</h1>
                                <p className='text-[18px]  p-4' >More than design. We transform your vision into an online reality.</p>
                            </div>
                            <div className='text-center sm:w-[50%] lg:w-[25%] w-[100%] '>
                                <Image src={homeSeoService} alt="image" />
                                <h1 className='text-[30px] py-2' >Search Engine Optimization</h1>
                                <p className='text-[18px] p-4' >Extend your brand&apos;s organic reach. Attract thousands of new visitors to your website.</p>
                            </div>
                            <div className='text-center sm:w-[50%] lg:w-[25%] w-[100%] '>
                                <Image src={homeContentManagementService} alt="image" />
                                <h1 className='text-[30px] py-2' >Content <br /> Marketing</h1>
                                <p className='text-[18px] p-4' >With a focus on engagement, we specialize in brand elevating web content.</p>
                            </div>
                            <div className='text-center sm:w-[50%] lg:w-[25%] w-[100%] '>
                                <Image src={homeWebManagement} alt="image" />
                                <h1 className='text-[30px] py-2' >Website <br /> Management</h1>
                                <p className='text-[18px] p-4' >Let&apos;s take care of your bsuiness. We will manage the day-to-day operations of your website.</p>
                            </div>

                        </div>

                    </div>
                </section>

                {/* contact us */}
                <section className='heading py-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12 bg-[#023A51] rounded-xl '>
                            <div className='mx-auto justify-between flex flex-wrap w-10/12 md:w-11/12  bg-[#023A51] '>
                                <div className='text-[#fff] py-20 ' >
                                    <p className='text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ' >Tell us how we <br /> can help<span className='text-[#2cbc63]'>.</span></p>
                                    <div className='py-6' >
                                        <div className='flex items-center' >
                                            <FaBuilding className='mr-4 text-[26px] ' />
                                            <h2 className='text-[30px] py-4 ' >Office</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>We work remotely to serve clients <br /> all over the world.</p>
                                        <p className='text-[22px] extralight py-2 ' >HQ: Virginia Beach, Virginia</p>
                                    </div>

                                    <div className='py-6'>
                                        <div className='flex items-center'>
                                            <SiMinutemailer className='mr-4 text-[26px]' />
                                            <h2 className='text-[30px] py-4 '>Contact</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>support@humbletitan.com</p>
                                        <p className='text-[22px] extralight py-2 '>bayo@humbletitan.com</p>
                                    </div>

                                    <div className='py-6'>
                                        <div className='flex items-center'>
                                            <FaHospitalUser className='mr-4 text-[26px]' />
                                            <h2 className='text-[30px] py-4 ' >Open Hours</h2>
                                        </div>

                                        <p className='text-[22px] extralight py-2 '>Monday - Friday: 9am - 5pm</p>
                                    </div>
                                </div>
                                <div className=' py-6 md:py-20' >
                                    <div className=' bg-[#fff] rounded-xl p-4 md:p-10 '>
                                        <div className='md:flex justify-between py-4' >
                                            <div>
                                                <label className='text-[#34495E] my-6 md:py-3 text-[20px] ' htmlFor="name">Name *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] ' type="text" required placeholder='John Stuart' />
                                            </div>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px] ' htmlFor="name">Phone *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%] ' type="tel" required placeholder='(123)-456-7890' />
                                            </div>
                                        </div>
                                        <div className='md:flex justify-between py-4'>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Email address *</label>
                                                <input className='block p-2 border rounded-xl text-[20px] w-[100%] md:w-[90%]' type="text" required placeholder='name@company.com' />
                                            </div>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Service interested in *</label>
                                                <select className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] md:w-[90%]' required placeholder='(123)-456-7890'>
                                                    <option value="search engine optimization">Search Engine Optimaization</option>
                                                    <option value="web design">Web Design</option>
                                                    <option value="content marketing">Content Marketing</option>
                                                    <option value="website management">Website management</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="subject">Subject</label>
                                                <input className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='Quote request for' />
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <label className='text-[#34495E] py-3 text-[20px]' htmlFor="subject">How can we help?</label>
                                                <textarea className='block p-2 border rounded-xl outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='I need help with the next problem'></textarea>
                                            </div>
                                        </div>
                                        <div className='py-4 '>
                                            <div>
                                                <button className='green_roudend_btn'>Get in touch</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* The Humble Trader */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20' >
                                    <Image className='rounded-xl p-10' src={humbeleTraderBanner} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:pl-20  ' >
                                    <p className='text-[20px] my-10 ' >The Humble Trader</p>
                                    <p className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>Analyze the <br /> performance of <br /> companies on the <br /> US Stock <br /> Exchange</p>
                                    <p className='text-[20px] my-10 ' >Do your due diligence. Feel like an expert in a matter <br /> of seconds. You won’t believe how easy <br /> we’ve made it is to discern a good company from a <br /> bad one.</p>
                                    <button className='green_roudend_btn' >List of publicly traded companies</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* T.R.A.M Search Engine Optimization */}
                <section className='heading my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] flex justify-center flex-wrap w-10/12 md:w-11/12 '>
                            <div>
                                <div className='flex items-center' >
                                    <Image src={rocketIcon} alt='image' />
                                    <p className='text-[20px] ml-4  ' >T.R.A.M Search Engine Optimization</p>
                                </div>
                                <h1 className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >A step-by-step <br /> course for ranking <br /> on Google</h1>
                                <p className='text-[20px]'  >We teach you the professional way to manage <br /> the organic success of any idea, product or <br /> service on the internet</p>
                                <button className='green_roudend_btn my-10' >Start learning today</button>
                            </div>
                            <div className='pt-[40px] md:pl-20 '>
                                <div className='md:flex items-center ' >
                                    <Image className='rounded-xl' src={homePageSeoTram} alt="img" />
                                    <div className='ml-8'>
                                        <Image className='rounded-xl' src={homePageSeoCourse} alt="img" />
                                        <div>
                                            <Image className='rounded-xl block ' src={humbleLogo} alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* We are a full-service digital company */}
                <section className='heading my-20 '>
                    <div className=" container py-20 w-12/12 mx-auto bg-[#e0ecf0] flex justify-center flex-wrap max-w-screen-xl">
                        <div className='px-4' >
                            <Image src={htNewsletterBanner} alt="image" />
                        </div>
                        <div className='p-6 pl-10 text-[#023A51]'>
                            <h1 className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px]  py-10  ' >We are a full-service <br /> digital company</h1>
                            <p className='text-[20px]' >Digital is our passion. So much so, we are happy to share <br /> just about every bit of it with you. Be it our skills, <br /> knowledge or processes. As a marketing agency we earn <br /> a living through our services, but as an entity we look to <br /> teach and improve the lives of the public.</p>
                            <br />
                            <p className='text-[20px]' >Subscribe below to our magazine, the Humble  Mind for <br /> our latest updates.</p>
                            <h2 className='text-[24px] font-bold py-6 ' >Hear from us first</h2>
                            <input className='block outline-[#2cbc63] p-2 rounded-xl text-[20px] w-[100%]' type="text" placeholder='Enter your email' />
                            <button className='green_roudend_btn my-10' >Subscribe</button>
                        </div>
                    </div>
                </section>


                {/* Be a Humble Voter */}
                <section className='heading my-20 '>
                    <div className=" py-10 flex flex-wrap justify-between items-center container w-12/12 mx-auto max-w-screen-xl">
                        <div className='text-center p-4 md:p-10 text-[#023A51] md:w-[50%] w-[100%] ' >
                            <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] font-semibold ' >Be a Humble Voter</p>
                            <p className=" text-[20px] text-wrap leading-10 px-10 " >At Humble Titan we seek to explore all the ways we may empower people with the information. Not only is it our hope to help you make better business decisions, we also strive to shape a world that reflects the best of our collective intentions. For this reason, we’ve built Humble Voter. Discover officials who represent you, stay informed on upcoming elections and maintain contact with those chosen to serve your community. </p>

                        </div>
                        <div className=' md:w-[50%] w-[100%] px-4 ' >
                            <Image className='rounded-xl ' src={HTHomeVoterBanner} alt="image" />
                        </div>
                    </div>
                </section>



                {/* No matter who you are, */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <h1 className=' text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] py-20 pt-[80px] text-[#023A51] ' >No matter who you are, <br /> we’ve got what you need <span className='text-[#2cbc63]' >.</span></h1>
                        <div className='flex flex-wrap text-[#023A51] justify-around' >
                            <div className=' rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                <h1 className='text-[40px] text-center ' >Individuals<span className='text-[#2cbc63]' >.</span></h1>
                                <Image className='rounded-xl' src={HTHomeIndivisual} alt="image" />
                                <p className='text-[20px] '>“As long as we are a brand, you’ll always be our priority. As far as business and politics are concerned, we never want you to feel as though you need to pay for the critical information you need to make informed decisions.”</p>
                                <p className='text-[20px] py-3' ><span className='font-bold' >Bayo Adesina</span> Founder</p>
                            </div>
                            <div className='rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] '  >
                                <h1 className='text-[40px] text-center' style={{ lineHeight: '69px', letterSpacing: '-2px' }} >Businesses <span className='text-[#2cbc63]'>.</span></h1>
                                <Image className='rounded-xl' src={HTHomeBusiness} alt="image" />
                                <p className='text-[20px]' >“‘It’s not enough to have a website, businesses need a strategic one. Your competitors are taking advantage of the opportunities afforded by the digital marketing landscape. Are you keeping up? Would you like us to deliver an edge?”</p>
                                <p className='text-[20px] py-3' ><span className='font-bold' >Hafiz Adesina</span> , Growth Strategist</p>
                            </div>
                            <div className='rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                <h1 className='text-[40px] text-center' style={{ lineHeight: '69px', letterSpacing: '-2px' }} >Entrepreneurs<span className='text-[#2cbc63]'>.</span></h1>
                                <Image className='rounded-xl' src={HTHomeEntrepreneur} alt="image" />
                                <p className='text-[20px]' >“It’s simple. Want to get an idea discovered online? Explain it to us, will take care of the rest.”</p>
                                <p className='text-[20px] py-3' ><span className='font-bold' >Rilwan Adesina</span> , Lead Developer</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
