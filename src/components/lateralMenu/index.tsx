"use client";

import { useTopicsContext } from "@/context/topics-provider";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

interface LateralMenuProps {
  topics: string[];
}

export default function LateralMenu({ topics }: LateralMenuProps) {
  const { curretTopic, setCurrentTopic, setData, data } = useTopicsContext();

  useEffect(() => {
    setData(topics);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <aside className="bg-[hsl(var(--secondary)/50%)] h-screen flex flex-col py-8 capitalize w-1/5">
      {data.map((topic, index) => (
        <span
          key={index}
          onClick={() => setCurrentTopic(topic)}
          className={cn(
            "py-3 px-8 border-l-4 border-transparent hover:cursor-pointer hover:bg-[hsl(var(--foreground)/10%)]  hover:border-[hsl(var(--foreground)/50%)]",
            curretTopic === topic
              ? "bg-[hsl(var(--foreground)/10%)] border-[hsl(var(--foreground)/50%)]"
              : "bg-transparent"
          )}
        >
          <p>{topic}</p>
        </span>
      ))}
    </aside>
  );
}
