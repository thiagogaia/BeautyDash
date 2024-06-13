"use client";

import { UseFormReturn } from "react-hook-form";
import { FormInputField } from "../form-fileds/form-input-field";
import { maskCep } from "@/lib/utils";

interface Props {
  formData: UseFormReturn<any>;
  data: {};
}

export function AddressFields({ data, formData }: Props) {
  return (
    <div className="space-y-6 border-y py-8 my-4">
      <h2>Endereço</h2>
      <FormInputField
        formData={formData}
        name="cep"
        format={maskCep}
        maxLength={9}
        title="CEP"
        placeholder="CEP"
      />
      <FormInputField formData={formData} name="address" title="Endereço" placeholder="Endereço" />
      <div className="flex gap-x-2 items-baseline">
        <FormInputField
          formData={formData}
          name="district"
          title="Bairro"
          placeholder="Bairro"
          className="w-3/4"
        />
        <FormInputField
          formData={formData}
          name="number"
          title="Número"
          placeholder="Nº"
          className="w-1/4"
        />
      </div>
      <FormInputField
        formData={formData}
        name="complement"
        title="Complemento"
        placeholder="Complemento"
      />
      <FormInputField
        formData={formData}
        name="city"
        title="Cidade"
        placeholder="Selecione uma cidade"
      />
      <FormInputField
        formData={formData}
        name="state"
        title="Estado"
        placeholder="Selecione um estado"
      />
    </div>
  );
}
