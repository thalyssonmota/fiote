import CardPuppy from "@/components/CardPuppy";
import CustomInput from "@/components/CustomInput";
import PageWrapper from "@/components/PageWrapper";
import { MdOutlineEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <PageWrapper showButton={false}>
      <div className="w-full min-h-screen flex items-center justify-center px-4 py-12 tracking-wider">
        <div className="w-full sm:w-[90%] md:w-[70%] lg:w-[50%] xl:w-[40%] 2xl:w-[35%] bg-[#f0f0f0] py-10 px-6 md:px-12 rounded-2xl shadow-lg flex flex-col items-center gap-8">
          <h1 className="text-[32px] md:text-[36px] text-center bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
            Faça Login
          </h1>

          <CustomInput
            className="relative w-full"
            icon={<FaUser size={16} color="#1f3b57" />}
            type="email"
            label="Usuário ou Email"
            placeholder="Digite seu email"
          />

          <CustomInput
            className="w-full"
            icon={<MdOutlineEmail size={20} color="#1f3b57" />}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center text-center">
            <h5 className="text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
              Esqueceu sua senha?
            </h5>
            <button className="text-[#f0f0f0] text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] px-3 py-1 rounded-full cursor-pointer transition duration-300 hover:scale-105">
              Clique aqui
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 items-center justify-center text-center">
            <h4 className="text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
              Não tem uma conta?
            </h4>
            <button
              onClick={() => window.location.href = "/register"}
              className="text-[#f0f0f0] text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] px-3 py-1 rounded-full cursor-pointer transition duration-300 hover:scale-105"
            >
              Cadastre-se
            </button>
          </div>

          <button className="flex items-center justify-center gap-3 text-[16px] tracking-wider font-bold font-sans w-full rounded-full cursor-pointer transition duration-300 hover:scale-105">
            <FcGoogle size={24} />
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent">Login com Google</p>
          </button>

          <button className="flex items-center justify-center gap-3 text-[16px]  tracking-wider font-bold font-sans w-full rounded-full cursor-pointer transition duration-300 hover:scale-105">
            <FaFacebookSquare size={24} color="#1877F2" />
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent">Login com Facebook</p>
          </button>

          <button className="flex items-center justify-center gap-3 text-[16px]  tracking-wider font-bold font-sans w-full rounded-full cursor-pointer transition duration-300 hover:scale-105">
            <FaApple size={24} color="#000000" />
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent">Login com Apple</p>
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
