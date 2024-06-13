import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function Pix({ data, formData }: Props) {
  return (
    <div className="border-b pb-12">
      <h2 className="uppercase mb-6 text-xl">Pix</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <FormInputField
          formData={formData}
          name="pixName"
          title="Nome Completo"
          placeholder="Nome Completo"
          value={data.name}
          className="items-center w-full"
        />

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormSelectField
            formData={formData}
            name="keyType"
            title="Tipo de chave PIX"
            className="w-full xs:w-2/4"
            defaultValue="Email"
            data={["Email", "CPF/CNPJ", "Celular", "Aleatória"]}
          />
          <FormInputField
            formData={formData}
            name="pixKey"
            title="Chave PIX"
            placeholder="Chave pix"
            className="w-full xs:w-2/4"
          />
        </div>
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="cep"
            title="CEP"
            placeholder="CEP"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="city"
            title="Cidade"
            placeholder="Cidade"
            className="w-full xs:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
