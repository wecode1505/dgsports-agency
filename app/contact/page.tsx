"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-[#09090b] text-white min-h-screen relative">
      <Navbar />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 pt-44 pb-24 grid md:grid-cols-2 gap-16 relative z-10 w-full">
        <div>
          <span className="text-xs font-bold text-red-500 uppercase tracking-[0.3em]">B2B PROCUREMENT</span>
          <h1 className="text-6xl font-black uppercase tracking-tighter mt-2 mb-6">
            SECURE YOUR <span className="text-zinc-500 font-light">SYSTEM</span>
          </h1>
          <p className="text-zinc-400 font-medium text-base leading-relaxed mb-10 max-w-md">
            Connect with our industrial manufacturing pipeline for enterprise orders, school distribution systems, or customized team kits.
          </p>
          
          <div className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl backdrop-blur-sm shadow-xl max-w-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-800 pb-3 mb-4">Operational Nodes</h3>
            <div className="space-y-3 text-sm font-medium">
              <p className="text-white">📍 Main Depot: Delhi NCR, India</p>
              <p className="text-white">📞 Hotline: +91-8743050087</p>
              <p className="text-zinc-400">📧 Gateway: info@dgsportindia.com</p>
            </div>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-[32px] shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-sm"
        >
          <form className="flex flex-col gap-5">
            <h2 className="text-xl font-black uppercase tracking-tight text-white border-b border-zinc-800 pb-4">Inquiry Parameters</h2>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Organization Name</label>
              <input type="text" placeholder="ACADEMY OR INSTITUTION" className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Secure Email</label>
              <input type="email" placeholder="COMMERCIAL EMAIL" className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Specification Manifest</label>
              <textarea rows={4} placeholder="COMPILE QUANTITIES AND CUSTOM REQUESTS HERE..." className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 text-sm text-white font-medium focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500/50 transition-all resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-red-600 hover:bg-red-500 text-white font-bold uppercase p-4 rounded-xl transition-all tracking-wider text-xs shadow-[0_10px_20px_rgba(220,38,38,0.2)] mt-2">
              Transmit Manifest &rarr;
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}