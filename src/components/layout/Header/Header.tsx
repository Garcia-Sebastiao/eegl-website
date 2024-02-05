import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "../utils/HeaderLinks";

export function Header() {
  return (
    <header className="w-full">
      <div className="w-full justify-between flex gap-x-[70px] items-center container mx-auto py-5">
        <Link href="#">
          <Image className="w-24" src={Logo} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-[70px]">
            {HeaderLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className="uppercase text-zinc-600 text-sm transition-all hover:font-semibold hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
