import Head from "next/head";
import App, { AppProps, AppContext } from "next/app";
import Layout from "../layouts/layout";
import '../globals.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        {/*<script defer src="https://videoadstech.org/ads/hoaus_livextop_com.6d5ba7e3-e677-4337-bd4c-8d31b15127a8.video.js"></script>
        <script async src="https://server.adhub.media/ads/hoaus_livextop_com.455d63b8-1ced-429d-a364-6882a575bc2f.display.js"></script>*/}
        <script defer src="https://videoadstech.org/ads/hoaus_daily24_blog.4537ef9a-8978-4d2d-b590-32889c180a43.video.js"></script>
        <script async src="https://server.adhub.media/ads/hoaus_daily24_blog.a4ab7ddc-9045-4153-a337-caff2d0344f8.display.js"></script>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async (context: AppContext) => {
  const appProps = await App.getInitialProps(context);
  return {
    ...appProps,
  };
};
