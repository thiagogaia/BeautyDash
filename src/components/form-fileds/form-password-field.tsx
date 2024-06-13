"use client";

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormInputFieldProps } from "@/types/form";

export function FormPasswordField({
  formData,
  title,
  placeholder,
  name = "",
  className,
  inputClass,
  ...props
}: FormInputFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel className="text-primary/50">{title}</FormLabel>
          <FormControl>
            <div className="relative">
              <Input
                placeholder={placeholder}
                {...field}
                type={!showPassword ? "password" : "text"}
                className={inputClass}
                {...props}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2">
                <p
                  className="cursor-pointer text-primary/50"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? <Eye className="w-5 h-5" /> : <EyeOff className="w-5 h-5" />}
                </p>
              </div>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
