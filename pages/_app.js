import Layout from "../components/Layout";
import "../styles/globals.css";
import "swiper/css/bundle";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>로켓 성장 이인수 : 기술</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
