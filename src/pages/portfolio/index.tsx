import { Background2 } from "@/assets";
import { ExclamationIcon } from "@/assets/icons";
import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Project from "./components/Project";

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
        src={Background2}
        alt="Background"
        className="absolute -z-10 bottom-0"
      />
      
      <Header />
      <div className="w-full flex flex-col items-center container mx-auto gap-y-4 py-[72px] pb-[330px] min-h-screen">
        <h2 className="font-normal text-primaryText text-[42px]">
          NOSSO <span className="text-primary">PORTOFÓLIO</span>
        </h2>

        <div className="grid grid-cols-3 w-full gap-20 mt-5">
          {Array(9)
            .fill(0)
            .map((_, index) => (
              <Project />
            ))}
        </div>
      </div>
      <Footer className="bg-[#1e1e1e90]" />
    </div>
  );
}
