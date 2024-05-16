"use client";

import { z } from "zod";
import { Form } from "../../../components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormDateField } from "../../../components/form-data-field";
import { Button } from "../../../components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import { Database, Search } from "lucide-react";
import { FormInputField } from "../../../components/form-input-field";
import { Separator } from "../../../components/ui/separator";
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

          <Select defaultValue="20">
            <SelectTrigger className="w-min gap-x-1">
              <SelectValue placeholder="20" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="20">20</SelectItem>
                <SelectItem value="50">50</SelectItem>
                <SelectItem value="100">100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

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
