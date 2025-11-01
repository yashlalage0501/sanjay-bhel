"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [selectedBranch, setSelectedBranch] = useState("saradwadi");

  const branches: any = {
  saradwadi:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.257947669423!2d74.383000!3d18.828200!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3c1e9d123b%3A0x123abc111222333!2sSaradwadi%2C%20Shirur!5e0!3m2!1sen!2sin!4v1710000000000",
  
  baburao:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.557944529423!2d74.392200!3d18.820900!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf3c2e1a6789%3A0xaabbccddeeff1122!2sBaburao%20Nagar%2C%20Shirur!5e0!3m2!1sen!2sin!4v1710000001111",
};

  return (
    <div className="pt-24 px-6 md:px-16 lg:px-28 mb-28">

      {/* ✅ Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-extrabold text-center mb-12 text-[#5a2e0a]"
      >
        Contact <span className="text-red-600">Us</span>
      </motion.h1>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        
        {/* ✅ CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="
            bg-[#fff7f2] 
            shadow-xl rounded-3xl 
            p-10 border border-[#e4c7a1]
          "
        >
          <h2 className="text-2xl font-semibold mb-6 text-[#5a2e0a]">
            Get In Touch
          </h2>

          {/* PHONE */}
          <div className="flex items-center gap-4 mb-5">
            <Phone className="text-red-600 w-6 h-6" />
            <a
              href="tel:+918007000025"
              className="text-lg text-gray-800 hover:text-red-600 transition"
            >
              +91 80070 00025
            </a>
          </div>

          {/* EMAIL */}
          {/* <div className="flex items-center gap-4 mb-5">
            <Mail className="text-red-600 w-6 h-6" />
            <a
              href="mailto:yashlalage@gmail.com"
              className="text-lg text-gray-800 hover:text-red-600 transition"
            >
              yashlalage@gmail.com
            </a>
          </div> */}

          {/* INSTAGRAM */}
          <div className="flex items-center gap-4 mb-5">
            <Instagram className="text-red-600 w-6 h-6" />
            <a
              href="https://www.instagram.com/sanjaybhelmisal?igsh=OWdzaDFtdHVuaDlk"
              target="_blank"
              className="text-lg text-gray-800 hover:text-red-600 transition"
            >
              Instagram Page
            </a>
          </div>

          {/* ✅ WHATSAPP BUTTON */}
          <a
            href="https://wa.me/918007000025"
            target="_blank"
            className="
              mt-4 flex items-center gap-3 
              w-fit px-5 py-3 rounded-xl 
              bg-green-600 text-white 
              hover:bg-green-700 transition shadow-md
            "
          >
            <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
          </a>

          <hr className="my-8 border-[#e4c7a1]" />

          {/* ✅ CONTACT FORM */}
          <h3 className="text-xl font-semibold mb-4 text-[#5a2e0a]">Send a Message</h3>

          <form
            action="mailto:yashlalage@gmail.com"
            method="POST"
            encType="text/plain"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              className="w-full px-4 py-3 border border-[#d9b085] rounded-xl"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              className="w-full px-4 py-3 border border-[#d9b085] rounded-xl"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              className="w-full px-4 py-3 border border-[#d9b085] rounded-xl h-28"
              placeholder="Your Message"
              required
            ></textarea>

            <button
              type="submit"
              className="
                w-full bg-red-600 text-white 
                py-3 rounded-xl font-semibold
                hover:bg-red-700 transition flex items-center justify-center gap-3
              "
            >
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {/* ✅ MAP SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* ✅ BRANCH SELECTOR */}
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setSelectedBranch("saradwadi")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
                selectedBranch === "saradwadi"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Saradwadi
            </button>

            <button
              onClick={() => setSelectedBranch("baburao")}
              className={`px-4 py-2 rounded-xl text-sm font-semibold border ${
                selectedBranch === "baburao"
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              Baburao Nagar
            </button>
          </div>

          {/* ✅ MAP */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[#e4c7a1]">
            <iframe
              src={branches[selectedBranch]}
              width="100%"
              height="450"
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>

          {/* ✅ LIVE DIRECTIONS BUTTON */}
          <a
            target="_blank"
            href={
              selectedBranch === "saradwadi"
                ? "https://www.google.com/maps/dir/?api=1&destination=Saradwadi+Shirur"
                : "https://www.google.com/maps/dir/?api=1&destination=Baburao+Nagar+Shirur"
            }
            className="
              mt-6 w-full block text-center 
              bg-[#5a2e0a] text-white py-3 rounded-xl 
              font-semibold hover:bg-[#4a2406] transition
            "
          >
            Get Live Directions
          </a>
        </motion.div>
      </div>
    </div>
  );
}
