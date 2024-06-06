"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { formBannerSchema } from "../schemas";
import { DataType } from "./page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormDateField } from "@/components/form-fileds/form-data-field";

interface Props {
  currentData: DataType[number];
}

export function FormBanners({ currentData }: Props) {
  const form = useForm<z.infer<typeof formBannerSchema>>({
    resolver: zodResolver(formBannerSchema),
    defaultValues: {
      title: currentData.title || undefined,
      description: currentData.description || undefined,
      link: currentData.link || undefined,
      initialDate: currentData.initialDate ? new Date(currentData.initialDate) : undefined,
      finalDate: currentData.finalDate ? new Date(currentData.finalDate) : undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formBannerSchema>) => console.log(values);

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
              value={currentData.imageDesktop}
            />
            <FormInputField
              formData={form}
              name="fileMobile"
              type="file"
              title="Mobile: (500X735px)"
              value={currentData.imageMobile}
            />
          </div>
          <FormInputField formData={form} name="title" title="Titulo" value={currentData.title} />
          <FormInputField
            formData={form}
            name="description"
            title="Descrição"
            value={currentData.description}
          />
          <FormInputField
            formData={form}
            name="link"
            title="Link: (https://nuzap.com.br/exemplo#/DESTINO)"
            value={currentData.link}
          />

          <div className="flex justify-between flex-wrap xsm:flex-nowrap gap-4 min-w-full">
            <FormDateField
              formData={form}
              name="initialDate"
              title="Data de Início"
              className="w-full"
              value={currentData.initialDate}
            />
            <FormDateField
              formData={form}
              name="finalDate"
              title="Data Final"
              className="w-full"
              value={currentData.finalDate}
            />
          </div>

          <Button type="submit" className="w-full h-12">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
