
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const StatsBar = () => {
   return (
      <div className="relative z-20 -mt-24 mx-4 md:mx-auto max-w-6xl">
         <div className="flex flex-col md:flex-row items-center justify-center">

            {/* Left Stats Group */}
            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="w-full md:w-auto md:flex-1 bg-black/90 backdrop-blur-xl border border-orange-900/30 md:border-r-0 rounded-t-2xl md:rounded-l-full md:rounded-tr-none px-8 py-4 h-auto md:h-24 flex justify-around items-center shadow-lg"
            >
               <div className="text-center">
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">2nd</div>
                  <div className="text-[16px] md:text-sm text-orange-500 font-rajdhani uppercase tracking-widest">Edition</div>
               </div>
               <div className="w-px h-8 bg-orange-900/50"></div>
               <div className="text-center">
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">18 Mar</div>
                  <div className="text-[16px] md:text-sm text-orange-500 font-rajdhani uppercase tracking-widest">2026</div>
               </div>
            </motion.div>

            {/* Center Big Button */}
            {/* Center Big Button */}
            <motion.div
               initial={{ scale: 0.8, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 200, damping: 15 }}
               className="relative z-30 w-full md:w-auto my-[-10px] md:my-0 md:mx-[-10px]"
            >
               <Link to="/ticketing"
                  className="px-12 py-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl md:rounded-3xl shadow-[0_0_40px_rgba(255,69,0,0.5)] flex flex-col items-center justify-center cursor-pointer group w-full"
               >
                  <span className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-yellow-200 transition-colors">
                     Book Your Seat
                  </span>
                  <span className="text-xs font-bold text-black/60 uppercase tracking-[0.2em] mt-1 bg-white/20 px-2 py-0.5 rounded">
                     Limited Tickets
                  </span>
               </Link>
            </motion.div>

            {/* Right Stats Group */}
            <motion.div
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="w-full md:w-auto md:flex-1 bg-black/90 backdrop-blur-xl border border-orange-900/30 md:border-l-0 rounded-b-2xl md:rounded-r-full md:rounded-tl-none px-8 py-4 h-auto md:h-24 flex justify-around items-center shadow-lg"
            >
               <div className="text-center">
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">Gurudakshina</div>
                  <div className="text-[16px] md:text-sm text-orange-500 font-rajdhani uppercase tracking-widest">Nashik</div>
               </div>
               <div className="w-px h-8 bg-orange-900/50"></div>
               <div className="text-center">
                  <div className="text-xl md:text-2xl font-serif font-bold text-white">1000+</div>
                  <div className="text-[16px] md:text-sm text-orange-500 font-rajdhani uppercase tracking-widest">Footfall</div>
               </div>
            </motion.div>

         </div>
      </div>
   );
};

export default StatsBar;

