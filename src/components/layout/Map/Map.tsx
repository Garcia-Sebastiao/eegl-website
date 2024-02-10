import Image from "next/image";
import { Map as MapIllustration } from "@/assets";

export function Map() {
  return (
    <div className="w-full h-[351px]">
      <Image src={MapIllustration} className="w-full h-full object-cover" alt="Map" />
    </div>
  );
}
