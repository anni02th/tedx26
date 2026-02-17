import React from 'react';
import { motion } from 'framer-motion';

const IconLinkedin = () => (
   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.41v6.34ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
   </svg>
);

const IconInstagram = () => (
   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <path d="M17.5 6.5h.01" />
   </svg>
);

const IconMail = () => (
   <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
   </svg>
);

const CommitteeCard = ({ name, role, image, socials }) => {
   return (
      <motion.div
         whileHover={{ y: -8 }}
         transition={{ type: "spring", stiffness: 300, damping: 20 }}
         className="group relative w-full bg-[#1c1c1c] rounded-3xl overflow-hidden shadow-lg hover:shadow-[0_20px_60px_rgba(235,0,40,0.15)] transition-all duration-500 border border-white/5"
      >
         {/* Red Accent Border - Appears on Hover */}
         <div className="absolute inset-0 rounded-3xl border-2 border-[#EB0028] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

         {/* Corner Badge */}
         <div className="absolute top-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-[#EB0028] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
               TEDx
            </div>
         </div>

         {/* Image Container with Aspect Ratio */}
         <div className="relative aspect-[4/5] overflow-hidden bg-gray-900">
            <img
               src={image || "https://via.placeholder.com/300"}
               alt={name}
               className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            />

            {/* Multi-layer Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Shine Effect on Hover */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />

            {/* Glassmorphic Social Icons Pill */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 translate-x-24 group-hover:translate-x-0 transition-transform duration-500 ease-out">
               <div className="flex flex-col gap-3 items-center bg-black/80 backdrop-blur-xl px-3 py-5 rounded-full border border-white/10 shadow-2xl">
                  {socials?.linkedin && (
                     <motion.a
                        href={socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF6B1A] transition-all"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <IconLinkedin />
                     </motion.a>
                  )}
                  {socials?.instagram && (
                     <motion.a
                        href={socials.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-[#FF6B1A] transition-all"
                        whileHover={{ scale: 1.3, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <IconInstagram />
                     </motion.a>
                  )}
                  {socials?.mail && (
                     <motion.a
                        href={`mailto:${socials.mail}`}
                        className="text-white hover:text-[#FF6B1A] transition-all"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                     >
                        <IconMail />
                     </motion.a>
                  )}
               </div>
            </div>

            {/* Role Badge on Image */}
            <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
               <div className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2">
                  <p className="text-white text-xs font-bold uppercase tracking-widest text-center">
                     {role}
                  </p>
               </div>
            </div>
         </div>

         {/* Content Section */}
         <div className="relative p-6 text-center bg-gradient-to-b from-[#1c1c1c] to-[#111] group-hover:from-[#111] group-hover:to-[#1c1c1c] transition-all duration-300">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300">
               <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, #FF6B1A 1px, transparent 0)`,
                  backgroundSize: '20px 20px'
               }} />
            </div>

            <div className="relative z-10">
               <h3 className="text-xl font-black text-white leading-tight tracking-tight mb-2 group-hover:text-[#FF6B1A] transition-colors duration-300">
                  {name}
               </h3>

               {/* Role - Hidden on Hover (shown on image instead) */}
               <p className="text-[#FF6B1A] font-bold text-sm tracking-widest uppercase opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {role}
               </p>

               {/* Quote/Motto - Appears on Hover */}
               <p className="text-gray-400 text-xs italic mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-x-6 top-16">
                  "Ideas Worth Spreading"
               </p>

               {/* Decorative Dots */}
               <div className="flex justify-center gap-2 mt-4">
                  <motion.div
                     className="w-2 h-2 rounded-full bg-[#FF6B1A]"
                     animate={{ scale: [1, 1.2, 1] }}
                     transition={{ duration: 2, repeat: Infinity }}
                  />
                  <div className="w-2 h-2 rounded-full bg-gray-700 group-hover:bg-[#FF6B1A] transition-colors duration-300" />
                  <div className="w-2 h-2 rounded-full bg-gray-800 group-hover:bg-[#FF6B1A] transition-colors duration-500" />
               </div>
            </div>
         </div>

         {/* Bottom Highlight Bar */}
         <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
   );
};

export default CommitteeCard;
