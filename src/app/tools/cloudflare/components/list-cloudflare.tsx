"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableCellActions from "@/components/table-cell-actions";
import { DataType } from "../page";
import { cn } from "@/lib/utils";

interface Props {
  data: DataType;
  setCurrentTab: (e: string) => void;
  setCurrentData: (e: DataType[number]) => void;
  setEditData: (e: boolean) => void;
}

export function ListCloudflare({ data, setEditData, setCurrentData, setCurrentTab }: Props) {
  const edit = (itemData: DataType[number]) => {
    setCurrentTab("add");
    setCurrentData(itemData);
    setEditData(true);
  };

  const remove = () => console.log("remove cell");

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/4 whitespace-nowrap text-left">Conta</TableHead>
          <TableHead className="w-1/4 whitespace-nowrap text-center hidden xsm:table-cell">
            Status
          </TableHead>
          <TableHead className="w-1/4 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/4 text-left">{item.account}</TableCell>

            <TableCell className={"w-1/4 text-center hidden xsm:table-cell"}>
              <span
                className={cn(
                  "border p-1.5 border-red-900 bg-red-300 text-red-950 font-bold rounded-lg",
                  item.active && "border-green-900 bg-green-300 text-green-950"
                )}
              >
                {item.active ? "ativo" : "inativo"}
              </span>
            </TableCell>

            <TableCellActions
              className="w-1/4 text-right"
              editData={() => edit(item)}
              exclude={remove}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
