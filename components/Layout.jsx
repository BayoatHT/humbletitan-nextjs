import useSWR from 'swr'
import qs from 'qs'

import Footer from "./Footer";
import Header from "./Header";
import Heading from "./Heading";
import axios from 'axios'


const Layout = ({ children }) => {
  const query = qs.stringify({
    populate: {
        navImage: {
            populate: true
        },
      }
  })

  const services = useSWR(`https://humble-titan-strapi.herokuapp.com/api/services?${query}`, axios)
  const courses = useSWR(`https://humble-titan-strapi.herokuapp.com/api/services?${query}`, axios)


  return (
    <>
      <Header services={services?.data?.data?.data} courses={courses?.data?.data?.data} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;



