"use client";

import { useState } from "react";

import { Tabs, TabsContent } from "@/components/ui/tabs";

import CustomizationForm from "./components/customization-form";
import PaymentsForm from "./components/payments-form";
import CheckOutForm from "./components/check-out-form";
import IntegrationsForm from "./components/integrations-form";
import StockForm from "./components/stock-form";
import LinksForm from "./components/linksform";
import { TabsList } from "@/components/tabs-list";

const data = {
  name: "loujinha",
  whatsapp: "48 97894-3215",
  uri: "example",
};

export type SettingsType = typeof data;

export default function Settings() {
  const [currentTab, setCurrentTab] = useState<string>("personalizar");

  return (
    <Tabs
      defaultValue={currentTab}
      value={currentTab}
      onValueChange={setCurrentTab}
      className="mx-5 sm:mx-12 mt-6"
    >
      <TabsList
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        tabs={["personalizar", "pagamento", "checkout", "integrações", "estoque", "links"]}
      />

      <TabsContent value="personalizar" className="mt-6 w-full md:w-[70vw]">
        <CustomizationForm />
      </TabsContent>
      <TabsContent value="pagamento" className="mt-6 w-full md:w-[70vw]">
        <PaymentsForm />
      </TabsContent>
      <TabsContent value="checkout" className="mt-6 w-full md:w-[70vw]">
        <CheckOutForm />
      </TabsContent>
      <TabsContent value="integrações" className="mt-6 w-full md:w-[70vw]">
        <IntegrationsForm />
      </TabsContent>
      <TabsContent value="estoque" className="mt-6 w-full md:w-[70vw]">
        <StockForm />
      </TabsContent>
      <TabsContent value="links" className="mt-6 w-full md:w-[70vw]">
        <LinksForm />
      </TabsContent>
    </Tabs>
  );
}
