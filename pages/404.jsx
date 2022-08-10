import Head from "next/head"
import Image from 'next/image'
import Green_rounded_btn from "../components/buttons/Green_rounded_btn"
import Layout from "../components/Layout"
import errorPage from '../assets/imgs/error-page.png'


export default function Custom404() {
    return(
        <>
            <Head>
                <title>Page not found - Humble titan </title>
            </Head>
            <Layout>
            <section className="heading my-20  ">
                <div className=" container w-12/12 mx-auto max-w-screen-xl">
                    <div className="mx-auto items-center flex flex-col flex-wrap justify-around w-10/12 md:w-11/12 ">
                        <h1 className="text-[50px] text-center md:text-[60px] text-[#023A51] md:pt-10 leading-[55px] md:leading-[69px] tracking-[-3px] ">Oh no, something went wrong!</h1>
                        <div className="mt-[20px]">
                            <Green_rounded_btn href={"/"} >Go to home</Green_rounded_btn>
                        </div>
                        <div className="md:mx-[150px] lg:mx-[300px] mt-[20px] ">
                            <Image src={errorPage} alt="error-page.png" />
                        </div>
                    </div>
                </div>
            </section>
            </Layout>
        </>
    )
}


