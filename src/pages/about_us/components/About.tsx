export default function AboutContent() {
  return (
    <div className="flex gap-x-[61px] ">
      <div className="w-[284px] h-[236px] flex-none rounded-[10px] flex items-center justify-center bg-primary">
        <h2 className="text-[60px] text-white text-center font-bold">
          <span className="font-extralight">QUEM</span> SOMOS
        </h2>
      </div>

      <div className="flex flex-col gap-y-2">
        <p className="text-3xl leading-normal text-justify">
          O <span className="font-semibold text-[#1E1E1E]">Grupo EEGL</span> é
          uma entidade empresarial diversificada que engloba duas empresas
          proeminentes. Com uma presença marcante no mercado, o grupo está
          comprometido em oferecer soluções integradas de alta qualidade para
          atender as necessidades dos nossos clientes.
        </p>

        <div className="w-full h-[1px] bg-primary" />
      </div>
    </div>
  );
}
