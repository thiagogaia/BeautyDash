"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { maskPhone } from "@/lib/utils";
import { formMyStoreSchema } from "@/schemas/profile";
import { FormSellectField } from "@/components/form-fileds/form-sellect-field";

export function FormStore() {
  const form = useForm<z.infer<typeof formMyStoreSchema>>({
    resolver: zodResolver(formMyStoreSchema),
  });

  const onSubmit = (values: z.infer<typeof formMyStoreSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField formData={form} name="name" title="Nome" placeholder="Nome e sobrenome" />
          <FormSellectField
            formData={form}
            name="category"
            title="Ramo de atividade"
            data={["valor 1", "valor 2", "valor 3", "valor 4", "valor 5"]}
          />
          <FormInputField formData={form} name="url" title="Url" placeholder="Url da sua loja" />
          <FormInputField
            formData={form}
            name="whatsapp"
            title="Whatsapp"
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            placeholder="Número de whatsapp"
          />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
