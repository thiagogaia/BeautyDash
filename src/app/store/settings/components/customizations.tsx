import { UseFormReturn } from "react-hook-form";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSellectField } from "@/components/form-fileds/form-sellect-field";
import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";
import { SettingsType } from "./page";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}
export default function Customization({ formData, data }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-4 text-xl">Personalização</h2>
      <div className="flex flex-col gap-y-4">
        <FormInputField
          formData={formData}
          name="image"
          type="file"
          className="items-center xs:w-fit mb-6"
        />

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
            type="tel"
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
            data={["valor 1", "valor 2", "valor 3"]}
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

        {/* separar em um bloco com os campos de dendereço correto */}
        <FormInputField
          formData={formData}
          name="address"
          title="Endereço da loja"
          placeholder="Endereço da loja"
          className="w-full"
        />

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="cnpj"
            title="CNPJ da loja"
            placeholder="CNPJ da loja"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="email"
            title="Email da loja"
            placeholder="Email da loja"
            className="w-full xs:w-2/4"
          />
        </div>

        <FormTextareaField
          formData={formData}
          name="description"
          title="Descrição"
          placeholder="Descrição da sua loja"
        />

        <FormSellectField
          formData={formData}
          name="order"
          title="Ordem de exibição dos produtos"
          data={["valor 1", "valor 2", "valor 3", "valor 4", "valor 5"]}
        />

        <FormSellectField
          formData={formData}
          name="theme"
          title="Selecionar Tema da Loja"
          data={["valor 1", "valor 2", "valor 3"]}
        />
      </div>
    </div>
  );
}
