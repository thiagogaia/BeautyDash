"use client";

import { ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function ReturnToTop() {
  const [count, setCount] = useState(0);
  const container = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollTop;

    const checkHeight = () => {
      setCount(count + 1);

      if (container.current) {
        if (documentHeight * 1.5 > windowHeight) {
          container.current.style.opacity = "1";
          container.current.style.pointerEvents = "auto";
        } else {
          container.current.style.opacity = "0";
          container.current.style.pointerEvents = "none";
        }
      }
    };

    window.addEventListener("scroll", checkHeight);

    return () => window.removeEventListener("scroll", checkHeight);
  }, [count]);

  return (
    <TooltipProvider delayDuration={0}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span
            ref={container}
            onClick={() => scrollTo(0, 0)}
            className="bg-blue-500 text-white rounded-full p-3 fixed z-50 bottom-6 md:bottom-16 right-6 md:right-16 shadow-[0px_1px_5px_hsl(var(--primary))] cursor-pointer opacity-0 pointer-events-none transition-opacity duration-500"
          >
            <ArrowUp className="h-5 w-5 md:h-7 md:w-7" />
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>Voltar ao topo</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
