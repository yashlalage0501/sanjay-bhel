"use client";

import { useCartStore } from "@/app/store/cart";
import Image from "next/image";

export default function CartPage() {
  const { items, increaseQty, decreaseQty, removeItem, clearCart } =
    useCartStore();

//   const total = items.reduce((sum, x) => sum + x.price * x.qty, 0);

  const sendWhatsAppOrder = () => {
    if (items.length === 0) return;

    const orderText = items
      .map(
        (item) =>
        //   `${item.name} x ${item.qty} = ₹${item.price * item.qty}`
          `${item.name} x ${item.qty}`
      )
      .join("\n");

    const finalText = `🛒 *New Order from Website*\n\n${orderText}\n\nPlease confirm my order ✅`;

    const phone = "7057606309"; // 👉 example: 919876543210
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(
      finalText
    )}`;

    window.open(url, "_blank");
  };

  return (
    <div className="pt-24 px-4 pb-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
          <div className="mt-12">
             <p className="text-gray-500 text-lg">Your cart is empty.</p>
            <a
              href="/menu"
              className="inline-block mt-5 px-5 py-3 rounded-lg border border-gray-300  transition bg-black text-white"
            >
              ← Go to Menu
            </a>
          </div>
      ) : (
        <div className="space-y-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow"
            >
              {item.img && (
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover"
                />
              )}

              <div className="flex-1">
                <h2 className="font-semibold text-lg">{item.name}</h2>
                {/* <p className="text-gray-600">₹{item.price}</p> */}

                {/* ✅ Quantity Controls */}
                <div className="flex items-center mt-2 gap-3">
                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    −
                  </button>

                  <span className="font-bold">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 bg-red-600 text-white rounded"
                  >
                    +
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* ✅ Total */}
          {/* <div className="text-right text-xl font-bold">
            Total: ₹{total}
          </div> */}

          {/* ✅ Buttons */}
          <div className="flex justify-between mt-6">
            <button
              onClick={clearCart}
              className="px-5 py-3 bg-gray-300 rounded-lg hover:bg-gray-400"
            >
              Clear Cart
            </button>

            <button
              onClick={sendWhatsAppOrder}
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
            >
              Order on WhatsApp ✅
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
