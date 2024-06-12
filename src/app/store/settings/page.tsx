"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSettingsSchema } from "@/schemas/store";
import Customization from "./components/customizations";
import PaymentMethods from "./components/payment-methods";
import PaymentOptions from "./components/payment-options";
import CheckOut from "./components/check-out";
import Integrations from "./components/integrations";
import Stock from "./components/stock";
import SocialMediaLinks from "./components/social-media-links";

const data = {
  name: "loujinha",
  whatsapp: "48 97894-3215",
  uri: "example",
};

export type SettingsType = typeof data;

export default function Settings() {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {
      name: data.name || undefined,
      whatsapp: data.whatsapp || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);

  return (
    <div className=" mx-5 sm:mx-12 mt-6">
      <div className="mt-6 w-full md:w-[70vw]">
        <div className="pb-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Customization formData={form} data={data} />
              <PaymentMethods formData={form} data={data} />
              <PaymentOptions formData={form} data={data} />
              <CheckOut formData={form} data={data} />
              <Integrations formData={form} data={data} />
              <Stock formData={form} data={data} />
              <SocialMediaLinks formData={form} data={data} />

              <Button type="submit" className="w-full h-12 save-form-button text-xl">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
