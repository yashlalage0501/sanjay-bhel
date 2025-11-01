"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Flame, Star, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  return (
    <div className="pt-20">
      {/* ✅ HERO SECTION — UNCHANGED */}

      <section className="px-6 md:px-16 lg:px-28 mb-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ✅ LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
              Taste the <span className="text-red-600">Authentic Misal</span>
              <br /> Since 1984
            </h1>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Serving the people of Pune with a legacy of rich flavors, premium
              quality, and a taste that defines tradition. Discover why Sanjay
              Bhel Misal is one of Pune’s most loved food destinations.
            </p>

            {/* ✅ Modern Badges */}
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 bg-red-50 text-red-600 font-semibold rounded-full text-sm shadow-sm">
                🔥 Spicy & Flavorful
              </span>
              <span className="px-4 py-2 bg-yellow-50 text-yellow-700 font-semibold rounded-full text-sm shadow-sm">
                ⭐ 40+ Years Legacy
              </span>
              <span className="px-4 py-2 bg-green-50 text-green-700 font-semibold rounded-full text-sm shadow-sm">
                ✅ Fresh Ingredients
              </span>
            </div>

            {/* ✅ CTA Buttons */}
            <div className="mt-7 flex gap-4">
              <a
                href="/menu"
                className="px-6 py-3 bg-red-600 text-white rounded-xl text-lg font-semibold shadow-md hover:bg-red-700 transition"
              >
                Explore Menu
              </a>

              <a
                href="/contact"
                className="px-6 py-3 border border-red-600 text-red-600 rounded-xl text-lg font-semibold hover:bg-red-50 transition"
              >
                Visit Us
              </a>
            </div>
          </motion.div>

          {/* ✅ RIGHT SIDE — Modern Glass Card with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div
              className="
          relative w-full max-w-md 
          bg-white/70 backdrop-blur-xl 
          rounded-3xl p-6 shadow-2xl
          border border-gray-200
        "
            >
             <Slideshow />
              {/* ✅ Glow effect */}
              <div className="absolute -inset-2 rounded-3xl bg-red-500/10 blur-2xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        className="
    relative w-full mb-20 
    h-[18vh]            /* ✅ Much smaller stripe height */
    sm:h-[22vh]
    md:h-[38vh]
    lg:h-[50vh]
    overflow-hidden rounded-2xl    /* ✅ More rounded edges */
  "
      >
        {/* ✅ Stripe-fit video — always maintains aspect ratio */}
        <video
          src="/misal4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="
      absolute top-1/2 left-1/2 
      w-auto min-w-full h-full 
      -translate-x-1/2 -translate-y-1/2
      object-cover
      bg-black           /* ✅ No white spaces anywhere */
    "
        />

        {/* ✅ Thin subtle gradient – just for readability */}
        <div
          className="
      absolute inset-0 pointer-events-none
      bg-gradient-to-b 
      from-black/10 
      via-black/5 
      to-black/15"
        ></div>
      </section>

      {/* ✅ WHY PEOPLE LOVE OUR MISAL — UNCHANGED */}
      <section className="px-6 md:px-16 lg:px-28 mb-28">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why People Love <span className="text-red-600">Our Misal</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Flame size={40} className="text-red-600" />}
            title="Authentic Taste"
            desc="Prepared with traditional recipes and premium spices passed down since 1984."
          />

          <FeatureCard
            icon={<Star size={40} className="text-red-600" />}
            title="Quality Ingredients"
            desc="Only the freshest and highest-quality ingredients — no shortcuts."
          />

          <FeatureCard
            icon={<MapPin size={40} className="text-red-600" />}
            title="Pune’s Favorite"
            desc="A trusted name in Saradwadi & Baburao Nagar — serving thousands every month."
          />
        </div>
      </section>

      {/* ✅ SIGNATURE MISAL (using logo image) */}
      <section className="px-6 md:px-16 lg:px-28 mb-28">
        <div
          className="
      bg-white/80 backdrop-blur-xl 
      shadow-[0_8px_30px_rgba(0,0,0,0.08)]
      rounded-3xl p-10 md:p-14 
      border border-gray-200/40 
      transition-all duration-300 
      hover:shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
        >
          {/* ✅ Desktop: Split layout */}
          {/* ✅ Mobile: Stacks naturally (text → video) */}

          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-10">
            {/* ✅ TEXT SECTION — left on desktop */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-extrabold text-center lg:text-left mb-6 tracking-tight">
                Our <span className="text-red-600">Signature Misal</span>
              </h2>

              <p className="text-center lg:text-left text-gray-600 max-w-3xl mb-10 text-lg leading-relaxed">
                A spicy, flavorful, and aromatic masterpiece loved by
                generations — served with crispy farsan, fresh pav, chopped
                onions, lemon, and our special homemade rassa.
              </p>
            </div>

            {/* ✅ VIDEO SECTION — right on desktop, center on mobile */}
            <div className="flex justify-center lg:justify-end lg:w-1/2">
              <div
                className="
            w-full max-w-sm
            aspect-[9/16]      /* Reel format */
            rounded-2xl
            overflow-hidden
            shadow-xl
            border border-gray-200"
              >
                <video
                  src="/misal1.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ✅ FEATURE CARD */
function FeatureCard({ icon, title, desc }: any) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      className="p-8 bg-white border border-gray-200 rounded-2xl shadow-md text-center hover:shadow-xl transition"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </motion.div>
  );
}

function Slideshow() {
  const images = ["/logo.jpg", "/misal3.jpg", "/misal2.jpg", "/misal6.jpg", "/misal7.jpg", "/misal8.jpg"]; // ✅ add your images here

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000); // ✅ change image every 3s

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        src={images[index]}
        width={450}
        height={450}
        alt="Slideshow Image"
        className="rounded-2xl object-contain w-full"
      />
    </motion.div>
  );
}

