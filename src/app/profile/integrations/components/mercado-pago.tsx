import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";
import Link from "next/link";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function MercadoPago({ data, formData }: Props) {
  return (
    <div>
      <h2 className="uppercase mb-6 text-xl">Mercado pago</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <FormInputField
          formData={formData}
          name="pubKey"
          title="Chave publica"
          placeholder="Chave publica"
          className="w-full"
        />
        <FormInputField
          formData={formData}
          name="accessToken"
          title="Token de acesso"
          placeholder="Token de acesso"
          className="w-full"
        />
      </div>
    </div>
  );
}
