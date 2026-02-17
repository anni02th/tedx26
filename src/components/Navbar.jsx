import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
   const scrollToSection = (id) => {
      const element = document.getElementById(id);
      if (element) {
         element.scrollIntoView({ behavior: 'smooth' });
      }
   };

   const [isOpen, setIsOpen] = useState(false);
   const [scrolled, setScrolled] = useState(false);
   const location = useLocation();
   const navigate = useNavigate();

   // Handle Scroll Effect
   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 50) {
            setScrolled(true);
         } else {
            setScrolled(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   // Handle Navigation
   const handleNavigation = (id) => {
      setIsOpen(false);

      if (location.pathname !== "/") {
         navigate("/");
         setTimeout(() => {
            const element = document.getElementById(id);
            if (element) {
               element.scrollIntoView({ behavior: "smooth" });
            }
         }, 100);
      } else {
         const element = document.getElementById(id);
         if (element) {
            element.scrollIntoView({ behavior: "smooth" });
         }
      }
   };

   const navLinks = [
      { name: "Home", id: "home" },
      {
         name: "About",
         id: "about",
         dropdown: [
            { name: "TEDxKKWIEER", id: "about" },
            { name: "KK Wagh Education Society", href: "https://www.kkwagh.edu.in/" }, // Assuming these sections might exist or just link to generic for now, updating IDs if specific sections exist would be better. For now pointing to 'about' or '#' as placeholder if sections don't exist yet. The user just asked for the dropdown. Let's point to 'about' section for now or use specific IDs if they were created. The prompt implies content might be there or just navigation structure. I will point to 'about' for now to be safe, or '#'
            { name: "K.K Wagh Institute", href: "https://www.kkwagh.edu.in/engineering/" }
         ]
      },
      { name: "Speakers", id: "speakers" },
      { name: "Timeline", id: "timeline-events" },
      { name: "Contact", id: "footer" },
   ];

   const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

   return (
      <nav
         className={`fixed w-full z-50 transition-all duration-300 ${scrolled
            ? "bg-black/80 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(255,69,0,0.1)]"
            : "bg-transparent py-6"
            }`}
      >
         <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <div
               className="text-2xl font-bold tracking-tighter cursor-pointer flex items-center gap-2"
               onClick={() => handleNavigation('home')}
            >
               <img src="/logo.png" alt="TEDx Logo" className="h-10 md:h-12 w-auto object-contain" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
               {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                     {link.dropdown ? (
                        <>
                           <button
                              className="text-white hover:text-orange-500 transition-colors duration-300 uppercase text-sm tracking-widest font-rajdhani flex items-center gap-1"
                           >
                              {link.name}
                              <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                           </button>
                           {/* Dropdown Menu */}
                           <div className="absolute top-full left-0 mt-2 w-64 bg-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 overflow-hidden">
                              {link.dropdown.map((item) => (
                                 item.href ? (
                                    <a
                                       key={item.name}
                                       href={item.href}
                                       target="_blank"
                                       rel="noopener noreferrer"
                                       className="block w-full text-left px-6 py-4 text-white hover:bg-white/10 hover:text-orange-500 transition-colors duration-300 text-xs uppercase tracking-wider font-rajdhani border-b border-white/5 last:border-none"
                                    >
                                       {item.name}
                                    </a>
                                 ) : (
                                    <button
                                       key={item.name}
                                       onClick={() => handleNavigation(item.id)}
                                       className="block w-full text-left px-6 py-4 text-white hover:bg-white/10 hover:text-orange-500 transition-colors duration-300 text-xs uppercase tracking-wider font-rajdhani border-b border-white/5 last:border-none"
                                    >
                                       {item.name}
                                    </button>
                                 )
                              ))}
                           </div>
                        </>
                     ) : (
                        <button
                           onClick={() => handleNavigation(link.id)}
                           className="text-white hover:text-orange-500 transition-colors duration-300 uppercase text-sm tracking-widest font-rajdhani relative"
                        >
                           {link.name}
                           <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </button>
                     )}
                  </div>
               ))}

               {/* Committee Link */}
               <Link
                  to="/committee"
                  className="text-white hover:text-orange-500 transition-colors duration-300 uppercase text-sm tracking-widest font-rajdhani relative group"
               >
                  Committee
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
               </Link>

               {/* CTA Button */}
               <a
                  href="https://konfhub.com/tedxkkwieer"
                  className="px-6 py-2 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black transition-all duration-300 uppercase text-xs font-bold tracking-widest rounded-sm"
               >
                  Get Tickets
               </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
               <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-white focus:outline-none"
               >
                  {isOpen ? (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                     </svg>
                  ) : (
                     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                     </svg>
                  )}
               </button>
            </div>
         </div>

         {/* Mobile Menu Dropdown */}
         {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 flex flex-col items-center py-8 space-y-6 max-h-[80vh] overflow-y-auto">
               {navLinks.map((link) => (
                  <div key={link.name} className="flex flex-col items-center w-full">
                     {link.dropdown ? (
                        <>
                           <button
                              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                              className="text-xl text-white hover:text-orange-500 transition-colors font-serif flex items-center gap-2"
                           >
                              {link.name}
                              <svg className={`w-4 h-4 transition-transform ${mobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                           </button>
                           {mobileAboutOpen && (
                              <div className="flex flex-col items-center mt-4 space-y-4 bg-white/5 w-full py-4">
                                 {link.dropdown.map((item) => (
                                    item.href ? (
                                       <a
                                          key={item.name}
                                          href={item.href}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          onClick={() => setIsOpen(false)}
                                          className="text-sm text-gray-300 hover:text-orange-500 uppercase tracking-wider font-rajdhani text-center px-4"
                                       >
                                          {item.name}
                                       </a>
                                    ) : (
                                       <button
                                          key={item.name}
                                          onClick={() => handleNavigation(item.id)}
                                          className="text-sm text-gray-300 hover:text-orange-500 uppercase tracking-wider font-rajdhani text-center px-4"
                                       >
                                          {item.name}
                                       </button>
                                    )
                                 ))}
                              </div>
                           )}
                        </>
                     ) : (
                        <button
                           onClick={() => handleNavigation(link.id)}
                           className="text-xl text-white hover:text-orange-500 transition-colors font-serif"
                        >
                           {link.name}
                        </button>
                     )}
                  </div>
               ))}
               <Link
                  to="/committee"
                  onClick={() => setIsOpen(false)}
                  className="text-xl text-white hover:text-orange-500 transition-colors font-serif"
               >
                  Committee
               </Link>
               <a
                  href="https://konfhub.com/tedxkkwieer"
                  className="px-8 py-3 bg-orange-500 text-black font-bold uppercase tracking-widest mt-4"
                  onClick={() => setIsOpen(false)}
               >
                  Get Tickets
               </a>
            </div>
         )}
      </nav>
   );
};

export default Navbar;
