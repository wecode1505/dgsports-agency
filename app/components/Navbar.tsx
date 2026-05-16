"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50 backdrop-blur-md bg-zinc-950/70 border border-zinc-800/60 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-black tracking-widest text-white uppercase bg-gradient-to-r from-white via-zinc-400 to-red-500 bg-clip-text text-transparent">
          DG.SPORT<span className="text-red-500 font-light">//PRO</span>
        </Link>
        
        <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400">
          <Link href="/" className={`hover:text-white transition-colors py-1 relative ${pathname === '/' ? 'text-white' : ''}`}>
            Home
            {pathname === '/' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500" />}
          </Link>
          <Link href="/products" className={`hover:text-white transition-colors py-1 relative ${pathname === '/products' ? 'text-white' : ''}`}>
            Armory
            {pathname === '/products' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500" />}
          </Link>
          <Link href="/contact" className={`hover:text-white transition-colors py-1 relative ${pathname === '/contact' ? 'text-white' : ''}`}>
            Inquire
            {pathname === '/contact' && <motion.div layoutId="nav-line" className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500" />}
          </Link>
        </div>

        <Link href="/products">
          <button className="relative group bg-red-600 hover:bg-red-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.3)] overflow-hidden">
            <span className="relative z-10">Enter Platform</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
          </button>
        </Link>
      </div>
    </motion.nav>
  );
}