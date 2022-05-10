import React from 'react'
import { FaPhoneSquareAlt } from "react-icons/fa";

export default function GetAQuote() {
    return (
        <section className='heading md:my-20'>
            <div className=" container w-12/12 mx-auto max-w-screen-xl">
                <div className='mx-auto md:flex justify-around items-center w-10/12 md:w-11/12 drop-shadow-2xl bg-[#023A51] p-10 py-20 rounded-xl '>
                    <div className='text-[#fff] ' >
                        <h1 className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] '>HT Digital Marketing Services<span className='text-[#2cbc63]'>.</span></h1>
                        <br />
                        <p className='text-[18px]'>We will take care of your online design, strategy, content, and execution. Get in touch for elite services.</p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        <button className='green_rounded_btn ' >Get a Qoute</button>
                        <button className='dark_roudend_btn flex items-center justify-center mt-4 '><FaPhoneSquareAlt /> (555) 802-1234</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
