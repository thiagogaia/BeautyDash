import { UseFormReturn, useForm } from "react-hook-form";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { RadioGroup } from "@/components/ui/radio-group";
import { FormRadioGroupItem } from "@/components/form-fileds/form-radio-group-item";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSettingsSchema } from "@/schemas/store";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function StockForm() {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  }) as UseFormReturn<any>;

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);
  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="uppercase mb-6 text-xl">ESTOQUE</h2>
          <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
            <div className="w-full">
              <FormField
                control={form.control}
                name={"noName0" as string}
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-wrap justify-between gap-x-8 gap-y-4 w-5/6"
                      >
                        <FormRadioGroupItem
                          field={field}
                          label="Não Habilitar"
                          value="doNotEnable"
                          alertText="Não retirar do estoque a quantidade vendida."
                        />
                        <FormRadioGroupItem
                          field={field}
                          label="Retirar na Compra"
                          value="collectOnPurchase"
                          alertText="Retirar do estoque quando o cliente realizar a compra."
                        />
                        <FormRadioGroupItem
                          field={field}
                          label="Retirar no pagamento"
                          value="withdrawOnPayment"
                          alertText="Retirar do estoque quando o pagamento for confirmado."
                        />
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col items-top gap-8 xs:flex-row">
              <FormSwitchField
                formData={form}
                name="noName1"
                className="w-full xs:w-1/2"
                title="Não permitir pedido com estoque igual a 0 (zero) ou negativo."
              />
              <FormSwitchField
                formData={form}
                name="noName2"
                className="w-full xs:w-1/2"
                title="Não exibir produtos com estoque igual a 0 (zero) ou negativo."
              />
            </div>
            <div className="flex flex-col items-top gap-8 xs:flex-row">
              <FormSwitchField
                formData={form}
                name="noName3"
                className="w-full xs:w-1/2"
                title="Mudar o produto para inativo quando o estoque atingir 0 (zero) ou negativo."
              />
              <FormSwitchField
                formData={form}
                name="noName4"
                className="w-full xs:w-1/2"
                title="Exibir a quantidade disponível de estoque na loja."
              />
            </div>
            <FormSwitchField
              formData={form}
              name="noName5"
              className="w-full xs:w-1/2"
              title="Separar estoque ao adicionar no carrinho de compras."
            />
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
