import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function Monetizze({ data, formData }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-6 text-xl">Monetizze</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <p className="text-primary/60">
          WEBHOOK: https://nuzap.com.br/webhook/incoming/monetizze-exemplo-6639012cb38ac
        </p>
        <FormInputField
          formData={formData}
          name="consumerKey"
          title="Chave do consumidor"
          placeholder="Chave do consumidor"
          className="w-full"
        />
        <FormInputField
          formData={formData}
          name="checkoutCode"
          title="Código do checkout"
          placeholder="Código do checkout"
          className="w-full"
        />
      </div>
    </div>
  );
}
