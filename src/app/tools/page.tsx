import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Ferramentas",
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <h1>Ferramentas</h1>
    </>
  );
}
