"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { reportsData } from "../data";

export function MainReports() {
  const { curretTopic } = useTopicsContext();

  const getCurrentTopic = reportsData.find((topic) => topic.name === curretTopic);

  return <main>{getCurrentTopic?.component}</main>;
}
