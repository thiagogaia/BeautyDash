"use client";

import Filters from "@/components/filters";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatPrice } from "@/lib/utils";

const data = [
  {
    id: "dsdsqwdsqw",
    client: "Adamastor",
    lastPurchase: "casaco",
    totalAmount: "5",
    totalValue: "1235400",
  },
  {
    id: "dh23ghdsh",
    client: "Jorge",
    lastPurchase: "calça",
    totalAmount: "2",
    totalValue: "1235400",
  },
];

export default function ClientsWhoBuyTheMost() {
  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="w-full md:w-[70vw]">
        <Filters />

        <Table className="mt-8 mb-16">
          <TableHeader className="bg-secondary/40">
            <TableRow>
              <TableHead className="w-1/6 text-left">Cliente</TableHead>
              <TableHead className="w-1/6 text-center hidden xs:table-cell">
                Ultima compra
              </TableHead>
              <TableHead className="w-1/6 text-center hidden xs:table-cell">Qtd. total</TableHead>
              <TableHead className="w-1/6 text-right ">Vlr. total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="w-1/6 text-left">{item.client}</TableCell>

                <TableCell className="w-1/6 text-center hidden xs:table-cell">
                  {item.lastPurchase}
                </TableCell>

                <TableCell className="w-1/6 text-center hidden xs:table-cell">
                  {item.totalAmount}
                </TableCell>

                <TableCell className="w-1/6 text-right">{formatPrice(item.totalValue)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
