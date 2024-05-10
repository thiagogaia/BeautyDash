"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { storeData } from "../data";

export function MainStore() {
  const { curretTopic } = useTopicsContext();

  const getCurrentTopic = storeData.find((topic) => topic.name === curretTopic);

  return <main>{getCurrentTopic?.component}</main>;
}
