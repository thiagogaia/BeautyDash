import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "../page";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function CheckOut({ data, formData }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-6 text-xl">CHECKOUT</h2>
      <div className="space-y-6 xs:ml-8">
        <div className="flex items-top gap-8 flex-wrap">
          <FormSwitchField formData={formData} name="requestAddress" title="Pedir Endereço" />
          <FormSwitchField formData={formData} name="cpf-cnpj" title="Pedir CPF/CNPJ" />
          <FormSwitchField formData={formData} name="selectSeller" title="Selecionar Vendedor(a)" />
        </div>
        <div>
          <h3 className="font-medium text-lg">Pedido via whatsapp</h3>
          <FormSwitchField
            formData={formData}
            name="submitOrder"
            title="Enviar Pedido ao finalizar"
          />
        </div>
        <div>
          <h3 className="font-medium text-lg">Formas de envio</h3>

          <div className="flex flex-wrap items-top gap-8">
            <FormSwitchField formData={formData} name="delivery" title="Entrega" />
            <FormSwitchField formData={formData} name="withdrawal" title="Retirada" />
            <FormSwitchField formData={formData} name="combined" title="A Combinar" />
          </div>
        </div>

        <div>
          <h3 className="font-medium text-lg">Taxa de Entrega</h3>
          <FormSwitchField
            formData={formData}
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
    </div>
  );
}
