"use client";
import { useEffect, useState } from "react";
import { DetailsContent } from "../utils/DetailsContent";
import { Detail } from "./Detail";

export function DetailsSection() {
  const [active, setActive] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      setActive(active + 1);

      if (active === DetailsContent.length - 1) {
        setActive(0);
      }
    }, 4000);
  }, [active]);

  return (
    <div className="w-full flex flex-col  gap-y-6 pl-[284px]">
      {DetailsContent?.map((detail, index) => (
        <Detail
          key={index}
          setActive={() => setActive(index)}
          active={active === index}
          label={detail?.label}
          texts={detail?.texts}
        />
      ))}
    </div>
  );
}
