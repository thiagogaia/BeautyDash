"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Textarea } from "../ui/textarea";
import { FormTextareaFieldProps } from "@/types/form";

export function FormTextareaField({
  formData,
  title,
  name = "",
  className,
  ...props
}: FormTextareaFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-primary/50">{title}</FormLabel>
          <FormControl>
            <Textarea
              placeholder="Tell us a little bit about yourself"
              className="resize-none"
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
