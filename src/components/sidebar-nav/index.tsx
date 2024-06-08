"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { SidebarNavTypes, sidebarNavItems } from "./data";

export default function SidebarNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();

  const dataName = Object.keys(sidebarNavItems).find(
    (e) => e === `${pathname.split("/")[1]}Data`
  ) as SidebarNavTypes;

  const items = sidebarNavItems[dataName] || [];

  return (
    <nav
      className={cn(
        "bg-secondary/50 capitalize flex flex-row w-full overflow-x-auto md:min-h-screen md:flex-col md:py-8 md:w-1/5 hide-scrollbar",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.uri}
          href={item.uri}
          className={cn(
            "border-transparent py-2 px-3 border-b-4 whitespace-nowrap hover:cursor-pointer md:whitespace-normal md:py-3 md:px-8 md:border-l-4 md:border-b-0 hover:bg-foreground/10 hover:border-foreground/50",
            pathname.includes(item.uri) ? "bg-foreground/10 border-foreground/50" : "bg-transparent"
          )}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
}
