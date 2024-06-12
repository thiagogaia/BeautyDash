import { UseFormReturn, useForm } from "react-hook-form";
import { SettingsType } from "../page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSettingsSchema } from "@/schemas/store";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function LinksForm({ data, formData }: Props) {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);
  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
