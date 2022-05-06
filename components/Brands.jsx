import React from 'react'
import Image from 'next/image'

import abstract from '../assets/imgs/abstract.png'
import cglobal from '../assets/imgs/cglobal.png'
import digitalbox from '../assets/imgs/digitalbox.png'
import hemisferio from '../assets/imgs/hemisferio.png'
import spaces from '../assets/imgs/spaces.png'
import next from '../assets/imgs/next.png'

export default function Brands() {
    return (
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
    )
}
