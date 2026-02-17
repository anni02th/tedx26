import React, { useRef, useEffect, useState } from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
   const canvasRef = useRef(null);
   const [activeModal, setActiveModal] = useState(null);

   const modalContent = {
      privacy: {
         title: "Privacy Policy",
         content: (
            <div className="space-y-4">
               <p>At TEDxKKWIEER, we deeply value your privacy and are committed to protecting your personal data.</p>
               <h5 className="text-orange-500 font-bold">Data Collection</h5>
               <p>We only collect information you voluntarily provide, such as your email address for our newsletter. This data is used solely to keep you updated about our events and initiatives.</p>
               <h5 className="text-orange-500 font-bold">Third-Party Sharing</h5>
               <p>We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. Your trust is paramount to our community.</p>
            </div>
         )
      },
      terms: {
         title: "Terms of Service",
         content: (
            <div className="space-y-4">
               <p>Welcome to the official website of TEDxKKWIEER.</p>
               <h5 className="text-orange-500 font-bold">General Terms</h5>
               <p>By accessing this website, you agree to use it for lawful purposes only. This event is independently organized and operated under a license from TED.</p>
               <h5 className="text-orange-500 font-bold">Intellectual Property</h5>
               <p>All content, including the TEDx logo, brand assets, and original text/media, is protected. Please respect the intellectual property rights of all speakers and creators involved.</p>
            </div>
         )
      },
      credits: {
         title: "Credits & Acknowledgements",
         content: (
            <div className="text-center space-y-6">
               <div className="mb-6">
                  <p className="italic text-lg text-gray-300">"Ideas are the spark that lights the fire of change."</p>
               </div>

               <div>
                  <h5 className="text-orange-500 font-bold mb-2 uppercase tracking-widest text-sm">Designed & Developed By</h5>
                  <p className="text-xl font-serif">TEDxKKWIEER Technical Team</p>
               </div>

               <div className="grid grid-cols-2 gap-4 text-sm text-gray-400 mt-4">
                  <div>
                     <span className="block text-white font-semibold">Frontend Architecture</span>
                     React & Tailwind CSS
                  </div>
                  <div>
                     <span className="block text-white font-semibold">Animations</span>
                     Framer Motion & Canvas API
                  </div>
               </div>

               <p className="text-xs text-gray-500 pt-4">
                  Special thanks to the open-source community and the entire TEDxKKWIEER organizing committee for their relentless support.
               </p>
            </div>
         )
      }
   };

   useEffect(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      let animationFrameId;

      const resizeCanvas = () => {
         const parent = canvas.parentElement;
         if (parent) {
            canvas.width = parent.offsetWidth;
            canvas.height = parent.offsetHeight;
         }
      };

      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      const particles = [];

      class Particle {
         constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() * 2 - 1) * 0.5;
            this.vy = (Math.random() * -1 - 0.5); // Upward movement
            this.size = Math.random() * 2 + 1;
            this.color = `rgba(255, ${Math.floor(Math.random() * 100) + 50}, 0, ${Math.random() * 0.5})`;
         }

         update() {
            this.x += this.vx;
            this.y += this.vy;
            this.size -= 0.01;

            if (this.size <= 0 || this.y < 0) {
               this.x = Math.random() * canvas.width;
               this.y = canvas.height + Math.random() * 10;
               this.size = Math.random() * 2 + 1;
               this.vy = (Math.random() * -1 - 0.5);
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

      for (let i = 0; i < 50; i++) {
         particles.push(new Particle());
      }

      const animate = () => {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         particles.forEach((particle) => {
            particle.update();
            particle.draw();
         });
         animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      return () => {
         cancelAnimationFrame(animationFrameId);
         window.removeEventListener('resize', resizeCanvas);
      };
   }, []);

   return (
      <footer id="footer" className="relative bg-black text-white pt-20 pb-10 border-t border-orange-900/30">
         {/* Decorative Top Border */}
         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-50"></div>

         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

               {/* Brand Column */}
               <div className="space-y-6">
                  <a href="#home" className="inline-block">
                     <span className="text-3xl font-black text-red-600 tracking-tighter">TED</span>
                     <span className="text-3xl font-light text-red-600">x</span>
                     <span className="text-xl font-medium text-white ml-2">KKWIEER</span>
                  </a>
                  <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-50" />
                  <p className="text-gray-400 text-sm leading-relaxed">
                     This independent TEDx event is operated under license from TED.
                     Fostering ideas worth spreading in the community of Nashik.
                  </p>
                  <div className="flex space-x-4">
                     <a href="https://www.facebook.com/tedxkkwieer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <Facebook size={18} />
                     </a>
                     <a href="https://twitter.com/tedxkkwieer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <Twitter size={18} />
                     </a>
                     <a href="https://www.instagram.com/tedxkkwieer/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <Instagram size={18} />
                     </a>
                     <a href="https://www.linkedin.com/company/tedxkkwieer" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                        <Linkedin size={18} />
                     </a>
                  </div>
               </div>

               {/* Quick Links */}
               <div>
                  <h4 className="text-lg font-serif text-white mb-6 border-l-2 border-orange-500 pl-3">Quick Links</h4>
                  <ul className="space-y-3">
                     <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Event</a></li>
                     <li><a href="#speakers" className="text-gray-400 hover:text-orange-500 transition-colors">Speakers 2026</a></li>
                     <li><a href="#timeline" className="text-gray-400 hover:text-orange-500 transition-colors">Schedule</a></li>
                     <li><a href="https://forms.gle/7dfpxuZMi2vo4ULR6" className="text-gray-400 hover:text-orange-500 transition-colors">Nominate a Speaker</a></li>
                     <li><a href="https://konfhub.com/tedxkkwieer" className="text-gray-400 hover:text-orange-500 transition-colors">Buy Tickets</a></li>
                  </ul>
               </div>

               {/* Contact Info */}
               <div>
                  <h4 className="text-lg font-serif text-white mb-6 border-l-2 border-orange-500 pl-3">Get in Touch</h4>
                  <ul className="space-y-4">
                     <li className="flex items-start space-x-3 text-gray-400">
                        <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                        <span className="text-sm leading-relaxed">
                           K.K.Wagh Institute of Engineering Education and Research,<br />
                           Nashik 422003
                        </span>
                     </li>
                     <li className="flex items-center space-x-3 text-gray-400">
                        <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <a href="mailto:tedxkkwieer@kkwagh.edu.in" className="text-sm hover:text-white transition-colors duration-300">tedxkkwieer@kkwagh.edu.in</a>
                     </li>
                     <li className="flex flex-col space-y-2 text-gray-400">
                        <div className="flex items-center space-x-3">
                           <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                           <span className="text-sm font-semibold text-white">Call Us:</span>
                        </div>
                        <div className="pl-8 text-sm space-y-1">
                           <p>
                              Shivanjay Bajpai: <a href="tel:+917020637824" className="hover:text-orange-500 transition-colors">+91 7020637824</a>
                           </p>
                           <p>
                              Malhar Deshmukh: <a href="tel:+917889601718" className="hover:text-orange-500 transition-colors">+91 7889601718</a>
                           </p>
                        </div>
                     </li>
                  </ul>
               </div>

               {/* Newsletter (Simplified) */}
               <div>
                  <h4 className="text-lg font-serif text-white mb-6 border-l-2 border-orange-500 pl-3">Stay Ignited</h4>
                  <p className="text-gray-400 text-sm mb-4">
                     Subscribe to receive updates about speakers and ticket sales.
                  </p>
                  <form
                     className="space-y-3"
                     onSubmit={(e) => {
                        e.preventDefault();
                        const email = e.target.elements.email.value;
                        window.location.href = `mailto:tedxkkwieer@kkwagh.edu.in?subject=Newsletter Subscription&body=Please subscribe me to the newsletter. My email is: ${email}`;
                     }}
                  >
                     <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        required
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded focus:border-orange-500 focus:outline-none text-white text-sm"
                     />
                     <button
                        type="submit"
                        className="w-full px-4 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold uppercase text-sm tracking-wider rounded hover:from-orange-700 hover:to-red-700 transition-all shadow-[0_0_10px_rgba(255,69,0,0.3)]"
                     >
                        Subscribe
                     </button>
                  </form>
               </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-gray-900 text-center md:flex md:justify-between md:items-center">
               <p className="text-gray-500 text-xs mb-4 md:mb-0">
                  @ 2026 TEDxKKWIEER. All Rights Reserved.
               </p>
               <div className="flex justify-center space-x-6">
                  <button onClick={() => setActiveModal('privacy')} className="text-gray-500 text-xs hover:text-white transition-colors">Privacy Policy</button>
                  <button onClick={() => setActiveModal('terms')} className="text-gray-500 text-xs hover:text-white transition-colors">Terms of Service</button>
                  <button onClick={() => setActiveModal('credits')} className="text-gray-500 text-xs hover:text-white transition-colors">Credits</button>
               </div>
            </div>
         </div>

         {/* Info Modal */}
         <AnimatePresence>
            {activeModal && (
               <>
                  {/* Backdrop */}
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     onClick={() => setActiveModal(null)}
                     className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                  />

                  {/* Modal Content */}
                  <div className="fixed inset-0 flex items-center justify-center z-[101] pointer-events-none p-4">
                     <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-zinc-900 border border-orange-500/30 rounded-lg shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto"
                     >
                        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/20">
                           <h3 className="text-xl font-serif text-white">{modalContent[activeModal].title}</h3>
                           <button
                              onClick={() => setActiveModal(null)}
                              className="text-gray-400 hover:text-orange-500 transition-colors p-1 rounded-full hover:bg-white/5"
                           >
                              <X size={20} />
                           </button>
                        </div>
                        <div className="p-6 text-gray-300 leading-relaxed text-sm md:text-base">
                           {modalContent[activeModal].content}
                        </div>
                     </motion.div>
                  </div>
               </>
            )}
         </AnimatePresence>
      </footer>
   );
};

export default Footer;
