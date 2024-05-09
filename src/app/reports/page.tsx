import { Metadata } from "next";

import Header from "@/components/header";
import LateralMenu from "@/components/lateralMenu";
import { reportsData } from "./data";
import { MainReports } from "./components/main-reports";

export const metadata: Metadata = {
  title: "Relatorios",
};

export default function ReportsPage() {
  return (
    <>
      <Header />
      <div className="flex">
        <LateralMenu topics={reportsData} />

        <MainReports />
      </div>
    </>
  );
}
