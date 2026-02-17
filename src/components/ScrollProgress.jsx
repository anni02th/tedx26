import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
   const [width, setWidth] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
         const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
         const scrolled = (winScroll / height) * 100;
         setWidth(scrolled);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div
         className="fixed top-0 left-0 h-1 bg-red-600 z-[1001] transition-all duration-100 shadow-[0_0_10px_#e62b1e]"
         style={{ width: `${width}%` }}
      />
   );
};

export default ScrollProgress;
