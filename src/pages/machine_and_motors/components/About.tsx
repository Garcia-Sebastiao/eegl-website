import { AboutImage } from "@/assets/machine_and_motors";
import Image from "next/image";

export default function About() {
  return (
    <div className="flex gap-x-[75px]">
      <Image className="max-w-[543px]" src={AboutImage} alt="" />

      <div className="flex flex-1 flex-col gap-y-2 border-t-2 border-t-primary py-8 ">
        <h2 className="text-[48px] pr-20 font-bold text-primary">Sobre nós</h2>

        <div className="flex pr-20 flex-col max-w-[794px] gap-y-6">
          <p>
            Somos uma empresa dedicada a fornecer soluções abrangentes no campo
            de
            <b> assistência técnica ligeira, pesada e industrial</b>.
          </p>

          <p>
            Contamos com uma equipe altamente qualificada e experiente, dedicada
            a superar as expectativas de quem em nós confia. Estamos
            comprometidos a servir com excelência, proporcionando soluções
            eficazes para todas as suas necessidades.
          </p>
          
          <div className="w-full mt-10 h-1 bg-primary" />
        </div>
      </div>
    </div>
  );
}
