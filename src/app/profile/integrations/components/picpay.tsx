import { FormInputField } from "@/components/form-fileds/form-input-field";
import { UseFormReturn } from "react-hook-form";
import { MyDataType } from "../page";
import Link from "next/link";

interface Props {
  formData: UseFormReturn<any>;
  data: MyDataType;
}

export function PicPay({ data, formData }: Props) {
  return (
    <div>
      <h2 className="uppercase mb-6 text-xl">Picpay</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <FormInputField
          formData={formData}
          name="picPayToken"
          title="PicPay token"
          placeholder="PicPay token"
          className="w-full"
        />
        <FormInputField
          formData={formData}
          name="sellerToken"
          title="Token do vendedor"
          placeholder="Token do vendedor"
          className="w-full"
        />

        <p className="text-primary/60">
          Duvidas? clique{" "}
          <Link
            href="https://nuzap.com.br/blog/como-obtenho-integrar-com-picpay"
            target="_blank"
            className="text-blue-700 hover:text-blue-800"
          >
            Aqui
          </Link>{" "}
          para obter ajuda.
        </p>
      </div>
    </div>
  );
}
