"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formSellerSchema } from "@/schemas/store";
import { DataType } from "../page";
import { maskPhone } from "@/lib/utils";

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
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            placeholder="Número de whatsapp"
            value={currentData.whatsapp}
          />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
