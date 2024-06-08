"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ListHangTags } from "./components/list-hang-tags";
import { FormHangTags } from "./components/form-hang-tags";
import Filters from "@/components/filters";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "Masculino",
    color: "#ff0000",
  },
  {
    id: "dh23ghdsh",
    name: "Feminino",
    color: "#0000ff",
  },
  {
    id: "d3gh64645h",
    name: "Adamastor",
    color: "#ff00ff",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function HangTags() {
  const [editData, setEditData] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("list");
  const [currentData, setCurrentData] = useState<DataItemType>({} as DataItemType);

  return (
    <Tabs
      defaultValue={currentTab}
      value={currentTab}
      onValueChange={setCurrentTab}
      className=" mx-5 sm:mx-12 mt-6"
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
          <p>
            Cadastre etiquetas para usar em seus Clientes, isso facilitará a busca dentre outros
            critérios
          </p>
        </div>

        <Filters />

        <ListHangTags
          data={data}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormHangTags currentData={editData ? currentData : ({} as DataItemType)} />
      </TabsContent>
    </Tabs>
  );
}
