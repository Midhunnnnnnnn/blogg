'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Remove 'as const' when using Array<> type - they conflict
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex gap-6">
      {navItems.map(({ href, label }) => (
        <Link
          key={href}
          href={href} // No type assertion needed now
          className={`text-sm font-medium hover:text-foreground transition-colors ${
            pathname === href ? 'text-foreground' : 'text-muted-foreground'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}