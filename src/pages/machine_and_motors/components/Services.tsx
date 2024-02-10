import {
  AboutImage,
  Serralharia,
  TechnicalAssists,
} from "@/assets/machine_and_motors";
import Image from "next/image";
import Link from "next/link";

export function Services() {
  return (
    <div className="flex w-full flex-col mt-[60px] items-center">
      <div className="flex items-center flex-col gap-y-[69px]">
        <h2 className="text-[52px] font-bold text-primaryText">
          Nossos Serviços
        </h2>
        <p className="text-center text-primaryText max-w-6xl text-[2rem]">
          A <b>Maquinas e motores</b> disponibiliza uma grande variedade de
          serviços, desde serviços de mecânica à construção civil.
        </p>
      </div>

      <div className="flex w-full items-center mt-28">
        <div className="flex px-20 flex-1 items-start flex-col gap-y-6">
          <h2 className="text-3xl font-bold text-primary">
            ASSISTÊNCIA TÉCNICA
          </h2>

          <p className="text-2xl max-w-[609px] leading-relaxed text-primaryText">
            Oferecemos serviços especializados de manutenção e reparação de
            máquinas ligeiras, pesadas e industriais.
          </p>

          <Link
            href="#"
            className="bg-[#505050] text-2xl text-white px-[50px] py-3 rounded-xl"
          >
            Saiba mais
          </Link>
        </div>

        <div>
          <Image
            src={TechnicalAssists}
            alt="Assistência Técnica"
            className="max-w-[700px]"
          />
        </div>
      </div>

      <div className="flex w-full items-center">
        <div className="flex-1 rounded-r-3xl h-[430px] bg-[#D9D9D9]"></div>

        <div className="flex max-w-[700px] px-20 flex-1 items-start flex-col gap-y-6">
          <h2 className="text-3xl font-bold text-primary">
            DESATIVAÇÃO DE ATIVOS TÉCNICOS
          </h2>

          <p className="text-2xl max-w-[622px] leading-relaxed text-primaryText">
            Consulte os nossos serviços de fecho técnico de obras, estaleiros e
            outros locais técnicos.
          </p>

          <Link
            href="#"
            className="bg-[#505050] text-2xl text-white px-[50px] py-3 rounded-xl"
          >
            Saiba mais
          </Link>
        </div>
      </div>

      <div className="flex w-full items-center">
        <div className="flex px-20 flex-1 items-start flex-col gap-y-6">
          <h2 className="text-3xl font-bold text-primary">
            SERRALHARIA INDUSTRIAL
          </h2>

          <p className="text-2xl max-w-[609px] leading-relaxed text-primaryText">
            Consulte os nossos serviços de serralharia, fabricamos estruturas de
            armazenamento, pontes, rampas e outros elementos.
          </p>

          <Link
            href="#"
            className="bg-[#505050] text-2xl text-white px-[50px] py-3 rounded-xl"
          >
            Saiba mais
          </Link>
        </div>

        <div>
          <Image
            src={Serralharia}
            alt="Assistência Técnica"
            className="max-w-[700px]"
          />
        </div>
      </div>

      <div className="flex w-full items-center">
        <div className="flex-1 rounded-r-3xl h-[430px] bg-[#D9D9D9]"></div>

        <div className="flex max-w-[700px] px-20 flex-1 items-start flex-col gap-y-6">
          <h2 className="text-3xl font-bold text-primary">BASE DE VIDA</h2>

          <p className="text-2xl max-w-[622px] leading-relaxed text-primaryText">
            Serviços de construção e montagem de estruturas de trabalho.
          </p>

          <Link
            href="#"
            className="bg-[#505050] text-2xl text-white px-[50px] py-3 rounded-xl"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
