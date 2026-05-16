"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/90 border-b-4 border-black shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-black tracking-tighter text-black uppercase flex items-center gap-2">
          DG SPORT <span className="text-red-600 font-bold">India</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-sm font-black uppercase tracking-widest text-black">
          <Link href="/" className={`hover:text-red-600 transition-colors ${pathname === '/' ? 'text-red-600 border-b-2 border-red-600' : ''}`}>Home</Link>
          <Link href="/products" className={`hover:text-red-600 transition-colors ${pathname === '/products' ? 'text-red-600 border-b-2 border-red-600' : ''}`}>Gear</Link>
          <Link href="/contact" className={`hover:text-red-600 transition-colors ${pathname === '/contact' ? 'text-red-600 border-b-2 border-red-600' : ''}`}>Contact</Link>
        </div>

        <Link href="/products">
          <button className="bg-red-600 hover:bg-black text-white px-8 py-3 rounded-none text-sm font-black uppercase tracking-widest transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1">
            Shop Now
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}