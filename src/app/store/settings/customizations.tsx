import { FormInputField } from "@/components/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "./form-settings";
import { FormSellectField } from "@/components/form-sellect-field";
import { FormTextareaField } from "@/components/form-textarea-field";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}
export default function Customization({ formData, data }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-4 text-xl">Personalização</h2>
      <div className="flex flex-col gap-y-4">
        <p className="h-32 w-32 bg-secondary/50">input file</p>

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="name"
            title="Nome da Loja"
            value={data.name}
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="whatsapp"
            title="Whatsapp"
            value={data.whatsapp}
            className="w-full xs:w-2/4"
          />
        </div>

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormSellectField
            formData={formData}
            name="branch"
            title="Ramo"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="uri"
            disabled
            title="Uri de acesso"
            value={data.uri}
            className="w-full xs:w-2/4"
          />
        </div>

        <FormTextareaField
          formData={formData}
          name="description"
          title="Descrição"
          placeholder="Descrição da sua loja"
        />

        <FormSellectField formData={formData} name="order" title="Ordem de exibição dos produtos" />

        <FormSellectField formData={formData} name="theme" title="Selecionar Tema da Loja" />
      </div>
    </div>
  );
}
