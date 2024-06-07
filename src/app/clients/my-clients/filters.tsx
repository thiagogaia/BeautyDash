"use client";

import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../../../components/ui/button";
import { Database, Search } from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import { FormInputField } from "@/components/form-fileds/form-input-field";
import { FormDateField } from "@/components/form-fileds/form-data-field";
import { FormSellectField } from "@/components/form-fileds/form-sellect-field";
import { filterSchema } from "../schemas";

export default function Filters() {
  const form = useForm<z.infer<typeof filterSchema>>({
    resolver: zodResolver(filterSchema),
  });

  const onSubmit = (values: z.infer<typeof filterSchema>) => console.log(values);

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="border rounded-lg py-2 px-8">
        <div className="flex flex-wrap items-end gap-4 my-4">
          <div className="inline-flex items-center gap-x-2 pl-3 border rounded-md input-search">
            <Search className="opacity-50" />
            <Separator orientation="vertical" className="h-10" />
            <FormInputField
              formData={form}
              name="search"
              placeholder="Pesquisar"
              className="input-container"
            />
          </div>

          <FormSellectField
            formData={form}
            placeholder="20"
            defaultValue="20"
            data={["20", "50", "100"]}
          />

          <Button type="button" variant="outline">
            <Database className="mr-2" /> Exportar Excel
          </Button>
        </div>

        <div className="flex flex-wrap items-end gap-4 my-4 mt-8">
          <FormDateField formData={form} name="initialDate" title="Data inicial" />
          <FormDateField formData={form} name="finalDate" title="Data final" />
        </div>
      </form>
    </Form>
  );
}