import { Metadata } from "next";

import Header from "@/components/header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const metadata: Metadata = {
  title: "Produtos",
};

export default function ProductsPage() {
  return (
    <div className="flex-col md:flex">
      <Header />
      produtos
    </div>
  );
}
