"use client";

import Filters from "@/components/filters";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { ListCloudflare } from "./components/list-cloudflare";
import { FormCloudflare } from "./components/form-cloudflare";

const data = [
  {
    id: "dsdsqwdsqw",
    account: "conta número 1",
    key: "m18mdsx123m0ehs32mwedqedd",
    active: true,
  },
  {
    id: "dh23ghdsh",
    account: "conta número 2",
    key: "m18mdsx123m0ehs32m9hes239",
    active: false,
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Cloudflare() {
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
            Simplifique a gestão dos seus domínios usando o Cloudflare, uma ferramenta robusta de
            segurança que possibilita oferecer acesso online seguro e controlado aos seus recursos.
          </p>
        </div>

        <Filters />

        <ListCloudflare
          data={data}
          setEditData={setEditData}
          setCurrentTab={setCurrentTab}
          setCurrentData={setCurrentData}
        />
      </TabsContent>

      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <FormCloudflare currentData={editData ? currentData : ({} as DataItemType)} />
      </TabsContent>
    </Tabs>
  );
}
