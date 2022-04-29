import Footer from "./Footer";
import Header from "./Header";
import Heading from "./Heading";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
