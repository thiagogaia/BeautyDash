"use client";

import { FormSelectField } from "@/components/form-fileds/form-sellect-field";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { formImportDataSchema } from "@/schemas/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { Database, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function ImportData() {
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [currentType, setCurrentType] = useState<string>("Produtos");

  const form = useForm<z.infer<typeof formImportDataSchema>>({
    resolver: zodResolver(formImportDataSchema),
    defaultValues: {},
  });

  useEffect(() => {
    form.watch("type") !== undefined && setCurrentType(form.watch("type"));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("type")]);

  const onSubmit = (values: z.infer<typeof formImportDataSchema>) => console.log(values);

  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="w-full md:w-[70vw]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormSelectField
              formData={form}
              name="type"
              title="Tipo de cadastro"
              placeholder="Selecionar tipo de cadastro"
              data={["Produtos", "Clientes"]}
              defaultValue="Produtos"
            />

            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-x-1 break-all text-primary/50">
                    Arquivo
                  </FormLabel>
                  <FormControl>
                    <Input
                      accept="*/*"
                      required
                      {...field}
                      type="file"
                      className="file:bg-secondary file:rounded-sm file:cursor-pointer file:h-full file:mr-2 p-0"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="text-blue-400">
              {currentType === "Produtos" && (
                <a
                  href="https://storage.ktalogue.com.br/uploads/1/importar_produtos_nuzap.xlsx"
                  download
                >
                  Download da planilha de exemplo dos produtos
                </a>
              )}
              {currentType === "Clientes" && (
                <a
                  href="https://storage.ktalogue.com.br/uploads/1/importar_clientes_nuzap.xlsx"
                  download
                >
                  Download da planilha de exemplo dos clientes
                </a>
              )}
            </div>

            <Button type="submit" variant="outline">
              <Database className="mr-2" /> Exportar Excel
            </Button>
          </form>
        </Form>

        {showAlert && (
          <Alert className="mt-12 text-red-500 bg-red-100">
            <AlertTitle className="flex justify-between items-center">
              ATENÇÃO!
              <Button
                variant="ghost"
                onClick={() => setShowAlert(false)}
                className="hover:bg-transparent hover:text-red-300"
              >
                <X className="w-5 h-5" />
              </Button>
            </AlertTitle>
            <AlertDescription>
              Os arquivos de importação devem estar em Excel e devem ter no máximo 20mb. Embora o
              processo seja validado e retorne alertas e erros, é de extrema importância selecionar
              o tipo de cadastro e arquivo Excel correto para ser processado, pois o processo é
              irreversível. Dependendo do tamanho do arquivo de importação, o processo pode demorar
              vários minutos.
            </AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
