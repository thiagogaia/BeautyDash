"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { Home, ShoppingBag, DollarSign, Coffee, Settings } from "lucide-react";
import { usePathname } from "next/navigation";
import data from "./data";

export default function MobileNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const pathIsTheSame = (path: string) => (pathname === path ? true : false);

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent className="pt-20 pl-12 w-3/4 xs:w-2/4">
          <nav className={cn("flex items-start flex-col gap-y-4", className)} {...props}>
            {data.map((link, index) => (
              <Link
                key={index}
                href={`/${link.uri}`}
                className={cn(
                  "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                  pathIsTheSame(`/${link.uri}`) ? "" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
