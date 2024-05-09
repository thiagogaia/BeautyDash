import TeamSwitcher from "@/components/header/team-switcher";
import { MainNav } from "@/components/header/main-nav";
import { UserNav } from "@/components/header/user-nav";
import { ModeToggle } from "@/components/header/mode-toggle";
import MobileNav from "@/components/header/mobile-nav";

export default function Header() {
  return (
    <div className="border-b sticky top-0 z-50 bg-background">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6 hidden md:flex" />
        <div className="ml-auto flex items-center space-x-4">
          <MobileNav />
          <ModeToggle />
          <UserNav />
        </div>
      </div>
    </div>
  );
}
