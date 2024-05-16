"use client";

import { useState } from "react";
import { FormBanners } from "./form-banners";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filters from "@/app/store/banners/filters";
import { ListBanners } from "./list-banners";

const data = [
  {
    id: "1",
    title: "titulo grande usa para exemplo de teste",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet velit fuga odit temporibus. Doloribus delectus sapiente quae distinctio? Neque mollitia asperiores voluptate fugiat distinctio aspernatur incidunt sequi sunt fuga.",
    link: "https://pbs.twimg.com/media/FyiZ0AvXwAADkLn?format=jpg&name=large",
    imageDesktop: "https://i.imgur.com/bjFioqN.jpg",
    imageMobile: "https://i.imgur.com/Q1OgylT.png",
    initialDate: "2024-05-07T03:24:00",
    finalDate: "2024-05-27T03:24:00",
  },
  {
    id: "2",
    title: "titulo bom",
    description: "descrição bem pensada.",
    link: "https://pbs.twimg.com/media/FyiZ0AvXwAADkLn?format=jpg&name=large",
    imageDesktop: "https://i.imgur.com/WBIruiJ.jpg",
    imageMobile: "https://i.imgur.com/MJbkKaT.jpg",
    initialDate: "2024-05-07T03:24:00",
    finalDate: "2024-05-27T03:24:00",
  },
  {
    id: "2",
    title: "titulo bom",
    description: "descrição bem pensada.",
    link: "https://pbs.twimg.com/media/FyiZ0AvXwAADkLn?format=jpg&name=large",
    imageDesktop: "",
    imageMobile: "https://i.imgur.com/FWgfUZX.gif",
    initialDate: "2024-05-07T03:24:00",
    finalDate: "2024-05-27T03:24:00",
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function Banners() {
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
          <Filters />

          <ListBanners
            data={data}
            setEditData={setEditData}
            setCurrentTab={setCurrentTab}
            setCurrentData={setCurrentData}
          />
        </TabsContent>

        <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
          <FormBanners currentData={editData ? currentData : ({} as DataItemType)} />
        </TabsContent>
      </Tabs>
    </>
  );
}
