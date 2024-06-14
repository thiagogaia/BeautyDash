import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { EllipsisVertical } from "lucide-react";

export function TaskSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparant hover:text-primary/50">
          <EllipsisVertical className="w-5 h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="relative right-14">
        <DropdownMenuItem className="cursor-pointer">Editar</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Adiar</DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">Concluir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
