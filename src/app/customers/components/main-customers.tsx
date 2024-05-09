"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { customersData } from "../data";

export function MainCustomers() {
  const { curretTopic } = useTopicsContext();

  const getCurrentTopic = customersData.find((topic) => topic.name === curretTopic);

  return <main>{getCurrentTopic?.component}</main>;
}
