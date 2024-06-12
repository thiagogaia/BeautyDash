"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function EditClient() {
  return (
    <div className="flex flex-col">
      <Breadcrumb className="mt-6 mx-5 sm:mx-12">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/clients/my-clients">Meus clientes</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Editar cliente</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
