import React from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { FaBuilding, FaHospitalUser } from "react-icons/fa";
import { SiMinutemailer } from "react-icons/si";
import * as Fontawesome from "react-icons/fa";
import qs from 'qs'

import exceptionalResources from "../../assets/imgs/exceptional-resources-400x868.png";
import Green_rounded_btn from "../../components/buttons/Green_rounded_btn";
import ContactForm from "../../components/ContactForm";

export default function TheTeam({ contents }) {
	const {
		hero,
		header,
		bayo_mba,
		exceptional_resources,
		great_benifits,
		hafiz,
		rilwan,
		tellUs_section,
		trustedBy,
	} = contents.data.attributes;
	return (
		<>
			<Head>
				<title>{header?.title || "Humble Titan"}</title>
		        <meta name="description" content={header?.metaDescription || "" } />
		        <meta name="keywords" content={header?.keywords || "" }/>
		        <meta name="robots" content={header?.robots || ""} />
		        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />
		        <meta name="language" content={header?.language || ""} />
		        <meta name="revisit-after" content={ header?.revisitAfter || "5 days"} />
		        <meta name="author" content={header?.author || "humble titan"} />
		        <meta charSet="UTF-8" />
		        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
		        <meta name="viewport" content="width=device-width, user-scalable=no" />
		        <meta property="og:locale" content={ header?.og_locale ||"en_US" } />
		        <meta property="og:type" content={header?.og_type || "article"} />
		        <meta property="og:title" content={header?.og_title || ""} />
		        <meta property="og:description" content={header?.og_description || ""} />
		        <meta property="og:url" content={header?.org_url || ""} />
		        <meta property="og:site_name" content={header?.og_site_name || ""} />
		        <meta property="og:image" content={header?.og_image || ""} />
		        <meta name="twitter:card" content={header?.twitter_card || ""} />
		        <meta name="twitter:site" content={header?.twitter_site || ""} />
		        <meta name="twitter:creator" content={header?.twitter_creator || ""} />
		        <meta name="twitter:title" content={header?.twitter_title || ""} />
		        <meta name="twitter:description" content={header?.twitter_description || ""} />
		        <meta name="twitter:domain" content={header?.twitter_domain || ""} />
		        <meta name="twitter:image" content={header?.twitter_image} />
		        <meta name="twitter:url" content={header?.twitter_url} />
		        <meta itemProp="image" content={header?.itemProp_image || ""} />
		        <meta itemProp="name" content={header?.itemProp_name || ""} />
		        <meta itemProp="description" content={header?.itemProp_description || ""} />
		        <meta name="geo.region" content={header?.geo_region || ""} />
		        <meta name="geo.placename" content={header?.geo_placename || ""} />
		        <meta name="geo.position" content={header?.geo_position || ""} />
		        <meta name="ICBM" content="true" />
		        <meta name="next-head-count" content="32" />
		        <link rel="canonical" href={header?.canonicalUrl || ""} />
			</Head>
			<Layout>
				{/* Hero */}
				<section className="heading py-10 bg-[#e0ecf0]">
					<div className=" container w-12/12 mx-auto bg-[#e0ecf0] max-w-screen-xl">
						<div className="mx-auto flex justify-center w-10/12 md:w-11/12 ">
							<div className="md:w-8/12">
								<p className="text-[22px] font-bold pb-4 text-[#2cbc63] ">
									{hero.label.name}
								</p>
								<h1 className=" text-[50px] md:text-[60px] text-[#023A51] leading-[55px] md:leading-[69px] tracking-[-2px] ">
									{hero.heading}
								</h1>
								<p className=" text-[20px] md:text-[26px] text-[#023A51] mt-4">
									{hero.description}
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Bayo Adesina, MBA. */}
				<section className="heading md:my-20 ">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
							<div className="flex flex-col md:flex-row justify-around">
								<div className="bg-[#fff] text-[#023A51] order-1 md:order-none transition p-4 md:p-10 rounded mb-2 md:w-[50%] ">
									<h2 className="text-[30px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{bayo_mba.heading}
									</h2>
									<h3 className="text-[38px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{bayo_mba.heading2}
									</h3>
									<p className="text-[22px] font-light flex py-4">
										{bayo_mba.description}
									</p>
									{bayo_mba.abilities.map((item) => {
										return (
											<div
												key={item.id}
												className="flex "
											>
												<div className=" text-[#f86011] text-[22px] translate-y-[22px] ">
													{React.createElement(
														Fontawesome[
															item.iconClass
														]
													)}
												</div>
												<p className="text-[22px] flex py-4 ml-[12px] ">
													{item.text}
												</p>
											</div>
										);
									})}
								</div>
								<div className=" md:p-10 my-2 md:w-[48%] order-none ">
									<div className="rounded-xl bg-[#fff] p-2  ">
										<Image
											className="rounded-xl"
											src={
												bayo_mba.image.data.attributes
													.url
											}
											alt={
												bayo_mba.image.data.attributes
													.name
											}
											width={
												bayo_mba.image.data.attributes
													.width
											}
											height={
												bayo_mba.image.data.attributes
													.height
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Rilwan Adesina. */}
				<section className="heading md:my-20 ">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
							<div className="flex flex-col md:flex-row justify-around">
								<div className=" md:p-10 mb-2 md:w-[48%] ">
									<div className="rounded-xl bg-[#fff] p-2  ">
										<Image
											className="rounded-xl"
											src={
												rilwan.image.data.attributes.url
											}
											alt={
												rilwan.image.data.attributes
													.name
											}
											width={
												rilwan.image.data.attributes
													.width
											}
											height={
												rilwan.image.data.attributes
													.height
											}
										/>
									</div>
								</div>
								<div className="bg-[#fff] text-[#023A51] transition p-2 md:p-10 rounded mb-2 md:w-[50%] ">
									<h2 className="text-[30px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{rilwan.heading}
									</h2>
									<h3 className="text-[38px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{rilwan.heading2}
									</h3>
									<p className="text-[22px] font-light flex py-4">
										{rilwan.description}
									</p>
									{rilwan.abilities.map((item) => {
										return (
											<div
												key={item.id}
												className="flex "
											>
												<div className=" text-[#f86011] text-[22px] translate-y-[22px] ">
													{React.createElement(
														Fontawesome[
															item.iconClass
														]
													)}
												</div>
												<p className="text-[22px] flex py-4 ml-[12px] ">
													{item.text}
												</p>
											</div>
										);
									})}
									{/* <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aliquam pharetra nulla consequat dolor faucibus tempus.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Morbi pulvinar mi ac ante fringilla, nec dapibus libero blandit. </p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Vestibulum et nulla ut eros consequat mollis vel in magna.</p>
                                    <p className='text-[22px] font-light flex py-4 ' ><FaPlus className='translate-y-2  mr-[12px]' color='#f86011' /> Aenean vehicula elit massa, vitae facilisis ligula egestas vitae. </p> */}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Hafiz Adesina. */}
				<section className="heading md:my-20 ">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
							<div className="flex flex-col md:flex-row justify-around">
								<div className="bg-[#fff] text-[#023A51] order-1 md:order-none transition p-2 md:p-10 rounded mb-2 md:w-[50%] ">
									<h2 className="text-[30px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{hafiz.heading}
									</h2>
									<h3 className="text-[38px] font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{hafiz.heading2}
									</h3>
									<p className="text-[22px] font-light flex py-4">
										{hafiz.description}
									</p>
									{hafiz.abilities.map((item) => {
										return (
											<div
												key={item.id}
												className="flex "
											>
												<div className=" text-[#f86011] text-[22px] translate-y-[22px] ">
													{React.createElement(
														Fontawesome[
															item.iconClass
														]
													)}
												</div>
												<p className="text-[22px] flex py-4 ml-[12px] ">
													{item.text}
												</p>
											</div>
										);
									})}
								</div>
								<div className=" md:p-10 mb-2 md:w-[48%] ">
									<div className="rounded-xl bg-[#fff] p-2 ">
										<Image
											className="rounded-xl"
											src={
												hafiz.image.data.attributes.url
											}
											alt={
												hafiz.image.data.attributes.name
											}
											width={
												hafiz.image.data.attributes
													.width
											}
											height={
												hafiz.image.data.attributes
													.height
											}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Brands */}
				<section className="heading md:my-20">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-center w-10/12 md:w-11/12 text-[#023A51] ">
							<p className=" text-[26px] md:text-[24px]  py-4 block font-bold text-center ">
								{trustedBy.title}
							</p>
							<div className="flex flex-wrap md:flex-row items-center justify-around pb-10 md:py-10 ">
								{trustedBy.companyLogos.data.map((item) => {
									return (
										<div key={item.id} className="mb-2">
											<Image
												className="rounded-xl"
												src={item.attributes.url}
												alt={item.attributes.name}
												width={item.attributes.width}
												height={item.attributes.height}
											/>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</section>

				{/* Exceptional Accounting Resources. */}
				<section className="heading md:my-20 ">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
							<div className="md:flex items-center justify-around">
								<div className=" md:p-10 mb-2 md:w-[38%] ">
									<div className="rounded-xl bg-[#fff]  ">
										<Image
											className="rounded-xl"
											src={exceptionalResources}
											alt="image"
										/>
									</div>
								</div>
								<div className="bg-[#fff] text-[#023A51] transition p-2 md:p-10 rounded mb-2 md:w-[58%] ">
									<p className=" text-[26px] md:text-[24px]  py-4 block font-bold text-center ">
										{exceptional_resources.heading}
									</p>
									<div className="flex flex-col md:flex-row flex-wrap justify-around">
										{exceptional_resources.value_cards.map(
											(item) => {
												return (
													<div
														key={item.id}
														className="bg-[#fff] p-10 rounded mb-2 md:w-[48%] "
													>
														<div className=" text-[26px] text-[#2cbc63] ">
															{React.createElement(
																Fontawesome[
																	item
																		.iconClassName
																]
															)}
														</div>
														<p className="text-[24px] text-[#2cbc63] ">
															{item.title}
														</p>
														<p className="text-[18px]">
															{item.description}
														</p>
													</div>
												);
											}
										)}

										<div className="bg-[#f9fafb] flex flex-col justify-between md:p-10 p-4 rounded mb-2 md:w-[48%] ">
											<p className="text-[20px] font-bold ">
												More Free Accounting Tools for
												Your Business
											</p>
											<div className="mt-5">
												<Green_rounded_btn href="/products">
													View all tools
												</Green_rounded_btn>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* benefits from humble Titan */}
				<section className="heading py-10 md:my-20 bg-[#f9fafb] ">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto text-[#023A51] w-10/12 md:w-11/12 ">
							<h2 className="text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
								{great_benifits.heading}
							</h2>
							<p className="text-[22px] text-center font-light flex py-4">
								{great_benifits.description}
							</p>
							<div className="md:flex items-center mb-2 bg-[#fff] justify-between">
								<div className="bg-[#fff] text-[#023A51] transition p-10 rounded mb-2 md:w-[48%] ">
									<p className="text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
										{great_benifits.benefits[0].title}
									</p>
									<br />
									<hr />
									{great_benifits.benefits[0].benefit.map(
										(item) => {
											return (
												<div
													key={item.id}
													className="flex "
												>
													<div className=" text-[#2cbc63] text-[22px] translate-y-[22px] ">
														{React.createElement(
															Fontawesome[
																item.iconClass
																	? item.iconClass
																	: "FaPlus"
															]
														)}
													</div>
													<p className="text-[22px] flex py-4 ml-3 ">
														{item.text}
													</p>
												</div>
											);
										}
									)}
								</div>
								<div className=" md:p-10 mb-2 bg-[#fff] md:w-[48%] ">
									<div className="rounded-xl bg-[#fff] p-6  ">
										<p className="text-[26px] text-center font-bold md:text-[35px] pt-3 leading-[38px] md:leading-[38px] ">
											{great_benifits.benefits[1].title}
										</p>
										<br />
										<hr />
										{great_benifits.benefits[1].benefit.map(
											(item) => {
												return (
													<div
														key={item.id}
														className="flex "
													>
														<div className=" text-[#f86011] text-[22px] translate-y-[22px] ">
															{React.createElement(
																Fontawesome[
																	item.iconClass
																		? item.iconClass
																		: "FaMinus"
																]
															)}
														</div>
														<p className="text-[22px] flex py-4 ml-3 ">
															{item.text}
														</p>
													</div>
												);
											}
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className=" py-20">
					<div className=" container w-12/12 mx-auto max-w-screen-xl">
						<div className="mx-auto w-11/12 ">
							<div className="mx-auto px-4 md:px-8 justify-between flex flex-wrap  rounded-xl  bg-[#023A51] ">
								<div className="text-[#fff] md:pl-2 py-20 w-[100%] md:w-[50%] ">
									<p className="text-[40px] md:text-[60px] py-10 leading-[55px] md:leading-[69px] tracking-[-2px] ">
										{tellUs_section.text}
									</p>

									{tellUs_section.info.map((item) => {
										return (
											<div key={item.id} className="py-6">
												<div className="flex items-center">
													<div className="mr-4 text-[26px] text-[#fff]">
														{React.createElement(
															Fontawesome[
																item.iconClass
															]
														)}
													</div>
													<h2 className="text-[30px] py-4 ">
														{item.name}
													</h2>
												</div>
												<ReactMarkdown
													components={{
														p: ({
															node,
															...props
														}) => (
															<p
																className="mr-4 text-[20px] md:text-[26px] "
																{...props}
															/>
														),
														a: ({
															node,
															...props
														}) => (
															<a
																className="hover:text-[#2cbc63] hover:text-underline "
																{...props}
															/>
														),
													}}
												>
													{item.details}
												</ReactMarkdown>
											</div>
										);
									})}
								</div>
								<div className=" py-6 md:w-[50%] w-[100%] md:py-20">
									<ContactForm />
								</div>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</>
	);
}

export const getServerSideProps = async () => {
	var contents;
	const query = qs.stringify({
		populate: {
			header: {
					populate: '*'
			},
			hero: {
					populate: '*'
			},
			bayo_mba: {
					populate: {
							actionButton: {
									populate: '*'
							},
							abilities: {
									populate: '*'
							},
							my_quote: {
									populate: '*'
							},
							image: {
								populate: '*'
							}
					}
			},
			rilwan: {
					populate: {
							actionButton: {
									populate: '*'
							},
							abilities: {
									populate: '*'
							},
							my_quote: {
									populate: '*'
							},
							image: {
								populate: '*'
							}
					}
			},
			hafiz: {
					populate: {
							actionButton: {
									populate: '*'
							},
							abilities: {
									populate: '*'
							},
							my_quote: {
									populate: '*'
							},
							image: {
								populate: '*'
							}
					}
			},
			trustedBy: {
					populate: "*"
			},
			exceptional_resources: {
					populate: '*'
			},
			great_benifits: {
					populate: {
							benefits: {
									populate: '*'
							}
					}
			},
			tellUs_section: {
					populate: '*'
			},
	},
	})
	await axios
		.get(`https://humbletitan-strapi.herokuapp.com/api/the-team?${query}`)
		.then(({ data }) => {
			contents = data;
		})
		.catch((error) => {
			console.log(error);
		});
	return {
		props: {
			contents: JSON.parse(JSON.stringify(contents)),
		},
	};
};
