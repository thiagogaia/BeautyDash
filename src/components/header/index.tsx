import TeamSwitcher from "@/components/header/team-switcher";
import { MainNav } from "@/components/header/main-nav";
import { UserNav } from "@/components/header/user-nav";
import { ModeToggle } from "@/components/header/mode-toggle";

export default function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
