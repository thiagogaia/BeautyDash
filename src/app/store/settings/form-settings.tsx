"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSettingsSchema } from "../schemas";
import Customization from "./customizations";

const data = {
  name: "loujinha",
  whatsapp: "48 97894-3215",
  uri: "exemple",
};

export type SettingsType = typeof data;

export function FormSettings() {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {
      name: data.name || undefined,
      whatsapp: data.whatsapp || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Customization formData={form} data={data} />

          <Button type="submit" className="w-full h-12">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
