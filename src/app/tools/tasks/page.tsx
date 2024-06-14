"use client";

import { useEffect, useState } from "react";
import { MenuNav } from "./components/menu-nav";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { ListTasks } from "./components/list-tasks";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const data = [
  {
    id: "1",
    subject: "tarefa",
    opportunity: "Jorge Silva - jorge@mail.com",
    status: "atrasada",
    type: "email",
    date: "13/06/2024 10h30",
  },
  {
    id: "2",
    subject: "teste",
    opportunity: "Ambrósio figueiredo - ambrosio@mail.com",
    status: "concluida",
    type: "whatsapp",
    date: "13/06/2024 10h30",
  },
  {
    id: "3",
    subject: "outro teste",
    opportunity: "Jorge Silva - jorge@mail.com",
    status: "em andamento",
    type: "task",
    date: "13/06/2024 10h30",
  },

  {
    id: "11",
    subject: "jogar com jorge",
    opportunity: "Ambrósio figueiredo - ambrosio@mail.com",
    status: "atrasada",
    type: "email",
    date: "13/06/2024 10h30",
  },
  {
    id: "22",
    subject: "almoçar",
    opportunity: "Ambrósio figueiredo - ambrosio@mail.com",
    status: "concluida",
    type: "whatsapp",
    date: "13/06/2024 10h30",
  },
  {
    id: "33",
    subject: "teste de jogo",
    opportunity: "Jorge Silva - jorge@mail.com",
    status: "em andamento",
    type: "task",
    date: "13/06/2024 10h30",
  },

  {
    id: "111",
    subject: "jogar com ambrósio",
    opportunity: "Jorge Silva - jorge@mail.com",
    status: "atrasada",
    type: "email",
    date: "13/06/2024 10h30",
  },
  {
    id: "222",
    subject: "falar com jorge",
    opportunity: "Ambrósio figueiredo - ambrosio@mail.com",
    status: "concluida",
    type: "whatsapp",
    date: "13/06/2024 10h30",
  },
  {
    id: "333",
    subject: "outro teste",
    opportunity: "Jorge Silva - jorge@mail.com",
    status: "concluida",
    type: "task",
    date: "13/06/2024 10h30",
  },
];

export type DataType = typeof data;

export default function Tasks() {
  const [tasks, setTasks] = useState<DataType>([]);
  const [lateTasks, setLateTasks] = useState<DataType>([]);
  const [completedTasks, setCompletedTasks] = useState<DataType>([]);
  const [inProgressTasks, setInProgressTasks] = useState<DataType>([]);
  const [currentTab, setCurrentTab] = useState("all");

  useEffect(() => {
    setTasks(data);
    setLateTasks(data.filter((e) => e.status === "atrasada"));
    setCompletedTasks(data.filter((e) => e.status === "concluida"));
    setInProgressTasks(data.filter((e) => e.status === "em andamento"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex w-[90%] md:w-[75vw] h-screen my-4 mx-auto border-2 rounded-md relative">
      <div className="hidden 3xs:block">
        <MenuNav
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          tasks={tasks}
          lateTasks={lateTasks}
          completedTasks={completedTasks}
          inProgressTasks={inProgressTasks}
        />
      </div>

      <div className="3xs:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" className="rounded-none border-b-2 rounded-tl-md">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <MenuNav
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
              tasks={tasks}
              lateTasks={lateTasks}
              completedTasks={completedTasks}
              inProgressTasks={inProgressTasks}
              className="border-r-0"
            />
          </SheetContent>
        </Sheet>
      </div>

      <Tabs
        defaultValue={currentTab}
        value={currentTab}
        onValueChange={setCurrentTab}
        className="w-full"
      >
        <TabsContent value="all" className="mt-0">
          <ListTasks data={tasks} />
        </TabsContent>

        <TabsContent value="late" className="mt-0">
          <ListTasks data={lateTasks} />
        </TabsContent>
        <TabsContent value="inProgress" className="mt-0">
          <ListTasks data={inProgressTasks} />
        </TabsContent>

        <TabsContent value="completed" className="mt-0">
          <ListTasks data={completedTasks} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
