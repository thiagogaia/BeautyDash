import { FormSwitchFieldProps } from "@/types/form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Switch } from "../ui/switch";

export function FormSwitchField({
  formData,
  title,
  name = "",
  className,
  value,
}: FormSwitchFieldProps) {
  return (
    <FormField
      control={formData.control}
      name={name}
      render={({ field }) => (
        <FormItem className={className}>
          <div className="space-y-0.5">
            <FormLabel>{title}</FormLabel>
          </div>
          <FormControl>
            <Switch
              checked={field.value}
              defaultChecked={value}
              onCheckedChange={field.onChange}
              className="data-[state=checked]:bg-blue-500"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
