import React from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import DiscoverMore from '../../components/DiscoverMore'
import Image from 'next/image'
import { FaChevronDown } from 'react-icons/fa';

import htpageActivism from '../../assets/imgs/ht-page-Activism-400x174.jpg'
import htpageHumanRights from '../../assets/imgs/ht-page-Human-Rights-400x174.jpg'
import htpageSustainableEconomy from '../../assets/imgs/ht-page-Sustainable-Economy-400x174.jpg'
import htpageEnvironmentandNature from '../../assets/imgs/ht-page-Environment-and-Nature-400x174.jpg'
import htpageSustainableHome from '../../assets/imgs/ht-page-Sustainable-Home-400x174.jpg'
import htpageClimateChange from '../../assets/imgs/ht-page-Climate-Change-400x174.jpg'
import htpageGreenTechnology from '../../assets/imgs/ht-page-Green-Technology-400x174.jpg'
import htpageWomanEmpowerment from '../../assets/imgs/ht-page-Woman-Empowerment-400x174.jpg'
import htpageEconomy from '../../assets/imgs/ht-page-Economy-400x174.jpg'
import htpageWasteandRecycling from '../../assets/imgs/ht-page-Waste-and-Recycling-400x174.jpg'
import htpageEcoTourism from '../../assets/imgs/ht-page-Eco-Tourism-400x174.jpg'


export default function Activism() {
    return (
        <>
            <Head>
                <title>Activism - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading py-10 md:py-20 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto flex justify-center w-10/12 md:w-11/12 '>
                            <div className='md:w-7/12' >
                                <p className='text-[22px] font-bold pb-4 text-[#2cbc63] '>Activism</p>
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ' >Shinning a light on some of the world&apos;s darkest issues<span className='text-[#2cbc63]'>.</span></h1>
                                <p className=' text-[20px] md:text-[26px] text-[#023A51] mt-4'>We do our work to help make the world a more compassionate and sustainable place. Let&apos;s get involved.</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Discover our full SEO course */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 mx-auto max-w-screen-xl">
                        <div className='mx-auto  w-10/12 md:w-11/12 '>

                            <p className=' text-[30px] md:text-[40px] text-[#59667d] font-bold leading-[39px] md:leading-[49px] tracking-[-2px] py-10 ' >The more you know. The more you can<span className='text-[#2cbc63]'>.</span></p>
                            <p className=' text-[24px] md:text-[30px] text-[#00989e] font-bold leading-[35px] md:leading-[39px] tracking-[-2px] py-10 ' >“Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.”</p>

                            <div className='md:flex flex-col text-[#023A51] items-center mb-10'>
                                <p className='text-[30px] md:text-[40px] font-bold text-[#023A51] '>Discover World Issues</p>
                                <FaChevronDown className='text-[30px] md:text-[45px] text-[#2cbc63] cursor-pointer mt-4 font-bold ' />
                            </div>

                            <div className='flex flex-wrap text-[#023A51] justify-around' >
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Activism</p>
                                    <p className='text-[20px] py-3' >A theory or practice emphasizing direct, forceful action, particularly in favor of or in opposition to one side of a controversial subject.</p>
                                    <Image className='rounded-xl' src={htpageActivism} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Human Rights</p>
                                    <p className='text-[20px] py-3' >Human rights are principles that acknowledge and protect the dignity of human beings. They govern the relationship between society and individuals.</p>
                                    <Image className='rounded-xl' src={htpageHumanRights} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Sustainable Economy</p>
                                    <p className='text-[20px] py-3' >A sustainable economy is one that maximizes overall well-being while aiming to use the fewest resources, causing the least environmental harm.</p>
                                    <Image className='rounded-xl' src={htpageSustainableEconomy} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Environment & Nature</p>
                                    <p className='text-[20px] py-3' >Nature and the environments are the phenomena of the physical world as a whole, encompassing plants, animals, the terrain, and other earthly aspects and products, as opposed to humans or human inventions.</p>
                                    <Image className='rounded-xl' src={htpageEnvironmentandNature} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Sustainable Home</p>
                                    <p className='text-[20px] py-3' >A sustainable home is one that has as little detrimental influence on the environment as possible. This entails conserving energy, avoiding environmental contaminants, and responsibly utilizing materials and resources while having a beneficial physical and psychological impact on its residents.</p>
                                    <Image className='rounded-xl' src={htpageSustainableHome} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Climate Change</p>
                                    <p className='text-[20px] py-3' >Long-term changes in temperature and weather patterns are referred to as climate change. These movements might be caused by natural causes, such as oscillations in the solar cycle. However, since the 1800s, human activities have been the primary cause of climate change, owing mostly to the use of fossil fuels such as coal, oil, and gas.</p>
                                    <Image className='rounded-xl' src={htpageClimateChange} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Green Technology</p>
                                    <p className='text-[20px] py-3' >Green technology is the technology that aims to lessen or reverse the consequences of human activities on the environment. It employs an ecologically friendly consideration to its production process or supply chain.</p>
                                    <Image className='rounded-xl' src={htpageGreenTechnology} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Women Empowerment</p>
                                    <p className='text-[20px] py-3' >Women’s empowerment can be described in a variety of ways, including respecting women’s perspectives or making an effort to seek them out, as well as elevating women’s position via education, awareness, literacy, and training.</p>
                                    <Image className='rounded-xl' src={htpageWomanEmpowerment} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%]  mb-10' >
                                    <p className='text-[35px] '>Economy</p>
                                    <p className='text-[20px] py-3' >A large network of interconnected production, consumption, and trade activities that contribute in defining how finite resources are allocated is referred to as an economy.</p>
                                    <Image className='rounded-xl' src={htpageEconomy} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Waste & Recycling</p>
                                    <p className='text-[20px] py-3' >The process of transforming waste resources into new materials and things is known as recycling. This notion frequently includes the recovery of energy from waste materials.</p>
                                    <Image className='rounded-xl' src={htpageWasteandRecycling} alt="image" />
                                </div>
                                <div className=' rounded-xl text-center p-8 md:p-14 bg-[#f5f5f7] md:w-[45%] w-[90%] mb-10 ' >
                                    <p className='text-[35px] '>Eco Tourism</p>
                                    <p className='text-[20px] py-3' >Ecotourism is tourism that centers around awareness of the environment and the local community. As eco-tourists, the goal is to visit an area with the well-being of the local people and nature in mind.</p>
                                    <Image className='rounded-xl' src={htpageEcoTourism} alt="image" />
                                </div>

                            </div>

                        </div>





                    </div>
                </section>

                <DiscoverMore />
            </Layout>
        </>
    )
}
