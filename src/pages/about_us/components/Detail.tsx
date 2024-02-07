export default function Detail({
  label,
  texts,
  active,
  setActive,
}: {
  label: string;
  texts: any[];
  active: boolean;
  setActive: () => void;
}) {
  return (
    <div onMouseOver={setActive} className="flex relative flex-none gap-x-8">
      <div className={`w-[143px] transition-all hover:bg-primary duration-700 h-[74px] rounded-md bg-[#D9D9D9] flex items-center justify-center ${active && "bg-primary"}`}>
        <h3 className="text-xl uppercase font-bold text-white ">{label}</h3>
      </div>

      <div
        className={`flex transition-all duration-700 absolute left-[143px] flex-col gap-y-12 ${
          active ? "opacity-100" : "opacity-0"
        }`}
      >
        {texts?.map((text, index) => (
          <p
            key={index}
            className="max-w-3xl text pl-12 text-2xl text-[#1E1E1E]"
          >
            {text?.key ? (
              <>
                <span className="font-semibold">{text?.key}: </span>{" "}
                {text?.text}
              </>
            ) : (
              text
            )}
          </p>
        ))}
      </div>
    </div>
  );
}
