"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const siteLinks = [
  { href: "/display", label: "Display" },
  { href: "/about", label: "About" },
  { href: "/product", label: "Product" },
  { href: "/contact", label: "Contact" },
];

const accountLinks = [
  { href: "/dashboard", label: "Dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const isAccountActive = ["/dashboard", "/profile", "/settings"].some(isActive);

  const desktopLinkClass = (href) =>
    `rounded px-3 py-2 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-emerald-50 text-emerald-900"
        : "text-gray-600 hover:bg-gray-100 hover:text-gray-950"
    }`;

  const mobileLinkClass = (href) =>
    `flex min-h-11 items-center rounded px-3 text-sm font-medium transition-colors ${
      isActive(href)
        ? "bg-emerald-50 text-emerald-900"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav aria-label="Main navigation" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 text-xl font-bold text-gray-950">
          <span aria-hidden="true" className="size-2.5 rounded-sm bg-emerald-800" />
          MySite
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <ul aria-label="Site pages" className="flex items-center gap-1">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  prefetch={false}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={desktopLinkClass(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <span aria-hidden="true" className="h-6 w-px bg-gray-200" />

          <ul aria-label="Dashboard" className="flex items-center gap-1">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Link
                  prefetch={false}
                  href={link.href}
                  aria-current={isAccountActive ? "page" : undefined}
                  className={desktopLinkClass(isAccountActive ? pathname : link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            prefetch={false}
            href="/login"
            aria-current={isActive("/login") ? "page" : undefined}
            className={`rounded px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${
              isActive("/login")
                ? "bg-emerald-900 text-white"
                : "bg-emerald-800 text-white hover:bg-emerald-900"
            }`}
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          className="flex size-10 flex-col items-center justify-center gap-1.5 rounded text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 lg:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      <div id="mobile-navigation" hidden={!open} className="border-t border-gray-200 px-4 py-4 lg:hidden">
          <p className="mb-2 text-xs font-semibold uppercase text-gray-500">Site</p>
          <ul className="grid grid-cols-2 gap-1">
            {siteLinks.map((link) => (
              <li key={link.href}>
                <Link
                  prefetch={false}
                  href={link.href}
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={mobileLinkClass(link.href)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <p className="mb-2 mt-4 text-xs font-semibold uppercase text-gray-500">Dashboard</p>
          <ul className="grid grid-cols-2 gap-1">
            {accountLinks.map((link) => (
              <li key={link.href}>
                <Link
                  prefetch={false}
                  href={link.href}
                  aria-current={isAccountActive ? "page" : undefined}
                  className={mobileLinkClass(isAccountActive ? pathname : link.href)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                prefetch={false}
                href="/login"
                aria-current={isActive("/login") ? "page" : undefined}
                className="flex min-h-11 items-center rounded bg-emerald-800 px-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-900"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </li>
          </ul>
      </div>
    </header>
  );
}