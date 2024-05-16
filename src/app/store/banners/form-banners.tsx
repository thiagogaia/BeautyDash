"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formBannerSchema } from "../schemas";
import { FormInputField } from "@/components/form-input-field";
import { FormDateField } from "@/components/form-data-field";

interface Props {
  currentData: any;
}

export function FormBanners({ currentData }: Props) {
  const form = useForm<z.infer<typeof formBannerSchema>>({
    resolver: zodResolver(formBannerSchema),
  });

  const onSubmit = (values: z.infer<typeof formBannerSchema>) => console.log(values);

  console.log(currentData);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex justify-center 2xs:justify-between flex-wrap gap-y-8">
            <FormInputField
              formData={form}
              name="fileDesktop"
              type="file"
              title="Desktop: (1920X700px)"
            />
            <FormInputField
              formData={form}
              name="fileMobile"
              type="file"
              title="Mobile: (500X735px)"
            />
          </div>
          <FormInputField formData={form} name="title" title="Titulo" />
          <FormInputField formData={form} name="description" title="Descrição" />
          <FormInputField
            formData={form}
            name="link"
            title="Link: (https://nuzap.com.br/exemplo#/DESTINO)"
          />

          <div className="flex justify-between flex-wrap xsm:flex-nowrap gap-4 min-w-full">
            <FormDateField
              formData={form}
              name="initialDate"
              title="Data de Início"
              className="w-full"
            />
            <FormDateField formData={form} name="finalDate" title="Data Final" className="w-full" />
          </div>

          <Button type="submit" className="w-full h-12">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
