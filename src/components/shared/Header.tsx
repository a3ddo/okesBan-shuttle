// app/components/Header.tsx
'use client';

import Link from 'next/link';

/**
 * Shared Header component with glassmorphic backdrop
 */
export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/10 backdrop-blur-md border-b border-white/20 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3">
          <span className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight">
            OkesBan
          </span>
        </Link>
        {/* Placeholder for future nav items or user actions */}
        <nav>
          {/* Example:
          <Link href="/services" className="text-white hover:text-blue-200 transition">
            Services
          </Link>
          */}
        </nav>
      </div>
    </header>
  );
}
