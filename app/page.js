import Header from "@/components/Header";
import Image from "next/image";
import Blur1 from "@/public/blur-1.png";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" w-full overflow-hidden">
      <div className="relative max-w-[1280px] mx-auto px-7 sm:px-14">
        <Image
          className="absolute right-[-160px] sm:right-[-220px] z-[-10]"
          src={Blur1}
          alt=""
        />
        <Header />
        <Hero />
        <About />
        <Features />
        <Faq />
        <Join />
        <Footer />
      </div>
    </div>
  );
}
