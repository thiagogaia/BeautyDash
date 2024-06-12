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
import { cn, maskPhone } from "@/lib/utils";
import Link from "next/link";

interface Props {
  data: DataType;
}

export function ListStores({ data }: Props) {
  const remove = () => console.log("remove cell");

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/6 whitespace-nowrap text-left hidden xsm:table-cell">
            Nome
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden xl:table-cell">
            Whatsapp
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden sm:table-cell">
            Categoria
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center table-cell">Url</TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/6 text-left hidden xsm:table-cell">
              <p className="mb-2">{item.name}</p>
              <span
                className={cn(
                  "py-1 px-2 rounded-md font-medium text-white cursor-pointer bg-blue-700",
                  item.type === "lojista" && "bg-green-700"
                )}
              >
                {item.type}
              </span>
            </TableCell>

            <TableCell className="w-1/6 text-center hidden xl:table-cell font-medium">
              {maskPhone(item.whatsapp)}
            </TableCell>

            <TableCell className="w-1/6 text-center hidden sm:table-cell">
              {item.category}
            </TableCell>

            <TableCell className="w-1/6 text-center">
              <Link
                target="_blank"
                href={`https://nuzap.com.br/${item.url}`}
                className="p-2 rounded-md font-medium text-white cursor-pointer bg-green-700 hover:bg-green-800"
              >
                {item.url}
              </Link>
            </TableCell>

            <TableCellActions className="w-1/6 text-right" exclude={remove} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
