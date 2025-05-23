import { useState } from "react";
import CardPuppy from "@/components/CardPuppy";
import PageWrapper from "@/components/PageWrapper";
import { dogs } from "@/mocks/fakeDb";

export default function Dogs() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDogs = dogs.filter((dog) =>
    dog.raca.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <PageWrapper showButton={false}>
      <div className="w-full flex justify-center items-center mt-6 mb-4">
        <h1 className="text-[28px] md:text-[32px] text-white font-bold font-sans tracking-wider text-center">
          Dogs
        </h1>
      </div>

      {/* Search Input */}
      <div className="w-full flex justify-center mb-6 px-4">
        <input
          type="text"
          placeholder="Buscar por raça..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md p-3 rounded-lg border border-[#1f3b57] text-[#f0f0f0] font-semibold focus:outline-none focus:ring-3 focus:ring-purple-400 transition-all"
        />
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-10 place-items-center">
        {filteredDogs.length > 0 ? (
          filteredDogs.map((dog, index) => (
            <CardPuppy key={index} dog={dog} />
          ))
        ) : (
          <p className="col-span-full text-[#1f3b57] text-lg font-semibold">
            Nenhum cachorro encontrado para a raça informada.
          </p>
        )}
      </div>
    </PageWrapper>
  );
}

