import { ControllerRenderProps } from "react-hook-form";

export interface TablleCellProps {
  editData?: () => void;
  exclude?: () => void;
  className?: string;
}

export interface InputFileProps {
  field: ControllerRenderProps<any, string>;
  value: string;
  removeOptions: boolean;
}
