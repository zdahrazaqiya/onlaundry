"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Shield, Truck, BadgeDollarSign, CheckCircle, 
  Phone, Mail, Instagram, Facebook, MapPin, Zap, Menu, X,
  Target, Award 
} from "lucide-react";

// --- KOMPONEN CUSTOM UNTUK TIKTOK ---
const TikTokIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// --- KONFIGURASI ANIMASI (FIXED TYPESCRIPT ERROR) ---
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
} as const;

// --- DATA TIM ---
const teamMembers = [
  {
    name: "M. Rafli",
    role: "Chief Executive Officer (CEO)",
    img: "/kipli.jpeg",
    keahlian: "Strategi Bisnis & Kepemimpinan.",
    fokus: "Memimpin visi perusahaan, kemitraan strategis dengan universitas (UBL), dan ekspansi pasar."
  },
  {
    name: "Naila Aprilia",
    role: "Chief Technology Officer (CTO)",
    img: "/naila.jpeg",
    keahlian: "Full-stack Development & UI/UX.",
    fokus: "Mengembangkan aplikasi On Laundry, sistem tracking real-time, dan otomasi logistik."
  },
  {
    name: "Zdahra Zaqiya",
    role: "Chief Operating Officer (COO)",
    img: "/zdahra.jpeg",
    keahlian: "Manajemen Operasional & Logistik.",
    fokus: "Mengatur alur kerja workshop (laundry), manajemen kurir, dan kontrol kualitas (QC)."
  },
  {
    name: "Aura Feronica",
    role: "Marketing & Growth Specialist",
    img: "/aura1.jpeg",
    keahlian: "Digital Marketing & Community Engagement.",
    fokus: "Akuisisi pengguna (mahasiswa), mengelola media sosial, dan kampanye gerilya di area kos Kedaton."
  },
  {
    name: "Luciana Gabrelia",
    role: "Finance & Admin Manager",
    img: "/abel1.jpeg",
    keahlian: "Manajemen Keuangan & Analisis Data.",
    fokus: "Mengelola cash flow, struktur harga (pricing), dan efisiensi unit economics."
  }
];

export default function LandingPage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  // --- LOGIKA SLIDER HOME ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/laundrybckgrond.jpg", 
    "/laundry.jpg", 
    "/lndry.jpg"
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(slideTimer);
    };
  }, [slides.length]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-blue-200">
      
      {/* --- NAVBAR --- */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image src="/kwu logo.jpg" alt="Logo" width={40} height={40} className="rounded-lg" />
            <span className={`font-bold text-xl ${isScrolled ? "text-blue-900" : "text-white"}`}>ON LAUNDRY</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium">
            {["Home", "Services", "About", "Team"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className={`${isScrolled ? "text-blue-900" : "text-white"} hover:text-blue-400 transition-colors`}>
                {item}
              </a>
            ))}
          </div>

          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="text-blue-900" /> : <Menu className={isScrolled ? "text-blue-900" : "text-white"} />}
          </button>
        </div>
      </nav>

      {/* --- 1. HOME SECTION (SLIDER) --- */}
      <section id="home" className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 -z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -70 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0"
            >
              <Image src={slides[currentSlide]} alt="BG" fill className="object-cover brightness-[0.5]" priority />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-white/10" />
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center text-white px-6 z-10">
          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl uppercase">
            WE ARE THE BEST <br /> <span className="text-blue-400">ON LAUNDRY</span>
          </h1>
          <p className="text-lg md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto font-light">
            Menghadirkan kesegaran dan kebersihan tingkat tinggi langsung ke depan pintu Anda.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg shadow-xl transition-all hover:scale-105 active:scale-95">
            PESAN SEKARANG
          </button>
        </motion.div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 flex gap-3 z-20">
          {slides.map((_, i) => (
            <div key={i} className={`h-2 rounded-full transition-all ${currentSlide === i ? "w-8 bg-blue-500" : "w-2 bg-white/50"}`} />
          ))}
        </div>
      </section>

      {/* --- 2. SERVICES --- */}
      <section id="services" className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-2">WHY CHOOSE US?</h2>
            <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "EXPERT CLEANER", desc: "Ditangani oleh profesional berpengalaman." },
              { icon: BadgeDollarSign, title: "AFFORDABLE PRICE", desc: "Harga transparan dan kompetitif." },
              { icon: Truck, title: "EXPRESS DELIVERY", desc: "Layanan antar jemput tepat waktu." },
              { icon: CheckCircle, title: "QUALITY GUARANTEE", desc: "Garansi cuci ulang jika tidak puas." },
            ].map((item, i) => (
              <motion.div key={i} {...fadeInUp} className="p-8 rounded-[2rem] border border-blue-50 shadow-lg text-center bg-white hover:shadow-blue-100 transition-all">
                <div className="bg-blue-500 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 text-white">
                  <item.icon size={28} />
                </div>
                <h3 className="font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. ABOUT --- */}
      <section id="about" className="py-24 px-6 bg-slate-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="relative h-[450px] rounded-[3rem] overflow-hidden shadow-2xl border-[10px] border-white">
            <Image src="/laundry.jpg" alt="About" fill className="object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-6">
            <h2 className="text-4xl font-bold text-blue-900 italic leading-tight">Mewujudkan Standar <br/> Kebersihan Baru.</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              <span className="font-bold text-blue-600">ON Laundry</span> hadir sebagai startup inovatif yang memahami bahwa waktu Anda berharga. Kami menggunakan teknologi terbaik untuk menjaga kualitas pakaian Anda.
            </p>
            <div className="flex items-center gap-4 text-blue-900 font-bold bg-white p-4 rounded-2xl shadow-sm w-fit">
              <Zap className="text-yellow-500" fill="currentColor" /> Tracking Cucian Real-time
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 4. TEAM SECTION (WITH POP-UP) --- */}
      <section id="team" className="py-24 px-6 bg-white overflow-visible">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-blue-900 mb-2 tracking-tighter uppercase">Meet Our Team</h2>
            <p className="text-gray-400 text-sm">Para Inovator di Balik Layanan Kami</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, i) => (
              <div 
                key={i} 
                className="relative"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Pop-up Card */}
                <AnimatePresence>
                  {hoveredIndex === i && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute bottom-full left-0 w-[260px] md:w-full mb-4 z-50 pointer-events-none"
                    >
                      <div className="bg-blue-900 text-white p-5 rounded-3xl shadow-2xl border border-blue-400/30 backdrop-blur-md">
                        <div className="space-y-3">
                          <div>
                            <p className="flex items-center gap-2 text-[10px] font-bold text-blue-300 uppercase tracking-widest mb-1">
                              <Award size={12} /> Keahlian
                            </p>
                            <p className="text-xs font-medium leading-relaxed">{member.keahlian}</p>
                          </div>
                          <div className="pt-2 border-t border-white/10">
                            <p className="flex items-center gap-2 text-[10px] font-bold text-yellow-400 uppercase tracking-widest mb-1">
                              <Target size={12} /> Fokus Utama
                            </p>
                            <p className="text-[11px] leading-relaxed text-blue-50/80">{member.fokus}</p>
                          </div>
                        </div>
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-900 rotate-45 border-r border-b border-blue-400/30" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Profile Card */}
                <motion.div className={`bg-white border p-6 rounded-[2.5rem] text-center transition-all duration-300 ${hoveredIndex === i ? 'border-blue-500 shadow-xl' : 'border-slate-100 shadow-md'}`}>
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-50 transition-all">
                    <Image src={member.img} alt={member.name} fill className="object-cover" />
                  </div>
                  <h3 className="font-bold text-blue-900 leading-tight">{member.name}</h3>
                  <p className="text-blue-500 text-[10px] font-bold uppercase mt-1">{member.role}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. FOOTER --- */}
      <footer className="bg-blue-900 text-white pt-20 pb-10 px-6 rounded-t-[3rem] mt-10">
        <div className="container mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Image src="/kwu logo.jpg" alt="Logo" width={70} height={70} className="mb-6 rounded-2xl border-2 border-white/20" />
            <h4 className="font-bold text-2xl mb-2">ON LAUNDRY</h4>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">Solusi laundry modern cepat & higienis untuk gaya hidup produktif Anda.</p>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-300">Contact Us</h4>
            <div className="flex flex-col gap-4 text-sm text-blue-100/80 font-medium">
              <span className="flex items-center gap-3 justify-center md:justify-start"><MapPin size={18} className="text-blue-400"/> Jakarta, Indonesia</span>
              <span className="flex items-center gap-3 justify-center md:justify-start"><Phone size={18} className="text-blue-400"/> +62 812-3456-7890</span>
              <span className="flex items-center gap-3 justify-center md:justify-start"><Mail size={18} className="text-blue-400"/> onlaundry@gmail.com</span>
            </div>
          </div>

          <div>
             <h4 className="font-bold mb-6 uppercase tracking-widest text-blue-300">Follow Us</h4>
             <div className="flex justify-center md:justify-start gap-4">
               {[
                 { icon: Instagram, link: "#" },
                 { icon: Mail, link: "#" },
                 { icon: TikTokIcon, link: "#" }
               ].map((Social, idx) => (
                 <a key={idx} href={Social.link} className="flex items-center justify-center p-3 bg-white/10 rounded-2xl hover:bg-blue-500 transition-all aspect-square ring-1 ring-white/20 hover:shadow-lg hover:-translate-y-1">
                   <Social.icon size={20} />
                 </a>
               ))}
             </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-xs text-blue-100/40 uppercase tracking-[0.2em]">&copy; 2026 ON LAUNDRY STARTUP. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}