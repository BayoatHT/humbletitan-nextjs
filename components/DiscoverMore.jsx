import React from 'react'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa'
import DigitalServices from '../assets/imgs/home-content-Humble-Digital-Services.jpg'
import HumbleTrader from '../assets/imgs/home-content-Humble-Trader.jpg'
import HumbleVoter from '../assets/imgs/home-content-Humble-Voter.jpg'
import TRAMSEO from '../assets/imgs/home-content-TRAM-SEO.jpg'
import Humblemind from '../assets/imgs/home-content-Humble-mind.jpg'

export default function DiscoverMore() {
    return (
        <section className='heading md:my-20 ' >
            <div className=" container w-12/12 mx-auto max-w-screen-xl">
                <div className='mx-auto  w-10/12 md:w-11/12 '>
                    <div className='md:flex flex-col text-[#023A51] items-center'>
                        <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover more </p>
                        <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                    </div>
                    <p className='text-[24px] text-[#023A51] py-4 font-bold text-center ' >We built this site to show you what we are capable of. </p>
                    <p className='text-[24px] text-[#023A51] font-bold text-center '>Explore our offering:</p>

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
        </section >
    )
}
