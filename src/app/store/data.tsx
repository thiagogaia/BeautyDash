import { Banners } from "./pages/banners";
import { ExportData } from "./pages/export-data";
import { Home } from "./pages/home";
import { ImportData } from "./pages/import-data";
import { PixArea } from "./pages/pix-area";
import { Sellers } from "./pages/sellers";
import { Settings } from "./pages/settings";
import { Statistics } from "./pages/statistics";

// eslint-disable-next-line import/no-anonymous-default-export
export const storeData = [
  { name: "home", component: <Home /> },
  { name: "banners", component: <Banners /> },
  { name: "configurações", component: <Settings /> },
  { name: "vendedores", component: <Sellers /> },
  { name: "área pix", component: <PixArea /> },
  { name: "estatísticas", component: <Statistics /> },
  { name: "importar dados", component: <ImportData /> },
  { name: "exportar dados", component: <ExportData /> },
];
