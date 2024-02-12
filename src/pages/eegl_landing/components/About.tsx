import { AboutUs } from "@/assets/eegl";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="mx-auto pt-32 container items-center flex justify-center gap-x-14">
      <Image className="max-w-[358px]" src={AboutUs} alt="About US" />

      <div className="flex flex-col gap-y-4">
        <h2 className="text-[40px] font-bold text-primary uppercase">
          Sobre nós
        </h2>

        <p className="text-2xl max-w-2xl text-primaryText">
          Somos uma empresa multissetorial de direito angolano no mercado desde
          2015, com um objetivo social segmentado para fornecimento de bens e
          serviços.
        </p>
      </div>
    </div>
  );
}
