"use client";

import { UseFormReturn } from "react-hook-form";
import { FormCheckboxField } from "@/components/form-fileds/form-checkbox-field";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { FormTextareaField } from "@/components/form-fileds/form-textarea-field";
import { formatPrice } from "@/lib/utils";

interface Props {
  formData: UseFormReturn<any>;
}

export function DefaultFields({ formData }: Props) {
  return (
    <div className="space-y-6">
      <FormInputField
        formData={formData}
        name="image"
        type="file"
        title="Imagem do produto"
        removeOptions={false}
        className="items-center xs:w-fit mb-6"
      />

      <FormInputField
        formData={formData}
        name="name"
        title="Nome do produto"
        placeholder="Nome do produto"
      />

      <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-start">
        <FormSelectField
          formData={formData}
          name="category"
          title="Categoria"
          placeholder="Selecionar categoria"
          data={["cat 1", "cat 2", "cat 3"]}
          className="w-full xs:w-2/4"
        />
        <FormInputField
          formData={formData}
          name="price"
          title="preço"
          format={formatPrice}
          placeholder="Preço"
          className="w-full xs:w-2/4"
        />
      </div>

      <FormTextareaField
        formData={formData}
        name="description"
        title="Descrição do produto"
        placeholder="Descrição do produto"
      />

      <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-start">
        <FormInputField
          formData={formData}
          name="reference"
          title="Referência (opcional)"
          placeholder="Referência"
          className="w-full xs:w-2/4"
        />
        <FormInputField
          formData={formData}
          name="stock"
          title="Estoque"
          type="number"
          placeholder="Estoque"
          className="w-full xs:w-2/4"
          defaultValue={1}
        />
      </div>

      <div className="flex flex-wrap gap-x-16 gap-y-4">
        <FormSwitchField formData={formData} name="hasVariation" title="O produto tem variação?" />
        <FormSwitchField formData={formData} name="activate" title="Ativar produto" value={true} />
      </div>

      <FormCheckboxField
        formData={formData}
        name="highlight"
        title="Dar destaque ao produto (ele aparecerá no inicío do catálogo)"
      />
    </div>
  );
}
