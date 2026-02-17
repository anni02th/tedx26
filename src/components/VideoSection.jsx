import React from 'react';
import { motion } from 'framer-motion';

const videos = [
   { id: "qgmhSBNVjCo", title: "TEDx 2024 Highlights" }, // Replace with actual IDs
   { id: "5zQD6vC5tys", title: "Keynote: Innovation" },
   { id: "jQM7Uwa8fvQ", title: "Performance: Harmony" },
];

const VideoSection = () => {
   const [activeIndex, setActiveIndex] = React.useState(0);

   const nextVideo = () => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
   };

   const prevVideo = () => {
      setActiveIndex((prev) => (prev - 1 + videos.length) % videos.length);
   };

   // Helper to determine position relative to active index
   const getPosition = (index) => {
      if (index === activeIndex) return "center";
      if (index === (activeIndex - 1 + videos.length) % videos.length) return "left";
      if (index === (activeIndex + 1) % videos.length) return "right";
      return "hidden";
   };

   return (
      <section className="py-20 px-4 flex flex-col items-center bg-black relative overflow-hidden">
         <h2 className="text-3xl md:text-5xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 drop-shadow-[0_2px_10px_rgba(255,69,0,0.5)]">
            Last Year Video
         </h2>

         <div className="relative w-full max-w-6xl h-[300px] md:h-[500px] flex justify-center items-center perspective-1000">
            {videos.map((video, index) => {
               const position = getPosition(index);

               let style = {};
               let animate = {};
               let zIndex = 0;

               if (position === "center") {
                  zIndex = 20;
                  animate = { scale: 1, x: 0, opacity: 1, filter: "blur(0px)" };
               } else if (position === "left") {
                  zIndex = 10;
                  // Responsive translation: smaller shift on mobile
                  animate = { scale: 0.7, x: "-60%", opacity: 0.6, filter: "blur(2px)" };
               } else if (position === "right") {
                  zIndex = 10;
                  animate = { scale: 0.7, x: "60%", opacity: 0.6, filter: "blur(2px)" };
               } else {
                  zIndex = 0;
                  animate = { scale: 0.5, opacity: 0, display: "none" };
               }

               return (
                  <motion.div
                     key={video.id}
                     className="absolute w-[80%] md:w-[60%] aspect-video rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.8)] border border-orange-900/30 bg-stone-900"
                     initial={false}
                     animate={animate}
                     transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                     style={{ zIndex }}
                  >
                     {/* Overlay to catch clicks on non-center items to move them */}
                     {position !== "center" && (
                        <div
                           className="absolute inset-0 z-20 cursor-pointer bg-black/40 hover:bg-black/20 transition-colors"
                           onClick={() => position === "left" ? prevVideo() : nextVideo()}
                        />
                     )}

                     <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0&modestbranding=1`}
                        title={video.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{ pointerEvents: position === "center" ? "auto" : "none" }}
                     ></iframe>

                     <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none">
                        <h3 className="text-white font-serif text-lg md:text-xl truncate">{video.title}</h3>
                     </div>
                  </motion.div>
               );
            })}
         </div>

         {/* Navigation Buttons for better mobile UX */}
         <div className="flex gap-8 mt-8 z-30">
            <button
               onClick={prevVideo}
               className="p-3 rounded-full bg-orange-900/20 border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
               ← Prev
            </button>
            <button
               onClick={nextVideo}
               className="p-3 rounded-full bg-orange-900/20 border border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
               Next →
            </button>
         </div>

         {/* Background Texture/Noise */}
         <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')]"></div>
      </section>
   );
};

export default VideoSection;
