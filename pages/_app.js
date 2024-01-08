import Head from "next/head";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Car Rental</title>
        <link className="h-full" rel="icon" href="/car-favicon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
