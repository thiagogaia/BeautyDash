import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "../page";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function PaymentMethods({ data, formData }: Props) {
  return (
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
  );
}
