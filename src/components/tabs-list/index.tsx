import { cn } from "@/lib/utils";

interface Props {
  currentTab: string;
  setCurrentTab: (e: string) => void;
  tabs: string[];
}

export function TabsList({ currentTab, setCurrentTab, tabs }: Props) {
  return (
    <div className="flex gap-2 mb-6 max-w-full overflow-x-auto p-1 bg-muted rounded-md">
      {tabs.map((tab) => (
        <p
          key={tab}
          onClick={() => setCurrentTab(tab)}
          className={cn(
            "flex items-center justify-center gap-x-4 w-full py-2 px-4 rounded-md text-primary/50 cursor-pointer whitespace-nowrap capitalize",
            currentTab === tab && "bg-background text-primary"
          )}
        >
          {tab}
        </p>
      ))}
    </div>
  );
}
