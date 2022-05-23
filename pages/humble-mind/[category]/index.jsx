import React, { useState } from 'react'
import Layout from "../../../components/Layout";
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'

import { FaSearch } from 'react-icons/fa'
import UndergroundEconomy from '../../../assets/imgs/Underground-Economy-min-600x423.jpg'
import TradeSurplus from '../../../assets/imgs/Trade-Surplus-min-400x282.jpg'
import TradeDeficit from '../../../assets/imgs/Trade-Deficit-min-400x282.jpg'
import SupplySide from '../../../assets/imgs/Supply-side-policies-min-400x282.jpg'
import SupplyMin from '../../../assets/imgs/Supply-min-400x282.jpg'
import defaultBlogImage from '../../../assets/imgs/Blog-Post-header.jpg'


export default function Category({ category, blogs }) {
    const [search, setSearch] = useState('')
    const [filterdCategories, setFilterdCategories] = useState([])
    const [page, setPage] = useState(1)
    const handleFilter = (e) => {
        setSearch(e)
        setFilterdCategories(filterdCategories?.filter((item) => item.includes(search)))
    }

    const loadMorePosts = async (e) => {
        e.preventDefault()
        setPage(page + 1)
        if (category == "uncategorized") {
            await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$ne]=${category}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`)
                .then(({ data }) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })
        } else {
            await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$eq]=${category}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`)
                .then(({ data }) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })
        }
    }

    return (
        <>
            <Head>
                <title> {blogs[0]?.attributes.category.data?.attributes.name ? blogs[0]?.attributes.category.data?.attributes.name : category === 'uncategorized' ? 'Uncategorized' : category.replaceAll('-', ' ').charAt(0).toUpperCase() + category.replaceAll('-', ' ').slice(1)} - Humble-Titan </title>
            </Head>
            <Layout >

                <section className='heading'>
                    <div className=" container mx-auto md:flex justify-around flex-wrap max-w-screen-xl">
                        <div className='px-4' >
                            <h1 className='text-[50px] md:text-[60px] font-semibold text-[#023A51] pt-3 md:pt-10 leading-[69px] ' >{blogs[0]?.attributes.category.data?.attributes.name ? blogs[0]?.attributes.category.data?.attributes.name : category === 'uncategorized' ? 'Uncategorized' : category.replaceAll('-', ' ').charAt(0).toUpperCase() + category.replaceAll('-', ' ').slice(1)}</h1>
                        </div>
                        <div className='flex justify-center mt-6 md:mt-10' >
                            <div className='flex relative text-[22px] rounded' >
                                <FaSearch className='absolute top-[35%] left-[10px] text-[#023A51]' />
                                <input value={search} onChange={(e) => handleFilter(e.target.value)} placeholder='What are you looking for?' className='rounded-xl text-[#023A51] pl-10 p-4 border' type="text" />
                            </div>
                        </div>
                    </div>
                </section>


                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className=' md:flex flex-wrap justify-around '>
                                <div className='md:flex flex-wrap justify-around'>
                                    {
                                        blogs?.map((blog) => {
                                            const post = blog?.attributes
                                            const blogImage = post.blogImage?.data?.attributes
                                            const blogImageUrl = blogImage && blogImage?.url
                                            return (
                                                <div key={blog?.id} className='bg-[#fff] p-2 transition text-center flex flex-col items-center rounded mb-2 md:w-[33%] '>
                                                    <Link href={`/humble-mind/${post.category.data?.attributes.name ? post.category.data?.attributes.name : 'uncategorized'}/blogs/${post?.slug}`} passHref >
                                                        <a className="w-[100%] ">
                                                            <div >
                                                                {
                                                                    blogImageUrl ? (
                                                                        <Image className='rounded' src={blogImageUrl} layout="responsive" height={blogImage?.height ? blogImage?.height : '100%'} width={blogImage?.width ? blogImage?.width : '100%'} alt="" />
                                                                    ) : (
                                                                        <Image className='rounded' src={defaultBlogImage} layout="responsive" height={'80%'} width={'100%'} alt="" />

                                                                    )
                                                                }
                                                            </div>
                                                        </a>
                                                    </Link>
                                                    <Link href={`/humble-mind/blogs/${post?.slug}`} passHref>
                                                        <a className='text-[26px] text-center font-semibold md:text-[32px] text-[#023A51] pt-3 leading-[35px] md:leading-[45px] hover:text-[#2cbc63] ease-in duration-300 '>{blog.attributes.title}</a></Link>
                                                    <p className='text-[16px] mt-4 ' >{new Date(post.publishedAt).toDateString()} | <a href={`/humble-mind/${post.category.data?.attributes.name ? post.category.data?.attributes.name : 'uncategorized'}`} className='hover:text-[#2cbc63] font-bold '> {post.category.data?.attributes.name ? post.category.data?.attributes.name : 'Uncategorized'}</a></p>
                                                </div>
                                            )
                                        })
                                    }
                                    <div className='bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] '>
                                        <Image className='rounded' src={UndergroundEconomy} alt="image" />
                                        <p className='text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Underground Economy</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >March 11, 2022 | economics</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-2 text-center flex flex-col items-center rounded mb-2 md:w-[33%] ' >
                                        <Image className='rounded' src={TradeSurplus} alt="image" />
                                        <p className='text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Trade Surplus</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] '>
                                        <Image className='rounded' src={TradeDeficit} alt="image" />
                                        <p className='text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Trade Deficit</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-2 text-center flex flex-col items-center rounded mb-2 md:w-[33%] ' >

                                        <Image className='rounded' src={SupplySide} alt="image" />
                                        <p className='text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Supply-Side Policies</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                    <div className='bg-[#fff] cursor-pointer transition p-2  text-center flex flex-col items-center rounded mb-2 md:w-[33%] '>

                                        <Image className='rounded' src={SupplyMin} alt="image" />
                                        <p className='text-[24px] text-center md:text-[30px] text-[#023A51] pt-3 leading-[40px] hover:text-[#2cbc63] ease-in duration-300 ' >Supply</p>
                                        <p className='text-[12px] mt-4 hover:text-[#2cbc63]' >April 29, 2022|Uncategorized</p>
                                    </div>
                                </div>
                            </div>

                            {/* Load more button */}

                            <div className='bg-[#f6f7f8] w-[100%] rounded cursor-pointer hover:bg-[#e7ecf0] group transition duration-150 '>
                                <p className='uppercase text-[#023A51] py-2 text-center text-[24px] group-hover:text-[25px] ' onClick={() => loadMorePosts(e)} >Load More Posts</p>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Request a qoute */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-center  w-10/12 md:w-11/12 '>
                            <p className='text-[40px] text-[#023A51] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px] md:px-10' >Want to get serious about your business and online strategy<span className='text-[#2cbc63]' >?</span></p>
                            <p className='text-[30px] text-[#2cbc63] md:text-[40px] font-light mt-4 leading-[40px] md:leading-[55px] tracking-[-2px] md:px-10' >Get in touch. Web Design. Content Marketing. SEO. Website Management. </p>
                            <button className='green_rounded_btn my-6' >Request a Quote</button>
                            <p className='text-[16px] text-[#023A51]'> Delighted to help.</p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}




export async function getServerSideProps(ctx) {
    const { query: { category } } = ctx
    var blogs;
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/blogs?populate=*&sort[0]=publishedAt%3Adesc`)
        .then(({ data }) => {
            if (category === "uncategorized") {
                blogs = data.data.filter((item) => item.attributes.category.data == null)
            } else {
                blogs = data.data.filter((item) => item.attributes.category.data?.attributes.slug === category)
            }
        }).catch((error) => {
            console.log(error)
        })



    return {
        props: {
            blogs,
            category,
        },
    };
} 