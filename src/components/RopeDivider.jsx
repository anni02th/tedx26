import React from 'react';

const RopeDivider = () => {
   return (
      <div className="w-full relative overflow-hidden my-6 flex justify-center items-center">
         {/* Strip Image */}
         <img
            src="/strip.png"
            alt="Divider"
            className="w-full h-auto object-cover max-h-[80px] md:max-h-[120px] opacity-90 drop-shadow-[0_0_15px_rgba(255,69,0,0.6)]"
         />

         {/* Optional Glow Overlay */}
         <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/10 to-transparent pointer-events-none mix-blend-overlay"></div>
      </div>
   );
};

export default RopeDivider;
