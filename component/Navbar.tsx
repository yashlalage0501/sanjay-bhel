"use client";

import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/app/store/cart";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { items } = useCartStore();

  const cartCount = items.reduce((sum, item) => sum + item.qty, 0);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-3 py-1 flex justify-between items-center">
        
        {/* ✅ LOGO */}
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.jpg"
            alt="Sanjay Bhel Logo"
            width={78}
            height={48}
            className="rounded-md object-contain"
          />
        </a>

        {/* ✅ DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 text-lg hover:text-red-600 transition font-medium hover:font-semibold"
            >
              {link.name}
            </a>
          ))}

          {/* ✅ CART BUTTON (Desktop) */}
          <a
            href="/cart"
            className="relative flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            <ShoppingCart size={20} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full shadow">
                {cartCount}
              </span>
            )}
          </a>
        </div>

        {/* ✅ MOBILE MENU TOGGLE */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ MOBILE MENU */}
      <div
        className={`md:hidden bg-white border-t shadow-md transition-all duration-300 ${
          open ? "max-h-60" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 text-lg font-medium hover:text-red-600 transition"
            >
              {link.name}
            </a>
          ))}

          {/* ✅ CART BUTTON (Mobile) */}
          <a
            href="/cart"
            className="relative flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg mt-2"
          >
            <ShoppingCart size={20} />
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-red-600 text-xs font-bold px-2 py-0.5 rounded-full shadow">
                {cartCount}
              </span>
            )}
          </a>
        </ul>
      </div>

      {/* ✅ SLIDING MARQUEE BAR */}
      <div className="bg-red-600 text-white py-1 overflow-hidden whitespace-nowrap">
        <div className="animate-marquee text-lg font-semibold">
          🍽️ Sanjay Bhel Misal • Established 1984 • Proudly serving premium,
          authentic Misal across Pune • Visit our branches at Saradwadi &
          Baburao Nagar, Shirur 🍽️
        </div>
      </div>
    </nav>
  );
}
