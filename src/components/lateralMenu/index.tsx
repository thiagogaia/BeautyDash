"use client";

import { useEffect } from "react";
import { useTopicsContext } from "@/context/topics-provider";
import { TopicType } from "@/context/types";
import { cn } from "@/lib/utils";

interface LateralMenuProps {
  topics: TopicType[];
}

export default function LateralMenu({ topics }: LateralMenuProps) {
  const { curretTopic, setCurrentTopic, setData, data } = useTopicsContext();

  useEffect(() => {
    setData(topics);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="bg-[hsl(var(--secondary)/50%)] capitalize flex flex-row w-full overflow-x-auto md:min-h-screen md:flex-col md:py-8 md:w-1/5 hide-scrollbar">
      {data.map((topic, index) => (
        <span
          key={index}
          onClick={() => setCurrentTopic(topic.name)}
          className={cn(
            "border-transparent py-2 px-3 border-b-4 whitespace-nowrap hover:cursor-pointer md:whitespace-normal md:py-3 md:px-8 md:border-l-4 md:border-b-0 hover:bg-[hsl(var(--foreground)/10%)] hover:border-[hsl(var(--foreground)/50%)]",
            curretTopic === topic.name
              ? "bg-[hsl(var(--foreground)/10%)] border-[hsl(var(--foreground)/50%)]"
              : "bg-transparent"
          )}
        >
          <p>{topic.name}</p>
        </span>
      ))}
    </aside>
  );
}
