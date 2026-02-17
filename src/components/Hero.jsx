import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    const canvasRef = useRef(null);

    // Canvas Fire Effect
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.vx = (Math.random() * 2 - 1) * 1.5; // More horizontal drift
                this.vy = (Math.random() * -3 - 2) * 1.5; // Faster upward speed
                this.size = Math.random() * 4 + 2; // Slightly larger
                // More intense colors
                this.color = `rgba(255, ${Math.floor(Math.random() * 120)}, 0, ${Math.random() * 0.8 + 0.2})`;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.size -= 0.04; // Slower fade

                if (this.size <= 0) {
                    this.x = Math.random() * canvas.width;
                    this.y = canvas.height + Math.random() * 100;
                    this.size = Math.random() * 4 + 2;
                    this.vy = (Math.random() * -3 - 2) * 1.5;
                    this.color = `rgba(255, ${Math.floor(Math.random() * 120)}, 0, ${Math.random() * 0.8 + 0.2})`;
                }
            }

            draw() {
                ctx.globalCompositeOperation = 'screen'; // Additive blending for glow
                ctx.fillStyle = this.color;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalCompositeOperation = 'source-over';
            }
        }

        // Increased particle count for "more fire"
        for (let i = 0; i < 400; i++) {
            particles.push(new Particle());
        }

        const animate = () => {
            // Leave trails for fire effect
            ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

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

    return (
        <section id="home" className="relative w-full h-[85vh] overflow-hidden flex flex-col items-center justify-center text-white my-8">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50" />

            <div className="z-10 text-center px-4 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                >

                    <div className="flex justify-center relative px-4">
                        {/* Glow effect behind the image */}
                        <div className="absolute inset-0 bg-orange-500/20 blur-3xl rounded-full scale-75 animate-pulse"></div>
                        <img
                            src="/text-The Flame of Resolution.png"
                            alt="SANKALP"
                            className="relative z-10 w-[85%] sm:w-[500px] md:w-[600px] h-auto object-contain drop-shadow-[0_0_15px_rgba(255,69,0,0.8)]"
                        />
                    </div>

                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col items-center justify-center mt-4"
                    >
                        <span className="text-5xl md:text-6xl text-[#FFB347] font-serif mb-2">Sankalp</span>
                        <div className="h-1 w-24 bg-gradient-to-r from-transparent via-[#E62B1E] to-transparent"></div>
                    </motion.div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 max-w-2xl mx-auto text-gray-300 font-sans text-xl tracking-wide uppercase"
                >
                    -- independently organized TED event --
                </motion.p>
            </div>
        </section>
    );
};

export default Hero;
