import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";

export const metadata: Metadata = {
  title: "Ferramentas",
};

const topics = [
  "Texto Criptografado",
  "Whatsapp Router",
  "Blog",
  "Tarefas",
  "CloudFlare",
  "Dominios",
  "Conexões",
];

export default function ToolsPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <LateralMenu topics={topics} />
      </div>
    </>
  );
}
