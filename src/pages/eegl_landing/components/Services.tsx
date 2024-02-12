import { Service01, Service02, Service03, Service04 } from "@/assets/eegl/services";
import Image from "next/image";

export default function Services() {
  return (
    <div className="w-full flex flex-col gap-y-44">
      <div className="w-full h-40 bg-primary">
        <div className="container mx-auto relative">
          <div className="w-[396px] h-[179px] rounded-2xl bg-white border-primary border absolute left-0 top-14 flex justify-center items-center">
            <h2
              className="text-[64px] text-center leading-none font-bold text-primary
            "
            >
              Nossos Serviços
            </h2>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-28">
        <div className="flex flex-col items-center gap-y-4">
          <Image src={Service01} alt="" className="max-w-[323px]" />

          <h4 className="uppercase text-center text-primary font-bold text-[28px]">
            FORNECIMENTO DE BENS
          </h4>

          <p className="text-xl max-w-[358px] text-center text-primaryText">
            Forncemos desde máquinas pesadas, geradores, e diversos outros
            artigos.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Image src={Service02} alt="" className="max-w-[323px]" />

          <h4 className="uppercase text-center text-primary font-bold text-[28px]">
            IMPORTAÇÃO E EXPORTAÇÃO
          </h4>

          <p className="text-xl max-w-[358px] text-center text-primaryText">
            Forncemos desde máquinas pesadas, geradores, e diversos outros
            artigos.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Image src={Service03} alt="" className="max-w-[323px]" />

          <h4 className="uppercase text-center text-primary font-bold text-[28px]">
            AGRICULTURA
          </h4>

          <p className="text-xl max-w-[358px] text-center text-primaryText">
            Serviços de consultoria mecânica, seleção e venda de equipamentos,
            peças e insumos.
          </p>
        </div>
        <div className="flex flex-col items-center gap-y-4">
          <Image src={Service04} alt="" className="max-w-[323px]" />

          <h4 className="uppercase text-center text-primary font-bold text-[28px]">
            TRANSPORTE
          </h4>

          <p className="text-xl max-w-[358px] text-center text-primaryText">
            Transporte seguro e eficiente de mercadorias e equipamentos.
          </p>
        </div>
      </div>
    </div>
  );
}
