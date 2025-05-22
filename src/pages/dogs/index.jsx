import CardPuppy from "@/components/CardPuppy";
import PageWrapper from "@/components/PageWrapper";
import { dogs } from "@/mocks/fakeDb";

export default function Dogs() {
  return (
    <PageWrapper showButton={false}>
      <div className="w-full h-auto flex justify-center items-center">
        <h1 className="text-[32px] text-white font-bold font-sans tracking-wider">Dogs</h1>
      </div>
      <div className="w-full h-auto grid grid-cols-4 justify-center items-center  gap-6 p-6">
       {dogs.map((dog, index) => {
        return (
          <CardPuppy key={index} dog={dog} />
        )
       })}
      </div>

    </PageWrapper>
  )
}
