import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";
import { toolsData } from "./data";
import { MainTools } from "./components/main-tools";

export const metadata: Metadata = {
  title: "Ferramentas",
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row">
        <LateralMenu topics={toolsData} />

        <MainTools />
      </div>
    </>
  );
}
