import { BannerImage, Shape01, Shape02 } from "@/assets/eegl";
import Image from "next/image";
import Link from "next/link";

export default function BannerSection() {
  return (
    <div className="w-full relative py-[95px] items-center">
      <Image src={Shape01} alt="Shape" className="absolute -z-10 left-0 bottom-0" />

      <div className="container relative mx-auto flex items-center justify-center gap-x-40">
        <div className="flex flex-col gap-y-4 items-start">
          <h2 className="text-[64px] font-extrabold text-primary max-w-[355px]">
            Qualidade Integridade Inovação
          </h2>

          <Image
            src={Shape02}
            alt="Shape"
            className="absolute left-80 -z-10 -bottom-20"
          />

          <Link
            href={"#"}
            className="bg-[#50505029] font-semibold rounded-2xl text-white uppercase text-xs px-6 py-3"
          >
            Nossos Serviços
          </Link>
        </div>
        <Image className="max-w-[558px]" src={BannerImage} alt="Banner Image" />
      </div>
    </div>
  );
}
