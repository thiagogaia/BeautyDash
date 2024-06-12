"use client";

import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormSelectField } from "@/components/form-fileds/form-sellect-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formMyDataSchema } from "@/schemas/profile";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Shoopkeeper } from "./components/shopkeeper";
import { Pix } from "./components/pix";
import { PicPay } from "./components/picpay";
import { MercadoPago } from "./components/mercado-pago";
import { Monetizze } from "./components/monetizze";
import { Asaas } from "./components/asaas";

const data = {
  name: "loujinha",
  phone: "48 97894-3215",
  email: "example@mail.com",
};

export type MyDataType = typeof data;

export default function MyData() {
  const form = useForm<z.infer<typeof formMyDataSchema>>({
    resolver: zodResolver(formMyDataSchema),
    defaultValues: {
      name: data.name || undefined,
      phone: data.phone || undefined,
      email: data.email || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof formMyDataSchema>) => console.log(values);
  return (
    <div className=" mx-5 sm:mx-12 mt-6">
      <div className="mt-6 w-full md:w-[70vw]">
        <div className="pb-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <Shoopkeeper formData={form} data={data} />
              <Pix formData={form} data={data} />
              <PicPay formData={form} data={data} />
              <MercadoPago formData={form} data={data} />
              <Monetizze formData={form} data={data} />
              <Asaas formData={form} data={data} />

              <Button type="submit" className="w-full h-12 save-form-button text-xl">
                Salvar
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}
