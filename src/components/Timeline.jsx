import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

const theme = {
   base: "#FF6B1A", // fire-orange
   baseLight: "#FFB347", // fire-gold
   surfaceDark: "#080503", // dark-bg
   glass: "rgba(8, 5, 3, 0.7)", // dark-bg with opacity

   textMain: "#FFFFFF",
   textMuted: "rgba(255,255,255,0.7)",

   purple: "#E62B1E", // Using ted-red instead of purple for consistency
   copper: "#FFD700", // fire-yellow
   tedRed: "#E62B1E",

   borderSoft: "rgba(255, 107, 26, 0.2)", // fire-orange soft
};

const Timeline = () => {
   const scrollRef = useRef(null);
   const sectionRef = useRef(null);
   const canvasRef = useRef(null);
   const [isDragging, setIsDragging] = useState(false);
   const [startX, setStartX] = useState(0);
   const [scrollLeft, setScrollLeft] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);

   // Canvas Fire Effect
   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      let animationFrameId;

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particles = [];

      class Particle {
         constructor() {
            this.x = Math.random() * canvas.width;
            this.y = canvas.height + Math.random() * 10; // Start randomly across height
            this.vx = (Math.random() * 2 - 1) * 0.5;
            this.vy = (Math.random() * -3 - 1);
            this.size = Math.random() * 3 + 1;
            this.color = `rgba(255, ${Math.floor(Math.random() * 100) + 50}, 0, ${Math.random() * 0.5})`;
         }

         update() {
            this.x += this.vx;
            this.y += this.vy;
            this.size -= 0.01; // Slower decay to reach higher

            if (this.size <= 0) {
               this.x = Math.random() * canvas.width;
               this.y = canvas.height + Math.random() * 100;
               this.size = Math.random() * 3 + 1;
               this.vy = (Math.random() * -3 - 1);
               this.color = `rgba(255, ${Math.floor(Math.random() * 100) + 50}, 0, ${Math.random() * 0.5})`;
            }
         }

         draw() {
            ctx.globalCompositeOperation = 'screen';
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
         }
      }

      for (let i = 0; i < 150; i++) {
         particles.push(new Particle());
      }

      const animate = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear instead of trail for cleaner bg

         particles.forEach((particle) => {
            particle.update();
            particle.draw();
         });
         animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      const handleResize = () => {
         canvas.width = window.innerWidth;
         canvas.height = window.innerHeight;
      }
      window.addEventListener('resize', handleResize);

      return () => {
         cancelAnimationFrame(animationFrameId);
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ["start end", "end start"],
   });

   const timelineEvents = [
      {
         year: "2018",
         month: "March",
         title: "The Beginning",
         description:
            "TEDxKKWIEER was founded with a vision to bring world-class ideas to our community.",
      },
      {
         year: "2019",
         month: "January",
         title: "First Event",
         description:
            "Our inaugural event featuring 8 speakers and 200 attendees marked the start of something special.",
      },
      {
         year: "2020",
         month: "February",
         title: "Going Virtual",
         description:
            "Adapting to new challenges, we hosted our first virtual event reaching 1000+ viewers globally.",
      },
      {
         year: "2021",
         month: "November",
         title: "Record Breaking",
         description:
            "Achieved record attendance with 12 speakers and international recognition.",
      },
      {
         year: "2022",
         month: "March",
         title: "Innovation Hub",
         description:
            "Launched our innovation initiative connecting speakers with local entrepreneurs.",
      },
      {
         year: "2023",
         month: "January",
         title: "Global Impact",
         description:
            "Featured speakers from 5 continents and reached over 50,000 online viewers.",
      },
      {
         year: "2024",
         month: "October",
         title: "Youth Summit",
         description:
            "Introduced TEDxKKWIEER Youth program inspiring the next generation of thinkers.",
      },
      {
         year: "2026",
         month: "March",
         title: "Rise Through Resonance",
         description:
            "Our biggest event yet - a celebration of ideas that echo through time.",
      },
   ];

   const handleMouseDown = (e) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
   };

   const handleMouseMove = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      scrollRef.current.scrollLeft = scrollLeft - walk;
   };

   const handleMouseUp = () => {
      setIsDragging(false);
   };

   useEffect(() => {
      const handleScroll = () => {
         const scrollContainer = scrollRef.current;
         if (!scrollContainer) return;

         const items = scrollContainer.querySelectorAll(".timeline-item");
         const containerCenter =
            scrollContainer.scrollLeft + scrollContainer.offsetWidth / 2;

         let closestIndex = 0;
         let closestDistance = Infinity;

         items.forEach((item, index) => {
            const itemCenter = item.offsetLeft + item.offsetWidth / 2;
            const distance = Math.abs(containerCenter - itemCenter);

            if (distance < closestDistance) {
               closestDistance = distance;
               closestIndex = index;
            }
         });

         setActiveIndex(closestIndex);
      };

      const scrollContainer = scrollRef.current;
      if (scrollContainer) {
         scrollContainer.addEventListener("scroll", handleScroll);
         return () => scrollContainer.removeEventListener("scroll", handleScroll);
      }
   }, []);

   const scrollToItem = (index) => {
      const scrollContainer = scrollRef.current;
      const items = scrollContainer.querySelectorAll(".timeline-item");
      const targetItem = items[index];

      if (targetItem) {
         const containerWidth = scrollContainer.offsetWidth;
         const itemLeft = targetItem.offsetLeft;
         const itemWidth = targetItem.offsetWidth;
         const scrollTo = itemLeft - containerWidth / 2 + itemWidth / 2;

         scrollContainer.scrollTo({
            left: scrollTo,
            behavior: "smooth",
         });
      }
   };

   // Animation variants
   const headerVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: {
         opacity: 1,
         y: 0,
         transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
         },
      },
   };

   const lineVariants = {
      hidden: { scaleX: 0 },
      visible: {
         scaleX: 1,
         transition: {
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.3,
         },
      },
   };

   return (
      <section
         ref={sectionRef}
         id="timeline-events"
         className="relative py-24 overflow-hidden scroll-mt-[120px] bg-black"
         style={{
            minHeight: "100vh",
            position: "relative",
         }}
      >
         <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-40" />

         <style>{`
        .timeline-scroll::-webkit-scrollbar {
          display: none;
        }
        .timeline-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
          cursor: grab;
        }
        .timeline-scroll:active {
          cursor: grabbing;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        
        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

         <div className="max-w-5xl mx-auto px-6 md:px-12 mb-16">
            {/* Section Header */}
            <motion.div
               className="mb-16 text-center"
               variants={headerVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            >
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                  className="text-orange-500 tracking-[0.3em] text-sm md:text-base font-rajdhani uppercase mb-2"
               >
                  Our Journey
               </motion.div>
               <motion.h2
                  className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 mb-4 drop-shadow-[0_2px_10px_rgba(255,69,0,0.5)]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  The Timeline
               </motion.h2>
               <motion.p
                  className="text-gray-400 font-serif italic text-lg"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
               >
                  A decade of ideas worth spreading.
               </motion.p>
            </motion.div>
         </div>

         {/* Timeline Container */}
         <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
         >
            {/* The Main Horizontal Line */}
            <motion.div
               className="absolute left-0 right-0 h-[3px] z-0 origin-center"
               style={{
                  top: "250px",
                  background: `linear-gradient(to right, transparent, ${theme.purple}, transparent)`,
               }}
               variants={lineVariants}
               initial="hidden"
               animate={isInView ? "visible" : "hidden"}
            />

            {/* Scrollable Timeline */}
            <div
               ref={scrollRef}
               className="timeline-scroll flex items-center gap-0 overflow-x-scroll px-[50vw] relative"
               style={{ height: "500px" }}
               onMouseDown={handleMouseDown}
               onMouseMove={handleMouseMove}
               onMouseUp={handleMouseUp}
               onMouseLeave={handleMouseUp}
            >
               {timelineEvents.map((event, index) => (
                  <motion.div
                     key={index}
                     className="timeline-item flex-shrink-0 w-[400px] relative group"
                     onClick={() => scrollToItem(index)}
                     initial={{ opacity: 0, scale: 0.8 }}
                     animate={isInView ? { opacity: 1, scale: 1 } : {}}
                     transition={{
                        duration: 0.6,
                        delay: 0.6 + index * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                     }}
                  >
                     {/* Vertical Connecting Line */}
                     <motion.div
                        className="absolute left-1/2 top-1/2 w-[2px] -translate-x-1/2 -translate-y-1/2 transition-all duration-500"
                        style={{
                           backgroundColor:
                              activeIndex === index
                                 ? theme.purple
                                 : "rgba(255,255,255,0.25)",
                        }}
                        initial={{ height: 0 }}
                        animate={isInView ? { height: 56 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                     />

                     {/* The Circle Node */}
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                        <div className="relative">
                           {/* Pulse Ring for Active Item */}
                           {activeIndex === index && (
                              <>
                                 <motion.div
                                    className="pulse-ring absolute inset-0 w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                    style={{ backgroundColor: theme.purple }}
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{
                                       duration: 2,
                                       repeat: Infinity,
                                       ease: "easeOut",
                                    }}
                                 />
                                 <motion.div
                                    className="pulse-ring absolute inset-0 w-6 h-6 rounded-full -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
                                    style={{ backgroundColor: theme.purple }}
                                    initial={{ scale: 1, opacity: 0.5 }}
                                    animate={{ scale: 1.5, opacity: 0 }}
                                    transition={{
                                       duration: 2,
                                       repeat: Infinity,
                                       ease: "easeOut",
                                       delay: 1,
                                    }}
                                 />
                              </>
                           )}

                           {/* Main Circle */}
                           <motion.div
                              className="w-6 h-6 rounded-full border-2 shadow-lg cursor-pointer"
                              whileHover={{ scale: 1.2 }}
                              whileTap={{ scale: 0.9 }}
                              style={{
                                 backgroundColor: theme.base,
                                 borderColor:
                                    activeIndex === index
                                       ? theme.purple
                                       : "rgba(255,255,255,0.4)",
                                 boxShadow:
                                    activeIndex === index
                                       ? `0 0 15px rgba(65,30,47,0.8)`
                                       : "none",
                              }}
                              animate={{
                                 scale: activeIndex === index ? 1.3 : 1,
                              }}
                              transition={{ duration: 0.3 }}
                           />
                        </div>
                     </div>

                     {/* Event Card */}
                     <motion.div
                        className="absolute left-1/2 -translate-x-1/2 w-[85%] cursor-pointer"
                        style={{
                           top: index % 2 === 0 ? "calc(50% + 3.5rem)" : "auto",
                           bottom: index % 2 === 1 ? "calc(50% + 3.5rem)" : "auto",
                        }}
                        animate={{
                           opacity: activeIndex === index ? 1 : 0.5,
                           scale: activeIndex === index ? 1 : 0.95,
                        }}
                        transition={{ duration: 0.5 }}
                        whileHover={{ scale: activeIndex === index ? 1.02 : 0.97 }}
                     >
                        <motion.div
                           className="rounded-2xl shadow-xl p-5 border-2 transition-all duration-500"
                           style={{
                              backgroundColor: theme.glass,
                              color: theme.textMain,
                              borderColor:
                                 activeIndex === index ? theme.purple : theme.borderSoft,
                              backdropFilter: "blur(12px)",
                              boxShadow:
                                 activeIndex === index
                                    ? `0 25px 50px -12px rgba(65,30,47,0.25)`
                                    : "",
                           }}
                           whileHover={{
                              borderColor: theme.purple,
                           }}
                        >
                           {/* Year Badge */}
                           <motion.div
                              className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-2 uppercase tracking-wider"
                              style={{
                                 backgroundColor: theme.purple,
                                 color: theme.textMain,
                              }}
                              initial={{ scale: 0, opacity: 0 }}
                              animate={isInView ? { scale: 1, opacity: 1 } : {}}
                              transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                           >
                              {event.month} {event.year}
                           </motion.div>

                           {/* Title */}
                           <motion.h4
                              className="text-xl font-black mb-2 tracking-tight"
                              style={{ color: theme.textMain }}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isInView ? { opacity: 1, x: 0 } : {}}
                              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                           >
                              {event.title}
                           </motion.h4>

                           {/* Description */}
                           <motion.p
                              className="text-sm leading-relaxed font-light line-clamp-2"
                              style={{ color: theme.textMuted }}
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: 1 } : {}}
                              transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                           >
                              {event.description}
                           </motion.p>

                           {/* Decorative Line */}
                           <motion.div
                              className="h-1 mt-3 rounded-full"
                              style={{ backgroundColor: theme.purple }}
                              initial={{ width: 48 }}
                              animate={{
                                 width: activeIndex === index ? "100%" : 48,
                              }}
                              transition={{ duration: 0.5 }}
                           />
                        </motion.div>
                     </motion.div>
                  </motion.div>
               ))}
            </div>

            {/* Navigation Dots */}
            <motion.div
               className="flex justify-center gap-2 mt-12"
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : {}}
               transition={{ duration: 0.6, delay: 1.4 }}
            >
               {timelineEvents.map((_, index) => (
                  <motion.button
                     key={index}
                     onClick={() => scrollToItem(index)}
                     className="rounded-full transition-all duration-300"
                     style={{
                        backgroundColor:
                           activeIndex === index
                              ? theme.purple
                              : "rgba(255,255,255,0.25)",
                        width: activeIndex === index ? "2rem" : "0.5rem",
                        height: "0.5rem",
                     }}
                     whileHover={{ scale: 1.5 }}
                     whileTap={{ scale: 0.9 }}
                     aria-label={`Go to ${timelineEvents[index].title}`}
                  />
               ))}
            </motion.div>
         </motion.div>
      </section>
   );
};

export default Timeline;
/*

*/
