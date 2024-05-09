import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";
import { MainStore } from "./components/main-store";
import { storeData } from "./data";

export const metadata: Metadata = {
  title: "Loja",
};

export default function StorePage() {
  return (
    <div className="flex-col md:flex">
      <Header />

      <div className="flex">
        <LateralMenu topics={storeData} />

        <MainStore />
      </div>
    </div>
  );
}
