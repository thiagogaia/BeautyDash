import { FormCheckboxFieldProps } from "@/types/form";
import { Checkbox } from "../ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { cn } from "@/lib/utils";

export function FormCheckboxField({
  formData,
  name = "",
  title,
  className,
}: FormCheckboxFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex items-center gap-x-3", className)}>
          <FormControl>
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:checkbox-checked"
            />
          </FormControl>
          <FormLabel
            className="text-sm text-primary/50 font-medium cursor-pointer"
            style={{ margin: 0 }}
          >
            {title}
          </FormLabel>
        </FormItem>
      )}
    />
  );
}
