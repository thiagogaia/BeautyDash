import Image from "next/image";

export default function ToolsPage() {
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
