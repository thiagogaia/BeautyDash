"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Listdomains } from "./components/list-domains";
import { useState } from "react";
import { FormDomain } from "./components/form-domain";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "Adamastor",
    link: "https://nuzap.com.br/link/meu-link-de-teste",
    since: "data?",
    access: "1",
  },
  {
    id: "dh23ghdsh",
    name: "Jorge",
    link: "https://nuzap.com.br/link/meu-link-2",
    since: "data?",
    access: "2",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Domains() {
  const [editData, setEditData] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("list");
  const [currentData, setCurrentData] = useState<DataItemType>({} as DataItemType);

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
          <p>Adicione domínios personalizados à sua loja.</p>
        </div>

        <Filters />

        <Listdomains
          data={data}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormDomain currentData={editData ? currentData : ({} as DataItemType)} />
      </TabsContent>
    </Tabs>
  );
}
