import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "../page";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { TooltipAlert } from "@/components/tooltip-alert";
import { FormRadioGroupItem } from "@/components/form-fileds/form-radio-group-item";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function Stock({ data, formData }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-6 text-xl">ESTOQUE</h2>
      <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
        <div className="w-full">
          <FormField
            control={formData.control}
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
            formData={formData}
            name="noName1"
            className="w-full xs:w-1/2"
            title="Não permitir pedido com estoque igual a 0 (zero) ou negativo."
          />
          <FormSwitchField
            formData={formData}
            name="noName2"
            className="w-full xs:w-1/2"
            title="Não exibir produtos com estoque igual a 0 (zero) ou negativo."
          />
        </div>
        <div className="flex flex-col items-top gap-8 xs:flex-row">
          <FormSwitchField
            formData={formData}
            name="noName3"
            className="w-full xs:w-1/2"
            title="Mudar o produto para inativo quando o estoque atingir 0 (zero) ou negativo."
          />
          <FormSwitchField
            formData={formData}
            name="noName4"
            className="w-full xs:w-1/2"
            title="Exibir a quantidade disponível de estoque na loja."
          />
        </div>
        <FormSwitchField
          formData={formData}
          name="noName5"
          className="w-full xs:w-1/2"
          title="Separar estoque ao adicionar no carrinho de compras."
        />
      </div>
    </div>
  );
}
