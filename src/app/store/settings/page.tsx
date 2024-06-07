"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import Customization from "./customizations";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSettingsSchema } from "../schemas";

const data = {
  name: "loujinha",
  whatsapp: "48 97894-3215",
  uri: "exemple",
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

              <Button type="submit" className="w-full h-12 save-form-button">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
