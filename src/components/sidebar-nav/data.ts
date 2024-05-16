const storeData = [
  { title: "home", uri: "/store" },
  { title: "banners", uri: "/store/banners" },
  { title: "configurações", uri: "/store/settings" },
  { title: "vendedores", uri: "/store/sellers" },
  { title: "área pix", uri: "/store/pix-area" },
  { title: "estatísticas", uri: "/store/statistics" },
  { title: "importar dados", uri: "/store/import-data" },
  { title: "exportar dados", uri: "/store/export-data" },
];

const productsData = [
  { title: "meus produtos", uri: "/products/my-products" },
  { title: "adicionar produto", uri: "/products/add-product" },
  { title: "categorias", uri: "/products/categories" },
  { title: "variações", uri: "/products/variations" },
];

const clientsData = [
  { title: "meus clientes", uri: "/clients/my-clients" },
  { title: "adicionar cliente", uri: "/clients/add-client" },
  { title: "etiquetas", uri: "/clients/hang-tags" },
  { title: "oportunidades", uri: "/clients/opportunities" },
];

const reportsData = [
  { title: "pedidos", uri: "/reports/requests" },
  { title: "produtos mais vendidos", uri: "/reports/top-selling-products" },
  { title: "clientes que mais compram", uri: "/reports/clients-who-buy-the-most" },
];

const toolsData = [
  { title: "texto criptografado", uri: "/tools/encrypted-text" },
  { title: "whatsapp router", uri: "/tools/whatsapp-router" },
  { title: "blog", uri: "/tools/blog" },
  { title: "tarefas", uri: "/tools/tasks" },
  { title: "cloudFlare", uri: "/tools/cloudflare" },
  { title: "dominios", uri: "/tools/domains" },
  { title: "conexões", uri: "/tools/connections" },
];

export type SidebarNavTypes =
  | "storeData"
  | "productsData"
  | "clientsData"
  | "reportsData"
  | "toolsData";

export const sidebarNavItems = { storeData, productsData, clientsData, reportsData, toolsData };
