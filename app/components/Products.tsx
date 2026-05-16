"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// 1. Strict TypeScript interface
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  tag: string;
}

// 2. Real data mapped from dgsportindia.com
const products: Product[] = [
  { 
    id: 1, 
    name: "Complete Sparring Kit", 
    category: "Taekwondo / Karate", 
    price: "Get Quote", 
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=800&auto=format&fit=crop", 
    tag: "Bestseller" 
  },
  { 
    id: 2, 
    name: "Premium Training Uniforms", 
    category: "Apparel", 
    price: "Bulk Order", 
    image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=800&auto=format&fit=crop", 
    tag: "Durable" 
  },
  { 
    id: 3, 
    name: "EVA Interlocking Mats", 
    category: "Infrastructure", 
    price: "Get Quote", 
    image: "https://images.unsplash.com/photo-1599443015574-be5fe8a05783?q=80&w=800&auto=format&fit=crop", 
    tag: "Academies" 
  },
  { 
    id: 4, 
    name: "Chest Guards & Protectors", 
    category: "Safety Gear", 
    price: "Bulk Order", 
    image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop", 
    tag: "" 
  },
  { 
    id: 5, 
    name: "Trophies, Medals & Certificates", 
    category: "Awards", 
    price: "Custom", 
    image: "https://images.unsplash.com/photo-1563506637812-a7f45b53d827?q=80&w=800&auto=format&fit=crop", 
    tag: "Championships" 
  },
  { 
    id: 6, 
    name: "Corporate Gifting Solutions", 
    category: "Branding", 
    price: "Get Quote", 
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=800&auto=format&fit=crop", 
    tag: "New" 
  },
];

export default function Products() {
  return (
    <section id="equipment" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400">Manufacturing</span>
            </h2>
            <p className="text-slate-500 mt-4 font-medium text-lg">
              Premium Gear and Training for Taekwondo, Karate, Wushu, and Pencak Silat since 2017. Durable, comfortable, and championship-approved.
            </p>
          </div>
          <button className="hidden md:block text-slate-900 font-bold hover:text-orange-500 transition-colors">
            Request Catalog &rarr;
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
              {product.tag ? (
                <span className="absolute top-8 left-8 bg-slate-900 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full z-20">
                  {product.tag}
                </span>
              ) : null}

              {/* Real Image Implementation replacing emojis */}
              <div className="w-full h-64 bg-slate-200 rounded-2xl mb-6 relative overflow-hidden shadow-inner">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                {/* Dark gradient overlay so the image looks premium */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div>
                <p className="text-teal-600 font-bold text-xs uppercase tracking-wider mb-2">
                  {product.category}
                </p>
                <div className="flex justify-between items-start gap-4">
                  <h3 className="text-xl font-bold text-slate-900 leading-tight">
                    {product.name}
                  </h3>
                  <span className="text-sm font-black text-slate-900 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}