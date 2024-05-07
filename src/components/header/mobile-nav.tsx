"use client";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import Link from "next/link";
import { cn } from "@/lib/utils";

import { Home, ShoppingBag, DollarSign, Coffee, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

export default function MobileNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname();
  const pathIsTheSame = (path: string) => (pathname === path ? true : false);

  return (
    <div className="2md:hidden">
      <Sheet>
        <SheetTrigger>
          <Button variant="ghost" className="p-0 hover:bg-transparent">
            <Menu />
          </Button>
        </SheetTrigger>

        <SheetContent className="pt-20 w-3/4 xs:w-2/4">
          <nav className={cn("flex items-start flex-col gap-y-4", className)} {...props}>
            <Link
              href="/dashboard"
              className={cn(
                "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                pathIsTheSame("/dashboard") ? "" : "text-muted-foreground"
              )}
            >
              <Home className="h-5" />
              Home
            </Link>
            <Link
              href="/dashboard/products"
              className={cn(
                "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                pathIsTheSame("/dashboard/products") ? "" : "text-muted-foreground"
              )}
            >
              <ShoppingBag className="h-5" />
              Produtos
            </Link>
            <Link
              href="/dashboard/reports"
              className={cn(
                "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                pathIsTheSame("/dashboard/reports") ? "" : "text-muted-foreground"
              )}
            >
              <DollarSign className="h-5" />
              Relatorios
            </Link>
            <Link
              href="/dashboard/tools"
              className={cn(
                "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                pathIsTheSame("/dashboard/tools") ? "" : "text-muted-foreground"
              )}
            >
              <Coffee className="h-5" />
              Ferramentas
            </Link>
            <Link
              href="/dashboard/settings"
              className={cn(
                "text-sm flex font-medium text-xl items-center gap-2 transition-colors hover:text-primary",
                pathIsTheSame("/dashboard/settings") ? "" : "text-muted-foreground"
              )}
            >
              <Settings className="h-5" />
              Configurações
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
