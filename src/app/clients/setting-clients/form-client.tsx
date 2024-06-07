"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formClientSchema } from "../schemas";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";

interface Props {
  // currentData: DataType[number];
  currentData: any[];
}

export function FormClient({ currentData }: Props) {
  const form = useForm<z.infer<typeof formClientSchema>>({
    resolver: zodResolver(formClientSchema),
    defaultValues: {
      // name: currentData.name || undefined,
      // whatsapp: currentData.whatsapp || undefined,
      // email: currentData.email || undefined,
      // active: currentData.active || true,
    },
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
            // value={currentData.name}
          />
          <FormInputField
            formData={form}
            name="email"
            title="Email"
            placeholder="Email"
            // value={currentData.email}
          />
          <FormInputField
            formData={form}
            name="whatsapp"
            title="Whatsapp"
            placeholder="Whatsapp"
            // value={currentData.whatsapp}
          />

          <FormSwitchField
            formData={form}
            name="active"
            title="Ativar CLiente"
            // value={currentData.active}
          />

          <Button type="submit" className="w-full h-12 save-form-button">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
