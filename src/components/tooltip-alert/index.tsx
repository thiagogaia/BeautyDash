"use client";

import { CircleAlert } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Props {
  className?: string;
  text: string;
}

export function TooltipAlert({ text, className }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip open={open} onOpenChange={setOpen}>
        <TooltipTrigger
          asChild
          className={cn("absolute -right-6 top-1 cursor-pointer", className)}
          onClick={() => setOpen(true)}
        >
          <CircleAlert className="w-4 h-4" />
        </TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
