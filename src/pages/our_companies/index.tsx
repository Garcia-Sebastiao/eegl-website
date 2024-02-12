import { Background, Illustration, Logo, Logo2, MaquinasLogo } from "@/assets";
import { ExclamationIcon } from "@/assets/icons";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Home() {
  return (
    <div
      className={`relative overflow-x-hidden min-h-screen ${poppins.className}`}
    >
      <div className="w-full -z-10 h-full absolute top-0 left-0">
        <Image
          src={Background}
          alt="Background"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <Header />
      <div className="w-full flex flex-col items-center container mx-auto gap-y-4 py-[54px] pt-[118px] pb-[62px] min-h-screen">
        <h2 className="font-normal text-primaryText text-[42px]">
          NOSSAS <span className="text-primary">EMPRESAS</span>
        </h2>

        <div className="flex gap-x-7 items-center">
          <Link href="/machine_and_motors">
            <Image src={MaquinasLogo} className="w-[246px]" alt="Maquinas" />
          </Link>
          <Link href="/eegl_landing">
            <Image src={Logo2} className="w-[272px] mt-8" alt="EGGL" />
          </Link>
        </div>

        <div className="flex items-center -mt-5 gap-x-3">
          <Image src={ExclamationIcon} alt="" />
          <span className="uppercase ">
            Clique no logotipo da empresa para saber mais.
          </span>
        </div>
      </div>
      <Footer />
    </div>
  );
}
