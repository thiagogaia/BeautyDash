"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { FormProduct } from "./components/form-product";

export default function AddProduct() {
  return (
    <Tabs defaultValue="productData" className="mx-5 sm:mx-12 mt-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="productData" className="capitalize">
          dados do produto
        </TabsTrigger>
        <TabsTrigger value="otherSettings" className="capitalize">
          configurações
        </TabsTrigger>
      </TabsList>

      <TabsContent value="productData" className="mt-6 w-full md:w-[70vw]">
        <FormProduct />
      </TabsContent>

      <TabsContent value="otherSettings" className="mt-6 w-full md:w-[70vw]">
        batata
      </TabsContent>
    </Tabs>
  );
}
