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
    product: "casaco",
    quantityOrdered: "5",
    orderValue: "12432",
  },
  {
    id: "dh23ghdsh",
    product: "calça",
    quantityOrdered: "2",
    orderValue: "1235433",
  },
];

export default function TopSellingProducts() {
  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="w-full md:w-[70vw]">
        <Filters />

        <Table className="mt-8 mb-16">
          <TableHeader className="bg-secondary/40">
            <TableRow>
              <TableHead className="w-1/6 text-left">Produto</TableHead>
              <TableHead className="w-1/6 text-center hidden xs:table-cell">Qtd. pedidos</TableHead>
              <TableHead className="w-1/6 text-right ">Vlr. pedidos</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="w-1/6 text-left">{item.product}</TableCell>

                <TableCell className="w-1/6 text-center hidden xs:table-cell">
                  {item.quantityOrdered}
                </TableCell>

                <TableCell className="w-1/6 text-right">{formatPrice(item.orderValue)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
