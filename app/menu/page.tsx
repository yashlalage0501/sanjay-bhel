"use client";

import Image from "next/image";
import { useState } from "react";
import { MENU } from "@/app/data/menu";
import { useCartStore } from "@/app/store/cart";

export default function MenuPage() {
  const { addItem, increaseQty, decreaseQty, items } = useCartStore();

  const [filter, setFilter] = useState("all");

  const getQty = (id: string) => {
    const found = items.find((x) => x.id === id);
    return found ? found.qty : 0;
  };

  const filteredMenu =
    filter === "all"
      ? MENU
      : MENU.filter((item) => item.category.toLowerCase() === filter);

  return (
    <div className="pt-24 pb-12 px-6 md:px-20 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-10">Our Menu</h1>

      {/* ✅ Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["all", "drinks", "snacks"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border text-lg transition
              ${
                filter === cat
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white border-gray-300 text-gray-700"
              }`}
          >
            {cat === "all" ? "All" : cat === "drinks" ? "Drinks" : "Snacks"}
          </button>
        ))}
      </div>

      {/* ✅ Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredMenu.map((item) => {
          const qty = getQty(item.id);

          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow border overflow-hidden hover:shadow-lg transition"
            >
              <a href={`/menu/${item.id}`}>
                <div className="relative w-full h-56 bg-gray-50">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    className="object-contain p-3" // ✅ NO CROPPING
                  />
                </div>
              </a>

              <div className="p-5">
                <a href={`/menu/${item.id}`}>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                </a>

                <p className="text-gray-600 mt-1 text-sm">{item.desc}</p>

                <div className="flex items-center justify-between mt-4">
                  {/* ✅ Add / Qty Logic */}
                  {qty === 0 ? (
                    <button
                      onClick={() =>
                        addItem({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          img: item.img,
                          qty: 1,
                        })
                      }
                      className="px-4 py-2 bg-red-600 text-white rounded-lg"
                    >
                      Add
                    </button>
                  ) : (
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="px-3 py-1 bg-gray-200 rounded-lg"
                      >
                        –
                      </button>

                      <span className="font-bold">{qty}</span>

                      <button
                        onClick={() => increaseQty(item.id)}
                        className="px-3 py-1 bg-red-600 text-white rounded-lg"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <a
                href="/cart"
                className="fixed bottom-6 right-6 bg-red-600 text-white px-5 py-3 rounded-full shadow-xl flex items-center gap-2 z-50"
              >
                🛒 Cart
                <span className="bg-white text-red-600 font-bold px-2 py-0.5 rounded-full">
                  {items.reduce((sum, item) => sum + item.qty, 0)}
                </span>
              </a>
            </div>
          );
        })}

        {/* ✅ No items found */}
        {filteredMenu.length === 0 && (
          <p className="text-center text-gray-600 col-span-3">
            No items available.
          </p>
        )}
      </div>
    </div>
  );
}
