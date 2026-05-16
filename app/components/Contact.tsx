"use client";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <main className="bg-zinc-950 min-h-screen text-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 pt-40 pb-24 grid md:grid-cols-2 gap-16">
        <div>
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 border-l-8 border-red-600 pl-6">
            Join The <span className="text-red-600">Dojo</span>
          </h1>
          <p className="text-gray-400 font-bold text-lg mb-12">
            Looking to equip your academy with WT-approved gear? Fill out the form for bulk orders and championship setups.
          </p>
          <div className="bg-red-600 p-8 border-4 border-white shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]">
            <h3 className="text-3xl font-black uppercase mb-4 text-white">HQ Details</h3>
            <p className="font-bold text-lg mb-2 text-white">📍 Delhi NCR, India</p>
            <p className="font-bold text-lg text-white">📞 +91-8743050087</p>
          </div>
        </div>

        <form className="bg-white p-8 border-4 border-black shadow-[16px_16px_0px_0px_rgba(220,38,38,1)] text-black flex flex-col gap-6">
          <h2 className="text-3xl font-black uppercase mb-4 border-b-4 border-black pb-4">Inquiry Form</h2>
          <input type="text" placeholder="ACADEMY NAME" className="border-4 border-black p-4 font-bold uppercase focus:outline-none focus:border-red-600 bg-zinc-50" />
          <input type="email" placeholder="EMAIL ADDRESS" className="border-4 border-black p-4 font-bold uppercase focus:outline-none focus:border-red-600 bg-zinc-50" />
          <textarea rows={4} placeholder="WHAT GEAR DO YOU NEED?" className="border-4 border-black p-4 font-bold uppercase focus:outline-none focus:border-red-600 bg-zinc-50"></textarea>
          <button type="button" className="bg-black text-white font-black uppercase p-6 hover:bg-red-600 transition-colors tracking-widest text-xl mt-4">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}