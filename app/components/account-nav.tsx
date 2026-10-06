import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Overview" },
  { href: "/profile", label: "Profile" },
  { href: "/settings", label: "Settings" },
] as const;

export default function AccountNav({ current }: { current: string }) {
  return (
    <nav aria-label="Account pages" className="mb-8 flex flex-col gap-2 border-b border-gray-200 pb-3 sm:flex-row sm:items-center sm:justify-between">
      <span className="text-xs font-semibold uppercase text-gray-500">Dashboard</span>
      <ul className="flex flex-wrap gap-1">
        {links.map((link) => {
          const active = current === link.href;

          return (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`block rounded px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800 ${
                  active
                    ? "bg-emerald-50 text-emerald-900"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}