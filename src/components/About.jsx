import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
   return (
      <section id="about" className="relative py-20 px-6 md:px-12 bg-black text-white overflow-hidden">
         <div className="max-w-7xl mx-auto">
            {/* Section Eyebrow */}
            <div className="text-center mb-16">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-orange-500 tracking-[0.3em] text-sm md:text-base font-rajdhani uppercase mb-2"
               >
                  This Year's Theme
               </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
               {/* Left: Decorative Visual */}
               <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative flex justify-center items-center h-[400px] md:h-[500px]"
               >
                  <div className="absolute w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full border-2 border-orange-900/30 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute w-[280px] h-[280px] md:w-[420px] md:h-[420px] rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>

                  <div className="relative w-full h-full flex justify-center items-center">
                     {/* Orange Glow Effect */}
                     <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-75 animate-pulse"></div>

                     {/* Main Character Image */}
                     <img
                        src="/main charather.png"
                        alt="Sankalp Theme Character"
                        className="relative z-10 w-auto h-[1000px] object-contain drop-shadow-[0_0_25px_rgba(255,69,0,0.5)]"
                     />
                  </div>
                  {/* Wing Assets (CSS representation) */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-30 bg-[radial-gradient(circle_at_center,orange,transparent_70%)] blur-[50px]"></div>
               </motion.div>

               {/* Right: Content */}
               <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="text-left"
               >
                  <div className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 mb-2 font-fire">
                     SANKALP
                  </div>
                  <div className="text-xl md:text-2xl text-gray-400 font-serif italic mb-8 border-l-4 border-orange-600 pl-4">
                     The Sacred Resolve — <span className="text-orange-500">संकल्प</span>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-6 font-sans">
                     In Sanskrit, <em>Sankalp</em> is more than a resolution. It is a vow forged in the fire
                     of one's deepest truth — an unwavering intention that cannot be undone by circumstance,
                     fear, or the weight of chains placed upon us by society.
                  </p>

                  <div className="my-8 p-6 bg-orange-900/10 border-l-2 border-orange-500 rounded-r-lg">
                     <p className="text-xl md:text-2xl text-orange-200 font-serif italic leading-relaxed">
                        "Like the archer who draws his bow against the pull of chains,
                        every great idea begins as a Sankalp — a resolve that burns
                        brighter the more the world tries to extinguish it."
                     </p>
                  </div>

                  <p className="text-gray-300 text-lg leading-relaxed mb-8 font-sans">
                     TEDxKKWIEER 2026 invites thinkers, dreamers, and doers to share ideas born
                     from their deepest resolve. Stories of transformation where purpose overcame
                     limitation, where vision broke every chain.
                  </p>

                  <img src="/meet speaker.png" alt="" className="relative z-10 w-1/2 h-full max-h-[500px]" onClick={() => window.location.href = "#speakers"} />
               </motion.div>
            </div>
         </div>
      </section>
   );
};

export default About;
