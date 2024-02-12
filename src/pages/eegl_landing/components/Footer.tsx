import { FacebookIcon, InstagramIcon, LinkedInIcon } from "@/assets/icons";
import { eegl_links } from "@/components/layout/utils/HeaderLinks";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
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
          <h2 className={`text-2xl font-bold text-primaryText`}>Endereço</h2>

          <ul className="flex flex-col gap-y-[10px]">
            {eegl_links.map((link) => (
              <li key={link.key}>
                <Link href="#" className="text-2xl text-primary">
                  {link.label}
                </Link>
              </li>
            ))}

            <Link href="#" className="text-2xl text-primary font-bold">
            Voltar a pagina anterior</Link>
          </ul>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-primaryText`}>Contactos</h2>

          <div className="flex flex-col">
            <span className="text-primary text-2xl">geral@eeglgroup.com</span>
            <span className="text-primary text-2xl">
              geral@maquinasemotores.com
            </span>
          </div>

          <div className="flex flex-col">
            <span className="text-primary text-2xl">+244 929 029 456</span>
            <span className="text-primary text-2xl">+244 929 029 342</span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-primaryText`}>Endereço</h2>

          <div className="flex flex-col">
            <span className="text-primary max-w-[351px] text-2xl">
              <b>Luanda, Viana-Km25</b> Ponte do 25 sentido Cacuaco Bairro{" "}
              <b>Canjinji, Placa 80</b>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-y-5">
          <h2 className={`text-2xl font-bold text-primaryText`}>Links</h2>

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
