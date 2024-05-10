"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { productsData } from "../data";

export function MainProducts() {
  const { curretTopic } = useTopicsContext();

  const getCurrentTopic = productsData.find((topic) => topic.name === curretTopic);

  return <main>{getCurrentTopic?.component}</main>;
}
