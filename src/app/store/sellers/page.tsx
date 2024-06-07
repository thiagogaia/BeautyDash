"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filters from "./filters";
import { useState } from "react";
import { ListSellers } from "./list-sellers";
import { FormSellers } from "./form-sellers";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "ambrósio figueiredo",
    whatsapp: "48 99999-9999",
    services: "8",
    ordersReceived: "3",
    email: "email@mail.com",
  },
  {
    id: "dh23ghdsh",
    name: "Jorge Silva",
    whatsapp: "48 98888-8888",
    services: undefined,
    ordersReceived: undefined,
    email: "lindo_email@email.com",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Sellers() {
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
            <p>
              Seu link de atendimento é:{" "}
              <span className="text-blue-400">https://nuzap.com.br/link/exemplo</span>
            </p>
            <p>
              Esse link irá gerar atendimentos inteligentes para cada vendedor cadastrado, ou seja,
              o vendedor com menor número de atendimentos irá receber o Lead.
            </p>
            <p>
              Caso em &quot;Configurações&quot; esteja marcado &quot;Selecionar Vendedor(a)&quot;
              então no checkout o cliente poderá selecionar o vendedor para ser enviado o pedido.
            </p>
            <p>
              Além disso, cada vendedor cadastrado irá ter acesso à suas próprias vendas feitas na
              loja através do email e senha cadastrados.
            </p>
          </div>

          <Filters />

          <ListSellers
            data={data}
            setEditData={setEditData}
            setCurrentTab={setCurrentTab}
            setCurrentData={setCurrentData}
          />
        </TabsContent>

        <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
          <FormSellers currentData={editData ? currentData : ({} as DataItemType)} />
        </TabsContent>
      </Tabs>
    </>
  );
}
