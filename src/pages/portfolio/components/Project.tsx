export default function Project() {
  return (
    <div className="col-span-1 h-72 relative p-8">
      <div className="absolute w-1 h-full bg-gradient-to-b from-[#C0000030] via-[#C0000050] to-[#C0000010] left-0 top-0" />
      <div className="absolute w-full h-1 bg-gradient-to-r from-[#C0000030] via-[#C0000050] to-[#C0000010] left-0 top-0" />
      <div className="absolute w-1 h-full bg-gradient-to-b from-[#C0000030] via-[#C0000050] to-[#C0000010] right-0 top-0" />
      <div className="absolute w-full h-1 bg-gradient-to-r from-[#C0000030] via-[#C0000050] to-[#C0000010] left-0 bottom-0" />

      <div className="w-full h-full bg-zinc-200 bg-opacity-70"></div>
    </div>
  );
}
