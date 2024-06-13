"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formSellerSchema } from "@/schemas/store";
import { DataType } from "../page";
import { Separator } from "@/components/ui/separator";

interface Props {
  currentData: DataType[number];
}

export function FormConection({ currentData }: Props) {
  const form = useForm<z.infer<typeof formSellerSchema>>({
    resolver: zodResolver(formSellerSchema),
  });

  const onSubmit = (values: z.infer<typeof formSellerSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInputField
            formData={form}
            name="name"
            title="Nome"
            disabled
            placeholder="exemplo-1718280450"
            value="exemplo-1718280450"
          />

          <Separator className="invisible py-2" />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
