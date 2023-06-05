import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
