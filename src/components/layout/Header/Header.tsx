import { Logo } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "../utils/HeaderLinks";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full">
      <div className="w-full flex gap-x-20 items-center container mx-auto py-5">
        <Link href="/">
          <Image className="w-24" src={Logo} alt="logo" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-[70px]">
            {HeaderLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`uppercase text-zinc-600 text-sm transition-all hover:font-semibold hover:text-primary ${
                    pathname.split("/")[1] == link.href
                      ? "font-semibold text-primary"
                      : ""
                  }`}
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
