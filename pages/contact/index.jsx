import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'


import testimonial from '../../assets/imgs/testimonial-3.jpg'
import abstract from '../../assets/imgs/abstract.png'


import { FaBuilding, FaHospitalUser } from 'react-icons/fa'
import { SiMinutemailer } from 'react-icons/si'
import Brands from '../../components/Brands';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact Us - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12 text-center '  >
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Contact Us</h1>
                            </div>
                        </div>
                    </div>
                </section>



                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex flex-col items-center w-10/12 md:w-11/12 '>
                            <div className='md:w-7/12 text-[#023A51] ' >
                                <h2 className=' text-[40px] font-bold ' >Humble Titan</h2>
                                <h2 className=' text-[50px] md:text-[60px] leading-[59px] md:leading-[69px] tracking-[-2px] font-bold ' >We’re the elite digital marketing service</h2>
                            </div>

                            {/* contact form  */}
                            <div className='md:w-8/12 py-6 md:py-20' >
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


                            <div className=' w-8/12 ' >
                                <p className='text-[#023A51] text-[50px] md:text-[60px] font-bold leading-[59px] md:leading-[69px] tracking-[-2px] ' >As opposed to telling you the kind of service you can expect from us. We built this website to show you our passion for marketing, business, and politics.  Now, imagine what we can do for you.
                                    We’d love to hear from businesses (of all verticals), NGOs, Political Campaigns, Charities, and more. Let’s stun you with excellence.</p>
                            </div>
                        </div>



                        <div className='md:flex justify-around text-[#023A51] mt-10 ' >
                            <div className='p-6 rounded-lg md:w-[30%]  ' >
                                <div className=' flex flex-col items-center' >
                                    <FaBuilding className='mr-4 text-[26px] ' />
                                    <h2 className='text-[26px] text-[#023A51] font-bold py-4 ' >Office</h2>
                                </div>

                                <p className='text-[22px] text-center extralight py-2 ' >HQ: Virginia Beach, Virginia</p>
                            </div>

                            <div className='p-6 rounded-lg md:w-[30%] '>
                                <div className=' flex flex-col items-center'>
                                    <SiMinutemailer className='mr-4 text-[26px]' />
                                    <h2 className='text-[26px] text-[#023A51] font-bold py-4 '>Contact</h2>
                                </div>

                                <p className='text-[22px] text-center extralight py-2 '>support@humbletitan.com</p>
                                <p className='text-[22px] text-center extralight py-2 '>bayo@humbletitan.com</p>
                            </div>

                            <div className='p-6 rounded-lg md:w-[30%] '>
                                <div className=' flex flex-col items-center'>
                                    <FaHospitalUser className='mr-4 text-[26px]' />
                                    <h2 className='text-[26px] text-[#023A51] font-bold py-4 ' >Open Hours</h2>
                                </div>

                                <p className='text-[22px] text-center extralight py-2 '>Monday - Friday: 9am - 5pm</p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Frequently Asked Questions */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className=' text-center '  >
                                <h2 className=' text-[50px] md:text-[60px] text-[#023A51] font-bold leading-[55px] md:leading-[69px] tracking-[-2px] ' >Frequently Asked Questions</h2>
                                <div className='md:flex flex-wrap text-[#023A51] justify-around' >
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Sed lectus purus lobortis eu aliquet?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Morbi augue egestas malesuada?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Vivamus suscipit ut erat quis cursus?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Donec bibendum enim at nunc accumsan sagittis?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Aliquam pharetra nulla consequat dolor faucibus tempus?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>
                                    <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-6' >
                                        <p className='text-[22px] font-semibold leading-[30px] '>Vivamus suscipit ut erat quis cursu?</p>
                                        <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Abstract */}
                <section className='heading md:my-20'>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto flex w-10/12 md:w-11/12  '>
                            <div className='md:flex items-center mx-auto justify-between' >
                                <div className='text-[#023A51] w-[100%] md:w-[45%] md:pl-20  ' >
                                    <Image src={abstract} alt="image" />
                                    <h2 className=' text-[30px] md:text-[40px] leading-[39px] md:leading-[49px] tracking-[-2px] '>Humble Titan has been a great partner to us and I personally cannot be more grateful.</h2>
                                    <br />
                                    <p className='text-[20px] ' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet mauris.</p>
                                    <br />
                                    <p className='text-[20px] font-bold ' >Laura Park</p>
                                    <p className='text-[18px] '>Founder - Abstract</p>
                                </div>
                                <div className='md:mr-22 md:w-[45%]' >
                                    <Image className='rounded-xl p-10' src={testimonial} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Brands />
            </Layout>

        </>
    )
}
