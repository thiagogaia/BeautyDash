"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formSellerSchema } from "@/schemas/store";

import { formatPrice } from "@/lib/utils";
import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";

export function FormProduct() {
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
            title="Nome do produto"
            placeholder="Nome do produto"
          />
          <FormInputField
            formData={form}
            name="price"
            title="preço"
            format={formatPrice}
            placeholder="Preço"
          />

          <FormTextareaField
            formData={form}
            name="descripton"
            title="Descrição do produto"
            placeholder="Descrição do produto"
          />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
