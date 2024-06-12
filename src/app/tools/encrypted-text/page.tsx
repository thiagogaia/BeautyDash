"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Instructions } from "./components/instructions";
import { Cryptography } from "./components/cryptography";

export default function EncryptedText() {
  return (
    <Tabs defaultValue="instructions" className=" mx-5 sm:mx-12 mt-6">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="instructions" className="capitalize">
          instruções
        </TabsTrigger>
        <TabsTrigger value="cryptography" className="capitalize">
          Criptografia de Texto
        </TabsTrigger>
      </TabsList>

      <TabsContent value="instructions" className="my-6 w-full md:w-[70vw]">
        <Instructions />
      </TabsContent>

      <TabsContent value="cryptography" className="my-6 w-full md:w-[70vw]">
        <Cryptography />
      </TabsContent>
    </Tabs>
  );
}
