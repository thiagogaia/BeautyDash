import { Metadata } from "next";

import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Loja",
};

export default function StorePage() {
  return (
    <div className="flex-col md:flex">
      <Header />
    </div>
  );
}
