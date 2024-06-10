import { UseFormReturn } from "react-hook-form";
import { SettingsType } from "../page";
import { FormInputField } from "@/components/form-fileds/form-input-field";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function SocialMediaLinks({ data, formData }: Props) {
  return (
    <div className="pb-12">
      <h2 className="uppercase mb-6 text-xl">LINK DAS REDES SOCIAIS</h2>
      <div className="flex flex-col gap-y-4 xs:ml-8">
        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="instagram"
            type="url"
            title="Usuário do Instagram"
            placeholder="Instagram"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="facebook"
            type="url"
            title="Página do Facebook"
            placeholder="Facebook"
            className="w-full xs:w-2/4"
          />
        </div>

        <div className="flex w-full justify-between flex-wrap xs:flex-nowrap gap-y-4 gap-x-8 items-end">
          <FormInputField
            formData={formData}
            name="youtube"
            type="url"
            title="Canal do Youtube"
            placeholder="Youtube"
            className="w-full xs:w-2/4"
          />
          <FormInputField
            formData={formData}
            name="blog"
            type="url"
            title="Site ou Blog"
            placeholder="Site / Blog"
            className="w-full xs:w-2/4"
          />
        </div>
      </div>
    </div>
  );
}
