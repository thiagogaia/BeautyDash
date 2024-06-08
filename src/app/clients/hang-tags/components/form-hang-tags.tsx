"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DataType } from "../page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formHangTagsSchema } from "@/schemas/clients";

interface Props {
  currentData: DataType[number];
}

export function FormHangTags({ currentData }: Props) {
  const form = useForm<z.infer<typeof formHangTagsSchema>>({
    resolver: zodResolver(formHangTagsSchema),
    defaultValues: {
      name: currentData.name || undefined,
      color: currentData.color || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formHangTagsSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="name"
            title="Nome da etiqueta"
            placeholder="Nome da etiqueta"
            value={currentData.name}
          />
          <FormInputField
            formData={form}
            name="color"
            type="color"
            title="Cor da etiqueta"
            placeholder="Cor da etiqueta"
            value={currentData.color}
          />

          <Button type="submit" className="w-full h-12 save-form-button">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
