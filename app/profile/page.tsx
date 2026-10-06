import { cookies } from "next/headers";
import AccountNav from "../components/account-nav";

export default async function ProfilePage() {
  const email = (await cookies()).get("demo-email")?.value;

  return (
    <section className="py-6 sm:py-10">
      <AccountNav current="/profile" />
      <div>
        <p className="text-sm font-semibold uppercase text-emerald-800">Your account</p>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">Profile</h1>
        <p className="mt-2 text-gray-600">The contact details associated with this session.</p>
      </div>

      <div className="mt-8 max-w-2xl rounded-md border border-gray-200 bg-white">
        <div className="border-b border-gray-200 px-5 py-4 sm:px-6">
          <h2 className="font-semibold text-gray-900">Personal information</h2>
        </div>
        <dl className="divide-y divide-gray-100 px-5 sm:px-6">
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-sm text-gray-500">Email address</dt>
            <dd className="break-all text-sm font-medium text-gray-900">{email || "Not available"}</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-sm text-gray-500">Account type</dt>
            <dd className="text-sm font-medium text-gray-900">Demo account</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr] sm:gap-4">
            <dt className="text-sm text-gray-500">Session status</dt>
            <dd className="text-sm font-medium text-emerald-800">Active</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}