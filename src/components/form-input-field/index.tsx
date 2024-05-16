"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { InputFile } from "../input-file";

type InputType = React.InputHTMLAttributes<HTMLInputElement>;

interface InputProps extends InputType {
  formData: UseFormReturn<any>;
  title?: string;
  removeOptions?: boolean;
}

export function FormInputField({
  formData,
  title,
  name = "",
  type = "text",
  className,
  value,
  removeOptions = true,
  ...props
}: InputProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="flex items-center gap-x-1 break-all">{title}</FormLabel>
          <FormControl>
            {type === "file" ? (
              <InputFile field={field} {...field} value={value} removeOptions={removeOptions} />
            ) : (
              <Input {...props} {...field} defaultValue={value || ""} />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
