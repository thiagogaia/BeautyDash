"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TopicsContextProps, ProviderProps } from "./types";

const TopicsContext = createContext<TopicsContextProps>({} as TopicsContextProps);

export function TopicsProvider({ children }: ProviderProps) {
  const [data, setData] = useState<string[]>([]);
  const [curretTopic, setCurrentTopic] = useState<string>(data[0] || "");

  useEffect(() => {
    data.length > 0 && setCurrentTopic(data[0]);
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
