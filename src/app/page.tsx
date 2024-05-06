import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Image
        width="1000"
        height="1000"
        src="https://i.imgur.com/lZ85UFE.gif"
        alt="gif"
        className="w-full h-screen"
      />
    </div>
  );
}
