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
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center items-center gap-6 px-4 py-10 bg-[#f0f0f0]">
        {/* Bloco do card + botão voltar */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start items-center gap-5 p-5 rounded-2xl">
          <button
            onClick={() => router.push("/dogs")}
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] text-[22px] font-bold text-[#f0f0f0] cursor-pointer rounded-2xl w-40 h-10 transition-transform duration-300 hover:scale-110"
          >
            Voltar
          </button>
          <CardPuppy dog={dog} />
        </div>

        {/* Bloco de informações */}
        <div className="w-full lg:w-1/2 flex flex-col rounded-2xl border border-[#1f3b57] max-w-xl">
          <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-[#1f3b57] w-full py-4 flex justify-center items-center rounded-t-2xl">
            <h1 className="text-3xl text-[#f0f0f0] font-bold font-sans">Sobre o cachorro</h1>
          </div>
          <div className="w-full p-6 flex flex-col md:flex-row gap-4 md:gap-12">
            <div className="flex flex-col gap-3 md:w-1/2">
              <p className="text-[#1f3b57] text-lg font-bold">Nome:{dog.nome}</p>
              <p className="text-[#1f3b57] text-lg font-bold">Idade:{dog.idade}</p>
              <p className="text-[#1f3b57] text-lg font-bold">Raça:{dog.raca}</p>
              <p className="text-[#1f3b57] text-lg font-bold">Vacinação em Dias:{dog.vacinado}</p>
              <p className="text-[#1f3b57] text-lg font-bold">Controle contra Parasitas:{dog.controleParasitas}</p>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
