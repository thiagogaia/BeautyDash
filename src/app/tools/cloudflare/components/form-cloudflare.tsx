"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { DataType } from "../page";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSwitchField } from "@/components/form-fileds/form-switch-field";
import { formCloudflareSchema } from "@/schemas/tools";

interface Props {
  currentData: DataType[number];
}

export function FormCloudflare({ currentData }: Props) {
  const form = useForm<z.infer<typeof formCloudflareSchema>>({
    resolver: zodResolver(formCloudflareSchema),
    defaultValues: {
      account: currentData.account || undefined,
      key: currentData.key || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formCloudflareSchema>) => console.log(values);

  return (
    <div className="pb-12">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormInputField
            formData={form}
            name="account"
            title="Conta cloudflare"
            placeholder="Conta cloudflare"
            value={currentData.account}
          />
          <FormInputField
            formData={form}
            name="key"
            title="Global API key"
            placeholder="Global API key"
            value={currentData.key}
          />

          <Button type="submit" className="w-full h-12 save-form-button text-xl">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
