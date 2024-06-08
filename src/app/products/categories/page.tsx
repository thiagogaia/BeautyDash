"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ListCategories } from "./list-categories";
import { useState } from "react";
import { FormCategory } from "./form-category";
import Filters from "@/components/filters";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "entretenimento",
    active: true,
    order: "8",
  },
  {
    id: "dh23ghdsh",
    name: "esporte",
    active: false,
    order: "2",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Categories() {
  const [editData, setEditData] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("list");
  const [currentData, setCurrentData] = useState<DataItemType>({} as DataItemType);

  return (
    <>
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
            <p>Categorias dos Produtos.</p>
          </div>

          <Filters />

          <ListCategories
            data={data}
            setEditData={setEditData}
            setCurrentTab={setCurrentTab}
            setCurrentData={setCurrentData}
          />
        </TabsContent>

        <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
          <FormCategory currentData={editData ? currentData : ({} as DataItemType)} />
        </TabsContent>
      </Tabs>
    </>
  );
}
