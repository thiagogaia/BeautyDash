import { UseFormReturn, useForm } from "react-hook-form";
import { SettingsType } from "../page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formSettingsSchema } from "@/schemas/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface Props {
  formData: UseFormReturn<any>;
  data: SettingsType;
}

export default function IntegrationsForm({ data, formData }: Props) {
  const form = useForm<z.infer<typeof formSettingsSchema>>({
    resolver: zodResolver(formSettingsSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formSettingsSchema>) => console.log(values);
  return (
    <div className="mt-6 w-full md:w-[70vw] pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <h2 className="uppercase mb-6 text-xl">
            INTEGRAÇÕES - OTIMIZE OS RESULTADOS DOS SEUS ANÚNCIOS.
          </h2>
          <div className="flex flex-wrap gap-x-16 gap-y-8 xs:ml-8">
            <div>
              <p className="font-medium text-lg mb-2">
                Facebook Pixel - Informe o identificador do pixel que deseja adicionar à sua vitrine
                do Nuzap.
              </p>
              <FormInputField
                formData={formData}
                name="facebookPixel"
                title="Identificação do pixel"
                placeholder="Ex: 784939827722"
              />
            </div>
            <div>
              <p className="font-medium text-lg mb-2">
                Insira a ID de acompanhamento de sua propriedade do Google Analytics
              </p>
              <FormInputField
                formData={formData}
                name="googleAnalytics"
                title="Google Analytics - Insira a ID de acompanhamento de sua propriedade do Google Analytics"
                placeholder="Ex: G-XPQ221231"
              />
            </div>
            <div>
              <p className="font-medium text-lg mb-2">
                Insira a ID de acompanhamento de sua propriedade do Google TagManager
              </p>
              <FormInputField
                formData={formData}
                name="tagManager"
                title="Google TagManager - Insira a ID de acompanhamento de sua propriedade do Google TagManager"
                placeholder="Ex: GTM-XXXXXXX"
              />
            </div>

            <FormInputField
              formData={formData}
              name="widget"
              title="Widget Whatsapp"
              className="w-full"
              placeholder="Widget de contato"
            />

            <div>
              <h3 className="font-medium text-lg mb-2">Webpic</h3>
              <p className="text-primary/50">Configurar Integração</p>
              <Button className="save-form-button mt-2">Configurar</Button>
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
