"use client";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formMyDataSchema } from "@/schemas/profile";
import { AddressFields } from "@/components/address-fields";

import { maskPhone } from "@/lib/utils";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const data = {
  name: "loujinha",
  phone: "48 97894-3215",
  email: "example@mail.com",
};

export type MyDataType = typeof data;

export default function MyData() {
  const form = useForm<z.infer<typeof formMyDataSchema>>({
    resolver: zodResolver(formMyDataSchema),
    defaultValues: {
      name: data.name || undefined,
      phone: data.phone || undefined,
      email: data.email || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formMyDataSchema>) => console.log(values);

  const userName = "Jorge Silva";

  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="w-full md:w-[70vw]">
        <div className="pb-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <h2 className="uppercase mb-6 text-xl">{userName} - LOJISTA</h2>
              <div className="flex flex-col gap-y-6 xs:ml-8">
                <FormInputField
                  formData={form}
                  name="image"
                  type="file"
                  title="Fotode perfil"
                  className="items-center xs:w-fit mb-6"
                />
                <FormInputField
                  formData={form}
                  name="name"
                  title="Nome Completo"
                  placeholder="Nome Completo"
                  value={data.name}
                  className="w-full"
                />

                <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
                  <FormInputField
                    formData={form}
                    name="phone"
                    title="Telefone"
                    placeholder="Número do seu telefone"
                    format={maskPhone}
                    maxLength={15}
                    autoComplete="off"
                    value={data.phone}
                    className="w-full xs:w-2/4"
                  />
                  <FormInputField
                    formData={form}
                    name="email"
                    disabled
                    title="Email"
                    value={data.email}
                    placeholder={data.email}
                    className="w-full xs:w-2/4"
                  />
                </div>

                <AddressFields formData={form} data={data} />
              </div>

              <Button type="submit" className="w-full h-12 save-form-button text-xl">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
