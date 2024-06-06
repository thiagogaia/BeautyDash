import { UseFormReturn } from "react-hook-form";

export type InputType = React.InputHTMLAttributes<HTMLInputElement>;
export type TextareaType = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export interface FormFieldProps {
  formData: UseFormReturn<any>;
  title?: string;
}

export interface FormDataFieldProps extends InputType, FormFieldProps {}

export interface FormInputFieldProps extends InputType, FormFieldProps {
  removeOptions?: boolean;
}

export interface FormSelectFieldProps extends InputType, FormFieldProps {}

export interface FormTextareaFieldProps extends TextareaType, FormFieldProps {}
