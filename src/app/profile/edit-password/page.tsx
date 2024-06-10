"use client";

import { FormPasswordField } from "@/components/form-fileds/form-password-field";
import { Form } from "@/components/ui/form";
import { formEditPasswordSchema } from "@/schemas/profile";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

export default function EditFunction() {
  const form = useForm<z.infer<typeof formEditPasswordSchema>>({
    resolver: zodResolver(formEditPasswordSchema),
  });

  const onSubmit = (values: z.infer<typeof formEditPasswordSchema>) => console.log(values);

  return (
    <div className="mx-5 sm:mx-12 my-8 w-[70vw]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
          <FormPasswordField
            formData={form}
            name="currentPassword"
            title="Senha atual"
            placeholder="Senha atual"
          />
          <FormPasswordField
            formData={form}
            name="newPassword"
            title="Nova senha"
            placeholder="Nova senha"
          />
          <FormPasswordField
            formData={form}
            name="confirmPassword"
            title="Confirmação senha"
            placeholder="Confirmação senha"
          />

          <div className="pt-8">
            <Button type="submit" className="save-form-button w-full">
              Salvar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
