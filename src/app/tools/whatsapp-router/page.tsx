"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListWhatsappRouter } from "./components/list-whatsapp-router";
import { FormWhatsappRouter } from "./components/form-whatsapp-router";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "Adamastor",
    link: "https://nuzap.com.br/link/meu-link-de-teste",
    whatsapp: "47965328754",
    services: "1",
  },
  {
    id: "dh23ghdsh",
    name: "Jorge",
    link: "https://nuzap.com.br/link/meu-link-2",
    whatsapp: "48988887777",
    services: "2",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function WhatsappRouter() {
  return (
    <Tabs defaultValue="list" className=" mx-5 sm:mx-12 mt-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="list" className="capitalize">
          Listagem
        </TabsTrigger>
        <TabsTrigger value="add" className="capitalize">
          Cadastrar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="list" className="mt-6 w-full md:w-[70vw]">
        <div className="flex flex-col gap-y-4 mb-8">
          <p>Crie um Link Direto Para seu WhatsApp. Rápido, Fácil e Grátis!</p>
        </div>

        <Filters />

        <ListWhatsappRouter data={data} />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormWhatsappRouter />
      </TabsContent>
    </Tabs>
  );
}
