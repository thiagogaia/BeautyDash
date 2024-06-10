"use client";

import { FormSelectFieldProps } from "@/types/form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

export function FormSellectField({
  formData,
  defaultValue,
  title,
  name = "",
  className,
  placeholder,
  data = [],
}: FormSelectFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-primary/50">{title}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value || defaultValue}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || "Selecione um valor"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {data.map((value, index) => (
                <SelectItem key={`opção número${index + 1}`} value={value}>
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
