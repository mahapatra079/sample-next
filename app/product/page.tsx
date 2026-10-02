"use client"

import { useMemo, useState } from "react"

const ROW_HEIGHT = 74
const OVERSCAN = 6

function createProducts() {
  return Array.from({ length: 500 }, (_, index) => {
    const id = index + 1
    const price = (18 + (id % 12) * 7 + (id % 3) * 2.5).toFixed(2)

    return {
      id,
      name: `Product ${id}`,
      category: ["Audio", "Wearables", "Home", "Gaming", "Office"][id % 5],
      price: Number(price),
      stock: 20 + ((id * 17) % 80),
      trending: ["High", "Medium", "Low"][id % 3],
    }
  })
}

export default function ProductPage() {
  const allProducts = useMemo(() => createProducts(), [])
  const [displayCount, setDisplayCount] = useState(40)
  const [scrollTop, setScrollTop] = useState(0)

  const items = allProducts.slice(0, displayCount)
  const totalHeight = items.length * ROW_HEIGHT

  const startIndex = Math.max(0, Math.floor(scrollTop / ROW_HEIGHT) - OVERSCAN)
  const endIndex = Math.min(
    items.length,
    startIndex + Math.ceil(420 / ROW_HEIGHT) + OVERSCAN * 2,
  )
  const visibleItems = items.slice(startIndex, endIndex)
  const offsetY = startIndex * ROW_HEIGHT

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const target = event.currentTarget
    setScrollTop(target.scrollTop)

    const threshold = target.scrollHeight - target.scrollTop - target.clientHeight
    if (threshold < 180 && displayCount < allProducts.length) {
      setDisplayCount((current) => Math.min(current + 25, allProducts.length))
    }
  }

  return (
    <main className="min-h-screen px-4 py-10 text-slate-900">
      <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-600">
              Catalog
            </p>
            <h1 className="mt-2 text-3xl font-bold">Virtualized product list</h1>
          </div>

          <div className="rounded-2xl bg-slate-100 px-4 py-2 text-sm text-slate-600">
            Showing <span className="font-semibold text-slate-900">{items.length}</span> of {allProducts.length} items
          </div>
        </div>

        <div className="mb-4 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl bg-cyan-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-cyan-700">Revenue</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">$84.2K</p>
          </div>
          <div className="rounded-2xl bg-violet-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-violet-700">Orders</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">1,480</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-emerald-700">Avg. rating</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">4.8/5</p>
          </div>
        </div>

        <div
          className="relative h-[420px] overflow-y-auto rounded-2xl border border-slate-200 bg-slate-50"
          onScroll={handleScroll}
        >
          <div style={{ height: totalHeight, position: "relative" }}>
            <div style={{ transform: `translateY(${offsetY}px)` }}>
              {visibleItems.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between border-b border-slate-200 bg-white px-4"
                  style={{ height: ROW_HEIGHT }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-violet-500 text-sm font-bold text-white">
                      {product.name.split(" ")[1]}
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900">{product.name}</p>
                      <p className="text-sm text-slate-500">{product.category}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-sm">
                    <div className="text-right">
                      <p className="text-slate-500">Price</p>
                      <p className="font-semibold text-slate-900">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-500">Stock</p>
                      <p className="font-semibold text-slate-900">{product.stock}</p>
                    </div>
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        product.trending === "High"
                          ? "bg-emerald-100 text-emerald-700"
                          : product.trending === "Medium"
                            ? "bg-amber-100 text-amber-700"
                            : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      {product.trending}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}


// In this implementation, I combine infinite scrolling with manual virtualization.
// I progressively increase the number of available records as the user approaches the bottom.
// For virtualization, I calculate the start and end indexes based on the current scroll position and fixed row height. 
// I render only the visible rows plus an overscan buffer, 
// while maintaining a full virtual container height and using translateY to position the rendered rows correctly. 
// This allows the user to scroll through a large dataset without putting every record into the DOM at the same time