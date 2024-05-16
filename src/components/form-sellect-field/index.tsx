"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

type InputType = React.InputHTMLAttributes<HTMLInputElement>;

interface SelectProps extends InputType {
  formData: UseFormReturn<any>;
  title?: string;
}
export function FormSellectField({
  formData,
  title,
  name = "",
  className,
  placeholder,
}: SelectProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{title}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder || "Selecione um valor"} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {[...new Array(6)].map((_, index) => (
                <SelectItem key={index} value={"opção número" + index + 1}>
                  opção número {index + 1}
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
