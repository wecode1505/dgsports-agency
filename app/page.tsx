"use client";
import Navbar from "./components/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative bg-white text-black min-h-screen overflow-hidden selection:bg-red-600 selection:text-white">
      <Navbar />
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none bg-[radial-gradient(circle_at_center,_black_1px,_transparent_1px)] [background-size:24px_24px]"></div>

      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 z-10">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-black font-black tracking-widest text-xs uppercase border-l-4 border-red-600 pl-3">
              Master Your Discipline
            </span>
            <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mt-6 leading-[0.9]">
              STRIKE <br />
              <span className="text-red-600">HARD.</span>
            </h1>
            <p className="text-gray-600 text-lg mt-6 max-w-md font-bold">
              Championship-grade Taekwondo Doboks, World Taekwondo (WT) approved sparring gear, and premium academy infrastructure.
            </p>
            <div className="flex gap-4 mt-8">
              <Link href="/products">
                <button className="bg-black text-white font-black px-8 py-4 rounded-none uppercase tracking-widest hover:bg-red-600 transition-colors">
                  View Armory
                </button>
              </Link>
            </div>
          </motion.div>

          {/* 3D Floating Black Belt Concept */}
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative flex justify-center">
            <motion.div
              animate={{ y: [-20, 20, -20], rotateZ: [-2, 2, -2] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="w-full max-w-[450px] aspect-square bg-white border-8 border-black p-8 shadow-[20px_20px_0px_0px_rgba(220,38,38,1)] flex flex-col justify-center items-center relative"
            >
              <div className="text-9xl drop-shadow-2xl">🥋</div>
              <h3 className="text-4xl font-black mt-8 uppercase tracking-widest">Black Belt</h3>
              <p className="text-red-600 font-bold tracking-widest text-sm mt-2">PREMIUM STANDARD</p>
            </motion.div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}