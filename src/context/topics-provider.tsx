"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TopicsContextProps, ProviderProps, TopicType } from "./types";

const TopicsContext = createContext<TopicsContextProps>({} as TopicsContextProps);

export function TopicsProvider({ children }: ProviderProps) {
  const [data, setData] = useState<TopicType[]>([]);
  const [curretTopic, setCurrentTopic] = useState<string>(data[0]?.name || "");

  useEffect(() => {
    data.length > 0 && setCurrentTopic(data[0].name);
  }, [data]);

  return (
    <TopicsContext.Provider value={{ data, setData, curretTopic, setCurrentTopic }}>
      {children}
    </TopicsContext.Provider>
  );
}

export function useTopicsContext() {
  return useContext(TopicsContext);
}
