import { eegl_secondary_logo } from "@/assets";
import { eegl_links } from "@/components/layout/utils/HeaderLinks";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full pt-[54px] pb-3 border-b-primary border-b">
      <div className="w-full container justify-between items-center flex mx-auto">
        <Link href="#">
          <Image src={eegl_secondary_logo} alt="EEGL" />
        </Link>

        <nav>
          <ul className="flex items-center gap-x-10">
            {eegl_links.map((link) => (
              <li key={link.key}>
                <Link className="text-sm transition-all hover:text-primary hover:font-bold font-semibold" href="#">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
