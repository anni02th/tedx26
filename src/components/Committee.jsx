import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommitteeCard from '../components/CommitteeCard';

const theme = {
   baseColor: '#9B6E51',
   lightAccent: '#B58B70',
   textMain: '#FFFFFF',
   textMuted: 'rgba(255, 255, 255, 0.7)',
   tedRed: '#FF6B1A',
};

const Committee = () => {
   const [activeTab, setActiveTab] = useState('Executive');
   const [showPastCommittee, setShowPastCommittee] = useState(false);

   React.useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   const pastTeams = [
      {
         name: 'Executive',
         members: [
            { name: 'Rajesh Kumar', role: 'Organizer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'rajesh@tedxkkwieer.com' } },
            { name: 'Priya Sharma', role: 'Co-Organizer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'priya@tedxkkwieer.com' } },
            { name: 'Arjun Patel', role: 'Curator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'arjun@tedxkkwieer.com' } },
            { name: 'Sneha Reddy', role: 'Co-Curator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'sneha@tedxkkwieer.com' } },
            { name: 'Vikram Singh', role: 'Treasurer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'vikram@tedxkkwieer.com' } },
            { name: 'Ananya Desai', role: 'Secretary', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'ananya@tedxkkwieer.com' } },
            { name: 'Rohan Mehta', role: 'Advisor', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'rohan@tedxkkwieer.com' } },
            { name: 'Kavya Nair', role: 'Executive Member', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'kavya@tedxkkwieer.com' } },
         ],
      },
      {
         name: 'Marketing',
         members: [
            { name: 'Aditya Joshi', role: 'Marketing Head', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'aditya@tedxkkwieer.com' } },
            { name: 'Meera Kapoor', role: 'Social Media Lead', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'meera@tedxkkwieer.com' } },
            { name: 'Karan Verma', role: 'Content Strategist', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'karan@tedxkkwieer.com' } },
            { name: 'Dia Shah', role: 'Brand Manager', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'dia@tedxkkwieer.com' } },
            { name: 'Sahil Gupta', role: 'Digital Marketing', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'sahil@tedxkkwieer.com' } },
            { name: 'Riya Malhotra', role: 'PR Coordinator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'riya@tedxkkwieer.com' } },
            { name: 'Nikhil Chopra', role: 'Campaign Manager', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'nikhil@tedxkkwieer.com' } },
            { name: 'Pooja Rao', role: 'Outreach Lead', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'pooja@tedxkkwieer.com' } },
            { name: 'Akash Pandey', role: 'Marketing Analyst', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'akash@tedxkkwieer.com' } },
         ],
      },
      {
         name: 'Design',
         members: [
            { name: 'Ishaan Bhatt', role: 'Creative Director', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'ishaan@tedxkkwieer.com' } },
            { name: 'Tara Khanna', role: 'Lead Designer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'tara@tedxkkwieer.com' } },
            { name: 'Varun Pillai', role: 'UI/UX Designer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'varun@tedxkkwieer.com' } },
            { name: 'Simran Kaur', role: 'Graphic Designer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'simran@tedxkkwieer.com' } },
            { name: 'Aman Bansal', role: 'Motion Designer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'aman@tedxkkwieer.com' } },
            { name: 'Nisha Agarwal', role: 'Visual Artist', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'nisha@tedxkkwieer.com' } },
            { name: 'Dev Sinha', role: 'Brand Designer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'dev@tedxkkwieer.com' } },
            { name: 'Maya Iyer', role: 'Illustrator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'maya@tedxkkwieer.com' } },
            { name: 'Raghav Menon', role: 'Art Director', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'raghav@tedxkkwieer.com' } },
            { name: 'Zara Khan', role: 'Creative Associate', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'zara@tedxkkwieer.com' } },
         ],
      },
      {
         name: 'Content',
         members: [
            { name: 'Aryan Saxena', role: 'Content Head', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'aryan@tedxkkwieer.com' } },
            { name: 'Sanya Ahuja', role: 'Writer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'sanya@tedxkkwieer.com' } },
            { name: 'Kabir Dutta', role: 'Copywriter', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'kabir@tedxkkwieer.com' } },
            { name: 'Myra D\'Souza', role: 'Editor', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'myra@tedxkkwieer.com' } },
            { name: 'Ayush Ghosh', role: 'Script Writer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'ayush@tedxkkwieer.com' } },
            { name: 'Isha Bose', role: 'Content Curator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'isha@tedxkkwieer.com' } },
            { name: 'Arnav Jain', role: 'Blogger', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'arnav@tedxkkwieer.com' } },
            { name: 'Kritika Mishra', role: 'Social Media Writer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'kritika@tedxkkwieer.com' } },
         ],
      },
      {
         name: 'Technical',
         members: [
            { name: 'Yash Agarwal', role: 'Tech Lead', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'yash@tedxkkwieer.com' } },
            { name: 'Anushka Yadav', role: 'Web Developer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'anushka@tedxkkwieer.com' } },
            { name: 'Harsh Tiwari', role: 'Full Stack Developer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'harsh@tedxkkwieer.com' } },
            { name: 'Trisha Roy', role: 'Frontend Developer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'trisha@tedxkkwieer.com' } },
            { name: 'Kunal Bhardwaj', role: 'Backend Developer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'kunal@tedxkkwieer.com' } },
            { name: 'Neha Kulkarni', role: 'DevOps Engineer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'neha@tedxkkwieer.com' } },
            { name: 'Siddharth Dubey', role: 'App Developer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'siddharth@tedxkkwieer.com' } },
            { name: 'Palak Soni', role: 'QA Engineer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'palak@tedxkkwieer.com' } },
            { name: 'Advait Chatterjee', role: 'System Administrator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'advait@tedxkkwieer.com' } },
         ],
      },
      {
         name: 'Operations',
         members: [
            { name: 'Rishi Mathur', role: 'Operations Head', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'rishi@tedxkkwieer.com' } },
            { name: 'Tanya Singhal', role: 'Logistics Manager', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'tanya@tedxkkwieer.com' } },
            { name: 'Parth Shetty', role: 'Venue Coordinator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'parth@tedxkkwieer.com' } },
            { name: 'Diya Banerjee', role: 'Event Manager', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'diya@tedxkkwieer.com' } },
            { name: 'Vedant Deshmukh', role: 'Production Lead', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'vedant@tedxkkwieer.com' } },
            { name: 'Aanya Kohli', role: 'Hospitality Head', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'aanya@tedxkkwieer.com' } },
            { name: 'Reyansh Varma', role: 'Stage Manager', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'reyansh@tedxkkwieer.com' } },
            { name: 'Kiara Fernandes', role: 'Volunteer Coordinator', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'kiara@tedxkkwieer.com' } },
            { name: 'Vihaan Rastogi', role: 'Operations Associate', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'vihaan@tedxkkwieer.com' } },
            { name: 'Sara Pai', role: 'Guest Relations', image: '/committee1.png', socials: { linkedin: '#', instagram: '#', mail: 'sara@tedxkkwieer.com' } },
         ],
      },
   ];

   const teams = [
      {
         name: 'Executive',
         members: [
            { name: 'New Organizer', role: 'Organizer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#' } },
            { name: 'New Co-Organizer', role: 'Co-Organizer', image: '/committee1.png', socials: { linkedin: '#', instagram: '#' } },
         ],
      },
      {
         name: 'Marketing',
         members: [
            { name: 'New Marketing', role: 'Marketing Head', image: '/committee1.png', socials: { linkedin: '#', instagram: '#' } },
         ],
      },
      {
         name: 'Design',
         members: [
            { name: 'New Creative', role: 'Creative Director', image: '/committee1.png', socials: { linkedin: '#', instagram: '#' } },
         ],
      },
      { name: 'Content', members: [] },
      { name: 'Technical', members: [] },
      { name: 'Operations', members: [] },
   ];

   const displayTeams = showPastCommittee ? pastTeams : teams;
   const activeTeam = displayTeams.find(team => team.name === activeTab);

   return (
      <div className="min-h-screen relative">
         <Navbar />

         {/* HERO SECTION */}
         <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32">
            {/* Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
               <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[#FF6B1A]/20 blur-[120px] animate-pulse" />
               <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-white/10 blur-[100px]" />

               {/* Network Grid Pattern */}
               <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                     <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <circle cx="20" cy="20" r="1" fill="white" />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
               </svg>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
               <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="inline-block mb-6"
               >
                  <span className="bg-[#FF6B1A]/20 backdrop-blur-md border border-[#FF6B1A]/30 text-white text-xs sm:text-sm font-bold uppercase tracking-[0.3em] px-6 py-3 rounded-full">
                     The Force Behind The Ideas
                  </span>
               </motion.div>

               <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
               >
                  Meet Our <span className="text-[#FF6B1A]">Committee</span>
               </motion.h1>

               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed mb-8"
               >
                  A passionate team of dreamers, creators, and innovators dedicated to bringing
                  <span className="text-[#FF6B1A] font-semibold"> Ideas Worth Spreading</span> to life
               </motion.p>

               {/* Decorative Line */}
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="max-w-md mx-auto"
               >
                  <div className="h-1 bg-gradient-to-r from-transparent via-[#FF6B1A] to-transparent rounded-full" />
               </motion.div>

               {/* Scroll Indicator */}
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="mt-12 flex flex-col items-center gap-2"
               >
                  <span className="text-xs text-white/60 uppercase tracking-widest">Explore Teams</span>
                  <motion.div
                     animate={{ y: [0, 8, 0] }}
                     transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                     <svg className="w-6 h-6 text-[#FF6B1A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                     </svg>
                  </motion.div>
               </motion.div>
            </div>
         </section>

         {/* MAIN CONTENT */}
         <main className="pb-16 sm:pb-20 md:pb-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8">

               {/* Introduction Section */}
               <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="mb-16 md:mb-20"
               >
                  <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
                     <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
                        Building <span className="text-[#FF6B1A]">Excellence</span> Together
                     </h2>
                     <p className="text-white/70 text-base md:text-lg leading-relaxed text-center">
                        Our committee is the backbone of TEDxKKWIEER, comprising dedicated individuals from diverse backgrounds
                        working in harmony to create an unforgettable experience. From conceptualization to execution, each team
                        plays a crucial role in bringing world-class ideas to our community. Together, we don't just organize
                        events—we craft transformative experiences that inspire, educate, and connect.
                     </p>

                     {/* Stats */}
                     <div className="grid grid-cols-3 gap-4 md:gap-8 mt-10 pt-10 border-t border-white/10">
                        <div className="text-center">
                           <div className="text-3xl md:text-4xl font-black text-[#FF6B1A] mb-2">60+</div>
                           <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Members</div>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl md:text-4xl font-black text-[#FF6B1A] mb-2">6</div>
                           <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Teams</div>
                        </div>
                        <div className="text-center">
                           <div className="text-3xl md:text-4xl font-black text-[#FF6B1A] mb-2">1</div>
                           <div className="text-xs md:text-sm text-white/60 uppercase tracking-wider">Vision</div>
                        </div>
                     </div>
                  </div>
               </motion.div>


               {/* Toggle Button */}
               <div className="flex justify-center mb-10">
                  <div className="bg-white/10 p-1 rounded-full flex relative">
                     <motion.div
                        layout
                        className="absolute h-full top-0 bottom-0 bg-[#FF6B1A] rounded-full"
                        initial={false}
                        animate={{
                           width: '50%',
                           x: showPastCommittee ? '100%' : '0%'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        style={{ width: '50%' }}
                     />
                     <button
                        onClick={() => setShowPastCommittee(false)}
                        className={`relative z-10 px-8 py-2 rounded-full font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${!showPastCommittee ? 'text-white' : 'text-white/60 hover:text-white'}`}
                     >
                        Present Committee
                     </button>
                     <button
                        onClick={() => setShowPastCommittee(true)}
                        className={`relative z-10 px-8 py-2 rounded-full font-bold text-sm tracking-widest uppercase transition-colors duration-300 ${showPastCommittee ? 'text-white' : 'text-white/60 hover:text-white'}`}
                     >
                        Past Committee
                     </button>
                  </div>
               </div>

               {/* Tabs - Horizontally Scrollable on Mobile */}
               <div className="mb-12 md:mb-16 overflow-x-auto scrollbar-hide">
                  <div className="flex gap-2 sm:gap-3 md:gap-4 min-w-max sm:justify-center pb-2">
                     {displayTeams.map((team) => (
                        <button
                           key={team.name}
                           onClick={() => setActiveTab(team.name)}
                           className={`px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 rounded-full font-bold text-xs sm:text-sm md:text-base uppercase tracking-wider transition-all duration-300 whitespace-nowrap ${activeTab === team.name
                              ? 'bg-[#FF6B1A] text-white shadow-lg shadow-[#FF6B1A]/30 scale-105'
                              : 'bg-white/10 text-white hover:bg-white/20 hover:scale-102'
                              }`}
                        >
                           {team.name}
                        </button>
                     ))}
                  </div>
               </div>

               {/* Members Grid with Fade Transition */}
               <AnimatePresence mode="wait">
                  <motion.div
                     key={activeTab}
                     initial={{ opacity: 0, y: 20 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: -20 }}
                     transition={{ duration: 0.3 }}
                     className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                  >
                     {activeTeam?.members.map((member, index) => (
                        <motion.div
                           key={`${activeTab}-${index}`}
                           initial={{ opacity: 0, scale: 0.9 }}
                           animate={{ opacity: 1, scale: 1 }}
                           transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                           <CommitteeCard
                              name={member.name}
                              role={member.role}
                              image={member.image}
                              socials={member.socials}
                           />
                        </motion.div>
                     ))}
                  </motion.div>
               </AnimatePresence>
            </div>
         </main>

         <Footer />

         <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
      `}</style>
      </div>
   );
};

export default Committee;
