"use client";

import { useState } from "react";
import Filters from "./filters";
import { ListClients } from "./list-clients";

const data = [
  {
    id: "dsdsqwdsqw",
    name: "ambrósio figueiredo",
    email: "email@mail.com",
    whatsapp: "48 99999-9999",
    visits: "8/0",
    balance: "33333",
    active: true,
  },
  {
    id: "dh23ghdsh",
    name: "Jorge Silva",
    email: "lindo_email@email.com",
    whatsapp: "48 98888-8888",
    visits: undefined,
    balance: "2000",
    active: true,
  },
];

export type DataType = typeof data;
export type DataItemType = DataType[number];

export default function MyCustomer() {
  return (
    <div className="mx-5 sm:mx-12 mt-6">
      <div className="mt-6 w-full md:w-[70vw]">
        <div className="flex flex-col gap-y-4 mb-8">
          <p>Você pode bloquear o acesso à sua loja nas configuraçoes da mesma.</p>
          <p>
            Caso em &quot;Loja &gt; Configurações&quot; esteja marcado &quot;Bloquear acesso&quot;
            em personalização, então sua loja só poderá ser visualizada pelos clientes cadastrados
            aqui nesta tela.
          </p>
          <p>Além disso, é mensurado as visitas e os pedidos feitos por esse cliente.</p>
        </div>

        <Filters />

        <ListClients data={data} />
      </div>
    </div>
  );
}
