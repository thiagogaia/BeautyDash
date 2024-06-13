import Image from "next/image";

export function PageInConstruction() {
  return (
    <div className="flex flex-col text-center items-center justify-center w-[70vw] px-10 h-[82vh]">
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
        Pagina em desenvolvimento
      </h1>
      <div className="hidden md:flex">
        <Image
          src="/img/page-in-constructio.svg"
          alt="search"
          width="500"
          height="500"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <p className="text-primary text-lg">Ainda estamos trabalhando nesta página.</p>
        <span className="text-primary/50">Desculpe pelo inconveniente</span>
      </div>
    </div>
  );
}
