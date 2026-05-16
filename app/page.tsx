"use client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="relative bg-slate-50 text-slate-900 min-h-screen overflow-hidden selection:bg-orange-200">
      
      {/* Light 3D Ambient Background Glows */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-teal-200/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-200/50 blur-[120px]" />
      </div>

      <Navbar />
      <Hero />
      <Products />
      <Contact />
      
      <footer className="py-8 text-center border-t border-slate-200 bg-white/40 text-sm text-slate-500 backdrop-blur-sm">
        © {new Date().getFullYear()} DG Sport India • Redesigned by <span className="text-orange-500 font-bold">WeCode</span>
      </footer>
    </main>
  );
}