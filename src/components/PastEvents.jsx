import React from 'react';
import { motion } from 'framer-motion';

const PastEvents = () => {
   const events = [
      {
         year: "2023",
         name: "UDAAN",
         theme: "उड़ान — The Flight of Ideas",
         count: "10 Speakers · 350 Attendees",
         colorFrom: "rgba(10,30,80,0.9)",
         colorTo: "rgba(50,15,70,0.6)"
      },
      {
         year: "2024",
         name: "DRISHTI",
         theme: "दृष्टि — The Vision Beyond",
         count: "12 Speakers · 400 Attendees",
         colorFrom: "rgba(100,30,10,0.9)",
         colorTo: "rgba(50,15,70,0.6)"
      },
      {
         year: "2025",
         name: "AARAMBH",
         theme: "आरंभ — The New Beginning",
         count: "14 Speakers · 450 Attendees",
         colorFrom: "rgba(20,50,20,0.9)",
         colorTo: "rgba(10,30,40,0.6)"
      }
   ];

   return (
      <section id="past" className="relative py-20 px-6 bg-[rgba(6,3,1,0.7)] text-white">
         <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
               <div className="text-orange-500 tracking-[0.3em] text-sm font-rajdhani uppercase mb-2">The Legacy</div>
               <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                  PAST EVENTS
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {events.map((event, index) => (
                  <motion.div
                     key={index}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: index * 0.2, duration: 0.6 }}
                     className="group relative h-[400px] overflow-hidden rounded-xl border border-orange-900/30 bg-black/50 hover:border-orange-500/50 transition-all duration-500"
                  >
                     {/* Background gradient/image placeholder */}
                     <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                        style={{
                           background: `linear-gradient(135deg, ${event.colorFrom}, ${event.colorTo})`
                        }}
                     ></div>

                     {/* Overlay */}
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>

                     {/* Year Badge */}
                     <div className="absolute top-6 right-6 text-6xl font-serif text-white/10 font-bold group-hover:text-white/20 transition-colors duration-500">
                        {event.year}
                     </div>

                     {/* Content */}
                     <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black via-black/80 to-transparent translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-3xl font-serif text-white mb-2 tracking-wide group-hover:text-orange-400 transition-colors">
                           {event.name}
                        </h3>
                        <div className="text-lg text-gray-300 font-sans mb-3">{event.theme}</div>
                        <div className="text-sm text-orange-500/80 font-rajdhani tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           {event.count}
                        </div>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>
   );
};

export default PastEvents;
