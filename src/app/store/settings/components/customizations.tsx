import { UseFormReturn } from "react-hook-form";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";
import { SettingsType } from "../page";
import { maskPhone } from "@/lib/utils";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { Button } from "@/components/ui/button";
import { TooltipAlert } from "@/components/tooltip-alert";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function Customization({ formData, data }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-6 text-xl">PERSONALIZAÇÃO</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
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
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            value={data.whatsapp}
            className="w-full xs:w-2/4"
          />
        </div>

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormSelectField
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
            placeholder={data.uri}
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

        <FormSelectField
          formData={formData}
          name="order"
          title="Ordem de exibição dos produtos"
          data={["valor 1", "valor 2", "valor 3", "valor 4", "valor 5"]}
        />

        <FormSelectField
          formData={formData}
          name="theme"
          title="Selecionar Tema da Loja"
          data={["valor 1", "valor 2", "valor 3"]}
        />

        <div className="flex items-top gap-x-16 gap-y-8 flex-wrap">
          <div>
            <FormSwitchField formData={formData} name="blockStore" title="Bloquear Loja" />
            <Button className="save-form-button mt-4">Configurar</Button>
          </div>
          <FormSwitchField formData={formData} name="blockAccess" title="Bloquear acesso" />
          <FormSwitchField formData={formData} name="blockPrice" title="Bloquear preços" />

          <div className="relative">
            <TooltipAlert text="Mostrar na Loja Produtos Sem Imagem." />
            <FormSwitchField formData={formData} name="noImage" title="Sem imagem" />
          </div>
        </div>
      </div>
    </div>
  );
}
