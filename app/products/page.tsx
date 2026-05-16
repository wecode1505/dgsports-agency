"use client";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

const products = [
  { id: 1, name: "WT Approved Dobok", category: "Uniforms", price: "₹2,500", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800", tag: "Pro" },
  { id: 2, name: "Carbon Sparring Kit", category: "Protection", price: "₹4,200", image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800", tag: "Bestseller" },
  { id: 3, name: "25mm Interlocking Mats", category: "Dojo Mats", price: "Get Quote", image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800", tag: "Bulk" },
  { id: 4, name: "Champion Kick Pad", category: "Training", price: "₹1,200", image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=800", tag: "" },
  { id: 5, name: "Custom Medals", category: "Awards", price: "Custom", image: "https://images.unsplash.com/photo-1563506637812-a7f45b53d827?q=80&w=800", tag: "Events" },
  { id: 6, name: "Head Guard (Red/Blue)", category: "Protection", price: "₹1,800", image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800", tag: "" },
];

export default function ProductsPage() {
  return (
    <main className="bg-zinc-50 min-h-screen pb-24">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-40">
        <h1 className="text-6xl font-black uppercase tracking-tighter text-black mb-16 border-l-8 border-red-600 pl-6">
          The <span className="text-red-600">Armory</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 perspective-1000">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotateY: 5, rotateX: 5, zIndex: 10 }}
              className="bg-white border-4 border-black p-4 shadow-[12px_12px_0px_0px_rgba(220,38,38,1)] cursor-pointer group"
            >
              <div className="w-full h-72 bg-black overflow-hidden relative border-2 border-black">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 grayscale group-hover:grayscale-0" />
                {product.tag && (
                  <span className="absolute top-4 left-4 bg-red-600 text-white font-black uppercase tracking-widest px-4 py-2 text-xs z-20">
                    {product.tag}
                  </span>
                )}
              </div>
              <div className="pt-6">
                <p className="text-red-600 font-bold uppercase tracking-widest text-xs mb-1">{product.category}</p>
                <h3 className="text-2xl font-black uppercase text-black leading-none mb-4">{product.name}</h3>
                <div className="flex justify-between items-center border-t-2 border-black pt-4 mt-4">
                  <span className="font-black text-xl">{product.price}</span>
                  <span className="bg-black text-white px-4 py-2 text-xs font-black uppercase hover:bg-red-600 transition-colors">Add to Quote</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}