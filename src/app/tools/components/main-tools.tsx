"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { toolsData } from "../data";

export function MainTools() {
  const { curretTopic } = useTopicsContext();

  const getCurrentTopic = toolsData.find((topic) => topic.name === curretTopic);

  return <main>{getCurrentTopic?.component}</main>;
}
