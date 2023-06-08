import Navbar from "../comps/navbar";
import Main from "../comps/main";
import Header from "../comps/header";
import PreHeader from "../comps/pre-header";
import Footer from "../comps/footer";


const Home = () => {
  return (
    <>
    <PreHeader/>
    <Header/>
      {/* <Navbar /> */}
      <Main />
      <Footer/>
    </>
  );
};

export default Home;
