"use client";

import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSettingsSchema } from "@/schemas/store";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
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

  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {
      name: data.name || undefined,
      whatsapp: data.whatsapp || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);

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
        <CustomizationForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="pagamento" className="mt-6 w-full md:w-[70vw]">
        <PaymentsForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="checkout" className="mt-6 w-full md:w-[70vw]">
        <CheckOutForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="integrações" className="mt-6 w-full md:w-[70vw]">
        <IntegrationsForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="estoque" className="mt-6 w-full md:w-[70vw]">
        <StockForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="links" className="mt-6 w-full md:w-[70vw]">
        <LinksForm formData={form} data={data} />
      </TabsContent>
      <TabsContent value="add" className="mt-6 w-full md:w-[70vw]">
        <div className="mt-6 w-full md:w-[70vw] pb-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Button type="submit" className="w-full h-12 save-form-button text-xl">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </TabsContent>
    </Tabs>
  );
}
