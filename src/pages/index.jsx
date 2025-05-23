import PageWrapper from "@/components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="w-full min-h-[82vh] bg-[url(/img/twodogs.jpg)] flex bg-no-repeat bg-cover bg-center">
        <div className="w-full flex flex-col gap-10 justify-center items-center px-4 text-center">
          <h1 className="text-[32px] sm:text-[42px] lg:text-[55px] leading-tight bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans">
            ENCONTRE O PAR IDEAL PARA SEU DOGUINHO
          </h1>

          <button
            onClick={() => window.location.href = "/register"}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[18px] sm:text-[20px] font-bold text-[#f0f0f0] cursor-pointer px-6 py-3 rounded-3xl transition-transform duration-300 hover:scale-105"
          >
            Criar Conta
          </button>

          <a
            className="text-[24px] sm:text-[32px] lg:text-[40px] bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] bg-clip-text text-transparent font-bold font-sans cursor-pointer transition-transform duration-300 hover:scale-105"
            href="#"
          >
            Baixe o aplicativo
          </a>
        </div>
      </div>
    </PageWrapper>
  );
}
