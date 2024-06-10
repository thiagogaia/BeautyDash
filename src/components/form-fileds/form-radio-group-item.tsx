import { cn } from "@/lib/utils";
import { FormControl, FormItem, FormLabel } from "../ui/form";
import { RadioGroupItem } from "../ui/radio-group";
import { TooltipAlert } from "../tooltip-alert";
import { FormRadioGroupItemProps } from "@/types/form";

export function FormRadioGroupItem({ field, value, label, alertText }: FormRadioGroupItemProps) {
  return (
    <FormItem className="flex items-center space-x-3 space-y-0">
      <FormControl>
        <RadioGroupItem
          value={value}
          className={cn(
            "focus-visible:ring-0 focus-visible:ring-offset-0 hover:bg-zinc-100 hover:dark:bg-zinc-900",
            field.value === value && "radio-group-checked"
          )}
        />
      </FormControl>
      <div className="relative">
        <FormLabel className="font-normal capitalize cursor-pointer text-primary/50">
          {label}
        </FormLabel>
        {alertText && <TooltipAlert text={alertText} />}
      </div>
    </FormItem>
  );
}
