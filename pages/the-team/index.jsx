import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import { FaPlus, FaMinus } from 'react-icons/fa';
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'
import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'


import Brands from '../../components/Brands'


import BayoHumbleProfile from '../../assets/imgs/Bayo-Humble-Profile-600x690.jpg'
import RilwanHumbleProfile from '../../assets/imgs/Rilwan-Humble-Profile-600x690.jpg'
import HafizHumbleProfile from '../../assets/imgs/Hafiz-Humble-Profile-600x690.jpg'
import exceptionalResources from '../../assets/imgs/exceptional-resources-400x868.png'

export default function team() {
    return (
        <>
            <Head>
                <title>The Team - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>Humble Team</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Delivering effective solutions is our family business<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>We&apos;re three brothers, committed to helping others achieve their goals. While you are here we&apos;d like to help you make better-informed business and political decisions.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Bayo Adesina, MBA. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className='bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[50%] ' >
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Bayo Adesina, MBA<span className='text-[#2cbc63]'>.</span></h2>
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Founder<span className='text-[#2cbc63]'>.</span></h2>
                                    <p className='text-[22px] font-light flex py-4' >I’ve always had an obsession with making the world a better place. Drove me mad till I figured exactly how to focus that energy. Just grateful I get to embark on this mission with my brothers.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Establish a strong presence online </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Reach more people than ever before </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Amplify and maximize communication on all fronts (traditional & digital) </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Use data to make better marketing decisions </p>
                                </div>
                                <div className=' md:p-10 mb-2 md:w-[48%] '>
                                    <div className='rounded-xl bg-[#fff] p-6  '>
                                        <Image className='rounded-xl' src={BayoHumbleProfile} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Rilwan Adesina. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className=' md:p-10 mb-2 md:w-[48%] '>
                                    <div className='rounded-xl bg-[#fff] p-6  '>
                                        <Image className='rounded-xl' src={RilwanHumbleProfile} alt="image" />
                                    </div>
                                </div>
                                <div className='bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[50%] ' >
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Rilwan Adesina<span className='text-[#2cbc63]'>.</span></h2>
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Lead Developer<span className='text-[#2cbc63]'>.</span></h2>
                                    <p className='text-[22px] font-light flex py-4' >He is incredibly passionate about all things coding. Since the age of 7, it’s been his goal to be a full-stack developer. Proud to say at the age of 17 Rilwan is responsible for building and maintaining this platform.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aliquam pharetra nulla consequat dolor faucibus tempus.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Hafiz Adesina. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className='bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[50%] ' >
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Hafiz Adesina<span className='text-[#2cbc63]'>.</span></h2>
                                    <h2 className='text-[26px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Growth Strategist<span className='text-[#2cbc63]'>.</span></h2>
                                    <p className='text-[22px] font-light flex py-4' >He is the corporate ideal: endlessly creative, inquisitive, level-headed, charming, and intelligent. Hafiz has always had a knack for strategically directing the attention of people, now he is shaping to be a force in the business world. He manages our success.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aliquam pharetra nulla consequat dolor faucibus tempus.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. </p>
                                </div>
                                <div className=' md:p-10 mb-2 md:w-[48%] '>
                                    <div className='rounded-xl bg-[#fff] p-6  '>
                                        <Image className='rounded-xl' src={HafizHumbleProfile} alt="image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Brands */}
                <Brands />



                {/* Exceptional Accounting Resources. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className=' md:p-10 mb-2 md:w-[38%] '>
                                    <div className='rounded-xl bg-[#fff]  '>
                                        <Image className='rounded-xl' src={exceptionalResources} alt="image" />
                                    </div>
                                </div>
                                <div className='bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[58%] ' >
                                    <div className='md:flex justify-around'>
                                        <div className='bg-[#fff] p-10 rounded mb-2 md:w-[48%] ' >
                                            <GiClockwork className='text-[26px] text-[#2cbc63] ' />
                                            <p className='text-[24px] text-[#2cbc63] ' >Savings Excel</p>
                                            <p className='text-[18px]' >Curabitur ac leo nunc estibul et mauris vel ante finibus.</p>
                                        </div>
                                        <div className='bg-[#fff] p-10 rounded mb-2 md:w-[48%] '>
                                            <GiNetworkBars className='text-[26px] text-[#2cbc63] ' />
                                            <p className='text-[24px] text-[#2cbc63] ' >Tax Calculator</p>
                                            <p className='text-[18px]' >Curabitur ac leo nunc estibul et mauris vel ante finibus.</p>
                                        </div>
                                    </div>
                                    <div className='md:flex justify-around'>
                                        <div className='bg-[#fff] p-10 rounded mb-2 md:w-[48%] '>
                                            <VscWorkspaceTrusted className='text-[26px] text-[#2cbc63] ' />
                                            <p className='text-[24px] text-[#2cbc63] ' >Checkbook Balancer</p>
                                            <p className='text-[18px]' >Curabitur ac leo nunc estibul et mauris vel ante finibus.</p>
                                        </div>
                                        <div className='bg-[#fff] p-10 rounded mb-2 md:w-[48%] '>
                                            <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                            <p className='text-[24px] text-[#2cbc63] ' >VAT Calculator</p>
                                            <p className='text-[18px]' >Curabitur ac leo nunc estibul et mauris vel ante finibus.</p>
                                        </div>
                                    </div>
                                    <div className='md:flex justify-around'>
                                        <div className='bg-[#fff] p-10 rounded mb-2 md:w-[48%] '>
                                            <VscWorkspaceTrusted className='text-[26px] text-[#2cbc63] ' />
                                            <p className='text-[24px] text-[#2cbc63] ' >Retirement Planner</p>
                                            <p className='text-[18px]' >Curabitur ac leo nunc estibul et mauris vel ante finibus.</p>
                                        </div>
                                        <div className='bg-[#f9fafb] flex flex-col justify-between p-10 rounded mb-2 md:w-[48%] '>
                                            <p className='text-[20px] font-bold ' >More Free Accounting Tools for Your Business</p>
                                            <button className='green_rounded_btn' >View all tools</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* benefits from humble Titan */}
                <section className='heading md:my-20 bg-[#f9fafb] '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <h2 className='text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Great benefits from Humble Titan<span className='text-[#2cbc63]'>.</span></h2>
                            <p className='text-[22px] text-center font-light flex py-4'>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit.</p>
                            <div className='md:flex items-center bg-[#fff] justify-between'>
                                <div className='bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[48%] ' >
                                    <p className='text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Humble Titan Acountant<span className='text-[#2cbc63]'>.</span></p>
                                    <br />
                                    <hr />
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#2cbc63' /> Aliquam pharetra nulla consequat dolor faucibus tempus.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#2cbc63' /> Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#2cbc63' /> Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#2cbc63' /> Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. </p>
                                </div>
                                <div className=' md:p-10 mb-2 bg-[#fff] md:w-[48%] '>
                                    <div className='rounded-xl bg-[#fff] p-6  '>
                                        <p className='text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ' >Other Accountancy Agencies</p>
                                        <br />
                                        <hr />
                                        <p className='text-[22px] font-light flex py-4 ' ><FaMinus className='translate-y-2  mr-[12px]' color='#f86011' /> Aliquam pharetra nulla consequat dolor faucibus tempus.</p>
                                        <p className='text-[22px] font-light flex py-4 ' ><FaMinus className='translate-y-2  mr-[12px]' color='#f86011' /> Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. </p>
                                        <p className='text-[22px] font-light flex py-4 ' ><FaMinus className='translate-y-2  mr-[12px]' color='#f86011' /> Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
                                        <p className='text-[22px] font-light flex py-4 ' ><FaMinus className='translate-y-2  mr-[12px]' color='#f86011' /> Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. </p>
                                    </div>
                                </div>
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
                                                <button className='green_rounded_btn'>Get in touch</button>
                                            </div>
                                        </div>
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
