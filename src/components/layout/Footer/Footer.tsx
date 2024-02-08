import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

export function Footer({
  className,
  color,
}: {
  className?: string;
  color?: boolean;
}) {
  return (
    <footer
      className={`w-full clear-both bg-[#1e1e1e] pt-14 pb-28 ${className}`}
    >
      <div className="container flex justify-between mx-auto w-full">
        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-white ${color && "!text-primary"}`}>Endereço</h2>

          <div className="flex flex-col">
            <span className={color ? "text-primaryText font-semibold" : "text-white font-semibold"}>Luanda Viana-Km25</span>
            <span className={color ? "text-primaryText" : "text-white"}>Ponte do 25 sentifo Cacuaco</span>
            <span className={color ? "text-primaryText" : "text-white"}>
              Bairro <span className="font-semibold">Canjinji, Placa</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-white ${color && "!text-primary"}`}>Contactos</h2>

          <div className="flex flex-col">
            <span className={color ? "text-primaryText" : "text-white"}>geral@eeglgroup.com</span>
            <span className={color ? "text-primaryText" : "text-white"}>geral@maquinasemotores.com</span>
          </div>

          <div className="flex flex-col">
            <span className={color ? "text-primaryText" : "text-white"}>+244 929 029 456</span>
            <span className={color ? "text-primaryText" : "text-white"}>+244 929 029 342</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-white ${color && "!text-primary"}`}>Links</h2>

          <div className="flex gap-x-3">
            <Link href="#">
              <Image src={InstagramIcon} alt="Instagram" />
            </Link>
            <Link href="#">
              <Image src={FacebookIcon} alt="FacebookIcon" />
            </Link>
            <Link href="#">
              <Image src={LinkedInIcon} alt="LinkedIn" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
