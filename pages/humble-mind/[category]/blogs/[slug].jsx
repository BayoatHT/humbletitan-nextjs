import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import Layout from "../../../../components/Layout";
import Image from 'next/image'
import styles from './blog.module.css'
import axios from 'axios'
import ReactMarkdown from 'react-markdown';
import Link from 'next/link'
import qs from 'qs'
import htdigitalmarketingsidebar from '../../../../assets/imgs/ht-digital-marketing-sidebar.png'
import hthumbletradersidebar from '../../../../assets/imgs/ht-humble-trader-sidebar.png'
import hthumblevotersidebar from '../../../../assets/imgs/ht-humble-voter-sidebar.png'

import GetAQuote from '../../../../components/GetAQuote';

export default function Blog({ data, slug }) {
    let blog = data.data[0]?.attributes
    const blogImage = blog?.blogImage?.data?.attributes
    const blogImageUrl = blogImage && blogImage?.url

    const category =  blog?.category?.data?.attributes?.slug

    const [relatedBlogs, setRelatedBlogs] = useState([])

    const query = qs.stringify({
        populate: {
            blogs: {
                populate: '*'
            },
        }
    })
    const getRelatedBlogs = async () => {
        await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$eq]=${category}&${query}`).then(({data})=> {
            setRelatedBlogs(data?.data[0].attributes?.blogs?.data?.filter((item)=> item?.attributes?.slug !== slug))
        }).catch((error)=> {
            console.log(error);
        })
    }
    useEffect(()=> {
        getRelatedBlogs()
    }, [])
    return (
        <>
            <Head>
                <title>{blog?.title} - Humble Titan</title>
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-8/12 '>
                            <div >
                                <h1 className=' text-[50px] md:text-[60px] text-[#023A51] leading-[59px] md:leading-[69px] ' >{blog?.title}</h1>
                                <p className='text-[26px] leading-[36px] text-[#023A51] py-5 '>{blog?.description} </p>
                                <div className='flex justify-between py-6 text-[#023A51]'>
                                    <div className='flex'>

                                        <Link href={`/humble-mind/${blog?.category?.data?.attributes?.name ? blog.category.data.attributes.name : 'Uncategorized'}`}  ><a className='pl-2 hover:text-[#2cbc63] font-bold cursor-pointer'> {blog?.category?.data?.attributes?.name ? blog.category.data.attributes.name : 'Uncategorized'}</a></Link>


                                    </div>
                                    <p className='font-bold'>{new Date(blog?.createdAt).toDateString()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* blogs details */}
                <section className='heading md:my-10 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='flex justify-center'>
                                <div className='w-[80%]'>
                                    {
                                        blogImageUrl && (
                                            <Image className='rounded-[20px] ' src={blogImageUrl} layout="responsive" height={blogImage?.height ? blogImage?.height : '100%'} width={blogImage?.width ? blogImage?.width : '100%'} alt="Blog Image" />
                                        )
                                    }

                                </div>

                            </div>
                            <div className='md:flex justify-between mt-10' >
                                <div className='md:w-[75%]'>
                                    <ReactMarkdown components={{
                                        h1: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                                        h2: ({ node, ...props }) => <h2 className={styles.h2} {...props} />,
                                        h3: ({ node, ...props }) => <h2 className={styles.h3} {...props} />,
                                        p: ({ node, ...props }) => <p className={styles.p} {...props} />,
                                        ul: ({ node, ...props }) => <ul className={styles.ul} {...props} />,
                                        ol: ({ node, ...props }) => <ol className={styles.ol} {...props} />,
                                        li: ({ node, ...props }) => <li className={styles.li} {...props} />,
                                    }} >{blog?.body}</ReactMarkdown>


                                </div>
                                <div className='md:w-[23%] flex flex-col items-center'>
                                    <Image src={htdigitalmarketingsidebar} alt="ht-digital-marketing-sidebar.png" />

                                    <div className=' py-6 md:py-20' >
                                        <div className=' bg-[#eaeaea] p-4 '>
                                            <div className=' py-4' >
                                                <div>
                                                    <label className='text-[#34495E] my-6 md:py-3 text-[20px] ' htmlFor="name">Name *</label>
                                                    <input className='block p-2 border rounded text-[20px] w-[100%] ' type="text" required placeholder='John Stuart' />
                                                </div>
                                                <div className=' py-4'>
                                                    <label className='text-[#34495E] py-3 text-[20px] ' htmlFor="name">Phone *</label>
                                                    <input className='block p-2 border rounded text-[20px] w-[100%] ' type="tel" required placeholder='(123)-456-7890' />
                                                </div>
                                            </div>
                                            <div className=' py-4'>
                                                <div>
                                                    <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Email address *</label>
                                                    <input className='block p-2 border rounded text-[20px] w-[100%]' type="text" required placeholder='name@company.com' />
                                                </div>
                                                <div className=' py-4'>
                                                    <label className='text-[#34495E] py-3 text-[20px]' htmlFor="name">Service interested in *</label>
                                                    <select className='block p-2 border rounded outline-none text-[#34495E] text-[20px] w-[100%]' required placeholder='(123)-456-7890'>
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
                                                    <input className='block p-2 border rounded outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='Quote request for' />
                                                </div>
                                            </div>
                                            <div className='py-4 '>
                                                <div>
                                                    <label className='text-[#34495E] py-3 text-[20px]' htmlFor="subject">How can we help?</label>
                                                    <textarea className='block p-2 border rounded outline-none text-[#34495E] text-[20px] w-[100%] ' type="text" placeholder='I need help with the next problem'></textarea>
                                                </div>
                                            </div>
                                            <div className='py-4 '>
                                                <div>
                                                    <button className='green_rounded_btn'>Get in touch</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ht-humble-trader-sidebar */}

                                    <Image src={hthumbletradersidebar} alt="ht-humble-trader-sidebar.png" />


                                    {/* Hear from usfirst */}
                                    <div className='my-10 py-10 bg-[#eaeaea]  '>
                                        <p className='text-[24px] text-[#023A51] text-center font-bold '>Hear from us first</p>
                                        <div className='px-4'>
                                            <input className='block p-2 my-5 border rounded-lg text-[20px] w-[100%]' type="email" required placeholder='Enter your email' />

                                        </div>
                                        <div className='flex justify-center'>

                                            <button className='green_rounded_btn'>Get in touch</button>
                                        </div>
                                    </div>


                                    {/* ht-humble-voter-sidebar */}

                                    <Image src={hthumblevotersidebar} alt="ht-humble-voter-sidebar" />

                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Newsletter */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className="md:flex items-center justify-around p-10 shadow-sm shadow-[#888] rounded-xl  text-[#023A51]">
                                <div >
                                    <p className='text-[50px] md:text-[60px] leading-[50px] md:leading-[69px] tracking-[-2px]  py-10  ' >Join to newsletter<span className='text-[#2cbc63]' >.</span></p>
                                    <p className='text-[20px]' >Don’t miss out on the latest from Humble Titan.</p>
                                </div>
                                <div className=' '>
                                    <h2 className='text-[24px] font-bold py-6 ' >Hear from us first</h2>
                                    <input className='block outline-[#2cbc63] border p-2 rounded-xl text-[20px] w-[100%]' type="text" placeholder='Enter your email' />
                                    <button className='green_rounded_btn my-10 px-10' >Subscribe</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>


                {/* Magazines */}
                {
                    relatedBlogs?.length > 0 && (
                    <section className='heading md:my-20 '>
                        <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                            <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <h2 className=' mx-auto text-[40px] md:text-[50px] font-bold text-[#023A51] leading-[59px] md:leading-[69px] ' >Countinue Reading</h2>
                                <div className='md:flex flex-wrap justify-around'>
                                    {
                                        relatedBlogs?.slice(0,3)?.map((blog) => {
                                            const post = blog?.attributes
                                            const blogImage = post.blogImage?.data?.attributes
                                            const blogImageUrl = blogImage && blogImage?.url
                                            return (
                                                <div key={blog?.id} className='bg-[#fff] p-2 transition text-center flex flex-col items-center rounded mb-2 md:w-[32%] '>
                                                    <Link href={`/humble-mind/${post.category.data?.attributes.slug ? post.category.data?.attributes.slug : 'uncategorized'}/blogs/${post?.slug}`} passHref >
                                                        <a className="w-[100%] ">
                                                            <div className='w-[100%] h-[100%]' >
                                                                {
                                                                    blogImageUrl ? (
                                                                        <Image className='rounded' src={blogImageUrl} layout="responsive" height={blogImage?.height ? blogImage?.height : '100%'} width={blogImage?.width ? blogImage?.width : '100%'} alt="" />
                                                                    ) : (
                                                                        <Image className='rounded' src={defaultBlogImage} layout="responsive" alt="" />

                                                                    )
                                                                }
                                                            </div>
                                                        </a>
                                                    </Link>
                                                    <Link href={`/humble-mind/${post.category.data?.attributes.slug ? post.category.data?.attributes.slug : 'uncategorized'}/blogs/${post?.slug}`} passHref>
                                                        <a className='text-[26px] text-center font-semibold md:text-[32px] text-[#023A51] pt-3 leading-[35px] md:leading-[45px] hover:text-[#2cbc63] ease-in duration-300 '>{blog.attributes.title}</a></Link>
                                                    <p className='text-[16px] mt-4 ' >{new Date(post.publishedAt).toDateString()} | <a href={`/humble-mind/${post.category.data?.attributes.slug ? post.category.data?.attributes.slug : 'uncategorized'}`} className='hover:text-[#2cbc63] font-bold '> {post.category.data?.attributes.name ? post.category.data?.attributes.name : 'Uncategorized'}</a></p>
                                                </div>
                                            )
                                        })
                                    }

                                </div>
                            </div>
                        </div>
                    </section>
                    )
                }
                


                {/* Get a Quote */}
                <GetAQuote />
            </Layout>
        </>
    )
}


export async function getServerSideProps(ctx) {
    const { query: { slug } } = ctx
    const { data } = await axios.get(`https://humble-titan-strapi.herokuapp.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`)
    return {
        props: {
            data,
            slug
        },
    };
}
