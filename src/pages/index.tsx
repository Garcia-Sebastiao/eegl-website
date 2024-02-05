import { Background, Illustration } from "@/assets";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div className={`relative min-h-screen ${poppins.className}`}>
      <div className="w-full -z-10 h-full absolute top-0 left-0">
        <Image
          src={Background}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Header />
      <div className="min-h-screen  container mx-auto">
        <div className="flex relative flex-col pt-80">
          <span className="text-[2rem] !tracking-[2rem] font-semibold text-[#505050]">
            MOVIDOS PELA
          </span>
          <h1 className="text-[8rem] text-primary leading-relaxed font-extrabold">
            EXCELÊNCIA
          </h1>
          <div className="absolute right-0 top-8">
            <Image src={Illustration} alt="Illustration" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
