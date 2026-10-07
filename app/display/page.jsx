
export default function Home() {
  return (
    <div className="mx-auto max-w-6xl pb-16 text-gray-950">
      <section className="grid gap-10 border-b border-gray-200 py-12 sm:py-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <p className="mb-5 inline bg-emerald-100 px-2 py-1 text-sm font-semibold uppercase text-emerald-950">
            A tiny guide to CSS layout
          </p>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Same line. <span className="text-emerald-800">Different rules.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-gray-600">
            Inline flows with text. Inline-block keeps its shape in a line. Block takes the whole row.
            See what each one does.
          </p>
          <a
            href="#examples"
            className="mt-8 inline-block bg-gray-950 px-5 py-3 font-semibold text-white transition-colors hover:bg-emerald-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
          >
            See the examples <span aria-hidden="true">↓</span>
          </a>
        </div>

        <div aria-label="Three display modes: inline, inline-block, and block" className="relative border border-gray-200 bg-white p-5 shadow-[8px_8px_0_#d9e9df] sm:p-7">
          <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
            <span className="font-mono text-sm text-gray-500">display.css</span>
            <span className="inline-block size-2.5 rounded-full bg-emerald-600" />
          </div>
          <p className="font-mono text-sm leading-8 text-gray-500">
            <span className="inline-block w-8 text-right text-gray-300">01</span>{" "}
            <span className="text-rose-700">.inline</span> <span className="text-gray-400">&#123;</span>{" "}
            <span className="inline bg-emerald-100 px-1 font-semibold text-emerald-950">display: inline;</span>
            <span className="text-gray-400"> &#125;</span>
          </p>
          <p className="font-mono text-sm leading-8 text-gray-500">
            <span className="inline-block w-8 text-right text-gray-300">02</span>{" "}
            <span className="text-rose-700">.inline-block</span> <span className="text-gray-400">&#123;</span>{" "}
            <span className="inline-block bg-amber-100 px-1 font-semibold text-amber-950">display: inline-block;</span>
            <span className="text-gray-400"> &#125;</span>
          </p>
          <p className="font-mono text-sm leading-8 text-gray-500">
            <span className="inline-block w-8 text-right text-gray-300">03</span>{" "}
            <span className="text-rose-700">.block</span> <span className="text-gray-400">&#123;</span>{" "}
            <span className="inline-block bg-sky-100 px-1 font-semibold text-sky-950">display: block;</span>
            <span className="text-gray-400"> &#125;</span>
          </p>
        </div>
      </section>

      <section id="examples" aria-labelledby="examples-heading" className="pt-12 sm:pt-16">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-emerald-800">Three display values</p>
            <h2 id="examples-heading" className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Watch the flow
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-gray-600">
            Each sample sits in the same text flow. The colored shapes show the space each element occupies.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          <article className="border-t-4 border-emerald-600 bg-emerald-50/70 p-5 sm:p-6">
            <div className="mb-5 flex items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold">Inline</h3>
              <code className="text-xs font-semibold text-emerald-900">display: inline</code>
            </div>
            <p className="min-h-28 text-base leading-8 text-gray-700">
              Text keeps moving around <span className="inline bg-emerald-200 px-2 py-1 font-semibold text-emerald-950">this inline piece</span>{" "}
              without starting a new row.
            </p>
            <p className="mt-5 border-t border-emerald-200 pt-4 text-sm leading-6 text-gray-600">
              Best for small parts of a sentence, like links or highlighted words.
            </p>
          </article>

          <article className="border-t-4 border-amber-500 bg-amber-50/80 p-5 sm:p-6">
            <div className="mb-5 flex items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold">Inline-block</h3>
              <code className="text-xs font-semibold text-amber-950">display: inline-block</code>
            </div>
            <p className="min-h-28 text-base leading-8 text-gray-700">
              Text flows around{" "}
              <span className="inline-block h-12 w-28 align-middle border-2 border-amber-600 bg-amber-200 text-center text-sm font-semibold leading-11 text-amber-950">a sized box</span>{" "}
              that stays right in the line.
            </p>
            <p className="mt-5 border-t border-amber-200 pt-4 text-sm leading-6 text-gray-600">
              Useful when an element needs width and height without taking a whole row.
            </p>
          </article>

          <article className="border-t-4 border-sky-600 bg-sky-50/80 p-5 sm:p-6">
            <div className="mb-5 flex items-baseline justify-between gap-3">
              <h3 className="text-xl font-semibold">Block</h3>
              <code className="text-xs font-semibold text-sky-950">display: block</code>
            </div>
            <div className="min-h-28 text-base leading-8 text-gray-700">
              Text before.
              <span className="block w-full border-l-4 border-sky-600 bg-sky-200 px-3 py-1 font-semibold text-sky-950">A full-width row</span>
              Text after starts below.
            </div>
            <p className="mt-5 border-t border-sky-200 pt-4 text-sm leading-6 text-gray-600">
              Use for page structure and elements that should begin on a new line.
            </p>
          </article>
        </div>
      </section>

      <aside className="mt-10 flex flex-col gap-2 border-l-4 border-gray-950 bg-gray-100 px-5 py-4 sm:flex-row sm:items-center sm:gap-4">
        <span className="font-semibold">Quick rule</span>
        <p className="text-sm leading-6 text-gray-700">
          Inline follows text. Inline-block follows text and accepts dimensions. Block claims its own row.
        </p>
      </aside>
    </div>
  );
}