import Navbar from "../comps/navbar";
import Main from "../comps/main";
import Header from "../comps/header";
import PreHeader from "../comps/pre-header";


const Home = () => {
  return (
    <>
    <PreHeader/>
    <Header/>
      <Navbar />
      <Main />
    </>
  );
};

export default Home;
