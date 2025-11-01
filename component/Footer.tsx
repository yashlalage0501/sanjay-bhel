// components/Footer.tsx
"use client";

import { motion } from "framer-motion";
import { Instagram, Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-300 py-12 mt-10">
      <motion.div
        className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ✅ LOGO + ABOUT */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-4">
            <Image
              src="/logo.jpg"
              alt="Sanjay Bhel Logo"
              width={80}
              height={80}
              className="rounded-lg object-cover shadow-md"
            />
            <h2 className="text-xl font-semibold text-white tracking-wide">
              Sanjay Bhel Misal
            </h2>
          </div>

          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Serving authentic, flavour-packed Misal since 1984 — made with
            tradition, passion, and a taste that Pune loves.
          </p>
        </div>

        {/* ✅ BRANCHES SECTION */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Branches</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Saradwadi, Shirur</li>
            <li>📍 Baburao Nagar, Shirur</li>
            <li className="pt-1">
              <a href="tel:+918007000025" className="hover:text-white">
                📞 +91 80070 00025
              </a>
            </li>
          </ul>
        </div>

        {/* ✅ SOCIAL ICONS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Connect With Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/sanjaybhelmisal?igsh=OWdzaDFtdHVuaDlk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
            </a>

            <a href="tel:+918007000025" className="hover:text-white transition">
              <Phone className="w-6 h-6" />
            </a>
          </div>
        </div>
      </motion.div>

      {/* ✅ BOTTOM COPYRIGHT LINE */}
      <div className="border-t border-gray-800 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sanjay Bhel Misal. All rights reserved.
        <br />

        {/* ✅ Email icon + Developer Name */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <span className="text-white font-semibold">Developed by Yash Lalage</span>
           <a href="mailto:yashlalage@gmail.com" className="hover:text-white">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
