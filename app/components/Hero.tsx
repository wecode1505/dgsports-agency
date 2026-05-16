"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Clean, Bright Typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-teal-600 font-bold tracking-widest text-xs uppercase bg-teal-50 px-4 py-1.5 rounded-full border border-teal-100">
            Premium Sports Collection
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mt-6 text-slate-900 leading-[1.1]">
            Elevate <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400">
              Your Game.
            </span>
          </h1>
          <p className="text-slate-600 text-lg mt-6 max-w-md leading-relaxed font-medium">
            Professional-grade fitness equipment and athletic wear. Experience 3D precision engineering designed for top athletes.
          </p>
          <div className="flex gap-4 mt-8">
            <button className="bg-gradient-to-r from-orange-400 to-orange-500 text-white font-bold px-8 py-4 rounded-2xl shadow-[0_10px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all">
              Explore Catalog
            </button>
          </div>
        </motion.div>

        {/* Right: Light 3D Floating Glass Showcase */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <motion.div
            animate={{ y: [-15, 15, -15] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="w-full max-w-[450px] aspect-square bg-white/40 border border-white backdrop-blur-2xl rounded-[40px] p-8 flex flex-col justify-center items-center shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative overflow-hidden"
          >
            {/* Inner 3D Object Simulation (Rotating Basketball) */}
            <motion.div 
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="text-9xl drop-shadow-2xl z-10"
            >
              🏀
            </motion.div>
            
            <div className="absolute bottom-10 z-10 text-center">
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">PRO SERIES</h3>
              <p className="text-orange-500 font-bold tracking-widest text-sm mt-1">NEW ARRIVAL</p>
            </div>

            {/* Soft background glows inside the card */}
            <div className="absolute top-[-20%] right-[-20%] w-64 h-64 bg-teal-300/30 blur-[50px] rounded-full" />
            <div className="absolute bottom-[-20%] left-[-20%] w-64 h-64 bg-orange-300/30 blur-[50px] rounded-full" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}