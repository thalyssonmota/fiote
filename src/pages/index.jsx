
import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full h-[82vh] bg-[url(/img/twodogs.jpg)] flex bg-no-repeat bg-cover bg-center tracking-wider">
        <div className="w-full flex flex-col gap-10 justify-center items-center">
          <h1 className="text-[55px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans pb-6">ENCONTRE O PAR IDEAL PARA SEU DOGUINHO</h1>
          <button 
          onClick={() => window.location.href = "/register"}
          className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[22px] font-bold text-[#f0f0f0] cursor-pointer px-1 py-1 rounded-3xl w-[160px] h-[60px] transition-all duration-300 hover:scale-120">
            Criar Conta
          </button>
          <a className="text-[55px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans cursor-pointer transition-all duration-300 hover:scale-120"
            href="#">
            Baixe o aplicativo
          </a>
        </div>
      </div>
    </PageWrapper>
  )
}