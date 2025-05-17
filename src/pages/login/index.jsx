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
      <div className="w-full h-full flex items-center justify-center mb-12 tracking-wider">
        <div className="w-[50%] h-full mt-16 flex flex-col items-center justify-center gap-8 bg-[#f0f0f0] py-10 px-30 rounded-2xl shadow-lg">
          <h1 className="text-[36px] m-2 bg-gradient-to-r  from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">Faça Login</h1>

          <CustomInput 
          className="relative"
            icon={<FaUser size={16} color="#1f3b57" />}
            type="email"
            label="Usuário ou Email"
            placeholder="Digite seu email"
          />

          <CustomInput
            icon={<MdOutlineEmail size={20} color="#1f3b57" />}
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
          />

          <div className="flex  gap-3 items-center">
            <h5 className="text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">Esqueceu sua senha?</h5>
            <button className="text-[#f0f0f0] text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] w-auto p-1 rounded-full cursor-pointer tracking-wider transition-all duration-300 hover:scale-120">Clique aqui</button>
          </div>

          <div className="flex items-center gap-3">
            <h4 className="text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">Não tem uma conta?</h4>
            <button
              onClick={() => window.location.href = "/register"}
              className="text-[#f0f0f0] text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] w-auto p-1 rounded-full cursor-pointer tracking-wider transition-all duration-300 hover:scale-120">Cadastre-se</button>
          </div>


          <button className="flex items-center gap-3 text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 bg-clip-text text-transparent tracking-wider font-bold font-sans to-[#1f3b57] w-auto rounded-full cursor-pointer transition-all duration-300 hover:scale-120"><FcGoogle size={26} /> Login com Google</button>

          <button className=" flex items-center gap-3 text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent tracking-wider font-bold font-sans w-auto cursor-pointer transition-all duration-300 hover:scale-120"><FaFacebookSquare size={26} color="#1877F2" /> Login com Facebook</button>

          <button className=" flex items-center gap-3 text-[16px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent tracking-wider font-bold font-sans w-auto rounded-full cursor-pointer transition-all duration-300 hover:scale-120"> <FaApple size={26} color="#000000" /> Login com Apple</button>
        </div>

      </div>
    </PageWrapper >
  )
}