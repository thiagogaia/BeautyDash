import topics from "@/app/store/components/data";
import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export type TopicType = (typeof topics)[number];

export interface TopicsContextProps {
  data: TopicType[];
  setData: (e: TopicType[]) => void;
  curretTopic: string;
  setCurrentTopic: (e: string) => void;
}
