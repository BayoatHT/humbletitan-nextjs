import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import aboutAgency1 from '../../assets/imgs/about-agency-1.jpg'
import aboutAgency2 from '../../assets/imgs/about-agency-2.jpg'
import aboutAgency3 from '../../assets/imgs/about-agency-3.jpg'
import aboutWhoWeAre from '../../assets/imgs/about-who-we-are.jpg'
import abstract from '../../assets/imgs/abstract.png'
import cglobal from '../../assets/imgs/cglobal.png'
import digitalbox from '../../assets/imgs/digitalbox.png'
import hemisferio from '../../assets/imgs/hemisferio.png'
import spaces from '../../assets/imgs/spaces.png'
import next from '../../assets/imgs/next.png'
import empoweringYou from '../../assets/imgs/empowering-you.jpg'
import team1 from '../../assets/imgs/team-1.jpg'
import team2 from '../../assets/imgs/team-2.jpg'
import team3 from '../../assets/imgs/team-3.jpg'
import team4 from '../../assets/imgs/team-4.jpg'
import team5 from '../../assets/imgs/team-5.jpg'
import team6 from '../../assets/imgs/team-6.jpg'



import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaPhoneSquareAlt } from "react-icons/fa";
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'
import GetAQuote from '../../components/GetAQuote';


export default function About() {
    return (
        <>
            <Head>
                <title>About Us - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading  bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] '>
                                <h1 className=' text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 md:pt-10 mb-10   leading-[69px] ' >About Us</h1>
                                <div className='md:flex items-center md:mt-20 justify-around mb-20 ' >
                                    <div>
                                        <Image className='rounded-xl' src={aboutAgency2} alt="image" />
                                    </div>
                                    <div className='mx-6'>
                                        <Image className='rounded-xl' src={aboutAgency1} alt="image" />
                                    </div>
                                    <div>
                                        <Image className='rounded-xl' src={aboutAgency3} alt="image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>



                {/* Overview */}
                <section className='heading my-10 md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] md:w-8/12 text-[#023A51] '>
                                <h2 className=' text-[45px] md:text-[55px] text- pt-3 md:pt-10   leading-[69px] tracking-[-2px] ' >Overview<span className='text-[#2cbc63]'>.</span> </h2>
                                <p className='text-[22px] mt-4 '>We’re all affected by business and politics, two critical areas where many look to make the best possible decisions. Still, despite our best efforts, absorbing the noise and making sense of what matters poses a challenge. In response we’ve built Humble Titan as a problem solving three-tiered platform:</p>
                                <br />

                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] ' >Individuals<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 font-thin ' >When it comes to American Business and Politics, we’re organizing and giving away as much as we possibly can.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >We appreciate that the tools most of us need to live better-informed lives are usually inaccessible. We also get that the main difference between those who are able to sort out their lives and those who can’t is knowledge.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Trust us to empower you so you never have to bet blindly on the stock market or an election. Count on us to provide you the education that should have been prioritized in our high schools.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Tell us how we may do more.</p>

                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] ' >Businesses<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 ' >We dissect businesses of all industries and sectors on a daily basis. Regardless of vertical, we can explain to you what a healthy balance sheet, income statement, and cash flow should look like. Our Due Diligence reports prove this.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >But we take our obsession a few steps further, we understand which digital marketing strategy resonates with your target audience. Plus, we understand why it works.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >Get in touch to build or improve your brand’s website. As a client, you’ll surpass the standards of a public traded company.</p>


                                <h6 className='text-[25px] md:text-[35px] text- pt-3 md:pt-10   md:leading-[50px] tracking-[-2px] '>For the Dreamer/Entrepreneur<span className='text-[#2cbc63]'>:</span></h6>

                                <p className='text-[22px] mt-4 ' >Here our founder admits a personal vendetta. He’s been labeled a dreamer for the majority of his life. Though he claims to have found strength in the tag, he struggles with the connotation. “People say ‘dreamer’ and dismiss your ideas as pie in the sky. They stop listening.”</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >He contests that the best of s9ociety’s solutions were once dismissed as projects of dreamers. He reflects often on all of those dreams that could have been if only the dreamer could envision a way to success. Bayo accepts that no one can help everyone, but Humble Titan will strive to do its part.</p>
                                <br />
                                <p className='text-[22px] mt-4 ' >We welcome the entrepreneur who believes a website will advance their ambitions. We eagerly await those with products, services, or concepts that have a space online. We’d love to work with you.</p>


                            </div>
                        </div>
                    </div>
                </section>



                {/* Our Mission */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20' >
                                    <Image className='rounded-xl p-10' src={aboutWhoWeAre} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:pl-20  ' >
                                    <p className='text-[26px] font-medium my-10 text-[#2cbc63] ' >Our Mission</p>
                                    <h2 className=' text-[45px] md:text-[55px] leading-[50px] md:leading-[60px] tracking-[-2px] '>We maximize <br /> your business <br /> and political <br /> potential<span className='text-[#2cbc63]'>.</span></h2>
                                    <br />
                                    <p className='text-[20px] ' >We are all betting real money, you shouldn’t have to work to wall street to know a risky stock from a safe one.</p>
                                    <br />
                                    <p className='text-[20px] ' >We are all equal, you shouldn’t need access to the best business schools to get your ideas in front of the world.</p>
                                    <br />
                                    <p className='text-[20px] '> It is our goal to obliterate all barriers to the success of people and businesses. If you are willing to invest the time to grow, we’d love to provide you a place where you can do just that.</p>
                                    <br />
                                    <p className='text-[20px] ' >We are all betting real money, you shouldn’t have to work to wall street to know a risky stock from a safe one.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Brands */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-center w-10/12 md:w-11/12 text-[#023A51] '>
                            <p className=' text-[26px] md:text-[24px]  py-4 block font-semibold text-center ' >Trusted by the world’s fastest growing companies: </p>
                            <div className='md:flex justify-around pb-10 md:py-10 ' >
                                <div>
                                    <Image src={abstract} alt="image" />
                                </div>
                                <div >
                                    <Image src={cglobal} alt="image" />
                                </div>
                                <div >
                                    <Image src={digitalbox} alt="image" />
                                </div>
                                <div >
                                    <Image src={hemisferio} alt="image" />
                                </div>
                                <div >
                                    <Image src={next} alt="image" />
                                </div>
                                <div >
                                    <Image src={spaces} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Our Values. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 bg-[#e0ecf0] py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51]  md:flex items-center w-10/12 md:w-11/12 '>
                            <div className='md:w-5/10 ' >
                                <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >Our Values<span className='text-[#2cbc63]'>.</span></p>

                                <p className='text-[20px] pr-10 '  >We believe lasting success is founded on a set of principles clients can always count on. As a family business, we are eager to welcome you as one of our own.</p>
                            </div>
                            <div className='pt-[40px] md:flex flex-wrap justify-around md:w-5/10 '>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] ' >
                                        <GiClockwork className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Creativity</p>
                                        <p className='text-[18px]  ' >We embrace the opportunity to solve your challenge.</p>
                                    </div>
                                    <div className='bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <GiNetworkBars className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Passion</p>
                                        <p className='text-[18px]' >Your success means as much to us as it does to you.</p>
                                    </div>
                                </div>
                                <div className='md:flex justify-around'>
                                    <div className='bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <VscWorkspaceTrusted className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Professionalism</p>
                                        <p className='text-[18px]' >Respect and Integrity are among our fundamentals.</p>
                                    </div>
                                    <div className='bg-[#fff] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Value-centricity</p>
                                        <p className='text-[18px]' >We cut out the fluff and focus on providing a service that makes a difference.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>


                {/* Meet the Team. */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <h1 className=' text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] py-20 pt-[80px] text-[#023A51] ' >Meet the Team<span className='text-[#2cbc63]' >.</span></h1>
                        <div className='flex flex-wrap text-[#023A51] justify-around' >
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10 ' >
                                <Image className='rounded-xl' src={team1} alt="image" />
                                <p className='text-[30px] '>Richard Park</p>
                                <p className='text-[20px] ' >Director</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team2} alt="image" />
                                <p className='text-[30px] '>Jennifer Venis</p>
                                <p className='text-[20px]' >Office Manager</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team3} alt="image" />
                                <p className='text-[30px] '>Adam Neville</p>
                                <p className='text-[20px]' >Partner</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team4} alt="image" />
                                <p className='text-[30px] '>Pamela Hickson</p>
                                <p className='text-[20px]' >Advisory</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team5} alt="image" />
                                <p className='text-[30px] '>Steve Beadle</p>
                                <p className='text-[20px]' >Tax & Business</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>
                            <div className=' rounded-xl w-[90%] sm:w-[30%] mb-10' >
                                <Image className='rounded-xl' src={team6} alt="image" />
                                <p className='text-[30px] '>Patricia Worley</p>
                                <p className='text-[20px]' >Litigation Services</p>
                                <div className=' flex items-center mt-4 '>
                                    <TiSocialTwitter className='text-[24px] mr-4 ' />
                                    <IoLogoInstagram className='text-[24px] mr-4 ' />
                                    <FaLinkedinIn className='text-[24px] mr-4 ' />
                                    <AiOutlineMail className='text-[24px] mr-4 ' />
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* Careers */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20' >
                                    <Image className='rounded-xl p-10' src={empoweringYou} alt="image" />
                                </div>
                                <div className='text-[#023A51] w-[100%] md:pl-20  ' >
                                    <p className='text-[26px] font-bold my-10 text-[#2cbc63] ' >Careers</p>
                                    <p className=' text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>Want to be a <br /> part of our team<span className='text-[#2cbc63]'>?</span></p>
                                    <p className='text-[20px] my-10 ' >Vestibulum ante ipsum primis faucibus orci luctus et ultrices posuere.</p>
                                    <button className='green_roudend_btn_oulined' >See Openings</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Offices */}
                <section className='heading py-20 bg-[#f9fafb]'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <p className=' text-[50px] md:text-[60px] text-center leading-[69px] md:leading-[50px] tracking-[-2px] md:py-20 pt-[80px] text-[#023A51] ' >Our Offices <span className='text-[#2cbc63]' >.</span></p>
                        <div className='flex flex-wrap text-[#023A51] justify-around my-10' >
                            <div className=' rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                <p>Address</p>
                            </div>
                            <div className='rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] '  >
                                <p>Address</p>
                            </div>
                            <div className='rounded-xl mb-6 p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                <p>Address</p>
                            </div>
                        </div>

                        <div className=' text-[#023A51] ' >
                            <div className='md:flex justify-around' >
                                <div className=' rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>Melville, NY</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div>
                                <div className=' rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>San Francisco, CA</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div>
                                <div className=' rounded-xl p-10 bg-[#fff] w-[90%] sm:w-[30%] ' >
                                    <p className='text-[26px] '>Tampa, FL</p>
                                    <p className='text-[20px]'>12345 North Main Street, New York, NY 555555</p>
                                    <br />
                                    <p className='text-[20px] text-[#2cbc63] '>Contact us</p>
                                </div>
                            </div>

                            <br />
                            <div className='text-center' >
                                <button className='green_roudend_btn_oulined my-10' >View All Offices</button>

                            </div>
                        </div>
                    </div>
                </section>

                {/* Get a Quote */}
                <GetAQuote />
            </Layout>
        </>
    )
}
