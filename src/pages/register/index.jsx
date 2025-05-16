import CardPuppy from "@/components/CardPuppy";
import CustomInput from "@/components/CustomInput";
import PageWrapper from "@/components/PageWrapper";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaTransgender } from "react-icons/fa";
import { PiMedalDuotone } from "react-icons/pi";


export default function Register() {
  return (
    <PageWrapper>
      <div className="w-full h-auto flex items-center justify-center p-5 mb-5 tracking-wider">
        <div className="h-full w-[60%] p-5 flex flex-col justify-center rounded-2xl items-center bg-[#f0f0f0]">
          <h1 className=" text-[32px] m-2 bg-gradient-to-r tracking-wider from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans pb-6">Cadastre-se</h1>

          <form
            className="w-full h-[auto] flex gap-4 bg-[#F0F0F0] rounded-2xl p-6 border-1 border-purple-500 shadow-lg"
          >
            {/* formulario lado esquerdo */}
            <div className="w-[50%] h-auto flex flex-col p-2 gap-6">

              <CustomInput
                icon={<FaUser size={16} color="#1f3b57" />}
                type="text"
                label="Nome"
                placeholder="Digite seu nome"
              />

              <CustomInput
                icon={<MdOutlineEmail size={20} color="#1f3b57" />}
                type="email"
                label="Email"
                placeholder="Digite seu email"
              />

              <CustomInput
                icon={<FaDog size={20} color="#1f3b57" />}
                type="text"
                label="Nome do Pet"
                placeholder="Digite o nome do seu pet" />

              <h4 className="flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[20px]">
                <FaTransgender size={20} color="#1f3b57" />
                Gênero</h4>
              <div className=" flex gap-4 ">
                <label
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <input
                    className=""
                    type="checkbox" />
                  Fêmea
                </label>
                <label
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <input
                    className=""
                    type="checkbox" />
                  Macho
                </label>

              </div>



            </div>

            {/* formulario lado direito */}
            <div className="w-[50%] flex flex-col p-2 gap-6">
              <CustomInput
                icon={<FaUser size={16} color="#1f3b57" />}
                type="number"
                label="Seu CPF"
                placeholder="Digite seu CPF"
              />
              <CustomInput
                icon={<CiCalendarDate size={20} color="#1f3b57" />}
                type="number"
                label="Sua Data de Nascimento"
                placeholder="Digite sua data de nascimento"
              />
              <CustomInput
                icon={<FaDog size={20} color="#1f3b57" />}
                type="number"
                label="Idade do Pet"
                placeholder="Digite a idade do seu pet"
              />

              <h4 className="bg-gradient-to-r flex items-center gap-2 from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[20px]">
                <PiMedalDuotone size={20} color="#1f3b57" />
                Pedigree</h4>
              <div className=" flex gap-4 ">
                <label
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <input
                    className=""
                    type="checkbox" />
                  Sim
                </label>
                <label
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <input
                    className=""
                    type="checkbox" />
                  Não
                </label>
              </div>

            </div>

          </form>

          <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[#f0f0f0]  font-bold font-sans text-[22px] cursor-pointer my-6 rounded-3xl w-[140px] h-[50px] transition-all duration-300 hover:scale-110">
            Criar Conta
          </button>
        </div>
      </div >
    </PageWrapper >
  )
}