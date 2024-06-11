import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { DataType } from "../page";
import { UseFormReturn } from "react-hook-form";

interface Props {
  currentData: DataType[number];
  formData: UseFormReturn<any>;
}

export function FormExternalUrl({ currentData, formData }: Props) {
  return (
    <div className="space-y-8 pt-4">
      <div className="space-y-4 pb-8 border-b">
        <FormInputField
          formData={formData}
          name="page"
          title="Página para carregar internamente"
          placeholder="https://www.dominio.com.br/sua_pagina"
        />

        <FormSwitchField
          formData={formData}
          name="disableMouseButton"
          title="Desabilitar botão direito do mouse"
        />
        <FormSwitchField
          formData={formData}
          name="disableReturnButton"
          title="Desabilitar botão voltar"
        />
      </div>

      <div className="border-b pb-8">
        <h3 className="font-medium text-lg">Facebook Pixel</h3>
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="pixelId"
            title="Pixel ID"
            placeholder="Ex: 99999999999999"
            className="w-full xs:w-2/4"
          />
          <FormSelectField
            formData={formData}
            name="events"
            title="Eventos"
            placeholder="Selecione um evento"
            className="w-full xs:w-2/4"
            data={["PageView"]}
          />
        </div>
      </div>
      <div className="border-b pb-8">
        <h3 className="font-medium text-lg mb-2">Google</h3>
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="analytics"
            title="Analytics (G)"
            placeholder="Ex: G-XXXXXXXXX"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="tagManager"
            title="Tag Manager (GTM)"
            placeholder="Ex: GTM-XXXX / G-XXX:"
            className="w-full xs:w-2/4"
          />
        </div>
      </div>
      <div className="pb-8">
        <h3 className="font-medium text-lg mb-2">Outros</h3>
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="tiktok"
            title="TikTok pixel"
            placeholder="Ex: XXXXXXXXXXXXX"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="hotjar"
            title="Hotjar ID"
            placeholder="Ex: 9999999999999999"
            className="w-full xs:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
