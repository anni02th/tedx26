import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import MyTicket from './MyTicket';

const Tickets = () => {
   const [apiStatus, setApiStatus] = useState('checking'); // 'checking', 'online', 'offline'

   useEffect(() => {
      fetch('/.netlify/functions/health-check')
         .then(async (res) => {
            const isJson = res.headers.get('content-type')?.includes('application/json');
            if (res.ok && isJson) {
               setApiStatus('online');
            } else {
               setApiStatus('offline');
            }
         })
         .catch(() => setApiStatus('offline'));
   }, []);

   return (
      <>
         <Navbar />
         <div className="bg-black min-h-screen text-white pt-24 relative">
            {/* API Status Indicator */}
            <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-full shadow-lg opacity-50 hover:opacity-100 transition-opacity cursor-help" title="Netlify Function Status">
               <div className={`w-2 h-2 rounded-full ${apiStatus === 'online' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]' : apiStatus === 'offline' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]' : 'bg-yellow-500 animate-pulse'}`}></div>
               <span className="text-[10px] font-mono uppercase tracking-wider text-gray-400">
                  API: {apiStatus}
               </span>
            </div>

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
               </div>

               {/* Background Texture */}
               <div className="absolute inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
            </section>

            <MyTicket />
         </div>
         <Footer />
      </>
   );
};

export default Tickets;
