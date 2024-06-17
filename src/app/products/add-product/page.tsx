"use client";

import { Form } from "@/components/ui/form";
import { formProductSchema } from "@/schemas/products";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Dimensions } from "./components/dimensions";
import { DefaultFields } from "./components/default-field";

export default function AddProduct() {
  const form = useForm<z.infer<typeof formProductSchema>>({
    resolver: zodResolver(formProductSchema),
  });

  const onSubmit = (values: z.infer<typeof formProductSchema>) => console.log(values);

  return (
    <div className="mx-5 sm:mx-12 my-6">
      <div className="w-full md:w-[70vw] mb-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DefaultFields formData={form} />
            <Separator className="my-8" />
            <Dimensions formData={form} />
            <Separator className="invisible my-6" />

            <Button type="submit" className="w-full h-12 save-form-button text-xl">
              Salvar
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
