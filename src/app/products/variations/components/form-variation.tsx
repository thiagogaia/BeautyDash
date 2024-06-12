"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { DataType } from "../page";
import { formVariationSchema } from "@/schemas/products";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";

interface Props {
  currentData: DataType[number];
}

export function FormVariation({ currentData }: Props) {
  const form = useForm<z.infer<typeof formVariationSchema>>({
    resolver: zodResolver(formVariationSchema),
    defaultValues: {
      name: currentData.name || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formVariationSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormSelectField
            formData={form}
            name="type"
            title="Tipo de dado"
            placeholder="selecione o tipo do dado"
            data={["variação", "item da variação"]}
            defaultValue={
              currentData.type === "variation"
                ? "variação"
                : currentData.type === "variationItem"
                ? "item da variação"
                : ""
            }
          />

          <FormInputField
            formData={form}
            name="name"
            title="Nome"
            placeholder="Nome"
            value={currentData.name}
          />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
