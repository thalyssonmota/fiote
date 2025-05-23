import { FaBold, FaHeart } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { CgGenderMale } from "react-icons/cg";
import { PiMedalDuotone } from "react-icons/pi";
import { BsFillArrowThroughHeartFill } from "react-icons/bs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useRouter } from "next/router";


export default function CardPuppy({ dog, className }) {

  const router = useRouter()
  function click() {
    router.push(`/details/${dog.id}`)
  }
  return (

    <div
      onClick={click}
      className={`w-[350px] h-[450px] bg-[#fefefe] rounded-lg flex p-3 shadow-lg shadow-[#1f3b57] mx-auto ${className}`}
    >
      <div className="h-full w-full flex flex-col">
        <div className=" h-[60%] w-full  rounded-t-lg snape-x">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={dog.foto}
            alt="Imagem do Cachorro" />
        </div>
        <div className="w-full h-[15%] flex justify-between items-center py-2 px-4">
          <h1 className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[22px]">{dog.nome}</h1>
          <CgGenderMale size={40} color="#1f3b57" />
        </div>
        <div className="w-full h-[10%] flex justify-between items-center py-1 px-1">
          <p className="flex items-baseline bg-gradient-to-r w-[50%] from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans text-[18px] truncate whitespace-nowrap overflow-hidden"> <FaLocationDot size={20} color="#1f3b57" /> - {dog.cidade}</p>
          <p className="w-[50%] bg-gradient-to-r text-[18px] truncate whitespace-nowrap overflow-hidden from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">Raça: {dog.raca}</p>
        </div>
        <div className="w-full h-[0.5%] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] my-1"></div>
        <div className="w-full h-[14.5%] flex gap-8 justify-around items-center py-1 px-1">
          <div className="">
            <PiMedalDuotone size={40} color="#FFD700" />
          </div>
          <button className="animate-pulse space-x-y-5 font-bold rounded-lg p-2 cursor-pointer transition duration-300 ease-in-out">
            <BsXLg size={40} fontWeight={FaBold} color="#ef4444" />
          </button>
          <button className=" font-bold animate-pulse space-x-y-5 rounded-lg p-2 cursor-pointer transition duration-300 ease-in-out">
            <FaHeart size={40} fontWeight={FaBold} color="#4ade30" />
          </button>
          <div className="">
            <BsFillArrowThroughHeartFill size={40} color="#E45799" />
          </div>
        </div>
      </div>

    </div>
  )
}