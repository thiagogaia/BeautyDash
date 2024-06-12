import { ControllerRenderProps, UseFormReturn } from "react-hook-form";

export type InputType = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface FormFieldProps {
  formData: UseFormReturn<any>;
  title?: string;
}

export interface FormDataFieldProps extends InputType, FormFieldProps {}

export interface FormInputFieldProps extends InputType, FormFieldProps {
  removeOptions?: boolean;
  format?: (e: string) => string;
  inputClass?: string;
}

export interface FormSelectFieldProps extends InputType, FormFieldProps {
  data: string[];
}

export interface FormTextareaFieldProps extends TextareaType, FormFieldProps {}

export interface FormSwitchFieldProps extends FormFieldProps {
  name: string;
  className?: string;
  value?: boolean;
}
export interface FormRadioGroupItemProps {
  field: ControllerRenderProps<any, string>;
  value: string;
  label: string;
  alertText?: string;
}
