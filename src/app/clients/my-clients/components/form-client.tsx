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
import { AddressFields } from "@/components/address-fields";
import { Separator } from "@/components/ui/separator";
import { DataType } from "../page";

interface Props {
  currentData: DataType[number];
}

export function FormClient({ currentData }: Props) {
  const form = useForm<z.infer<typeof formClientSchema>>({
    resolver: zodResolver(formClientSchema),
    defaultValues: {
      name: currentData.name || undefined,
      email: currentData.email || undefined,
      whatsapp: currentData.whatsapp || undefined,
      active: currentData.active || true,
    },
  });

  const onSubmit = (values: z.infer<typeof formClientSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormInputField
            formData={form}
            name="name"
            title="Nome e sobrenome"
            placeholder="Nome e sobrenome"
            value={currentData.name}
          />
          <FormInputField
            formData={form}
            name="email"
            title="Email"
            placeholder="Email"
            value={currentData.email}
          />
          <FormInputField
            formData={form}
            name="whatsapp"
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            title="Whatsapp"
            placeholder="Whatsapp"
            value={currentData.whatsapp}
          />

          <FormSwitchField
            formData={form}
            name="active"
            title="Ativar CLiente"
            value={currentData.active}
          />

          <Separator className="my-4" />
          <AddressFields formData={form} data={{}} />
          <Separator className="py-4 invisible" />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
