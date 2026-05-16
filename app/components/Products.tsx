"use client";
import { motion } from "framer-motion";

// 1. We added a strict TypeScript interface so Vercel knows exactly what data to expect!
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  icon: string;
  tag: string;
}

const products: Product[] = [
  { id: 1, name: "Hexa-Grip Dumbbells (Pair)", category: "Strength", price: "₹4,500", icon: "🏋️‍♂️", tag: "Bestseller" },
  { id: 2, name: "AeroTrack Pro Treadmill", category: "Cardio", price: "₹55,000", icon: "🏃‍♂️", tag: "New Arrival" },
  { id: 3, name: "Elite Compression Tee", category: "Apparel", price: "₹1,299", icon: "👕", tag: "" },
  { id: 4, name: "Impact Resistance Plates", category: "Weights", price: "₹2,500", icon: "💿", tag: "" },
  { id: 5, name: "Carbon Fiber Tennis Racket", category: "Court", price: "₹8,900", icon: "🎾", tag: "Pro Series" },
  { id: 6, name: "Dynamic Yoga Mat", category: "Accessories", price: "₹999", icon: "🧘‍♀️", tag: "" },
];

export default function Products() {
  return (
    <section id="equipment" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400">Inventory</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium text-lg">
              High-performance gear engineered for maximum results. Built dynamically for DG Sport India.
            </p>
          </div>
          <button className="hidden md:block text-slate-900 font-bold hover:text-orange-500 transition-colors">
            View Full Catalog &rarr;
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-orange-200 transition-all cursor-pointer relative shadow-sm hover:shadow-[0_20px_40px_rgba(249,115,22,0.1)]"
            >
              {/* 2. Fixed the empty string logical AND issue here */}
              {product.tag ? (
                <span className="absolute top-6 left-6 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-10">
                  {product.tag}
                </span>
              ) : null}

              <div className="w-full h-64 bg-white rounded-2xl mb-6 flex items-center justify-center border border-slate-100 group-hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50 opacity-50" />
                <span className="text-7xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 z-10 drop-shadow-xl">
                  {product.icon}
                </span>
              </div>

              <div>
                <p className="text-teal-600 font-bold text-xs uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-lg font-black text-slate-900 bg-white px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <button className="md:hidden w-full mt-12 bg-slate-100 text-slate-900 font-bold py-4 rounded-xl border border-slate-200 hover:bg-slate-200 transition-colors">
          View Full Catalog &rarr;
        </button>

      </div>
    </section>
  );
}