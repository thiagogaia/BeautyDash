"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { FormInputFieldProps } from "@/types/form";
import { cn } from "@/lib/utils";
import { InputImageFile } from "../input-image-file";

export function FormInputField({
  formData,
  title,
  name = "",
  type = "text",
  className,
  value,
  format,
  inputClass,
  removeOptions = true,
  ...props
}: FormInputFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          {title && <FormLabel className="text-primary/50 break-all">{title}</FormLabel>}
          <FormControl>
            {type === "file" ? (
              <InputImageFile
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
                value={format ? format(field.value || "") : field.value}
                onChange={field.onChange}
                className={cn(
                  "disabled:bg-secondary disabled:text-primary/70 disabled:opacity-1",
                  inputClass
                )}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
