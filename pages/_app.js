import Head from "next/head";

import Layout from "../comps/Layout";

import "../styles/globals.scss";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/logo.svg"
          type="image/svg"
          sizes="16x16"
        />
        <title> Зелений світ - Магазин добрив і зоотоварів</title>
      </Head>
        <Component {...pageProps} />
    </>
  );
};

export default App;
