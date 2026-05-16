"use client";
import { motion } from "framer-motion";

// This is the "Dynamic" Data Array. 
// In the future, this will come from your Supabase Database!
const products = [
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
        
        {/* Section Header */}
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
            View Full Catalog →
          </button>
        </div>

        {/* 3D Dynamic Product Grid */}
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
              {/* Optional Tag */}