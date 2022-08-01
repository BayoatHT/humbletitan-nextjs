import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../../components/Filter'
import Pagination from '../../components/Pagination'
import Link from 'next/link'
import Image from 'next/image'
import {
  countryFilters,
  industryFilters,
  mainFilters,
  mkCapFilters,
  sectorFilters,
} from '../../assets/data/filtersData'
import Newcard from '../../components/Newcard'
import Layout from '../../components/Layout'
import { ThreeDots } from 'react-loading-icons'
import Newsletter from '../../components/Newsletter'
import Green_rounded_btn from '../../components/buttons/Green_rounded_btn'

export default function Home() {
  const [allcompany, setAllcompany] = useState([])
  const [mainFilter, setMainFilter] = useState('All Tickers')
  const [filter, setFilter] = useState('')
  const [lastPageNo, setLastPageNo] = useState(1)
  const [pageNo, setPageNo] = useState(1)
  const [search, setSearch] = useState([])
  const [companiesRenderable, setCompaniesRenderable] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [customPages, setCustomPages] = useState([])

  useEffect(() => {
    setPageNo(1)
  }, [mainFilter])

  const filteration = async (name, pNo) => {
    setIsLoading(true)
    let url
    switch (mainFilter) {
      case 'Country':
        url = `https://humbletitanapi.herokuapp.com/countries/${name}?pageNo=${pNo}`
        break
      case 'Sector':
        url = `https://humbletitanapi.herokuapp.com/sectors/${name}?pageNo=${pNo}`
        break
      case 'Industry':
        url = `https://humbletitanapi.herokuapp.com/industries/${name}?pageNo=${pNo}`
        break
      case 'Market Capitalization':
        url = `https://humbletitanapi.herokuapp.com/marketkCap/${name}?pageNo=${pNo}`
        break
    }
    await axios
      .get(url)
      .then((res) => {
        setAllcompany(res.data[0]?.items ? res.data[0]?.items : res.data[0])
        setIsLoading(false)
        let lastpNo = Math.ceil(res.data[1].itemLength[0] / 30)
        setLastPageNo(lastpNo)
      })
      .catch((err) => {
        console.log('filter error', err.message)
      })
  }

  const handleChangeFilter = (newValue) => {
    let filter = newValue.value.replace(' ', '')
    console.log('filter', filter)
    setFilter(filter)
    filteration(filter, pageNo)
  }
  const handleChangeMainFilter = async (newValue) => {
    setMainFilter(newValue.value)
    newValue.value === 'All Tickers' &&
      await axios
        .get(`https://humbletitanapi.herokuapp.com/tickers_page/${pageNo}`)
        .then((res) => {
          let lastpNo = Math.ceil(res.data[1].itemLength / 30)
          setLastPageNo(lastpNo)
          setAllcompany(res?.data[0]?.items)
          setIsLoading(false)
        })
        .catch((err) => {
          console.log(err.message)
        })
  }
  const handleChangeSearch = async (newValue) => {
    setIsLoading(true)
    await axios
      .get(
        `https://humbletitanapi.herokuapp.com/companynames?companyname=${newValue?.value}`,
      )
      .then((res) => {
        console.log('res', res)
        setAllcompany(res?.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getData = async (pageNo) => {
    setIsLoading(true)
    const url = `https://humbletitanapi.herokuapp.com/tickers_page/${pageNo}`
    await axios
      .get(url)
      .then((res) => {
        let lastpNo = Math.ceil(res?.data[1]?.itemLength / 30)
        setIsLoading(false)
        setLastPageNo(lastpNo)
        setAllcompany(res?.data[0]?.items)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getCustomPages = async ()=> {
    await axios
      .get('https://humbletitanapi.herokuapp.com/getAllCustomUrls')
      .then(({ data }) => {
        setCustomPages(data)
        console.log("custompages", data)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const getSearch = async () => {
    const url = `https://humbletitanapi.herokuapp.com/companynames`
    await axios
      .get(url)
      .then((res) => {
        setSearch(res?.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    setIsLoading(true)
    getData(pageNo)
    getSearch()
    getCustomPages()
  }, [])

  const moveForward = () => {
    setPageNo(lastPageNo)
    mainFilter !== 'All Tickers'
      ? filteration(filter, lastPageNo)
      : getData(lastPageNo)
  }
  const increament = () => {
    setPageNo((prev) => (lastPageNo !== prev ? prev + 1 : prev))
    mainFilter !== 'All Tickers'
      ? filteration(filter, lastPageNo !== pageNo ? pageNo + 1 : pageNo)
      : getData(lastPageNo !== pageNo ? pageNo + 1 : pageNo)
  }
  const decreament = () => {
    setPageNo((prev) => (prev !== 1 ? prev - 1 : 1))
    mainFilter !== 'All Tickers'
      ? filteration(filter, pageNo !== 1 ? pageNo - 1 : 1)
      : getData(pageNo !== 1 ? pageNo - 1 : 1)
  }
  const moveBackward = () => {
    setPageNo(1)
    mainFilter !== 'All Tickers' ? filteration(filter, 1) : getData(1)
  }

  console.log('allcompany', allcompany?.length, allcompany)

  console.log(companiesRenderable)

  return (
    <div>
      <Head>
        <title>ALL Tickers || Humble Titan</title>
        <meta
          name="description"
          content="Humble Titan is providing you data of more than seven thousands tickers from all over the world."
        />
        <meta
          name="keywords"
          content="stocks, Marketing Consultant, SEO, polictics,"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="5 days" />
        <meta name="author" content="humbletitan.com" />
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <meta name="robots" content="noindex" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="true" />
        <meta property="og:description" content="true" />
        <meta property="og:url" content="true" />
        <meta property="og:site_name" content="true" />
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
        <meta name="true" content="true" />
        <meta name="next-head-count" content="32" />
      </Head>
      <Layout>
        <div className="top-search-filter-abcd">
          <Filter
            label="Search Compnay by name:"
            handleChange={handleChangeSearch}
            options={search}
          />
        </div>
        <div className="abcd_row pt-5_abcd abcd_container abcd_align-end Filters">
          <div className="abcd_col-4">
            <Filter
              handleChange={handleChangeMainFilter}
              label="Search Ticker by:"
              options={mainFilters}
            />
          </div>
          {mainFilter !== 'All Tickers' && (
            <div className="abcd_col-4 ml-1_abcd">
              <Filter
                handleChange={handleChangeFilter}
                label={mainFilter}
                options={
                  (mainFilter === 'Country' && countryFilters) ||
                  (mainFilter === 'Sector' && sectorFilters) ||
                  (mainFilter === 'Industry' && industryFilters) ||
                  (mainFilter === 'Market Capitalization' && mkCapFilters)
                }
              />
            </div>
          )}
          <Pagination
            increament={increament}
            decreament={decreament}
            pageNo={pageNo}
            moveBackward={moveBackward}
            moveForward={moveForward}
          />
        </div>

        <div className="pt-5_abcd pb-5_abcd">
          <div className="abcd_container">
            <div className="abcd_row keyvaluecards_abcd abcd_justify-betwee n  row_wraper_abcd">
              {isLoading && (
                <div className="text-[#000] w-[100%] flex justify-center">
                  <ThreeDots className="w-[50px] h-[50px]" fill="#023A51" />
                </div>
              )}

              {!isLoading &&
                allcompany
                  ?.slice(0, 6)
                  ?.map(
                    (data, key) =>
                      data?.Info?.companyname && (
                        <Newcard data={data} key={key} />
                      ),
                  )}
              {!isLoading && allcompany?.length > 0 && <Newsletter />}
              {!isLoading &&
                allcompany
                  ?.slice(6, 12)
                  ?.map(
                    (data, key) =>
                      data?.Info?.companyname && (
                        <Newcard data={data} key={key} />
                      ),
                  )}
              {!isLoading && allcompany?.length > 11 && <Newsletter />}
              {!isLoading &&
                allcompany
                  ?.slice(12, 18)
                  ?.map(
                    (data, key) =>
                      data?.Info?.companyname && (
                        <Newcard data={data} key={key} />
                      ),
                  )}

              {!isLoading && allcompany?.length > 17 && <Newsletter />}
              {!isLoading &&
                allcompany
                  ?.slice(18, 24)
                  ?.map(
                    (data, key) =>
                      data?.Info?.companyname && (
                        <Newcard data={data} key={key} />
                      ),
                  )}

              <div className="abcd_col-12 abcd_row">
                <div className="FooterPagination">
                  <Pagination
                    increament={increament}
                    decreament={decreament}
                    pageNo={pageNo}
                    moveBackward={moveBackward}
                    moveForward={moveForward}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Stocks - More on the Go */}
        { customPages.length > 0 &&
                     (
                    <section className='heading md:my-20 '>
                        <div className=" container w-12/12 py-10 mx-auto max-w-screen-xl">
                            <div className='mx-auto text-[#023A51] w-10/12 md:w-11/12 '>
                            <h2 className=' mx-auto text-[30px] md:text-[40px] text-center font-bold text-[#023A51] leading-[59px] md:leading-[69px] ' >Explore More</h2>
                                <div className='flex flex-wrap justify-around'>
                                  {
                                    customPages?.map((item, index)=> {
                                      return (
                                        <Link href={`/due-diligence/filtered/${item?.url}`} passHref key={index} >
                                          <a className='w-[100%] flex flex-col sm:w-[48%] md:w-[32%] bg-[#023A51] rounded-lg p-4'>
                                            <h2 className='text-[22px] md:text-[24px] font-semibold text-[#2cbc63]' >{item?.heading}</h2>
                                            <p className='text-[18px] md:text-[20px] text-[#f6f7f8] truncate-2 flex-1 '>{item?.description}</p>
                                            <div className="flex justify-center">
                                              <Green_rounded_btn href={`/due-diligence/filtered/${item?.url}`}>See Details</Green_rounded_btn>
                                            </div>
                                          </a>
                                        </Link>
                                      )
                                    })
                                  }
                                    
                                </div>
                            </div>
                        </div>
                    </section>
                    )
                }
      </Layout>
    </div>
  )
}
