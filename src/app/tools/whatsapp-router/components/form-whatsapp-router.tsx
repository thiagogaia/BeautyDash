"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formWhatsappRouterSchema } from "@/schemas/tools";
import { maskPhone, replaceWhiteSpace } from "@/lib/utils";

export function FormWhatsappRouter() {
  const form = useForm<z.infer<typeof formWhatsappRouterSchema>>({
    resolver: zodResolver(formWhatsappRouterSchema),
    defaultValues: {
      message: "Olá, acessei seu Link Personalizado What's Link",
    },
  });

  const onSubmit = (values: z.infer<typeof formWhatsappRouterSchema>) => {
    console.log({
      ...values,
      link: `https://nuzap.com.br/link/${values.link}`,
    });
  };

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="name"
            title="Nome do seu negócio"
            placeholder="Nome do seu negócio"
          />
          <FormInputField
            formData={form}
            name="whatsapp"
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            title="Número do whatsapp"
            placeholder="Número do whatsapp"
          />
          <FormInputField
            formData={form}
            name="description"
            title="Descreva seu negócio (opicional)"
            placeholder="Descreva seu negócio"
          />
          <FormInputField
            formData={form}
            name="message"
            title="Mensagem (opcional)"
            placeholder="Mensagem"
          />

          <div>
            <p>Link</p>

            <div className="flex items-center rounded-md overflow-hidden">
              <div className="bg-zinc-200 text-gray-700 dark:bg-zinc-600 dark:text-gray-200 font-medium h-10 border border-input bg-background px-3 py-2 border-r-0">
                <p className="truncate max-w-[40vw]">https://nuzap.com.br/link/</p>
              </div>

              <div className="w-full">
                <FormInputField
                  formData={form}
                  name="link"
                  format={replaceWhiteSpace}
                  placeholder="Link"
                  autoComplete="off"
                  inputClass="rounded-tl-none rounded-bl-none focus-visible:ring-0 focus-visible:ring-offset-0"
                />
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 save-form-button">
            Gerar Link
          </Button>
        </form>
      </Form>
    </div>
  );
}
