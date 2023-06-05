import Layout from "../comps/Layout";
import "../styles/globals.css";
import "../styles/scss/navbar.css";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
