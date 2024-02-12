import { Background01, Diagram, Shape02 } from "@/assets/eegl";
import Image from "next/image";

export default function ActionAreas() {
  return (
    <div className="w-full relative flex justify-center items-center h-[698px]">
      <Image
        src={Background01}
        alt="Background"
        className="absolute -z-10 w-full h-full object-cover"
      />
      <Image src={Shape02} alt="Shape" className="absolute left-0 -top-6" />

      <div className="mx-auto container flex ">
        <h2 className="text-[64px] flex flex-col leading-none text-[#505050] uppercase">
          Setores <span className="font-bold text-primary">de Atuação</span>
        </h2>
      </div>
      <Image
        src={Diagram}
        alt="Shape"
        className="absolute right-0 top-1/2 -translate-y-1/2 max-w-[840px]"
      />
    </div>
  );
}
