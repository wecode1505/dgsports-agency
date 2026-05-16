"use client";
import Navbar from "./components/Navbar";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";

export default function Home() {
  // Pro 3D Parallax Mouse Tracking
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
    <main className="relative bg-[#09090b] text-white min-h-screen overflow-hidden selection:bg-red-500/30">
      <Navbar />
      
      {/* Kyuron-style Grid & Glow Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[150px] rounded-full pointer-events-none" />

      <section className="relative min-h-screen flex items-center justify-center pt-32 px-6 z-10 max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center w-full">
          
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-2 bg-zinc-900/80 border border-zinc-800 px-3 py-1.5 rounded-full text-xs font-semibold tracking-wider text-zinc-400 mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> 
              Next-Gen Martial Arts Production
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] text-white">
              ELITE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-white">
                PERFORMANCE.
              </span>
            </h1>
            <p className="text-zinc-400 text-base md:text-lg mt-6 max-w-md font-medium leading-relaxed">
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
              className="w-full max-w-[440px] aspect-[4/5] rounded-[32px] bg-zinc-900/40 border border-zinc-800/80 p-6 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden group backdrop-blur-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 via-transparent to-transparent opacity-50 z-0" />
              
              {/* Real high quality background image inside card */}
              <div style={{ transform: "translateZ(40px)" }} className="w-full h-[65%] rounded-2xl overflow-hidden relative shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800" 
                  alt="Taekwondo Precision" 
                  className="w-full h-full object-cover grayscale opacity-65 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
              </div>

              <div style={{ transform: "translateZ(60px)" }} className="mt-6 relative z-10">
                <div className="text-xs font-bold text-red-500 uppercase tracking-widest">WT APPROVED</div>
                <h3 className="text-3xl font-black uppercase text-white tracking-tight mt-1">BLACK BELT MATRIC</h3>
                <p className="text-zinc-400 text-xs mt-2 font-medium">Click to unlock customized gear built to global standards.</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}