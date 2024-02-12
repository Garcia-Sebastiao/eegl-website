import { Background2, Background3, Map } from "@/assets";
import { ExclamationIcon } from "@/assets/icons";
import { Header } from "@/components/layout/Header/Header";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Input from "@/pages/contacts/components/Input";
import Footer from "./Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function Contacts() {
  return (
    <div
      className={`relative mt-28 overflow-x-hidden min-h-screen ${poppins.className}`}
    >
      <div className="w-full flex flex-col items-center pt-[46px]">
        <div className="bg-primary py-24 w-full">
          <div className="container mx-auto flex gap-y-10 flex-col items-center">
            <h2 className="text-white text-[48px] font-bold">
              Somos o seu parceiro ideal!
            </h2>

            <p className="text-2xl text-white !leading-relaxed">
              Somos o seu parceiro ideal na busca pelo sucesso. Comprometemo-nos
              não apenas em atender, mas em superar as suas expectativas,
              transformando desafios em oportunidades e visões em realizações.
            </p>

            <form className="w-full flex mt-6 items-center gap-x-6">
              <div className="flex flex-col gap-y-4 flex-1">
                <Input placeholder="Diga-nos o seu nome" />
                <div className="w-full h-[3px] bg-white" />
                <Input type="text" placeholder="Diga-nos o seu número" />
                <div className="w-full h-[3px] bg-white" />
                <Input type="email" placeholder="Diga-nos o seu e-mail" />
              </div>

              <div className="flex-1">
                <textarea
                  name=""
                  placeholder="Como podemos ajudar?"
                  className="border-[3px] max-h-[155px] p-4 text-xl text-white placeholder:text-white w-full bg-transparent border-white rounded-xl"
                  cols={30}
                  rows={10}
                />
              </div>

              <button className="bg-white text-[2rem] text-primary font-bold px-9 py-4 rounded-xl">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer color className="bg-transparent border-t-4 border-t-primary" />
    </div>
  );
}
