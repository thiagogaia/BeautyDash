"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { formMyDataSchema } from "@/schemas/profile";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Pix } from "./components/pix";
import { PicPay } from "./components/picpay";
import { MercadoPago } from "./components/mercado-pago";
import { Monetizze } from "./components/monetizze";
import { Asaas } from "./components/asaas";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

const data = {
  name: "Jorge silva",
  phone: "48 97894-3215",
  email: "example@mail.com",
};

export type MyDataType = typeof data;

export default function Integrations() {
  const [activeForms, setActiveForms] = useState<string[]>([]);
  const formNames = ["pix", "picpay", "mercado pago", "monetizze", "asaas"];

  const form = useForm<z.infer<typeof formMyDataSchema>>({
    resolver: zodResolver(formMyDataSchema),
    defaultValues: {},
  });

  const onSubmit = (values: z.infer<typeof formMyDataSchema>) => console.log(values);

  const setForm = (formName: string) => {
    if (activeForms.includes(formName)) {
      setActiveForms(activeForms.filter((e) => e !== formName));
    } else {
      setActiveForms([...activeForms, formName]);
    }
  };

  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="w-full md:w-[70vw]">
        <h2 className="mb-8 text-xl">Selecione os campos desejados</h2>
        <ul className="flex flex-wrap gap-x-12 gap-y-4 mb-12">
          {formNames.map((formName) => (
            <div key={formName} className="flex items-center space-x-2">
              <Checkbox
                id={formName}
                className="data-[state=checked]:checkbox-checked"
                onCheckedChange={() => setForm(formName)}
              />
              <label htmlFor={formName} className="text-sm font-medium capitalize cursor-pointer">
                {formName}
              </label>
            </div>
          ))}
        </ul>
      </div>
      <div className="pb-12">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {activeForms.includes("pix") && <Pix formData={form} data={data} />}
            {activeForms.includes("picpay") && <PicPay formData={form} data={data} />}
            {activeForms.includes("mercado pago") && <MercadoPago formData={form} data={data} />}
            {activeForms.includes("monetizze") && <Monetizze formData={form} data={data} />}
            {activeForms.includes("asaas") && <Asaas formData={form} data={data} />}
            <Separator className="invisible" />

            <Button type="submit" className="w-full h-12 save-form-button text-xl">
              Salvar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
