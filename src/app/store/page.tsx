import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";

export const metadata: Metadata = {
  title: "Loja",
};

const topics = [
  "home",
  "banners",
  "configurações",
  "vendedores",
  "área pix",
  "estatísticas",
  "importar dados",
  "exportar dados",
];

export default function StorePage() {
  return (
    <div className="flex-col md:flex">
      <Header />

      <div className="flex">
        <LateralMenu topics={topics} />
      </div>
    </div>
  );
}
