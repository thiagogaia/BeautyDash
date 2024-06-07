"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formSellerSchema } from "../schemas";
import { DataType } from "./page";
import { FormInputField } from "@/components/form-fileds/form-input-field";

interface Props {
  currentData: DataType[number];
}

export function FormSellers({ currentData }: Props) {
  const form = useForm<z.infer<typeof formSellerSchema>>({
    resolver: zodResolver(formSellerSchema),
    defaultValues: {
      name: currentData.name || undefined,
      whatsapp: currentData.whatsapp || undefined,
      email: currentData.email || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formSellerSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="name"
            title="Nome"
            placeholder="Nome e sobrenome"
            value={currentData.name}
          />
          <FormInputField
            formData={form}
            name="email"
            title="Email"
            placeholder="Endereço de email"
            value={currentData.email}
          />
          <FormInputField
            formData={form}
            name="whatsapp"
            title="Whatsapp"
            type="tel"
            placeholder="Número de whatsapp"
            value={currentData.whatsapp}
          />

          <Button type="submit" className="w-full h-12 save-form-button">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
