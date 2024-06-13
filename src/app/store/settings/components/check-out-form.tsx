"use client";

import { useForm } from "react-hook-form";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { formSettingsSchema } from "@/schemas/store";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";

export default function CheckOutForm() {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);
  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="uppercase mb-6 text-xl">CHECKOUT</h2>
          <div className="space-y-6 xs:ml-8">
            <div className="flex items-top gap-8 flex-wrap">
              <FormSwitchField formData={form} name="requestAddress" title="Pedir Endereço" />
              <FormSwitchField formData={form} name="cpf-cnpj" title="Pedir CPF/CNPJ" />
              <FormSwitchField formData={form} name="selectSeller" title="Selecionar Vendedor(a)" />
            </div>
            <div>
              <h3 className="font-medium text-lg">Pedido via whatsapp</h3>
              <FormSwitchField
                formData={form}
                name="submitOrder"
                title="Enviar Pedido ao finalizar"
              />
            </div>
            <div>
              <h3 className="font-medium text-lg">Formas de envio</h3>

              <div className="flex flex-wrap items-top gap-8">
                <FormSwitchField formData={form} name="delivery" title="Entrega" />
                <FormSwitchField formData={form} name="withdrawal" title="Retirada" />
                <FormSwitchField formData={form} name="combined" title="A Combinar" />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg">Taxa de Entrega</h3>
              <FormSwitchField
                formData={form}
                name="calculateDeliveryFee"
                title="Calcular Taxa de Entrega"
              />
              <Button className="save-form-button mt-2">Configurar</Button>
            </div>

            <div>
              <h3 className="font-medium text-lg">Pedido Mínimo</h3>
              <p className="text-primary/50">Configurar Quantidade/Valor</p>
              <Button className="save-form-button mt-2">Configurar</Button>
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
