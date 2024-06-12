"use client";

import { UseFormReturn, useForm } from "react-hook-form";
import { SettingsType } from "../page";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSettingsSchema } from "@/schemas/store";
import { z } from "zod";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function PaymentsForm({ data, formData }: Props) {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);
  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="border-b pb-12">
            <h2 className="uppercase mb-6 text-xl">
              SELECIONE E CONFIGURE AS FORMAS DE PAGAMENTO ACEITOS EM SUA LOJA.
            </h2>
            <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
              <div>
                <p>PIX</p>
                <Button className="save-form-button mt-2">Cadastrar PIX</Button>
              </div>
              <FormSwitchField formData={formData} name="ticket" title="Boleto" />
              <FormSwitchField formData={formData} name="creditCard" title="Cartão de Crédito" />
              <FormSwitchField formData={formData} name="debitCard" title="Cartão de Débito" />
              <FormSwitchField formData={formData} name="storeBalance" title="Saldo Loja" />
              <FormSwitchField formData={formData} name="money" title="Dinheiro" />
            </div>
          </div>

          <div className="pb-12">
            <h2 className="uppercase mb-6 text-xl">
              SELECIONE E CONFIGURE OS MEIOS DE PAGAMENTO ACEITOS EM SUA LOJA.
            </h2>
            <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
              <div>
                <FormSwitchField formData={formData} name="picPay" title="PicPay" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={formData} name="mercadoPago" title="MercadoPago" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={formData} name="monetizze" title="Monetizze" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={formData} name="asaas" title="Asaas" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
