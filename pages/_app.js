import Head from "next/head";

import { ProductContextProvider } from "../back-end/context/productContext";

import "../styles/global/globals.scss";

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
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </>
  );
};

export default App;
