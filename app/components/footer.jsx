import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-gray-900">MySite</p>
          <p className="mt-2 text-sm text-gray-600">
            A short line about what your site does.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">Pages</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-gray-900">Home</Link></li>
            <li><Link href="/about" className="hover:text-gray-900">About</Link></li>
            <li><Link href="/contact" className="hover:text-gray-900">Contact</Link></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-gray-900">Follow</p>
          <ul className="mt-2 space-y-1 text-sm text-gray-600">
            <li><a href="https://twitter.com" className="hover:text-gray-900">Twitter</a></li>
            <li><a href="https://github.com" className="hover:text-gray-900">GitHub</a></li>
            <li><a href="https://linkedin.com" className="hover:text-gray-900">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}