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
}

export function ListWhatsappRouter({ data }: Props) {
  const remove = () => console.log("remove");

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/6 text-left hidden xs:table-cell">Nome</TableHead>
          <TableHead className="w-3/6">Link</TableHead>
          <TableHead className="w-1/6 text-center hidden xl:table-cell">Whatsapp</TableHead>
          <TableHead className="w-1/6 text-center hidden 2xs:table-cell">Atendimentos</TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/6 text-left hidden xs:table-cell">{item.name}</TableCell>

            <TableCell className="w-3/6">{item.link}</TableCell>

            <TableCell className="w-1/6 text-center hidden xl:table-cell">
              {maskPhone(item.whatsapp)}
            </TableCell>

            <TableCell className="w-1/6 text-center hidden 2xs:table-cell">
              {item.services}
            </TableCell>

            <TableCellActions className="w-1/6 text-right" exclude={remove} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
