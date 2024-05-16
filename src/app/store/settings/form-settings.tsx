"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-input-field";
import { formSettingsSchema } from "../schemas";

export function FormSettings() {
  const data = {
    name: "loujinha",
    whatsapp: "48 97894-3215",
    uri: "exemple",
  };

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
          <FormInputField formData={form} name="title" title="Titulo" value={data.name} />
          <FormInputField
            formData={form}
            name="description"
            title="Descrição"
            value={data.whatsapp}
          />
          <FormInputField
            formData={form}
            name="link"
            title="Link: (https://nuzap.com.br/exemplo#/DESTINO)"
            value={data.uri}
          />

          <Button type="submit" className="w-full h-12">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
