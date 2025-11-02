"use client";

import Image from "next/image";
import { notFound } from "next/navigation";
import { MENU } from "@/app/data/menu";
import { useCartStore } from "@/app/store/cart";

// ✅ Make component async so params can be awaited
export default async function DishPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params; // ✅ FIX: params is a Promise, so await it

  const dish = MENU.find((x) => x.id === id);

  if (!dish) return notFound();

  return <DishDetails dish={dish} />;
}

// ✅ Client Component for Cart Logic
function DishDetails({ dish }: any) {
  const { addItem, increaseQty, decreaseQty, items } = useCartStore();

  const existing = items.find((x) => x.id === dish.id);
  const qty = existing ? existing.qty : 0;

  return (
    <div className="pt-24 pb-24 px-6 md:px-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
        {/* ✅ Dish Image */}
        <div className="w-full flex justify-center items-center bg-white py-6 border-b">
          <Image
            src={dish.img}
            alt={dish.name}
            width={500}
            height={350}
            className="object-contain max-h-80"
          />
        </div>

        {/* ✅ Dish Info */}
        <div className="p-6 md:p-10">
          <h1 className="text-4xl font-bold">{dish.name}</h1>

          <p className="text-gray-500 mt-3 text-lg">{dish.desc}</p>

          <div className="mt-6 flex items-center justify-between">
            {/* <div>
              <div className="text-3xl font-extrabold text-red-600">
                ₹{dish.price}
              </div>
              <div className="text-sm text-gray-400">per plate</div>
            </div> */}

            {/* ✅ Add to Cart or Quantity */}
            {qty === 0 ? (
              <button
                onClick={() =>
                  addItem({
                    id: dish.id,
                    name: dish.name,
                    price: dish.price,
                    img: dish.img,
                    qty: 1,
                  })
                }
                className="px-6 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
              >
                Add to Cart
              </button>
            ) : (
              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQty(dish.id)}
                  className="px-4 py-2 bg-gray-200 rounded-xl"
                >
                  –
                </button>

                <span className="text-xl font-bold">{qty}</span>

                <button
                  onClick={() => increaseQty(dish.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-xl"
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* ✅ Extra Info */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-5 rounded-2xl border">
              <h3 className="font-semibold mb-2">Category</h3>
              <p className="text-gray-600">{dish.category}</p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border">
              <h3 className="font-semibold mb-2">Ingredients</h3>
              <p className="text-gray-600 text-sm">
                Ingredients list coming soon.
              </p>
            </div>

            <div className="bg-gray-50 p-5 rounded-2xl border">
              <h3 className="font-semibold mb-2">Nutrition</h3>
              <p className="text-gray-600 text-sm">
                Nutrition details coming soon.
              </p>
            </div>
          </div>

          {/* ✅ Back Button */}
          <div className="mt-12">
            <a
              href="/menu"
              className="inline-block px-5 py-3 rounded-lg border border-gray-300  transition bg-black text-white"
            >
              ← Back to Menu
            </a>
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
      </div>
    </div>
  );
}
