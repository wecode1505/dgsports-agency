"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "Pro Ultra-Light Dobok", category: "Uniforms", price: "₹2,500", image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=800", tag: "Elite Tier" },
  { id: 2, name: "Matrix Protection Kit", category: "Sparring Protection", price: "₹4,200", image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800", tag: "WT Approved" },
  { id: 3, name: "High-Density Dojo Mats", category: "Infrastructure", price: "Custom Quote", image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800", tag: "Premium EVA" },
  { id: 4, name: "Shock-Absorb Kick Shield", category: "Training Equipment", price: "₹1,200", image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800", tag: "Heavy Duty" },
  { id: 5, name: "Precision Machined Medals", category: "Championship Awards", price: "Bulk Only", image: "https://images.unsplash.com/photo-1576400883235-730e54163d61?q=80&w=800", tag: "Custom Engraved" },
  { id: 6, name: "Pro Head Armor (Reactive)", category: "Sparring Protection", price: "₹1,800", image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=800", tag: "Dual Core" },
];

export default function ProductsPage() {
  return (
    <main className="bg-[#09090b] text-white min-h-screen pb-24 relative">
      <Navbar />
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />

      <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
        <header className="mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-red-500">MANUFACTURING CATALOGUE</div>
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white mt-2">
            THE <span className="text-zinc-500 font-light">ARMORY</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.03, 
                rotateX: 6, 
                rotateY: -6,
                boxShadow: "0_30px_60px_rgba(0,0,0,0.6)" 
              }}
              className="bg-zinc-900/50 border border-zinc-800/80 rounded-[24px] p-5 cursor-pointer group transition-all duration-300 backdrop-blur-sm relative overflow-hidden"
            >
              {/* Product Card Image Container */}
              <div className="w-full h-64 bg-zinc-950 rounded-xl overflow-hidden relative border border-zinc-800 shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" 
                />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-zinc-950/90 border border-zinc-800 text-white font-bold uppercase tracking-widest px-3 py-1.5 rounded-lg text-[9px] z-20 backdrop-blur-sm">
                    {product.tag}
                  </span>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-80" />
              </div>

              <div className="pt-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-red-500">{product.category}</span>
                <h3 className="text-xl font-black uppercase text-white mt-1 group-hover:text-red-400 transition-colors">{product.name}</h3>
                
                <div className="flex justify-between items-center border-t border-zinc-800/80 pt-4 mt-4">
                  <span className="font-bold text-zinc-300">{product.price}</span>
                  <span className="bg-zinc-800 border border-zinc-700 hover:bg-red-600 hover:border-red-500 text-white px-4 py-2 rounded-xl text-xs font-bold uppercase transition-all">
                    Configure &rarr;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}