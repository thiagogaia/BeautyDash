import { AddCustomer } from "./pages/add-customer";
import { HangTags } from "./pages/hang-tags";
import { MyClients } from "./pages/my-clients";
import { Opportunities } from "./pages/opportunities";

// eslint-disable-next-line import/no-anonymous-default-export
export const customersData = [
  { name: "meus clientes", component: <MyClients /> },
  { name: "adicionar cliente", component: <AddCustomer /> },
  { name: "etiquetas", component: <HangTags /> },
  { name: "oportunidades", component: <Opportunities /> },
];
