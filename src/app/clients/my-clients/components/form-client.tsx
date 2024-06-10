"use client";

import { Form } from "@/components/ui/form";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formClientSchema } from "@/schemas/clients";
import { maskPhone } from "@/lib/utils";

export function FormClient() {
  const form = useForm<z.infer<typeof formClientSchema>>({
    resolver: zodResolver(formClientSchema),
  });

  const onSubmit = (values: z.infer<typeof formClientSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="name"
            title="Nome da categoria"
            placeholder="Nome e sobrenome"
          />
          <FormInputField formData={form} name="email" title="Email" placeholder="Email" />
          <FormInputField
            formData={form}
            name="whatsapp"
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            title="Whatsapp"
            placeholder="Whatsapp"
          />

          <FormSwitchField formData={form} name="active" title="Ativar CLiente" value={true} />

          <Button type="submit" className="w-full h-12 save-form-button">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
