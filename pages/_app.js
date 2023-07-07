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

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" />
      </Head>
      <ProductContextProvider>
        <Component {...pageProps} />
      </ProductContextProvider>
    </>
  );
};

export default App;
