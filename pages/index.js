import Navbar from "../comps/header/navbar";
import Main from "../comps/main/main";
import Header from "../comps/header/header";
import PreHeader from "../comps/header/pre-header";
import Footer from "../comps/footer/footer";

const Home = () => {
  return (
    <>
      <PreHeader />
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
