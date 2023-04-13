import Bdesh from "@components/Bdesh";
import Category from "@components/Category";
import Countries from "@components/Countries";
import Hero from "@components/Hero";
import { Inter } from "next/font/google";
import Link from "next/link";
import { FaArrowAltCircleUp } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative">
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
