import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function Asaas({ data, formData }: Props) {
  return (
    <div className="pb-12">
      <h2 className="uppercase mb-6 text-xl">Asaas</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <FormSelectField
          formData={formData}
          name="environment"
          title="Ambiente"
          className="w-full"
          defaultValue={"Homologação"}
          data={["Homologação", "Produção"]}
        />
        <FormInputField
          formData={formData}
          name="asaasAccessToken"
          title="Token de acesso"
          placeholder="Token de acesso"
          className="w-full"
        />
      </div>
    </div>
  );
}
