import { CountersBanner } from "@/assets/machine_and_motors";
import Image from "next/image";

export default function Counters() {
  return (
    <div className="w-full py-[102px] mt-[10px] flex justify-center h-[551px] relative">
      <Image
        src={CountersBanner}
        className="w-full absolute top-0 left-0 -z-10 h-full object-cover"
        alt="Banner"
      />

      <div className="flex flex-col gap-y-8 items-center">
        <h2 className="text-[40px] font-bold text-white">
          Motivos para trabalhar connosco!
        </h2>

        <div className="flex items-center gap-x-16">
          <div className="flex flex-col items-center">
            <h2 className="text-[96px] font-semibold text-white">+80</h2>
            <span className="uppercase text-white">CLIENTES SATISFEITOS</span>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[96px] font-semibold text-white">+100</h2>
            <span className="uppercase text-white">
              COLABORAÇÕES DE SUCESSO
            </span>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[96px] font-semibold text-white">+80</h2>
            <span className="uppercase text-white">PROJETOS REALIZADOS</span>
          </div>
        </div>

        <p className="text-xl text-white max-w-[924px] mt-6 text-center">
          Atendemos clientes dos mais diversos segmentos e zelamos sempre por
          serviços de qualidade, de modo a servir os nossos parceiros com
          excelência.
        </p>
      </div>
    </div>
  );
}
