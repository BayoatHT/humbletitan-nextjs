import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'

import htMissionThisIsChange from '../../assets/imgs/ht-mission-this-is-change.jpg'
import htMissionContentCreation from '../../assets/imgs/ht-mission-content-creation-400x174.jpg'
import htMissionSeo from '../../assets/imgs/ht-mission-seo-400x174.jpg'
import htMissionWebDevelopment from '../../assets/imgs/ht-mission-web-development-400x174.jpg'
import htMissionCommunityLeadership from '../../assets/imgs/ht-mission-community-leadership-400x174.jpg'
import htMissionWebManagement from '../../assets/imgs/ht-mission-web-management-400x174.jpg'
import htMissionDataManagement from '../../assets/imgs/ht-mission-data-management-400x174.jpg'
import htMissionBuildCenters from '../../assets/imgs/ht-mission-build-centers-400x174.jpg'
import htMissionInstallInfrastructure from '../../assets/imgs/ht-mission-install-infrastructure-400x174.jpg'
import htMissionOfferFreeTraining from '../../assets/imgs/ht-mission-offer-free-training-400x174.jpg'
import htMissionSelectTheBest from '../../assets/imgs/ht-mission-select-the-best-400x174.jpg'
import htMissionAfrica from '../../assets/imgs/ht-mission-africa-400x174.jpg'
import htMissionSouthAmerica from '../../assets/imgs/ht-mission-south-america-400x174.jpg'
import htMissionStudents from '../../assets/imgs/ht-mission-students-400x174.jpg'
import htMissionProfessionals from '../../assets/imgs/ht-mission-professionals-400x174.jpg'
import htMissionEntrepreneurs from '../../assets/imgs/ht-mission-entrepreneurs-400x174.jpg'
import htMissionLeaders from '../../assets/imgs/ht-mission-leaders-400x174.jpg'


import { FaChevronDown } from 'react-icons/fa'
import DiscoverMore from '../../components/DiscoverMore';

export default function OurMission() {
    return (
        <>
            <Head>
                <title>Our Mission - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>Our Mission</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Teaching tech skills in developing countries<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>Just imagine how much better the world would be if we could tap into the best ideas of all of us, not just some of us.</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Donate to our cause */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex items-center justify-around'>
                                <div className='bg-[#fff] transition p-10 flex flex-col items-center rounded mb-2 md:w-[50%] ' >

                                    <h2 className='text-[30px] font-bold md:text-[40px] text-[#59667d] pt-3 leading-[38px] md:leading-[48px] ' >We are set up to teach life and career skills to undiscovered talent in developing countries</h2>
                                    <h2 className='text-[30px] font-bold md:text-[40px] text-[#00989e] pt-3 leading-[38px] md:leading-[48px] ' >“Give a man a fish and you feed him for a day; teach a man to fish and you feed him for a lifetime.”</h2>
                                </div>
                                <div className=' md:p-10 mb-2 md:w-[48%] '>

                                    <div className='rounded-xl bg-[#f5f5f7] p-10  '>
                                        <p className='text-[30px] font-bold md:text-[40px] text-[#023A51] py-3 leading-[38px] md:leading-[48px] ' >Donate to our cause</p>
                                        <div className='rounded-xl bg-[#fff] p-6  '>
                                            <Image className='rounded-xl' src={htMissionThisIsChange} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* We strive for the remarkable, */}
                            <div className='flex justify-center'>
                                <div className='w-8/12 text-[#59667d]  '>
                                    <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >We strive for the remarkable, by dedicating ourselves to the most impactful.</p>
                                    <br />
                                    <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] '>Especially in developing countries, our focus is to teach tech and data skills to those who wouldn’t otherwise have the resources.</p>
                                    <br />
                                    <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] '>We ask you to donate so we may build and create opportunities in the places that need them the most. Let’s change the world by changing our priorities.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* Discover what we’ll teach */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover what we’ll teach</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* skills we plan to share */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 ' >Skills we plan to share</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >As technology continues to evolve, the wealth gap widens despite the evidence that the ways of technology can be taught to anyone willing to learn. We don’t claim to know it all, we simply promise to share our bit with society’s forgotten many. </p>
                                <br />
                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >To keep it simple, we’d like to make a difference by empowering people to lift themselves out of their circumstances. </p>
                                <br />
                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >Tech and data provide exactly the tools anyone may depend on to change their lives.</p>
                                <br />
                            </div>


                            <div className='md:flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Content Creation</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >Content is at the core of everything we do. We provide you with the structure and experience of creating content that engages an online audience. We’d like to build together whether you are an aspiring writer, graphic designer, photographer, or videographer.</p>
                                    <Image className='rounded-xl' src={htMissionContentCreation} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>SEO</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >It’s one thing to know the theory of ranking a website, it’s quite another to learn the various deliverables and excel formatting needed to satisfy stakeholders of any enterprise.</p>
                                    <Image className='rounded-xl' src={htMissionSeo} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Web Development</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >Being a web developer is a creative process that has the potential of bringing to life just about any idea. We aim to provide a safe place and reliable equipment for coding.</p>
                                    <Image className='rounded-xl' src={htMissionWebDevelopment} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Community Leadership</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >We realize the most effective approach to significant change is empowering leaders with a unique perspective. Here we aim to share the soft skills that make a difference. Plus, we hope to connect minds with real-world contacts that may help to define the vision of the next batch of world movers.</p>
                                    <Image className='rounded-xl' src={htMissionCommunityLeadership} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Web Management</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >The world is digital. Yet we don’t have enough professionals to explain the fundamentals required to help brands succeed online. We want the next generation of industry-leading experts to come from Africa and South America.</p>
                                    <Image className='rounded-xl' src={htMissionWebManagement} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Data Management</p>
                                    <p className='text-[22px] py-3 text-[#59667d] ' >The new world of data opens up new opportunities for those looking to mesh an analytical mind with a technical process. The old world was happy to forsake developing nations. Let’s not let the same happen in the new one.</p>
                                    <Image className='rounded-xl' src={htMissionDataManagement} alt="image" />
                                </div>

                            </div>

                        </div>





                    </div>
                </section>




                {/* Discover how */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover how </p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* How we plan to make an impact */}

                            <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >How we plan to make an impact</p>

                            <div className='md:flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>1.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionBuildCenters} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>2.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionInstallInfrastructure} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>3.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionOfferFreeTraining} alt="image" />
                                    </div>

                                </div>
                                <div className=' rounded-xl  md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-12 ' >
                                    <p className='text-[50px] text-[#59667d] '>4.</p>
                                    <div className=' text-center mb-10'>
                                        <p className='text-[30px] md:text-[36px] leading-[40px] md:leading-[46px] py-3 pb-6 text-[#023A51] ' >Build HT Center near universities or in densely populated areas</p>
                                        <Image className='rounded-xl' src={htMissionSelectTheBest} alt="image" />
                                    </div>

                                </div>
                            </div>

                        </div>





                    </div>
                </section>




                {/* Discover why and where */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover why and where </p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* What drives us */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >What drives us</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >As technology continues to evolve, the wealth gap widens despite the evidence that the ways of technology can be taught to anyone willing to learn. We don’t claim to know it all, we simply promise to share our bit with society’s forgotten many. </p>
                                <br />
                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >To keep it simple, we’d like to make a difference by empowering people to lift themselves out of their circumstances. </p>
                                <br />
                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >Tech and data provide exactly the tools anyone may depend on to change their lives.</p>
                                <br />
                            </div>



                        </div>





                    </div>
                </section>



                {/* Where we want to work */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >Where we want to work</p>
                            <div className='md:flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Africa</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >As his birth continent, Africa is near and dear to the heart of our founder. Making a change at home was always the plan. Starting in Nigeria, we hope to spread a system that begins to liberate the African people.</p>
                                    <Image className='rounded-xl' src={htMissionAfrica} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>South America</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >As his birth continent, Africa is near and dear to the heart of our founder. Making a change at home was always the plan. Starting in Nigeria, we hope to spread a system that begins to liberate the African people.</p>
                                    <Image className='rounded-xl' src={htMissionSouthAmerica} alt="image" />
                                </div>
                            </div>

                        </div>





                    </div>
                </section>



                {/* Discover those we plan to impact */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-col text-[#023A51] items-center'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover those we plan to impact </p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            {/* One person at a time */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >One person at a time</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >We’d like to reduce the number of human beings who experience a fight for survival as a way of life. We provide free training to help turn passion into a living.</p>
                                <br />
                            </div>


                            {/* We’ll be nurturing the brilliant minds of … */}
                            <div className='text-[#59667d] w-9/12 my-10 '>
                                <p className=' text-[50px] md:text-[60px] text-[#59667d] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] mb-10 py-20 ' >We’ll be nurturing the brilliant minds of …</p>

                                <p className='text-[26px] md:text-[30px] py-3 leading-[40px] md:leading-[50px] ' >We’d like to reduce the number of human beings who experience a fight for survival as a way of life. We provide free training to help turn passion into a living.</p>
                                <br />
                            </div>

                            <div className='md:flex flex-wrap text-[#023A51] mt-10 justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Students</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >We prepare young professionals for competition in a digital world. We work with universities to establish paid internships.</p>
                                    <Image className='rounded-xl' src={htMissionStudents} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Professionals</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >We’ve made it clear we plan to teach professional skills. What we haven’t mentioned is as our platform evolves, we hope to establish a space where talent may display their portfolio, making it easier to acquire future work.</p>
                                    <Image className='rounded-xl' src={htMissionProfessionals} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Entrepreneurs</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >There are many ways to generate an income online. We don’t promise wealth but exposure to avenues of generating an online revenue stream.</p>
                                    <Image className='rounded-xl' src={htMissionEntrepreneurs} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Leaders</p>
                                    <p className='text-[22px] py-3 pb-6 text-[#59667d] ' >Not only will we go over the theory of becoming an effective leader, but we also aim to offer opportunities that expose talent to real-world responsibilities.</p>
                                    <Image className='rounded-xl' src={htMissionLeaders} alt="image" />
                                </div>
                            </div>

                        </div>





                    </div>
                </section>





                {/* Discover more */}
                <DiscoverMore />

            </Layout>
        </>
    )
}
