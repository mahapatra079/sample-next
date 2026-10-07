"use client";
 
import {useState} from "react";

export default function Home() {

  const [count, setCount] = useState(0);

  return (
    <div className="mx-auto max-w-3xl py-8 text-gray-950">
      <header className="mb-10 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase text-emerald-900">
          Accessibility
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          A counter everyone can use
        </h1>
        <p className="mt-4 text-lg leading-7 text-gray-700">
          Use the buttons with a mouse, touch, or keyboard. Updates are announced
          to screen readers.
        </p>
      </header>

      <section
        aria-labelledby="counter-heading"
        className="border-y border-gray-300 py-8"
      >
        <h2 id="counter-heading" className="text-xl font-semibold">
          Counter
        </h2>
        <p className="mt-1 text-sm text-gray-700">
          The count cannot go below zero.
        </p>

        <p
          role="status"
          aria-atomic="true"
          className="my-6 text-5xl font-bold tabular-nums text-emerald-950"
        >
          {count}
          <span className="sr-only">{count === 1 ? " item" : " items"}</span>
        </p>

        <div role="group" aria-label="Counter controls" className="flex flex-wrap gap-3">
          <button
            type="button"
            className="min-h-11 rounded-sm bg-emerald-800 px-5 font-semibold text-white hover:bg-emerald-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950"
            onClick={() => setCount((current) => current + 1)}
          >
            Increase count
          </button>
          <button
            type="button"
            className="min-h-11 rounded-sm border border-gray-500 bg-white px-5 font-semibold text-gray-950 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950 disabled:cursor-not-allowed disabled:text-gray-500"
            onClick={() => setCount((current) => Math.max(0, current - 1))}
            disabled={count === 0}
          >
            Decrease count
          </button>
          <button
            type="button"
            className="min-h-11 rounded-sm border border-gray-500 bg-white px-5 font-semibold text-gray-950 hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-950 disabled:cursor-not-allowed disabled:text-gray-500"
            onClick={() => setCount(0)}
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
      </section>

      <section aria-labelledby="practices-heading" className="py-8">
        <h2 id="practices-heading" className="text-xl font-semibold">
          WCAG practices shown
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
          <li>Skip link to the main content (2.4.1)</li>
          <li>Keyboard-operable native buttons (2.1.1)</li>
          <li>Visible keyboard focus (2.4.7)</li>
          <li>Programmatically announced status updates (4.1.3)</li>
          <li>Text and controls use strong contrast</li>
        </ul>
        <p className="mt-5 text-sm text-gray-700">
          This small example demonstrates a few practices; it is not a complete
          WCAG audit.
        </p>
      </section>
    </div>
  );
}

// Open the site in Edge or Chrome, then press Win + Ctrl + Enter to start Narrator.

// The main keyboard keys for checking accessibility are:

// Tab / Shift + Tab: Move forward/backward through links, buttons, and fields.
// Enter: Open a link or activate a button.
// Space: Activate a button or toggle a checkbox.
// Arrow keys: Move within menus, radio groups, and some widgets.
// Escape: Close a menu or dialog.
// Home / End: Jump to the start or end in some lists and text areas.