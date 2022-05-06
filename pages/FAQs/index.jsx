import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";

export default function index() {
    return (
        <>

            <Head>
                <title>FAQs - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='w-7/12' >
                                <h1 className=' text-[50px] md:text-[60px] text-center text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >FAQs<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>Phasellus sagittis turpis eget enim ornare finibus. Cras ac mattis arcu, nec ultrices neque.</p>
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 bg-[#f9fafb] '>

                            <div className='md:flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Sed lectus purus lobortis eu aliquet?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Morbi augue egestas malesuada?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Vivamus suscipit ut erat quis cursus?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Donec bibendum enim at nunc accumsan sagittis?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Aliquam pharetra nulla consequat dolor faucibus tempus?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Vivamus suscipit ut erat quis cursu?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Praesent finibus dolor at ligula rhoncus blandit leo?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Nullam maximus ipsum in lectus gravida, nec luctus?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Fusce a ligula convallis, efficitur nibh eget, rutrum erat?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>
                                <div className=' rounded-xl p-8 md:p-14 md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] font-semibold leading-[40px] '>Aenean ex justo, tempor non nunc sed, ullamcorper molestie lectus?</p>
                                    <p className='text-[20px] py-3' >Morbi bibendum eu velit mattis aliquam. Nulla ac ullamcorper dui, in dictum nibh. Aliquam ac dictum nunc, eget auctor est. Integer auctor imperdiet.</p>
                                </div>


                            </div>

                        </div>





                    </div>
                </section>




                {/* Request a qoute */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-center  w-10/12 md:w-11/12 '>
                            <h2 className='text-[40px] font-semibold text-[#023A51] md:text-[50px] leading-[50px] md:leading-[59px] tracking-[-2px] md:px-10' >Want to get serious about your business and online strategy<span className='text-[#2cbc63]' >?</span></h2>
                            <p className='text-[26px] text-[#2cbc63] md:text-[35px] mt-4 leading-[35px] md:leading-[44px] tracking-[-2px] md:px-10' >Get in touch. Web Design. Content Marketing. SEO. Website Management. </p>
                            <button className='green_roudend_btn my-6' >Request a Quote</button>
                            <p className='text-[16px] text-[#023A51]'> Delighted to help.</p>
                        </div>
                    </div>
                </section>
            </Layout>



        </>
    )
}
