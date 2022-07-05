import React, { useState } from 'react'
import Head from 'next/head'
import Layout from "../../components/Layout";
import Image from 'next/image'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { Oval } from 'react-loading-icons'
import ReactPaginate from 'react-paginate';


import defaultBlogImage from '../../assets/imgs/Blog-Post-header.jpg'
import GetAQuote from '../../components/GetAQuote';

export default function Magazine({ data, categories, contents }) {

    const { hero, header, ht_digital_services } = contents.data.attributes


    const [browseText, setBrowseText] = useState(<button className='text-[#fff] font-semibold' >Browse</button>)
    const blogs = data.data
    const pageCount = data.meta.pagination?.pageCount

    const categoriesData = categories?.data
    const router = useRouter()

    const [selectedTag, setSelectedtag] = useState("")
    const handleBrowse = () => {
        if (selectedTag !== "") {
            setBrowseText(<Oval className='p-2' />)
            router.push(`/humble-mind/${selectedTag}`)
        } else {
            return null
        }
    }

    console.log(contents)

    return (
        <>
            <Head>
                <title>{header.title}</title>
            </Head>

            <Layout>

                {/* Hero */}
                <section className='heading py-20 bg-[#e0ecf0]'>
                    <div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
                        <div className='mx-auto w-10/12 text-center md:w-11/12 '>
                            <h1 className=' text-[50px] text-center md:text-[60px] text-[#023A51] pt-3 leading-[69px] ' >{hero.heading}</h1>
                            <div className='flex items-center justify-center'>

                                <div className=' mt-4 bg-[#fff] p-2 rounded max-w-max'>
                                    <select className='w-[180px] bg-[#fff] font-bold text-center text-[#023A51] outline-0 '
                                        value={selectedTag}
                                        onChange={(e) => setSelectedtag(e.target.value)}
                                    >
                                        <option disabled value="">Browse categories</option>
                                        <option value="uncategorized">Uncategorized</option>
                                        {
                                            categoriesData?.map((item) => {
                                                return (
                                                    <option key={item.id} value={item.attributes?.slug}>{item.attributes?.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </div>
                                <div onClick={() => handleBrowse()} className=' mt-4 ml-4 flex justify-center items-center bg-[#2cbc63] w-[100px] h-[40px] cursor-pointer p-2 rounded max-w-max'>
                                    {browseText}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Magazines */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className='md:flex flex-wrap justify-around'>
                                {
                                    blogs?.map((blog) => {
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



                {/* pagination */}
                <section className='heading md:my-20 '>
                    <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                        <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <div className=' md:flex flex-wrap justify-around '>


                                {/* pagination */}
                                <div className='paginations flex justify-center md:justify-end md:w-[100%] '>
                                    {pageCount < 2 === false && (
                                        <ReactPaginate
                                            onPageChange={(n) => router.push(`/humble-mind?page=${n.selected + 1}`)}
                                            pageCount={pageCount}
                                            marginPagesDisplayed={3}
                                            previousLabel="< Previous"
                                            nextLabel="Next >"
                                            pageRangeDisplayed={3}
                                            containerClassName="flex flex-wrap justify-between"
                                            pageClassName='flex items-center mx-2 justify-center p-2 w-[30px] h-[30px] border'
                                            breakClassName='flex items-center mx-2 justify-center p-2 text-[20px] w-[30px] h-[30px] border'
                                            activeClassName='active flex items-center mr-2 justify-center p-2 w-[30px] h-[30px] text-[#fff] hover:text-[#023A51] border-[#2cbc63] bg-[#2cbc63] '

                                        />
                                    )}

                                    {/* <p className='text-[12px] flex cursor-pointer items-center mr-2' ><BsChevronLeft /> Previuos  </p>
                                        <span className='flex cursor-pointer items-center mr-2 justify-center p-2 w-[30px] h-[30px] border' >1</span>
                                        <span className='active flex items-center mr-2 justify-center p-2 w-[30px] h-[30px] text-[#fff] border-[#2cbc63] bg-[#2cbc63] ' >2</span>
                                        <span className='flex cursor-pointer items-center mr-2 justify-center p-2 w-[30px] h-[30px] border  ' >3</span>
                                        <p className='text-[12px] flex cursor-pointer items-center mr-2' >Next <BsChevronRight /> </p> */}

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






                {/* Get a Quote */}
                <GetAQuote />
            </Layout>
        </>
    )
}

export async function getServerSideProps(ctx) {
    const pageNumber = ctx.query.page > 0 ? ctx.query.page : 1
    var data;
    var contents;
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/humble-mind`)
        .then(({ data }) => {
            contents = data
        }).catch((error) => {
            console.log(error)
        })
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/blogs?populate=*&pagination[pageSize]=8&pagination[page]=${pageNumber}&sort[0]=publishedAt%3Adesc`)
        .then((result) => {
            data = result.data
        }).catch((error) => {
            console.log(error)
        })
    var categories;
    await axios.get(`https://humble-titan-strapi.herokuapp.com/api/categories?populate=*`)
        .then(({ data }) => {
            categories = data
        }).catch((error) => {
            console.log(error)
        })
    return {
        props: {
            contents,
            data,
            categories
        }
    };
}
