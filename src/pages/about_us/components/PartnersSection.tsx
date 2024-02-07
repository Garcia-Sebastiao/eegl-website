import Image from "next/image";
import Partners from "../../../utils/Partners";

export default function PartnersSection() {
  return (
    <div className="flex flex-col items-center w-full">
      <h2 className="text-[30px] font-bold text-primary">NOSSOS PARCEIROS</h2>

      <div className="flex w-full overflow-x-auto no-scroll items-center gap-x-8">
        {Partners.map((partner, index) => (
          <Image src={partner.image} alt="Partner" key={index} />
        ))}
      </div>
    </div>
  );
}
