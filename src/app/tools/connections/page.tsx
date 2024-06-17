"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { FormConection } from "./components/form-conection";
import { ListConections } from "./components/list-conections";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "ambrósio figueiredo",
    status: "ativo",
    section: "sessão 1",
  },
  {
    id: "dh23ghdsh",
    name: "Jorge Silva",
    status: "inativo",
    section: "sessão 2",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Connections() {
  const [editData, setEditData] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("list");
  const [currentData, setCurrentData] = useState<DataItemType>({} as DataItemType);
  return (
    <Tabs
      defaultValue={currentTab}
      value={currentTab}
      onValueChange={setCurrentTab}
      className="mx-5 sm:mx-12 mt-6"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="list" className="capitalize" onClick={() => setEditData(false)}>
          Listagem
        </TabsTrigger>
        <TabsTrigger value="add" className="capitalize">
          Cadastrar / editar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="list" className="mt-6 w-full md:w-[70vw]">
        <div className="flex flex-col gap-y-4 mb-8">
          <p>Adicione Conexões whatsapp e integre atendimento automatizado.</p>
          <p>
            Use somente 1 número por conexão, ou seja, não faça mais de 1 conexão para o mesmo
            número.
          </p>
        </div>

        <Filters />

        <ListConections
          data={data}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormConection currentData={editData ? currentData : ({} as DataItemType)} />
      </TabsContent>
    </Tabs>
  );
}
