import { ModeToggle } from "@/components/ui/toggle-theme";
import Link from "next/link";
import MobileNavbar from "./mobileNavbar";

interface NavLink {
  href: string;
  label: string;
}

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export default function Navbar() {
  // Array for navigation links
  const navLinks: NavLink[] = [
    { href: '/docs', label: 'Docs' },
    { href: '/support', label: 'Support' }
  ];

  return (
    <nav className="flex bg-background border-b justify-between items-center py-4 w-full gap-2">
      <Link href='/'>
        <h1 className="font-bold  cursor-pointer text-xl text-muted-foreground">RagProVision</h1>
      </Link>
      <ul className="hidden md:flex gap-2">
        {/* Mapping through navLinks array */}
        {navLinks.map((link, index) => (
          <NavItem key={index} href={link.href}>{link.label}</NavItem>
        ))}
      </ul>
      <div className="flex gap-4">
        <ModeToggle />
        <MobileNavbar />
      </div>
    </nav>
  );
}

function NavItem({ href, children }: NavItemProps) {
  return (
    <li className="font-semibold border rounded py-1 px-5 text-muted-foreground hover:text-foreground hover:border-foreground transition-all cursor-pointer">
      <Link href={href}>
        <p>{children}</p>
      </Link>
    </li>
  );
}