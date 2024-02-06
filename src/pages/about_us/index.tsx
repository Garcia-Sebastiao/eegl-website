import { Background, Illustration } from "@/assets";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import { AboutContent } from "./components/About";
import { PartnersSection } from "./components/PartnersSection";
import { DetailsSection } from "./components/DetailsSection";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div className={`relative overflow-x-hidden min-h-screen ${poppins.className}`}>
      <div className="w-full -z-10 h-full absolute top-0 left-0">
        <Image
          src={Background}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Header />
      <div className="w-full flex flex-col container mx-auto gap-y-[170px] py-[54px] pb-[62px] min-h-screen">
        <AboutContent />
        <DetailsSection />
        <PartnersSection />
      </div>
      <Footer />
    </div>
  );
}
