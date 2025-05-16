import { LuDog } from "react-icons/lu";


export default function Header({showButton = true} ) {
  return (
    <header className="w-full h-[15vh] text-[#f0f0f0] flex items-baseline p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57]">
      <div
      onClick={() => window.location.href = "/"} 
      className="w-[20%] h-full flex justify-center cursor-pointer transition-all duration-300 hover:scale-120">
        <LuDog size={50} color="#f0f0f0" />
        <h1 className=" text-[32px] pl-2 font-bold font-sans">Puppy</h1>
      </div>
      <div className="w-[60%] h-full flex justify-evenly items-center">
        <p className="text-[20px] font-bold font-sans cursor-pointer hover:border-b-3 border-[#f0f0f0] transition duration-500 ease-in-out hover:scale-120">Produtos</p>
        <p className="text-[20px] font-bold font-sans cursor-pointer hover:border-b-3 border-[#f0f0f0] transition duration-500 ease-in-out hover:scale-120">Saiba Mais</p>
        <p className="text-[20px] font-bold font-sans cursor-pointer hover:border-b-3 border-[#f0f0f0] transition duration-500 ease-in-out hover:scale-120">Suporte</p>
        <p className=" text-[20px] font-bold font-sans cursor-pointer hover:border-b-3 border-[#f0f0f0] transition duration-500 ease-in-out hover:scale-120">Download</p>

      </div>
      <div className="w-[20%] h-full flex justify-center items-center">
        {showButton && (
          <button 
          onClick={() => window.location.href = "/login"}
          className="bg-[#f0f0f0] text-[22px] font-bold  cursor-pointer px-2 py-1 rounded-xl w-[100px] h-[40px] transition-all duration-300 hover:scale-120">
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans flex items-center justify-center ">Login</p>
          </button>
        )}
      </div>
    </header>

  );
}
