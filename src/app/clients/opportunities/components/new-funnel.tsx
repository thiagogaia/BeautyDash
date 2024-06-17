"use client";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function NewFunnel() {
  const form = useForm<z.infer<any>>({
    // resolver: zodResolver(formSellerSchema)
  });

  const onSubmit = (values: z.infer<any>) => console.log(values);
  return (
    <div>
      <p>Dados do funil</p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormInputField formData={form} name="name" title="Nome" />

          <Separator />

          <p>Estágios</p>

          <div>
            <Button type="button" variant="secondary" className="hover:text-blue-700">
              Novo estágio
            </Button>
            <Button type="submit" className="bg-blue-700 hover:bg-blue-500 text-white">
              Criar funil
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
