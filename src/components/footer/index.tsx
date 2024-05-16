import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex items-center justify-between p-5 bg-foreground/5">
      <p>Copyright &copy; {currentYear} Nuzap, Todos os direitos reservados.</p>
      <p className="flex gap-x-2 items-center">
        Feito com <Heart color="#e7515a" fill="#fe86af" className="h-5" />
      </p>
    </footer>
  );
}
