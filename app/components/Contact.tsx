"use client";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white rounded-[40px] p-10 md:p-16 border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.02)] grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Contact Info & CTA */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-6">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-teal-400">
                Equip Your Gym?
              </span>
            </h2>
            <p className="text-slate-500 text-lg mb-8 font-medium">
              Whether you need a single premium treadmill or a complete commercial gym setup, our team is ready to deliver. 
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 text-xl">
                  📞
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-slate-900 font-bold text-lg">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 text-xl">
                  📍
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Showroom</p>
                  <p className="text-slate-900 font-bold text-lg">Phagwara, Punjab</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: The Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <form className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                  <input type="text" className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-slate-900 font-medium" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                  <input type="text" className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-slate-900 font-medium" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                <input type="email" className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-slate-900 font-medium" placeholder="john@example.com" />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Inquiry Type</label>
                <select className="bg-white border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-100 transition-all text-slate-900 font-medium appearance-none">
                  <option>Bulk Order (Gym Setup)</option>
                  <option>Individual Equipment</option>
                  <option>Apparel Customization</option>
                </select>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-4 bg-slate-900 hover:bg-orange-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-orange-500/30 transition-all uppercase tracking-widest text-sm"
              >
                Request Quote
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}