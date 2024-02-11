import { Poppins } from "next/font/google";
import Header from "./components/Header/Header";
import { Cars, frame } from "@/assets";
import Image from "next/image";
import About from "./components/About";
import Counters from "./components/Counters";
import Services from "./components/Services";
import { Map } from "@/components/layout/Map/Map";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div
      className={`relative overflow-x-hidden min-h-screen ${poppins.className}`}
    >
      <Header />
      <div className="w-full min-h-screen relative">
        <Image
          src={frame}
          className="absolute -z-10 -top-48 right-0"
          alt="Frame"
        />
        <div className="mx-auto container pb-20 flex items-center justify-between py-10">
          <div className="flex flex-col">
            <h2 className="text-[64px] font-light leading-none text-primaryText">
              Cuidamos do seu
            </h2>
            <h1 className="text-[180px] leading-none font-bold text-primary">
              motor
            </h1>
            <h2 className="text-[2rem] leading-none text-primaryText !tracking-[0.5rem]">
              Qualidade e excelência!
            </h2>
          </div>

          <Image src={Cars} alt="Cars" className="max-w-[864px] mr-24" />
        </div>

        <About />
        <Counters />
        <Services />

        <div className="w-full mt-[306px]">
          <Map />
        </div>
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}
