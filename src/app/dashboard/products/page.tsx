import { Metadata } from "next";

import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function DashboardPage() {
  return (
    <div className="flex-col md:flex">
      <Header />

      <div className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="produtos" className="space-y-4">
          <TabsList>
            <TabsTrigger value="produtos">Produtos</TabsTrigger>
            <TabsTrigger value="categorias">Categorias</TabsTrigger>
            <TabsTrigger value="variacoes">Variações</TabsTrigger>
            <TabsTrigger value="novo-produto">Novo produto</TabsTrigger>
          </TabsList>

          <TabsContent value="produtos">0</TabsContent>

          <TabsContent value="categorias">1</TabsContent>

          <TabsContent value="variacoes">2</TabsContent>

          <TabsContent value="novo-produto">3</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
