import { LuDog } from "react-icons/lu";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header({ showButton = true }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full h-[15vh] text-[#f0f0f0] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] p-6 flex items-center justify-between relative">

      {/* LOGO - Sempre à esquerda */}
      <div
        onClick={() => window.location.href = "/"}
        className="flex items-center gap-2 cursor-pointer transition-all duration-300 hover:scale-105 shrink-0"
      >
        <LuDog size={30} className="shrink-0" color="#f0f0f0" />
        <h1 className="text-[20px] sm:text-[28px] font-bold font-sans tracking-wider truncate">Puppy</h1>
      </div>

      {/* LINKS - Só desktop */}
      <div className="hidden md:flex w-[60%] justify-evenly items-center">
        {["Produtos", "Saiba Mais", "Suporte", "Download"].map((item) => (
          <p
            key={item}
            className="text-[20px] font-bold font-sans tracking-wider cursor-pointer hover:border-b-3 border-[#f0f0f0] transition duration-500 ease-in-out hover:scale-105"
          >
            {item}
          </p>
        ))}
      </div>

      {/* DIREITA: login ou hamburguer */}
      <div className="flex items-center gap-4 shrink-0">
        {/* Login - só desktop */}
        {showButton && (
          <button
            onClick={() => window.location.href = "/login"}
            className="hidden md:block bg-[#f0f0f0] text-[22px] font-bold cursor-pointer px-2 py-1 rounded-xl w-[100px] h-[40px] transition-all duration-300 hover:scale-105"
          >
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans tracking-wider flex items-center justify-center">
              Login
            </p>
          </button>
        )}

        {/* Hamburguer - só mobile */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={30} /> : <HiMenu size={30} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] flex flex-col items-center gap-4 py-4 md:hidden z-50">
          {["Produtos", "Saiba Mais", "Suporte", "Download"].map((item) => (
            <p
              key={item}
              className="text-[18px] font-bold font-sans tracking-wider cursor-pointer hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </p>
          ))}
          {showButton && (
            <button
              onClick={() => {
                setMenuOpen(false);
                window.location.href = "/login";
              }}
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[18px] font-bold px-4 py-2 rounded-xl text-[#f0f0f0]"
            >
              Login
            </button>
          )}
        </div>
      )}
    </header>
  );
}