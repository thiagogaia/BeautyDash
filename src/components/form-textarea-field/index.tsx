"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { UseFormReturn } from "react-hook-form";
import { Textarea } from "../ui/textarea";

type TextareaType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextareaProps extends TextareaType {
  formData: UseFormReturn<any>;
  title?: string;
}
export function FormTextareaField({
  formData,
  title,
  name = "",
  className,
  ...props
}: TextareaProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel>{title}</FormLabel>
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
