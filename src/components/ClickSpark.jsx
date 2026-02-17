import React, { useEffect } from 'react';

const ClickSpark = () => {
   useEffect(() => {
      const handleClick = (e) => {
         for (let i = 0; i < 5; i++) {
            const spark = document.createElement('div');
            spark.classList.add('spark');
            document.body.appendChild(spark);

            const x = e.clientX;
            const y = e.clientY;
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 30 + 10;

            spark.style.left = `${x}px`;
            spark.style.top = `${y}px`;

            // Use animation via JS or CSS classes. We'll use inline styles for randomness
            // But better to stick to the HTML's logic which used CSS animation
            // Let's create the element and let CSS handle the animation if possible, 
            // or animate manually. The original HTML used CSS @keyframes spark-anim.

            // We'll define the spark styles in index.css if not already there,
            // or insert style here.

            const tx = Math.cos(angle) * velocity;
            const ty = Math.sin(angle) * velocity;

            spark.animate([
               { transform: 'translate(0, 0) scale(1)', opacity: 1 },
               { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
            ], {
               duration: 600,
               easing: 'ease-out'
            });

            setTimeout(() => {
               spark.remove();
            }, 600);
         }
      };

      window.addEventListener('click', handleClick);
      return () => window.removeEventListener('click', handleClick);
   }, []);

   return null; // This component doesn't render anything itself
};

export default ClickSpark;
