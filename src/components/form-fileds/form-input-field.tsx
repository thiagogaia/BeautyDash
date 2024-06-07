"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { InputFile } from "../input-file";
import { FormInputFieldProps } from "@/types/form";

export function FormInputField({
  formData,
  title,
  name = "",
  type = "text",
  className,
  value,
  removeOptions = true,
  ...props
}: FormInputFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="flex items-center gap-x-1 break-all">{title}</FormLabel>
          <FormControl>
            {type === "file" ? (
              <InputFile
                field={field}
                {...field}
                value={(value as string) || ""}
                removeOptions={removeOptions}
              />
            ) : (
              <Input
                {...props}
                {...field}
                type={type}
                defaultValue={value || ""}
                className="disabled:bg-secondary disabled:text-primary/70 disabled:opacity-1"
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
