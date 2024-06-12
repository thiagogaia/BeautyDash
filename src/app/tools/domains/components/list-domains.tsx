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
import { maskPhone } from "@/lib/utils";

interface Props {
  data: DataType;
  setCurrentTab: (e: string) => void;
  setCurrentData: (e: DataType[number]) => void;
  setEditData: (e: boolean) => void;
}

export function Listdomains({ data, setCurrentData, setCurrentTab, setEditData }: Props) {
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
          <TableHead className="w-1/6 text-left hidden xs:table-cell">Nome</TableHead>
          <TableHead className="w-3/6">Link</TableHead>
          <TableHead className="w-1/6 text-center hidden xl:table-cell">Desde</TableHead>
          <TableHead className="w-1/6 text-center hidden 2xs:table-cell">Acessos</TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/6 text-left hidden xs:table-cell">{item.name}</TableCell>

            <TableCell className="w-3/6">{item.link}</TableCell>

            <TableCell className="w-1/6 text-center hidden xl:table-cell">{item.since}</TableCell>

            <TableCell className="w-1/6 text-center hidden 2xs:table-cell">{item.access}</TableCell>

            <TableCellActions
              className="w-1/6 text-right"
              editData={() => edit(item)}
              exclude={remove}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
