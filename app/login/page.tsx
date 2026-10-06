import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function LoginPage() {
  async function login(formData: FormData) {
    "use server";

    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || !email || typeof password !== "string" || !password) {
      return;
    }

    const cookieStore = await cookies();
    cookieStore.set("token", "demo-session", {  
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    cookieStore.set("demo-email", email, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });

    redirect("/dashboard");
  }

  return (
    <section className="mx-auto max-w-md py-10 sm:py-16">
      <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase text-emerald-800">MySite account</p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900">Welcome back</h1>
        <p className="mt-2 text-gray-600">Log in to continue to your account.</p>

        <form action={login} className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-gray-700">
            Email address
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 block min-h-11 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Password
            <input
              required
              type="password"
              name="password"
              autoComplete="current-password"
              className="mt-2 block min-h-11 w-full rounded border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20"
            />
          </label>
          <button
            type="submit"
            className="min-h-11 w-full rounded bg-emerald-800 px-4 py-2 font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-800"
          >
            Log in
          </button>
        </form>
        <p className="mt-6 border-t border-gray-100 pt-4 text-xs leading-5 text-gray-500">
          Demo sign-in: enter any valid email address and a password.
        </p>
      </div>
    </section>
  );
}