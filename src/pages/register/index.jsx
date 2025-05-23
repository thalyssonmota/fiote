
import CustomInput from "@/components/CustomInput";
import PageWrapper from "@/components/PageWrapper";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { CiCalendarDate } from "react-icons/ci";
import { FaTransgender } from "react-icons/fa";
import { PiMedalDuotone } from "react-icons/pi";
import { GoPencil } from "react-icons/go";
import CustomSelect from "@/components/CustomSelect";
import { HiChip } from "react-icons/hi";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";



export default function Register() {
  const router = useRouter()

  const [cpf, setCpf] = useState("");
  const [pedigree, setPedigree] = useState(""); // "sim" ou "nao"
  const [gender, setGender] = useState(""); // "femea" ou "macho"
  const [microchip, setMicrochip] = useState(""); // "sim" ou "nao"

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [petNome, setPetNome] = useState("");
  const [petIdade, setPetIdade] = useState("");
  const [petRaca, setPetRaca] = useState("");

  const handleSubmit = () => {
    if (!nome) return toast.error("Preencha o nome");
    if (!email) return toast.error("Preencha o email");
    if (!cpf) return toast.error("Preencha o CPF");
    if (!nascimento) return toast.error("Preencha a data de nascimento");
    if (!petNome) return toast.error("Preencha o nome do pet");
    if (!petIdade) return toast.error("Preencha a idade do pet");
    if (!petRaca) return toast.error("Selecione a raça");

    toast.success("Conta criada com sucesso!");
    router.push("/dogs")
  };



  const handleCpfChange = (e) => {
    let value = e.target.value.replace(/\D/g, ""); // Remove não números
    value = value.slice(0, 11); // Limita a 11 dígitos

    // Aplica a máscara
    value = value
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    setCpf(value);
  };

  return (
    <PageWrapper>
      <ToastContainer />
      <div className="w-full h-auto flex items-center justify-center p-5 mb-5 tracking-wider">
        <div className="w-full max-w-6xl px-4 py-5 flex flex-col justify-center rounded-2xl items-center bg-[#f0f0f0]">
          <h1 className=" text-[32px] m-2 flex gap-3 items-center bg-gradient-to-r tracking-wider from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans pb-6"> <GoPencil size={26} color="#1f3b57" /> Cadastre-se</h1>

          <form
            className="w-full h-auto flex items-center flex-col gap-4 bg-[#F0F0F0] rounded-2xl p-6 border-1 border-purple-500 shadow-xl shadow-purple-500/50"
          >
            <h2 className="text-[26px] flex items-center gap-3 m-3 whitespace-nowrap bg-gradient-to-r tracking-wider from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
              <FaUser size={20} color="#1f3b57" />
              Cadastro do Tutor
            </h2>

            <div className="w-full flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <CustomInput
                  icon={<FaUser size={16} color="#1f3b57" />}
                  type="text"
                  label="Nome"
                  placeholder="Digite seu nome"
                  onChange={(e) => setNome(e.target.value)}
                />

                <CustomInput
                  icon={<MdOutlineEmail size={20} color="#1f3b57" />}
                  type="email"
                  label="Email"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                />

              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <CustomInput
                  icon={<FaUser size={16} color="#1f3b57" />}
                  type="text"
                  label="Seu CPF"
                  placeholder="000.000.000-00"
                  value={cpf}
                  onChange={handleCpfChange}
                />

                <CustomInput
                  icon={<CiCalendarDate size={20} color="#1f3b57" />}
                  type="date"
                  label="Sua Data de Nascimento"
                  placeholder="Digite sua data de nascimento"
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </div>
            </div>

            <h2 className="text-[26px] flex items-center gap-3 m-3 whitespace-nowrap bg-gradient-to-r tracking-wider from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
              <FaDog size={20} color="#1f3b57" />
              Cadastro do Pet
            </h2>

            <div className="w-full flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <CustomInput
                  icon={<FaDog size={20} color="#1f3b57" />}
                  type="text"
                  label="Nome do Pet"
                  placeholder="Digite o nome do seu pet"
                  onChange={(e) => setPetNome(e.target.value)}
                />

                <h4 className="bg-gradient-to-r flex items-center gap-2 from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <PiMedalDuotone size={20} color="#1f3b57" />
                  Pedigree
                </h4>

                <div className="flex gap-4">
                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="pedigree"
                      checked={pedigree === "sim"}
                      onChange={(e) => setPedigree(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                    />
                    Sim
                  </label>

                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="pedigree"
                      checked={pedigree === "nao"}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                      onChange={(e) => setPedigree(e.target.checked)}
                    />
                    Não
                  </label>

                </div>
                <h4 className="bg-gradient-to-r flex items-center gap-2 from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <HiChip size={20} color="#1f3b57" />
                  Possui Microchip
                </h4>

                <div className="flex gap-4">
                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="microchip"
                      checked={microchip === "sim"}
                      onChange={(e) => setMicrochip(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                    />
                    Sim
                  </label>

                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="microchip"
                      checked={microchip === "nao"}
                      onChange={(e) => setMicrochip(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                    />
                    Não
                  </label>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <CustomInput
                  icon={<FaDog size={20} color="#1f3b57" />}
                  type="number"
                  label="Idade do Pet"
                  placeholder="Digite a idade do seu pet"
                  onChange={(e) => setPetIdade(e.target.value)}
                />
                <h4 className="bg-gradient-to-r flex items-center gap-2 from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px]">
                  <FaTransgender size={20} color="#1f3b57" />
                  Gênero
                </h4>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "femea"}
                      onChange={(e) => setGender(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                    />
                    Fêmea
                  </label>
                  <label className="flex items-center gap-1 text-[18px] font-bold text-[#1f3b57] cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      checked={gender === "macho"}
                      onChange={(e) => setGender(e.target.checked)}
                      className="appearance-none w-4 h-4 border border-gray-400 rounded-full checked:bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]"
                    />
                    Macho
                  </label>
                </div>
                <div className="w-[60%]">
                  <CustomSelect
                    onChange={(e) => setPetRaca(e.target.value)}
                    label="Raça"

                    icon={<FaDog size={20} color="#1f3b57" />}
                    options={["Border Collie", "Pastor Alemão", "Bulldog", "Poodle", "Shih Tzu", "Yorkshire", "Labrador", "Golden Retriever", "Beagle", "Pitbull", "Chihuahua", "Dachshund", "Cocker Spaniel", "Rottweiler", "Schnauzer"]}
                  />
                </div>
              </div>
            </div>
          </form>
          <button
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-white px-6 py-2 mt-6 font-bold text-xl rounded-3xl w-full sm:w-auto h-[50px] transition duration-300 hover:scale-105"
            onClick={handleSubmit}
          >
            Criar Conta
          </button>
        </div>
      </div >
    </PageWrapper >
  )
}