import Input from "@/pages/contacts/components/Input";

export function Contacts() {
  return (
    <div className="bg-primaryText py-24 w-full">
      <div className="container px-20 mx-auto flex gap-y-10 flex-col items-center">
        <h2 className="text-white text-[40px] font-bold">CONTACTE-NOS</h2>

        <form className="w-full flex mt-6 items-center gap-x-6">
          <div className="flex flex-col gap-y-4 flex-1">
            <Input placeholder="Diga-nos o seu nome" />
            <div className="w-full h-[3px] bg-white" />
            <Input type="text" placeholder="Diga-nos o seu número" />
            <div className="w-full h-[3px] bg-white" />
            <Input type="email" placeholder="Diga-nos o seu e-mail" />
          </div>

          <div className="flex-1">
            <textarea
              name=""
              placeholder="Como podemos ajudar?"
              className="border-[3px] max-h-[155px] p-4 text-xl text-white placeholder:text-white w-full bg-transparent border-white rounded-xl"
              cols={30}
              rows={10}
            />
          </div>

          <button className="bg-white text-[2rem] text-primaryText font-bold px-9 py-4 rounded-xl">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
