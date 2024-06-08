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

import { formatPrice, maskPhone } from "@/lib/utils";
import { DataType } from "./page";

interface Props {
  data: DataType;
}

export function ListClients({ data }: Props) {
  const edit = () => {
    console.log("edit");
  };
  const remove = () => {
    console.log("remove");
  };

  return (
    <Table className="mt-8 mb-16">
      <TableHeader className="bg-secondary/40">
        <TableRow>
          <TableHead className="w-1/6 whitespace-nowrap text-left">Nome</TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden lg:table-cell">
            Email
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden xl:table-cell">
            Whatsapp
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden xs:table-cell">
            Visitas/pedidos
          </TableHead>
          <TableHead className="w-1/6 whitespace-nowrap text-center hidden xsm:table-cell">
            Saldo
          </TableHead>
          <TableHead className="w-1/6 text-right">Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.id}>
            <TableCell className="w-1/6 text-left">{item.name}</TableCell>

            <TableCell className="w-1/6 text-center font-medium hidden lg:table-cell">
              {item.email}
            </TableCell>

            <TableCell className="w-1/6 text-center font-medium hidden xl:table-cell">
              {maskPhone(item.whatsapp)}
            </TableCell>

            <TableCell className="w-1/6 text-center font-medium hidden xs:table-cell">
              {item.visits || "0/0"}
            </TableCell>

            <TableCell className={"w-1/6 text-center font-medium hidden xsm:table-cell"}>
              {formatPrice(item.balance)}
            </TableCell>

            <TableCellActions className="w-1/6 text-right" editData={edit} exclude={remove} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
