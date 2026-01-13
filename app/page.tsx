"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Truck, BadgeDollarSign,
  Phone, Mail, Instagram, MapPin, Zap, Menu, X,
  Target, Award
} from "lucide-react";

/* --- ICON TIKTOK --- */
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size}
    viewBox="0 0 24 24" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

/* --- ANIMASI --- */
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
} as const;

/* --- DATA TEAM --- */
const teamMembers = [
  {
    name: "M. Rafli",
    role: "Chief Executive Officer (CEO)",
    img: "/kipli.jpeg",
    keahlian: "Strategi Bisnis & Kepemimpinan.",
    fokus: "Memimpin visi perusahaan dan ekspansi pasar."
  },
  {
    name: "Naila Aprilia",
    role: "Chief Technology Officer (CTO)",
    img: "/naila.jpeg",
    keahlian: "Full-stack Development & UI/UX.",
    fokus: "Pengembangan aplikasi & sistem tracking."
  },
  {
    name: "Zdahra Zaqiya",
    role: "Chief Operating Officer (COO)",
    img: "/zdahra.jpeg",
    keahlian: "Manajemen Operasional & Logistik.",
    fokus: "Workflow laundry & quality control."
  },
  {
    name: "Aura Feronica",
    role: "Marketing & Growth",
    img: "/aura1.jpeg",
    keahlian: "Digital Marketing.",
    fokus: "Akuisisi pengguna & branding."
  },
  {
    name: "Luciana Gabrelia",
    role: "Finance & Admin",
    img: "/abel1.jpeg",
    keahlian: "Manajemen Keuangan.",
    fokus: "Cash flow & pricing."
  }
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* NAVBAR */}
      <nav className={`fixed top-0 w-full z-50 px-6 py-4 transition-all ${
        isScrolled ? "bg-white/80 backdrop-blur shadow" : "bg-transparent"
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/kwu logo.jpg" alt="Logo" width={40} height={40} />
            <span className={`font-bold text-xl ${isScrolled ? "text-blue-900" : "text-white"}`}>
              ON LAUNDRY
            </span>
          </div>

          <div className="hidden md:flex gap-8">
            {["home", "services", "about", "team"].map(item => (
              <a key={item} href={`#${item}`}
                className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400`}>
                {item.toUpperCase()}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* HOME – SLIDER SCROLL */}
      <section id="home" className="relative h-screen overflow-hidden bg-black">
        <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar">
          {[
            "/laundrybckgrond.jpg",
            "/laundry.jpg",
            "/lndry.jpg"
          ].map((img, i) => (
            <div key={i} className="relative min-w-full h-full snap-center">
              <Image src={img} alt={`Slide ${i}`} fill
                className="object-cover brightness-[0.5]" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black/30" />

        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              WE ARE THE BEST <br />
              <span className="text-blue-400">ON LAUNDRY</span>
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
              Menghadirkan kebersihan terbaik langsung ke pintu Anda.
            </p>
            <button className="bg-blue-500 px-10 py-4 rounded-full font-bold">
              PESAN SEKARANG
            </button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 px-6">
        <div className="container mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Shield, title: "EXPERT CLEANER" },
            { icon: BadgeDollarSign, title: "AFFORDABLE PRICE" },
            { icon: Truck, title: "EXPRESS DELIVERY" }
          ].map((item, i) => (
            <motion.div key={i} {...fadeInUp}
              className="p-8 text-center rounded-3xl shadow">
              <item.icon className="mx-auto mb-4 text-blue-500" />
              <h3 className="font-bold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-blue-900 text-white pt-16 pb-8 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image src="/kwu logo.jpg" alt="logo" width={60} height={60} />
          <p className="flex gap-2 items-center">
            <MapPin /> Lampung, Indonesia
          </p>
          <div className="flex gap-4">
            <Instagram />
            <Mail />
            <TikTokIcon />
          </div>
        </div>
        <p className="mt-8 text-xs opacity-40">
          © 2026 ON LAUNDRY. All rights reserved.
        </p>
      </footer>

    </main>
  );
}
