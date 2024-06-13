import { FormInputField } from "@/components/form-fileds/form-input-field";
import { maskPhone } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";
import { AddressFields } from "@/components/address-fields";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function Shoopkeeper({ data, formData }: Props) {
  const userName = "Jorge Silva";

  return (
    <div className="pb-12">
      <h2 className="uppercase mb-6 text-xl">{userName} - LOJISTA</h2>
      <div className="flex flex-col gap-y-6 xs:ml-8">
        <FormInputField
          formData={formData}
          name="image"
          type="file"
          title="Fotode perfil"
          className="items-center xs:w-fit mb-6"
        />
        <FormInputField
          formData={formData}
          name="name"
          title="Nome Completo"
          placeholder="Nome Completo"
          value={data.name}
          className="w-full"
        />

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="phone"
            title="Telefone"
            placeholder="Número do seu telefone"
            format={maskPhone}
            maxLength={15}
            autoComplete="off"
            value={data.phone}
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="email"
            disabled
            title="Email"
            value={data.email}
            placeholder={data.email}
            className="w-full xs:w-2/4"
          />
        </div>

        <AddressFields formData={formData} data={data} />
      </div>
    </div>
  );
}
