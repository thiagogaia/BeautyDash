import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "../page";
import { Button } from "@/components/ui/button";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function PaymentOptions({ data, formData }: Props) {
  return (
    <div className="border-b pb-12">
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
  );
}
