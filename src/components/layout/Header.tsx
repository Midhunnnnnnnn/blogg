'use client';

import Navigation from './Navigation';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import MobileMenu from './MobileMenu';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full px-6 py-4 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border">
      <Navigation />
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <MobileMenu />
      </div>
    </header>
  );
}
