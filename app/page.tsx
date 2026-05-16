"use client";
import Navbar from "./components/Navbar";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  // Pro 3D Parallax Mouse Tracking for the Hero Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  function handleMouse(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <main className="relative bg-[#09090b] text-white min-h-screen overflow-x-hidden selection:bg-red-500/30">
      <Navbar />
      
      {/* Global Background Grid */}
      <div className="fixed inset-0 z-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none z-0" />

      {/* =========================================
          SECTION 1: THE HERO (Fixed Responsiveness)
          ========================================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 z-10 w-full">
        {/* Changed to lg:grid-cols-2 so it stacks cleanly on laptops/tablets */}
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 
              Next-Gen Martial Arts Production
            </div>
            {/* Text scales down on smaller screens to prevent overflow */}
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              ELITE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-white break-words">
                PERFORMANCE.
              </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mt-6 max-w-lg font-medium leading-relaxed">
              Engineered for champions. Explore high-performance Taekwondo Doboks, premium impact protection, and custom infrastructure ecosystems.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/products">
                <button className="bg-white text-black hover:bg-zinc-200 font-bold px-8 py-4 rounded-xl text-sm uppercase tracking-wider transition-all shadow-[0_10px_30px_rgba(255,255,255,0.05)]">
                  Explore Armory
                </button>
              </Link>
            </div>
          </motion.div>

          {/* Interactive 3D Parallax Card */}
          <div 
            className="relative flex justify-center perspective-1000 w-full"
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="w-full max-w-[400px] lg:max-w-[440px] aspect-[4/5] rounded-[32px] bg-zinc-900/40 border border-zinc-800/80 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-50 z-0" />
              
              <div style={{ transform: "translateZ(40px)" }} className="w-full h-[65%] rounded-2xl overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800" 
                  alt="Taekwondo Precision" 
                  className="w-full h-full object-cover grayscale opacity-65 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              <div style={{ transform: "translateZ(60px)" }} className="mt-6 relative z-10">
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">WT APPROVED</div>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-white tracking-tight mt-1">BLACK BELT MATRIC</h3>
                <p className="text-zinc-400 text-xs mt-2 font-medium">Click to unlock customized gear built to global standards.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 2: ABOUT THE BRAND (Scroll Down)
          ========================================= */}
      <section className="relative py-32 px-6 z-10 border-t border-zinc-800/50 bg-gradient-to-b from-transparent to-zinc-950/80">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-red-600/20 blur-[100px] rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800" 
                alt="Dojo Mats" 
                className="relative z-10 rounded-[32px] border border-zinc-800 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="order-1 md:order-2">
              <span className="text-red-500 font-bold tracking-[0.3em] text-xs uppercase">Forged in Delhi NCR</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4 mb-6">
                LEADING MANUFACTURER <br />
                <span className="text-zinc-500">SINCE 2017.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                DG Sport India is a premier manufacturer and supplier of high-quality martial arts gear. We specialize in precision-engineered equipment for Taekwondo, Karate, Wushu, and Pencak Silat.
              </p>
              <div className="grid grid-cols-2 gap-6 border-l-2 border-red-600 pl-6">
                <div>
                  <h4 className="text-3xl font-black text-white">100+</h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Academies Equipped</p>
                </div>
                <div>
                  <h4 className="text-3xl font-black text-white">Premium</h4>
                  <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider mt-1">Manufacturing Units</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: WHY CHOOSE US
          ========================================= */}
      <section className="relative py-32 px-6 z-10 border-t border-zinc-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <span className="text-red-500 font-bold tracking-[0.3em] text-xs uppercase">The DG Advantage</span>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mt-4 mb-16">
            CHAMPIONSHIP <span className="text-zinc-500">GRADE</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              { title: "Durability", desc: "Industrial-grade stitching and high-impact resistance materials designed for heavy daily sparring.", icon: "🛡️" },
              { title: "Precision", desc: "WT-approved specifications ensuring you train with gear built to global tournament standards.", icon: "🎯" },
              { title: "Bulk Scaling", desc: "Direct-from-manufacturer pricing for academies, schools, and professional dojos.", icon: "📦" }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-zinc-900/30 border border-zinc-800/80 p-8 rounded-3xl hover:bg-zinc-900/80 transition-colors"
              >
                <div className="text-4xl mb-6 grayscale opacity-80">{feature.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-tight text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16">
             <Link href="/contact">
                <button className="bg-transparent border border-red-600 text-white hover:bg-red-600 font-bold px-10 py-4 rounded-xl text-sm uppercase tracking-wider transition-all">
                  Start Your Bulk Order
                </button>
              </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-zinc-800/80 bg-black text-xs font-bold tracking-widest uppercase text-zinc-600 z-10 relative">
        © {new Date().getFullYear()} DG Sport India // Engineered by WeCode
      </footer>
    </main>
  );
}