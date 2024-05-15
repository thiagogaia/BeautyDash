"use client";

import Image from "next/image";
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
}

export function ListBanners({ data, setCurrentData, setCurrentTab }: Props) {
  const edit = (itemData: DataType[number]) => {
    setCurrentTab("add");
    setCurrentData(itemData);
  };

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/6 text-left">Imagem</TableHead>
          <TableHead className="w-1/6 text-center hidden xsm:table-cell">Título</TableHead>
          <TableHead className="w-3/6 text-center hidden sm:table-cell">Descrição</TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/4 text-left">
              <Image
                className="aspect-square rounded-md max-h-[64px] object-cover"
                height="64"
                src={item.imageDesktop || "https://i.imgur.com/jhryimF.jpg"}
                alt={item.title}
                width="100"
              />
            </TableCell>

            <TableCell className="w-2/6 text-center hidden xsm:table-cell font-medium">
              <p className="truncate-vertical">{item.title}</p>
            </TableCell>

            <TableCell className="w-2/6 text-center hidden sm:table-cell">
              <p className="truncate-vertical">{item.description}</p>
            </TableCell>

            <TableCellActions className="w-1/4 text-right" editData={() => edit(item)} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
