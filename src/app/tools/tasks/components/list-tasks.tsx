"use client";

import { cn } from "@/lib/utils";
import { DataType } from "../page";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { TaskSettings } from "./task-settings";
import { Bookmark, BookmarkCheck, BookmarkX } from "lucide-react";
import { LottieIcon } from "@/components/lottie-icon";

interface Props {
  data: DataType;
}

export function ListTasks({ data }: Props) {
  const [inputSearch, setInputSearch] = useState<string>("");
  const [currentData, setCurrentData] = useState<DataType>(data);
  const [load, setLoad] = useState<boolean>(true);

  useEffect(() => {
    if (data.length > 0) {
      if (inputSearch.length > 0) {
        setCurrentData(
          data.filter((task) => task.subject.toLowerCase().includes(inputSearch.toLowerCase()))
        );
      } else {
        setCurrentData(data);
        setLoad(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch, data]);

  return (
    <div className="w-full">
      <Input
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
        placeholder="Buscar Tarefa"
        className="w-full rounded-none border-b-2 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
      {load ? (
        <div className="flex justify-center py-32">
          <LottieIcon jsonPath="/json/task-loading.json" className="w1/2" />
        </div>
      ) : (
        <ul className="px-4 pt-6 space-y-6 max-h-[calc(90vh+24px)] overflow-y-auto">
          {currentData.length > 0 ? (
            currentData.map((task, index) => (
              <li
                key={task.id}
                className={cn(
                  "flex gap-x-2 relative border-b pb-6",
                  currentData.length - 1 === index && "border-none"
                )}
              >
                <div className="py-1">
                  {task.status === "em andamento" && <Bookmark className="w-8 h-8" />}
                  {task.status === "concluida" && <BookmarkCheck className="w-8 h-8" />}
                  {task.status === "atrasada" && <BookmarkX className="w-8 h-8" />}
                </div>
                <div className="w-full">
                  <div className="flex justify-between">
                    <h3 className="font-medium text-xl">{task.subject}</h3>
                    <TaskSettings />
                  </div>
                  <span className="text-blue-500 text-sm">{task.date}</span>
                  <p className="text-primary/50 text-sm">
                    status:{" "}
                    <span
                      className={
                        task.status === "em andamento"
                          ? "text-yellow-500"
                          : task.status === "concluida"
                          ? "text-green-500"
                          : "text-red-500"
                      }
                    >
                      {task.status}
                    </span>
                  </p>
                  <p className="text-primary/50 text-sm">{task.opportunity}</p>
                </div>
              </li>
            ))
          ) : (
            <p className="flex justify-center py-20">Nenhuma tarefa encontrada</p>
          )}
        </ul>
      )}
    </div>
  );
}
