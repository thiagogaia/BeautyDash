"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ListVariations } from "./components/list-variations";
import { FormVariation } from "./components/form-variation";

const variationData = [
  {
    id: "dsdsqwdsqw",
    name: "rosa",
    type: "variation",
  },
  {
    id: "dh23ghdsh",
    name: "vermelho",
    type: "variation",
  },
];

const variationItemData = [
  {
    id: "dsdsqwdsqw",
    name: "GG",
    type: "variationItem",
  },
  {
    id: "dh23ghdsh",
    name: "G",
    type: "variationItem",
  },
  {
    id: "dh654fds",
    name: "P",
    type: "variationItem",
  },
];

export type DataType = typeof variationData;
export type DataItemType = DataType[number];

export default function Variations() {
  const [editData, setEditData] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<string>("variations");
  const [currentData, setCurrentData] = useState<DataItemType>({} as DataItemType);

  return (
    <Tabs
      defaultValue={currentTab}
      value={currentTab}
      onValueChange={setCurrentTab}
      className="mx-5 sm:mx-12 mt-6"
    >
      <TabsList className="w-full flex flex-col h-auto xs:flex-row">
        <TabsTrigger
          value="variations"
          className="capitalize w-full"
          onClick={() => setEditData(false)}
        >
          Variação
        </TabsTrigger>
        <TabsTrigger
          value="variationItens"
          className="capitalize w-full"
          onClick={() => setEditData(false)}
        >
          Itens da variação
        </TabsTrigger>
        <TabsTrigger value="add" className="capitalize w-full">
          Cadastrar / editar
        </TabsTrigger>
      </TabsList>

      <TabsContent value="variations" className="mt-6 w-full md:w-[70vw]">
        <div className="flex flex-col gap-y-4 mb-8">
          <p>Variações lhe permite vender um produto com diversos tamanhos, cores ou sabores</p>
          <p>
            Exemplos: <br />
            Cores: Verde, Azul e Amarelo. <br />
            Sabores: Uva, Limão e Laranja. <br />
            Voltagem: 110V e 220V
          </p>
        </div>

        <Filters />

        <ListVariations
          data={variationData}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>
      <TabsContent value="variationItens" className="mt-6 w-full md:w-[70vw]">
        <div className="flex flex-col gap-y-4 mb-8">
          <p>Cadastre ítens para variações</p>
        </div>

        <Filters />

        <ListVariations
          data={variationItemData}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormVariation currentData={editData ? currentData : ({} as DataItemType)} />
      </TabsContent>
    </Tabs>
  );
}
