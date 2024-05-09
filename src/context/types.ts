import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export interface TopicsContextProps {
  data: string[];
  setData: (e: string[]) => void;
  curretTopic: string;
  setCurrentTopic: (e: string) => void;
}
