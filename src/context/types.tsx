import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

const exampleTopicData = [
  {
    name: "",
    component: <></>,
  },
];

export type TopicType = (typeof exampleTopicData)[number];

export interface TopicsContextProps {
  data: TopicType[];
  setData: (e: TopicType[]) => void;
  curretTopic: string;
  setCurrentTopic: (e: string) => void;
}
