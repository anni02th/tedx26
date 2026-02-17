import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const pastSpeakers = [
   { id: 1, name: "Ranjit Bajaj", role: "Founder of Minerva Punjab FC", image: "/speaker1.png", color: "#FF4500" },
   { id: 2, name: "Col. Shivender Pratap Singh Kanwar", role: "Founder of Team Global Security Solutions", image: "/speaker2.png", color: "#FF8C00" },
   { id: 3, name: "Ms. Isha Chande", role: "Woman Entrepreneur, Business Leader", image: "/speaker3.png", color: "#FFD700" },
   { id: 4, name: "Mr. Zesshan Ali Syed", role: "Tech-Influencer and Entrepreneur", image: "/speaker4.png", color: "#FF6347" },
   { id: 5, name: "Mr. Iqlipse Nova", role: "Musician", image: "/speaker5.png", color: "#FF4500" },
   { id: 6, name: "Hon. Shri Sandeepji Karnik (I.P.S.)", role: "Commissioner of Police, Nashik City", image: "/speaker6.png", color: "#FF8C00" },
];

const SpeakerCard = ({ speaker }) => {
   return (
      <motion.div
         layout
         initial={{ opacity: 0, scale: 0.8 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.8 }}
         whileHover={{ scale: 1.05, boxShadow: "0 0 25px " + speaker.color }}
         className="relative w-64 h-80 bg-stone-900 rounded-lg overflow-hidden m-4 border border-stone-700 group cursor-pointer select-none"
      >
         {/* Fire Border Effect on Hover */}
         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

         {/* Speaker Image */}
         <div className="w-full h-56 bg-stone-800 overflow-hidden relative">
            <img
               src={speaker.image}
               alt={speaker.name}
               draggable="false"
               className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
               onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-end', 'justify-center');
                  e.target.parentNode.innerHTML += `
                     <svg viewBox="0 0 24 24" fill="currentColor" class="w-40 h-40 text-stone-600 group-hover:text-stone-500 transition-colors duration-300 select-none">
                        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
                     </svg>
                  `;
               }}
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent opacity-80" />
         </div>

         {/* Content */}
         <div className="p-4 text-center relative z-10 -mt-12">
            <h3 className="text-xl font-bold font-serif text-white group-hover:text-orange-400 transition-colors drop-shadow-lg">{speaker.name}</h3>
            <p className="text-sm text-stone-300 mt-1 font-medium">{speaker.role}</p>

            {/* Burning line beneath name */}
            <div className="h-0.5 w-0 group-hover:w-full bg-orange-500 mx-auto mt-2 transition-all duration-300" />
         </div>

         {/* Animated ember overlay */}
         <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-30 transition-opacity duration-500 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] mix-blend-overlay"></div>
      </motion.div>
   );
};

const Speakers = () => {
   const [showPastSpeakers, setShowPastSpeakers] = useState(false);

   return (
      <section id="speakers" className="py-20 bg-black relative min-h-[80vh] flex flex-col items-center">
         <div className="container mx-auto px-4 flex flex-col items-center">

            {/* Header */}
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6 }}
               className="text-center mb-12"
            >
               <h2 className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 mb-4 drop-shadow-[0_2px_10px_rgba(255,69,0,0.5)]">
                  Our Speakers
               </h2>
               <p className="text-stone-400 text-lg md:text-xl font-light italic">
                  Voices that ignite the mind.
               </p>
            </motion.div>

            {/* Current/New Speakers Section (Coming Soon) */}
            <AnimatePresence mode='wait'>
               {!showPastSpeakers ? (
                  <motion.div
                     key="coming-soon"
                     initial={{ opacity: 0, scale: 0.9 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.9 }}
                     transition={{ duration: 0.5 }}
                     className="flex flex-col items-center justify-center p-12 border border-orange-500/20 rounded-2xl bg-stone-900/40 backdrop-blur-sm max-w-2xl w-full"
                  >
                     <div className="text-6xl mb-6">🔥</div>
                     <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 text-center">
                        Revealing Soon
                     </h3>
                     <p className="text-stone-400 text-center mb-8 leading-relaxed">
                        The lineup for the 2nd Edition is currently being curated. Stay tuned for a list of visionary speakers who will spark your imagination.
                     </p>

                     <div className="flex gap-4">
                        <button
                           className="px-8 py-3 bg-transparent border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded font-bold uppercase tracking-widest text-sm"
                           onClick={() => setShowPastSpeakers(true)}
                        >
                           View Past Speakers
                        </button>
                     </div>
                  </motion.div>
               ) : (
                  <motion.div
                     key="past-speakers"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     className="w-full flex flex-col items-center"
                  >
                     <div className="flex items-center gap-4 mb-8">
                        <div className="h-px w-12 bg-stone-700"></div>
                        <h3 className="text-white text-xl uppercase tracking-widest font-serif">Past Editions</h3>
                        <div className="h-px w-12 bg-stone-700"></div>
                     </div>

                     <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {pastSpeakers.map((s) => (
                           <SpeakerCard key={s.id} speaker={s} />
                        ))}
                     </div>

                     <button
                        className="text-stone-500 hover:text-orange-500 transition-colors flex items-center gap-2 group"
                        onClick={() => setShowPastSpeakers(false)}
                     >
                        <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Upcoming
                     </button>
                  </motion.div>
               )}
            </AnimatePresence>

         </div>

         {/* Background Texture/Noise */}
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </section>
   );
};

export default Speakers;
