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
import Newsletter2 from '../../../../components/Newsletter2';
import ContactForm2 from '../../../../components/ContactForm2';
import Newsletter from '../../../../components/Newsletter';

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
        if (category){
            await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?filters[slug][$eq]=${category}&${query}`).then(({data})=> {
                setRelatedBlogs(data?.data[0].attributes?.blogs?.data?.filter((item)=> item?.attributes?.slug !== slug))
                // console.log(relatedBlogs)
            }).catch((error)=> {
                console.log(error);
            })
        }else{
            await axios.get(`https://humble-titan-strapi.herokuapp.com/api/blogs?populate=*`).then(({data})=> {
                setRelatedBlogs(data.data?.filter((item)=> item?.attributes?.slug !== slug))
                // console.log(relatedBlogs)
            }).catch((error)=> {
                console.log(error);
            })
        }
    }
    useEffect(()=> {
        getRelatedBlogs()
    }, [])

    console.log(relatedBlogs)
    return (
        <>
            <Head>
                <title>{blog?.title} - Humble Titan</title>
                <meta name="description" content={blog?.description} />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta
          property="og:title"
          content="Elite Digital Marketing Services | Business &amp; Politics Made Digital"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="Bayo adesina" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={blog?.description} />
        <meta property="og:url" content="https://www.humbletitan.com/" />
        <meta property="og:site_name" content="Humble Titan" />
        <meta
          property="article:modified_time"
          content="2022-08-01T08:28:57+00:00"
        />
        <meta property="og:image" content="true" />
        <meta name="twitter:card" content="true" />
        <meta name="twitter:site" content="true" />
        <meta name="twitter:creator" content="true" />
        <meta name="twitter:title" content="true" />
        <meta name="twitter:description" content="true" />
        <meta name="twitter:domain" content="true" />
        <meta name="twitter:image" content="true" />
        <meta name="twitter:url" content="true" />
        <meta itemProp="image" content="true" />
        <meta itemProp="name" content="true" />
        <meta itemProp="description" content="true" />
        <meta name="geo.region" content="true" />
        <meta name="geo.placename" content="true" />
        <meta name="geo.position" content="true" />
        <meta name="ICBM" content="true" />
        
        <meta name="next-head-count" content="32" />
            </Head>
            <Layout>
                {/* Hero */}
                <section className='heading md:py-10 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 md:w-8/12 '>
                            <div>
                                <h1 className=' text-[40px] md:text-[50px] font-semibold text-[#023A51] leading-[59px] md:leading-[69px] ' >{blog?.title}</h1>
                                <p className='text-[26px] leading-[36px] text-[#023A51] py-5 '>{blog?.description} </p>
                                <div className='flex justify-between py-6 text-[#023A51]'>
                                    <div className='flex'>
                                        <Link href={`/humble-mind/${blog?.category?.data?.attributes?.slug ? blog.category.data.attributes.slug : 'uncategorized'}`}  ><a className='pl-2 hover:text-[#2cbc63] font-bold cursor-pointer'> {blog?.category?.data?.attributes?.name ? blog.category.data.attributes.name : 'Uncategorized'}</a></Link>

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
                                        <ContactForm2/>
                                    </div>

                                    {/* ht-humble-trader-sidebar */}

                                    <Image src={hthumbletradersidebar} alt="ht-humble-trader-sidebar.png" />


                                    {/* Hear from usfirst */}
                                    <Newsletter2/>


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
                        <Newsletter/>
                    </div>
                </section>


                {/* Magazines - Continue Reading */}
                {
                    relatedBlogs?.length > 0 && (
                    <section className='heading md:my-20 '>
                        <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                            <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <h2 className=' mx-auto text-[40px] md:text-[50px] font-bold text-[#023A51] leading-[59px] md:leading-[69px] ' >Countinue Reading</h2>
                                <div className='flex flex-wrap justify-around'>
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
    if(!data.data.length){
        return {
            redirect: {
                destination: '/humble-mind/',
            },
        }
    }else{
        return {
            props: {
                data,
                slug
            },
        }
    }

}
