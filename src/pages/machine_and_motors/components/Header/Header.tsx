import Image from "next/image";
import Link from "next/link";
import { Bebas_Neue } from "next/font/google";
import { logo } from "@/assets";
import { Links } from "@/components/layout/utils/HeaderLinks";

const bebas_neue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Header() {
  return (
    <header className={`${bebas_neue.className} w-full`}>
      <div className="flex w-full items-center justify-between container mx-auto py-20">
        <Link href="#">
          <Image src={logo} alt="Maquinas e Motores" />
        </Link>

        <nav className="flex items-center gap-x-10">
          <ul className="flex items-center gap-x-10">
            {Links.map((link) => (
              <li key={link.key}>
                <Link className="uppercase text-2xl" href="#">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href=""
            className="text-3xl uppercase text-white p-[14px] px-6 rounded-2xl bg-primary"
          >
            contacte-nos
          </Link>
        </nav>
      </div>
    </header>
  );
}
