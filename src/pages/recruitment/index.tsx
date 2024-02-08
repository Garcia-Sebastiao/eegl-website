import { Background2, Background3 } from "@/assets";
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
      <Image
        src={Background3}
        alt="Background"
        className="absolute -z-10 bottom-0"
      />

      <Header />
      <div className="w-full flex flex-col items-center container justify-center mx-auto gap-y-4 py-[72px] pb-[330px] min-h-[100vh]">
        <h2 className="max-w-5xl text-center text-primaryText text-[48px] font-bold">
          FORMULARIO DE RECRUTAMENTO{" "}
          <span className="font-bold text-primary">INDÍSPONIVEL</span>
        </h2>
      </div>
      <Footer className="bg-[#1e1e1e90]" />
    </div>
  );
}
