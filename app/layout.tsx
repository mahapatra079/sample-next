import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import type { ReactNode } from "react";

export const metadata = {
  title: "Sample Next.js App",
  description: "My Next.js site",
};
 
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8">
          {children}
        </main> 
        <Footer />
      </body>
    </html>
  );
}

// The layout above is called a root layout because it's defined at the root of the app directory.
// The root layout is required and must contain html and body tags.

// Folders are used to define the route segments that map to URL segments.
// Files (like page and layout) are used to create UI that is shown for a segment.