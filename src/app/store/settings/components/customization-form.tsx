"use client";

import { useForm } from "react-hook-form";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";

import { maskCnpj, maskPhone } from "@/lib/utils";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";
import { TooltipAlert } from "@/components/tooltip-alert";
import { AddressFields } from "@/components/address-fields";
import { Form } from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSettingsSchema } from "@/schemas/store";
import { Separator } from "@/components/ui/separator";

export default function CustomizationForm() {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);

  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="uppercase mb-6 text-xl">PERSONALIZAÇÃO</h2>
          <div className="flex flex-col gap-y-4 xs:ml-8">
            <FormInputField
              formData={form}
              name="image"
              type="file"
              removeOptions={false}
              className="items-center xs:w-fit mb-6"
            />

            <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
              <FormInputField
                formData={form}
                name="name"
                title="Nome da Loja"
                placeholder="Nome da Loja"
                className="w-full xs:w-2/4"
              />
              <FormInputField
                formData={form}
                name="whatsapp"
                title="Whatsapp"
                placeholder="Número de whatsapp"
                format={maskPhone}
                maxLength={15}
                autoComplete="off"
                className="w-full xs:w-2/4"
              />
            </div>

            <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
              <FormSelectField
                formData={form}
                name="branch"
                title="Ramo"
                className="w-full xs:w-2/4"
                data={["valor 1", "valor 2", "valor 3"]}
              />
              <FormInputField
                formData={form}
                name="uri"
                disabled
                title="Uri de acesso"
                placeholder="exemplo"
                className="w-full xs:w-2/4"
              />
            </div>

            <Separator className="my-4" />
            <AddressFields formData={form} data={{}} />
            <Separator className="my-4" />

            <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
              <FormInputField
                formData={form}
                name="cnpj"
                title="CNPJ da loja"
                format={maskCnpj}
                maxLength={18}
                placeholder="CNPJ da loja"
                className="w-full xs:w-2/4"
              />
              <FormInputField
                formData={form}
                name="email"
                title="Email da loja"
                placeholder="Email da loja"
                className="w-full xs:w-2/4"
              />
            </div>

            <FormTextareaField
              formData={form}
              name="description"
              title="Descrição"
              placeholder="Descrição da sua loja"
            />

            <FormSelectField
              formData={form}
              name="order"
              title="Ordem de exibição dos produtos"
              data={["valor 1", "valor 2", "valor 3", "valor 4", "valor 5"]}
            />

            <FormSelectField
              formData={form}
              name="theme"
              title="Selecionar Tema da Loja"
              data={["valor 1", "valor 2", "valor 3"]}
            />

            <div className="flex items-top gap-x-16 gap-y-8 flex-wrap">
              <div>
                <FormSwitchField formData={form} name="blockStore" title="Bloquear Loja" />
                <Button className="save-form-button mt-4">Configurar</Button>
              </div>
              <FormSwitchField formData={form} name="blockAccess" title="Bloquear acesso" />
              <FormSwitchField formData={form} name="blockPrice" title="Bloquear preços" />

              <div className="relative">
                <TooltipAlert text="Mostrar na Loja Produtos Sem Imagem." />
                <FormSwitchField formData={form} name="noImage" title="Sem imagem" />
              </div>
            </div>
          </div>

          <Separator className="invisible py-2" />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
