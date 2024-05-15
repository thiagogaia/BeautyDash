"use client";

import { useState } from "react";
import { FormBanners } from "./form-banners";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableCellOperations from "@/components/table-cell-operations";
import Filters from "@/components/filters/index.tsx";

const data = {
  headers: ["imagem", "titulo", "descrição"],
  rows: [
    {
      id: "1",
      title: "titulo grande usa para exemplo de teste",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus amet velit fuga odit temporibus. Doloribus delectus sapiente quae distinctio? Neque mollitia asperiores voluptate fugiat distinctio aspernatur incidunt sequi sunt fuga.",
      link: "https://pbs.twimg.com/media/FyiZ0AvXwAADkLn?format=jpg&name=large",
      imageDesktop: "https://i.imgur.com/IYP2Qt7.jpg",
      imageMobile: "https://i.imgur.com/Q1OgylT.png",
    },
    {
      id: "2",
      title: "titulo bom",
      description: "descrição bem pensada.",
      link: "https://pbs.twimg.com/media/FyiZ0AvXwAADkLn?format=jpg&name=large",
      imageDesktop: "https://i.imgur.com/MJbkKaT.jpg",
      imageMobile: "https://i.imgur.com/WBIruiJ.jpg",
    },
  ],
};

export default function Banners() {
  const [currentTab, setCurrentTab] = useState<string>("list");
  const [currentData, setCurrentData] = useState([]);

  return (
    <>
      <Tabs
        defaultValue={currentTab}
        value={currentTab}
        onValueChange={setCurrentTab}
        className=" mx-5 sm:mx-12 mt-6"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list" className="capitalize">
            Listagem
          </TabsTrigger>
          <TabsTrigger value="add" className="capitalize">
            Cadastrar
          </TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="mt-6 w-[70vw]">
          <Filters />

          <TableCellOperations setCurrentTab={setCurrentTab} setCurrentData={setCurrentData} />
        </TabsContent>

        <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
          <FormBanners currentData={currentData} />
        </TabsContent>
      </Tabs>
    </>
  );
}
