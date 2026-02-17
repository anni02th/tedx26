import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Countdown = () => {
   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

   useEffect(() => {
      const targetDate = new Date("March 18, 2026 10:00:00").getTime();

      const interval = setInterval(() => {
         const now = new Date().getTime();
         const distance = targetDate - now;

         if (distance < 0) {
            clearInterval(interval);
            return;
         }

         setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
         });
      }, 1000);

      return () => clearInterval(interval);
   }, []);

   const units = [
      { label: 'DAYS', value: timeLeft.days },
      { label: 'HOURS', value: timeLeft.hours },
      { label: 'MINUTES', value: timeLeft.minutes },
      { label: 'SECONDS', value: timeLeft.seconds },
   ];

   const containerRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start end", "end start"]
   });

   const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

   return (
      <div ref={containerRef} className="py-16 text-center relative overflow-hidden">

         <motion.h3
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-serif text-orange-500 mb-8 border-b-2 border-orange-500 inline-block px-4 pb-2"
         >
            EVENT STARTS IN
         </motion.h3>

         <div className="flex flex-wrap justify-center gap-8 md:gap-16 relative z-10">
            {units.map((unit, index) => (
               <div key={index} className="flex flex-col items-center">
                  <div className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                     {/* Custom Circle Background */}
                     <img
                        src="/circle.png"
                        alt="Background"
                        className="absolute inset-0 w-full h-full object-contain opacity-90 drop-shadow-[0_0_10px_rgba(255,69,0,0.5)]"
                     />

                     {/* Number */}
                     <motion.span
                        key={unit.value}
                        initial={{ scale: 1.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="relative z-10 text-4xl md:text-6xl font-serif text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold mt-2"
                     >
                        {String(unit.value).padStart(2, '0')}
                     </motion.span>
                  </div>

                  <span className="mt-2 text-sm md:text-base tracking-[0.2em] text-orange-500 font-rajdhani uppercase font-semibold">
                     {unit.label}
                  </span>
               </div>
            ))}
         </div>

         {/* Ember particles in background specifically for this section */}
         <motion.div
            style={{ opacity }}
            className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse"
         ></motion.div>
      </div>
   );
};

export default Countdown;
