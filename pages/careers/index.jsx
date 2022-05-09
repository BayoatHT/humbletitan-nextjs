import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import { GiClockwork, GiNetworkBars } from 'react-icons/gi'
import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { CgWorkAlt } from 'react-icons/cg'

import whowearecareers from '../../assets/imgs/who-we-are-careers.jpg'
import avadaAccountantWorker from '../../assets/imgs/avada-accountant-worker.jpg'

export default function Careers() {
    return (
        <>
            <Head>
                <title>Careers - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-7/12' >
                                <h1 className=' text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Careers<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>Phasellus sagittis turpis eget enim ornare finibus. Cras ac mattis arcu, nec ultrices neque.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Who We Are */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='md:mr-20' >
                                    <Image className='rounded-xl p-10' src={whowearecareers} alt="image" />
                                </div>
                                <div className='text-[#023A51] ' >
                                    <p className='text-[30px] text-[#2cbc63] font-bold my-10 ' >Who We Are</p>
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>Humble Titan offers a great career with exceptional benefits<span className='text-[#2cbc63]'>.</span></p>
                                    <p className='text-[22px] my-10 ' >Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
                                        <br />
                                        <br />
                                        Duis id tellus non leo porta ultricies efficitur non nunc. Suspendisse venenatis, lacus ac aliquam mollis, nisl risus maximus lectus, vitae faucibus lacus ante vel diam. Sed lectus purus, lobortis eu aliquet at, ullamcorper sed.</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Working at a firm like */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] md:mr-10 md:w-[50%] ' >
                                    <p className=' text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] '>Working at a firm like Humble Titan lets me offer prospects so many different areas<span className='text-[#2cbc63]'>.</span></p>
                                    <p className='text-[22px] my-10 ' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet mauris.</p>
                                    <p className='text-[18px] py-3' ><span className='font-bold' >Dana Johnson</span> <br /> Founder - Hemisferio</p>
                                </div>
                                <div className='md:w-[40%]' >
                                    <Image className='rounded-xl p-10' src={avadaAccountantWorker} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Our Values. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51]  md:flex items-center w-10/12 md:w-11/12 '>
                            <div className='pt-[40px] md:flex flex-wrap justify-around md:w-[55%] '>
                                <div className='md:flex justify-around w-[100%] '>
                                    <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] ' >
                                        <GiClockwork className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Customer first</p>
                                        <p className='text-[18px]  ' >Vestibulum ante ipsum</p>
                                    </div>
                                    <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <GiNetworkBars className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Passion</p>
                                        <p className='text-[18px]' >Fusce at magna eget</p>
                                    </div>
                                </div>
                                <div className='md:flex justify-around w-[100%]'>
                                    <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <VscWorkspaceTrusted className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Integrity</p>
                                        <p className='text-[18px]' >Quisque mattis ornare</p>
                                    </div>
                                    <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-2 md:w-[48%] '>
                                        <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                        <p className='text-[24px] text-[#2cbc63] ' >Excellence</p>
                                        <p className='text-[18px]' >Duis consectetur ultrices</p>
                                    </div>
                                </div>

                            </div>
                            <div className='md:w-[45%] ml-10 ' >
                                <p className='text-[50px] md:text-[60px] font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >Our Values<span className='text-[#2cbc63]'>.</span></p>

                                <p className='text-[20px] '  >We believe lasting success is founded on a set of principles clients can always count on. As a family business, we are eager to welcome you as one of our own.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Benefits. */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <p className='text-[50px] md:text-[60px] text-center font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >Benefits<span className='text-[#2cbc63]'>.</span></p>

                            <div className='md:flex flex-wrap justify-around w-[100%] '>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] ' >
                                    <GiClockwork className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Competitive salary</p>
                                    <p className='text-[18px]  ' >Vestibulum ante ipsum</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <GiNetworkBars className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Volunteering events</p>
                                    <p className='text-[18px]' >Fusce at magna eget</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <VscWorkspaceTrusted className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Education assistance</p>
                                    <p className='text-[18px]' >Quisque mattis ornare</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Life insurance</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Dental</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Retirement plan</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Client referral bonus</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Paid personal time off</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                                <div className='bg-[#e0ecf0] p-10 text-center flex flex-col items-center rounded mb-4 md:w-[32%] '>
                                    <CgWorkAlt className='text-[26px] text-[#2cbc63] ' />
                                    <p className='text-[24px] text-[#2cbc63] ' >Happy hours</p>
                                    <p className='text-[18px]' >Duis consectetur ultrices</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>



                {/* Current openings. */}
                <section className='heading bg-[#f9fafb] md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <p className='text-[50px] md:text-[60px] text-center font-bold leading-[50px] md:leading-[69px] tracking-[-2px] text-[#023A51] py-10  ' >Current openings<span className='text-[#2cbc63]'>.</span></p>

                            <div className='md:flex flex-wrap justify-around w-[100%] '>
                                <div className='bg-[#fff] p-6 rounded mb-4 md:w-[24%] shadow ' >
                                    <p className='text-[22px] font-bold text-[#023A51] ' >Manager, Strategic Finance</p>
                                    <p className='text-[20px] font-thin text-[#59667d] '>US - New York</p>
                                    <button className='text-[22px] text-[#2cbc63]  ' >Apply now</button>
                                </div>
                                <div className='bg-[#fff] p-6 rounded mb-4 md:w-[24%] shadow ' >
                                    <p className='text-[22px] font-bold text-[#023A51] ' >Assurance Manager</p>
                                    <p className='text-[20px] font-thin text-[#59667d] '>US - New York</p>
                                    <button className='text-[22px] text-[#2cbc63]  ' >Apply now</button>
                                </div>
                                <div className='bg-[#fff] p-6 rounded mb-4 md:w-[24%] shadow ' >
                                    <p className='text-[22px] font-bold text-[#023A51] ' >Administrative Assitant</p>
                                    <p className='text-[20px] font-thin text-[#59667d] '>US - New York</p>
                                    <button className='text-[22px] text-[#2cbc63]  ' >Apply now</button>
                                </div>
                                <div className='bg-[#fff] p-6 rounded mb-4 md:w-[24%] shadow ' >
                                    <p className='text-[22px] font-bold text-[#023A51] ' >Accounting Services Senior</p>
                                    <p className='text-[20px] font-thin text-[#59667d] '>US - New York</p>
                                    <button className='text-[22px] text-[#2cbc63]  ' >Apply now</button>
                                </div>
                            </div>


                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}
