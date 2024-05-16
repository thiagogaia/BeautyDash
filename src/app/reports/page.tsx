import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Relatorios",
};

export default function ReportsPage() {
  return (
    <>
      <Image
        width="1000"
        height="1000"
        src="https://i.imgur.com/lZ85UFE.gif"
        alt="gif"
        className="w-full h-screen fixed z-[-1]"
      />
    </>
  );
}
