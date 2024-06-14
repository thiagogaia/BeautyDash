"use client";

import { cn } from "@/lib/utils";
import { CircleCheckBig, ClipboardList, Clock, Loader, ScrollText } from "lucide-react";
import { DataType } from "../page";
import { TaskForm } from "./task-form";

interface Props {
  currentTab: string;
  setCurrentTab: (e: string) => void;
  tasks: DataType;
  lateTasks: DataType;
  completedTasks: DataType;
  inProgressTasks: DataType;
  className?: string;
}

export function MenuNav({
  currentTab,
  setCurrentTab,
  tasks,
  lateTasks,
  completedTasks,
  inProgressTasks,
  className,
}: Props) {
  const data = [
    {
      id: "dsadasweq",
      icon: ScrollText,
      tabName: "all",
      title: "Todas",
      dataLength: tasks.length,
    },
    {
      id: "d321x32x3q",
      icon: Loader,
      tabName: "inProgress",
      title: "Em andamento",
      dataLength: inProgressTasks.length,
    },
    {
      id: "d3123sweq",
      icon: Clock,
      tabName: "late",
      title: "Atrasadas",
      dataLength: lateTasks.length,
    },
    {
      id: "dsa2342cas",
      icon: CircleCheckBig,
      tabName: "completed",
      title: "Concluidas",
      dataLength: completedTasks.length,
    },
  ];

  return (
    <div
      className={cn(
        "bg-background border-r-2 rounded-bl-md rounded-tl-md py-12 pr-4 overflow-hidden h-full w-full",
        className
      )}
    >
      <h1 className="px-3 mb-8 flex flex-col items-center gap-2 text-xl">
        <ClipboardList className="w-8 h-8" />
        Tarefas
      </h1>

      <div className="flex justify-center pb-8">
        <TaskForm />
      </div>

      <ul className="space-y-4">
        {data.map((item) => (
          <li
            key={item.id}
            onClick={() => setCurrentTab(item.tabName)}
            className={cn(
              "flex items-center justify-between px-4 py-1 transition-all duration-400 cursor-pointer text-primary/50 hover:text-primary",
              currentTab === item.tabName &&
                "bg-muted/80 rounded-tr-2xl rounded-br-2xl text-primary"
            )}
          >
            <h3 className="flex items-center gap-x-2 p-2">
              <item.icon className="w-6 h-6" />
              <p className="whitespace-nowrap">{item.title}</p>
            </h3>
            {item.dataLength > 0 && (
              <span
                className={cn(
                  "border border-transparent px-2 rounded-full text-primary/50",
                  currentTab !== item.tabName && "border-muted"
                )}
              >
                {item.dataLength}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
