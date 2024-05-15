"use client";

import Image from "next/image";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import TableCellActions from "@/components/table-cell-actions";

export function ListBanners() {
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
        {[...new Array(6)].map((_, index) => (
          <TableRow key={index}>
            <TableCell className="w-1/4 text-left">
              <Image
                alt="Product image"
                className="aspect-square rounded-md object-cover"
                height="64"
                src="https://i.imgur.com/LMW80fm.jpg"
                width="64"
              />
            </TableCell>

            <TableCell className="w-2/6 text-center hidden xsm:table-cell font-medium">
              <p className="truncate-vertical">
                Título legal - Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                reiciendis doloribus, numquam sapiente at, et nobis natus explicabo reprehenderit
                nemo veritatis blanditiis voluptatibus omnis praesentium eveniet ut, voluptatem
                eaque? Sapiente.
              </p>
            </TableCell>

            <TableCell className="w-2/6 text-center hidden sm:table-cell">
              <p className="truncate-vertical">
                Descrição bem pensada - Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Dolorem quis enim, similique obcaecati beatae praesentium tempore nam hic inventore,
                quo nulla labore dignissimos natus! Dolorem beatae sit asperiores libero vel!
              </p>
            </TableCell>

            <TableCellActions
              className="w-1/4 text-right"
              setCurrentTab={() => {}}
              setCurrentData={() => {}}
            />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
