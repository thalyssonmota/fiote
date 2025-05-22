import CardPuppy from "@/components/CardPuppy";
import PageWrapper from "@/components/PageWrapper";
import { dogs } from "@/mocks/fakeDb";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  const [dog, setDog] = useState(null);

  const fetchDogById = useCallback(() => {
    // Converte id para string para garantir compatibilidade
    return dogs.find((dog) => String(dog.id) === String(id));
  }, [id]);

  useEffect(() => {
    if (!id) return;
    const result = fetchDogById();
    console.log("ID buscado:", id);
    console.log("Cachorro encontrado:", result);
    if (result) setDog(result);
  }, [id, fetchDogById]);

  if (!dog) {
    return (
      <PageWrapper showButton={false}>
        <div className="w-full h-screen flex justify-center items-center">
          <p className="text-[24px] text-[#1f3b57] font-bold">Carregando cachorro...</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-auto flex max-md:flex-col justify-center items-center gap-5 p-20 bg-[#f0f0f0]">
        <div className="w-[50%] h-[70%] flex flex-col justify-center items-center gap-5 p-5 rounded-2xl">
          <button
            onClick={() => router.push("/dogs")}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[22px] font-bold text-[#f0f0f0] cursor-pointer rounded-2xl w-[160px] h-[40px] transition-all duration-300 hover:scale-110"
          >
            Voltar
          </button>
          <CardPuppy dog={dog} />
        </div>

        <div className="w-[350px] h-[70%] flex flex-col justify-center items-center rounded-2xl border border-[#1f3b57]">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] w-full h-[15%] flex justify-center items-center rounded-t-2xl">
            <h1 className="text-[40px] text-[#f0f0f0] font-bold font-sans">Sobre o cachorro</h1>
          </div>
          <div className="w-full h-[85%] flex p-5 items-center justify-center">
            <div className="w-[50%]">
              <p className="text-[#1f3b57] text-[16px] font-bold">Nome:</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">Idade:</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">Raça:</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">Vacinação em Dias:</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">Controle contra Parasitas:</p>
            </div>
            <div className="w-[50%]">
              <p className="text-[#1f3b57] text-[16px] font-bold">{dog.nome}</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">{dog.idade}</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">{dog.raca}</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">{dog.vacinado ? "Sim" : "Não"}</p>
              <p className="text-[#1f3b57] text-[16px] font-bold">{dog.controleParasitas ? "Sim" : "Não"}</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
