import { Button } from "@/components/ui/button";

export function Welcome() {
  return (
    <div className="flex flex-col items-center py-36">
      <div className="border shadow-[-5px_5px_15px_hsla(var(--primary)/10%)] rounded-md p-5 space-y-6">
        <h1>Bem-vindo</h1>
        <p>Clique no botão abaixo para criar seu primeiro pipeline.</p>

        <Button className="bg-blue-700 hover:bg-blue-500 text-white">Novo funil</Button>
      </div>
    </div>
  );
}
