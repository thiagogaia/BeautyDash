"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { TableCell } from "../ui/table";

import { SquarePen, Trash2 } from "lucide-react";

interface Props {
  setCurrentTab: (e: string) => void;
  setCurrentData: (e: []) => void;
}

export default function TableCellOperations({ setCurrentTab, setCurrentData }: Props) {
  const edit = () => {
    setCurrentTab("add");
    setCurrentData([]);
  };

  const exclude = () => console.log("removido");

  return (
    <TableCell className="text-right">
      <div className="flex justify-end gap-x-2">
        <AlertDialog>
          <AlertDialogTrigger asChild className="cursor-pointer">
            <SquarePen />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Deseja fazer a edição dos dados?</AlertDialogTitle>
              <AlertDialogDescription>
                Clique em continuar para editar os dados.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={edit}>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog>
          <AlertDialogTrigger asChild className="cursor-pointer">
            <Trash2 />
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Você tem certeza absoluta?</AlertDialogTitle>
              <AlertDialogDescription>
                Pense com cuidado, pois essa ação não poderá ser desfeita e isso removerá
                permanentemente os dados de nossos servidores.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={exclude}>Continuar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </TableCell>
  );
}
