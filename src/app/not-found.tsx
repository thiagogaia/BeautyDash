"use client";

import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center w-3/4 px-10 h-[82vh]">
      <div className="hidden md:flex w-3/4 max-h-full">
        <Image
          src="/img/404.svg"
          alt="search"
          width="500"
          height="500"
          className="w-full h-auto object-contain"
        />
      </div>
      <div className="flex flex-col gap-y-2">
        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-zinc-300 to-zinc-400 dark:from-zinc-400 dark:to-zinc-950 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-primary text-lg">Desculpe, não encontramos esta página.</p>
        <span className="text-primary/50 text-sm">
          Mas não se preocupe, você pode encontrar muitas outras coisas em nossa página inicial.
        </span>
        <div className="flex gap-4 flex-wrap justify-center sm:justify-start items-center mt-4">
          <Link href="/store" className="py-2 px-4">
            voltar para o início
          </Link>
        </div>
      </div>
    </div>
  );
}
