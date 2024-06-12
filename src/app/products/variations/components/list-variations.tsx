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

interface Props {
  data: DataType;
  setCurrentTab: (e: string) => void;
  setCurrentData: (e: DataType[number]) => void;
  setEditData: (e: boolean) => void;
}

export function ListVariations({ data, setEditData, setCurrentData, setCurrentTab }: Props) {
  const edit = (itemData: DataType[number]) => {
    setCurrentTab("add");
    setCurrentData(itemData);
    setEditData(true);
  };

  const remove = () => console.log("remove");

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/4 whitespace-nowrap text-left">Nome</TableHead>

          <TableHead className="w-1/4 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/4 text-left">{item.name}</TableCell>

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
