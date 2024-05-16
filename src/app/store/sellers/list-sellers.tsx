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
import { DataType } from "./page";

interface Props {
  data: DataType;
  setCurrentTab: (e: string) => void;
  setCurrentData: (e: DataType[number]) => void;
  setEditData: (e: boolean) => void;
}

export function ListSellers({ data, setEditData, setCurrentData, setCurrentTab }: Props) {
  const edit = (itemData: DataType[number]) => {
    setCurrentTab("add");
    setCurrentData(itemData);
    setEditData(true);
  };

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/6 whitespace-nowrap text-left">Nome</TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden xsm:table-cell">
            Whatsapp
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden sm:table-cell">
            Atendimentos
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden sm:table-cell">
            Pedidos Recebidos
          </TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/6 text-left">{item.name}</TableCell>

            <TableCell className="w-1/6 text-center hidden xsm:table-cell font-medium">
              {item.whatsapp}
            </TableCell>

            <TableCell className="w-1/6 text-center hidden sm:table-cell">
              {item.services || 0}
            </TableCell>

            <TableCell className="w-1/6 text-center hidden sm:table-cell">
              {item.ordersReceived || 0}
            </TableCell>

            <TableCellActions className="w-1/6 text-right" editData={() => edit(item)} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
