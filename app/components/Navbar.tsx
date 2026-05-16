"use client";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-slate-200/50 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter text-slate-800">
          DG SPORT <span className="text-orange-500 font-medium">India</span>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-bold text-slate-600">
          <a href="#home" className="hover:text-orange-500 transition-colors">Home</a>
          <a href="#equipment" className="hover:text-orange-500 transition-colors">Equipment</a>
          <a href="#apparel" className="hover:text-orange-500 transition-colors">Apparel</a>
        </div>

        <button className="bg-slate-900 hover:bg-orange-500 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg hover:shadow-orange-500/30">
          Shop Now
        </button>
      </div>
    </motion.nav>
  );
}