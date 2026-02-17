import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const Tickets = () => {
   return (
      <>
         <Navbar />
         <div className="bg-black min-h-screen text-white pt-24">
            <section className="py-12 relative">
               <div className="max-w-7xl mx-auto px-6">
                  <motion.div
                     initial={{ opacity: 0, y: 30 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.8 }}
                     className="text-center mb-12"
                  >
                     <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 mb-6 drop-shadow-[0_2px_10px_rgba(255,69,0,0.5)]">
                        Secure Your Spot
                     </h2>
                     <p className="text-gray-400 text-lg md:text-xl font-light italic max-w-2xl mx-auto">
                        Be part of the experience. Grab your tickets now and join the community of thinkers and doers.
                     </p>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ duration: 0.8, delay: 0.2 }}
                     className="bg-zinc-900/50 border border-orange-500/20 rounded-2xl overflow-hidden shadow-2xl relative"
                  >
                     {/* Loading/Placeholder State */}
                     <div className="absolute inset-0 flex items-center justify-center -z-10">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
                     </div>

                     {/* KonfHub Widget Iframe */}
                     {/* Added dark theme params assuming KonfHub supports them or site styles apply */}
                     <iframe
                        src="https://konfhub.com/widget/tedxkkwieer?desc=false&secondary=false&ticketId="
                        id="konfhub-widget"
                        title="Register for TEDxKKWIEER"
                        width="100%"
                        height="600"
                        style={{ border: 0, background: 'transparent' }}
                        className="w-full min-h-[600px] md:min-h-[800px]"
                        allow="camera; microphone; payment"
                     ></iframe>
                  </motion.div>

                  {/* Fallback / Direct Link */}
                  <div className="text-center mt-12 mb-12">
                     <p className="text-gray-500 text-sm mb-4">Having trouble with the widget?</p>
                     <a
                        href="https://konfhub.com/tedxkkwieer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:bg-orange-600 hover:border-orange-500 text-white font-bold uppercase tracking-widest text-xs transition-all duration-300 rounded"
                     >
                        Buy Directly on KonfHub
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                     </a>
                  </div>
               </div>

               {/* Background Texture */}
               <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            </section>
         </div>
         <Footer />
      </>
   );
};

export default Tickets;
