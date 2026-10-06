import Link from "next/link";
import AccountNav from "../components/account-nav";

const sections = [
  {
    href: "/profile",
    label: "Profile details",
    description: "Review the email address linked to your account.",
    action: "View profile",
  },
  {
    href: "/settings",
    label: "Preferences",
    description: "Choose which updates you want to receive.",
    action: "Manage settings",
  },
];

export default function DashboardPage() {
  return (
    <section className="py-6 sm:py-10">
      <AccountNav current="/dashboard" />
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-emerald-800">Your account</p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">Overview</h1>
          <p className="mt-2 text-gray-600">Manage your profile and preferences in one place.</p>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-900">
          <span aria-hidden="true" className="size-2 rounded-full bg-emerald-700" />
          Signed in
        </span>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-md border border-gray-200 bg-white p-5 transition-colors hover:border-emerald-700 sm:p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900">{section.label}</h2>
            <p className="mt-2 text-sm leading-6 text-gray-600">{section.description}</p>
            <span className="mt-5 inline-block text-sm font-semibold text-emerald-800 group-hover:text-emerald-950">
              {section.action} <span aria-hidden="true">-&gt;</span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}