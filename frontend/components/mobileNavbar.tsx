'use client'

import { Menu } from 'lucide-react'
import Link from "next/link";
import { useState } from "react";
import { Button } from './ui/button';

const MobileNavbar = () => {
  // State for controlling the menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex gap-4 relative">
        <Button onClick={toggleMenu} className="block md:hidden bg-background hover:bg-background text-primary border-secondary border">
          <Menu size={20} />
        </Button>
        {isMenuOpen && (
          <div className="absolute right-0 mt-10 py-2 w-48 bg-background border border-background rounded-lg shadow-xl z-10">
            {/* Menu items go here */}
            <Link href="/docs">
              <p className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary">Docs</p>
            </Link>
            <Link href="/playground">
              <p className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary">Playground</p>
            </Link>
            <Link href="/support">
              <p className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-secondary">Support</p>
            </Link>
          </div>
        )}
    </div>
  )
}

export default MobileNavbar