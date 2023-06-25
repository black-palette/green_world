import Navbar from "../comps/navbar";
import Main from "../comps/main";
import Header from "../comps/header";
import PreHeader from "../comps/pre-header";
import Footer from "../comps/footer";

import { ProductContext } from "../back-end/context/productContext";

const Home = () => {
  return (
    <ProductContext>
      <PreHeader />
      <Header />
      <Navbar />
      <Main />
      <Footer />
    </ProductContext>
  );
};

export default Home;
