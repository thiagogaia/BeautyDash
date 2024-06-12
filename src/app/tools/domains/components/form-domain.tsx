"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { formDomainSchema } from "@/schemas/tools";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { DataType } from "../page";
import { useEffect, useState } from "react";
import { FormExternalUrl } from "./form-external-utl";

interface Props {
  currentData: DataType[number];
}

export function FormDomain({ currentData }: Props) {
  const [currentActionType, setCurrentActionType] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof formDomainSchema>>({
    resolver: zodResolver(formDomainSchema),
    defaultValues: {},
  });

  useEffect(() => {
    setCurrentActionType(form.watch("actionType"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form.watch("actionType")]);

  const onSubmit = (values: z.infer<typeof formDomainSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormInputField formData={form} name="name" title="Nome" placeholder="Nome" />

          <FormSelectField
            formData={form}
            name="cloudflareAccount"
            title="Conta Cloudflare"
            placeholder="Selecionar conta"
            data={["Selecionar conta"]}
          />
          <FormSelectField
            formData={form}
            name="domain"
            title="Domínio"
            placeholder="Selecionar domínio"
            data={["Selecionar domínio"]}
          />
          <FormInputField
            formData={form}
            name="subdomain"
            title="Subdomínio"
            placeholder="Subdomínio"
          />

          <FormSelectField
            formData={form}
            name="actionType"
            title="Tipo de ação"
            placeholder="Selecionar ação"
            data={[
              "Ultilizar loja",
              "Carregar uma URL externa sem direcionar",
              "Carregar uma URL externa com iframe",
            ]}
          />
          {currentActionType === "Ultilizar loja" && (
            <FormSelectField
              formData={form}
              name="linkStore"
              title="Vincular loja"
              placeholder="Selecionar loja"
              className="pb-8"
              data={["exemplo"]}
            />
          )}
          {(currentActionType === "Carregar uma URL externa sem direcionar" ||
            currentActionType === "Carregar uma URL externa com iframe") && (
            <FormExternalUrl currentData={currentData} formData={form} />
          )}

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
