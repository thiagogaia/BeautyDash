"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { usePathname } from "next/navigation";
import data from "./data";

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const pathIsTheSame = (path: string) => (pathname === path ? true : false);

  return (
    <nav className={cn("flex items-center space-x-4 lg:space-x-6", className)} {...props}>
      {data.map((link, index) => (
        <Link
          key={index}
          href={`/${link.uri}`}
          className={cn(
            "text-sm flex font-medium items-center gap-2 transition-colors hover:text-primary capitalize",
            pathIsTheSame(`/${link.uri}`) ? "" : "text-muted-foreground"
          )}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
