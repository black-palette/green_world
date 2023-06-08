import Head from "next/head";



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
        {/* <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous"/> */}
        <title> Зелений світ - Магазин добрив і зоотоварів</title>
      </Head>
        <Component {...pageProps} />
        
        {/* <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script> */}
    </>
  );  
};

export default App;
