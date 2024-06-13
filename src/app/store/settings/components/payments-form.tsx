"use client";

import { useForm } from "react-hook-form";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSettingsSchema } from "@/schemas/store";
import { z } from "zod";

export default function PaymentsForm() {
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
              <FormSwitchField formData={form} name="ticket" title="Boleto" />
              <FormSwitchField formData={form} name="creditCard" title="Cartão de Crédito" />
              <FormSwitchField formData={form} name="debitCard" title="Cartão de Débito" />
              <FormSwitchField formData={form} name="storeBalance" title="Saldo Loja" />
              <FormSwitchField formData={form} name="money" title="Dinheiro" />
            </div>
          </div>

          <div className="pb-12">
            <h2 className="uppercase mb-6 text-xl">
              SELECIONE E CONFIGURE OS MEIOS DE PAGAMENTO ACEITOS EM SUA LOJA.
            </h2>
            <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
              <div>
                <FormSwitchField formData={form} name="picPay" title="PicPay" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={form} name="mercadoPago" title="MercadoPago" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={form} name="monetizze" title="Monetizze" />
                <Button className="save-form-button mt-2">Configurar</Button>
              </div>
              <div>
                <FormSwitchField formData={form} name="asaas" title="Asaas" />
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
