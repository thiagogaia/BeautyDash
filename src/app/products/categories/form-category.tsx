"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DataType } from "./page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formCategorySchema } from "../schemas";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";

interface Props {
  currentData: DataType[number];
}

export function FormCategory({ currentData }: Props) {
  const form = useForm<z.infer<typeof formCategorySchema>>({
    resolver: zodResolver(formCategorySchema),
    defaultValues: {
      name: currentData.name || undefined,
      order: currentData.order || undefined,
      active: currentData.active || false,
    },
  });

  const onSubmit = (values: z.infer<typeof formCategorySchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="name"
            title="Nome da categoria"
            placeholder="Nome da categoria"
            value={currentData.name}
          />
          <FormInputField
            formData={form}
            name="order"
            title="Ordenação"
            type="number"
            placeholder="Número de ordem"
            min={0}
            value={currentData.order}
          />
          <FormSwitchField
            formData={form}
            name="active"
            title="Ativar categoria"
            value={currentData.active}
          />

          <Button type="submit" className="w-full h-12 save-form-button">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
