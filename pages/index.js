import Bdesh from "@components/Bdesh";
import Category from "@components/Category";
import Countries from "@components/Countries";
import Hero from "@components/Hero";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative">
      <Head>
        <title>Largest Overseas Job Site in Bangladesh | Bdjobs.com</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Hero />
      <Category />
      <Countries />
      <Bdesh />
      <div id="scroll" style={{
        display: "block"
      }}>
        <Link href="#" className="back-top">
            <FaArrowAltCircleUp />
            <span class="hidden-xs">Back to Top</span>
        </Link>
    </div>
    </div>
  );
}
