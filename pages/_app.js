import Layout from "../comps/Layout";
import "../styles/globals.css";
import "../styles/scss/navbar.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/plant.jpg"
          type="image/png"
          sizes="16x16"
        />
        <title> Зелений світ - Магазин добрив і зоотоварів</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
