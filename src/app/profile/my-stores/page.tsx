"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListStores } from "./components/list-stores";
import { FormStore } from "./components/form-store";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "exemplo",
    type: "lojista",
    whatsapp: "48 99999-9999",
    category: "outros",
    url: "exemplo",
  },
  {
    id: "dh23ghdsh",
    name: "exemplo 2",
    type: "vendedor",
    whatsapp: "48 98888-8888",
    category: "outros",
    url: "exemplo 2",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function MyStores() {
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
        <Filters />

        <ListStores data={data} />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormStore />
      </TabsContent>
    </Tabs>
  );
}
