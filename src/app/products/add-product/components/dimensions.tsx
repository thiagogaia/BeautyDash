"use client";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";

interface Props {
  formData: UseFormReturn<any>;
}

export function Dimensions({ formData }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="uppercase mb-6 text-xl font-bold flex flex-wrap gap-x-2 items-end">
        DIMENSÕES DO PRODUTO
        <p className="font-normal text-sm text-primary/50">
          (NECESSÁRIO PARA O CÁLCULO AUTOMÁTICO DO FRETE)
        </p>
      </h2>
      <div className="flex flex-col gap-y-4">
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-start">
          <FormInputField
            formData={formData}
            name="height"
            title="Altura em centímetros:"
            placeholder="Altura em centímetros"
            type="number"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="width"
            title="Largura em centímetros"
            placeholder="Largura em centímetros"
            type="number"
            className="w-full xs:w-2/4"
          />
        </div>

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-start">
          <FormInputField
            formData={formData}
            name="weight"
            title="Profundidade em centímetros"
            placeholder="Profundidade em centímetros"
            type="number"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="depth"
            title="Peso em gramas"
            placeholder="Peso em gramas"
            type="number"
            className="w-full xs:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
