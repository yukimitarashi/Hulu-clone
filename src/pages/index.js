import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Header } from "components/Heder";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Lets build hulu v2.0</h1>
      <Header />
    </>
  );
}
