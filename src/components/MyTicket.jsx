import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Ticket, CheckCircle, XCircle, ExternalLink } from 'lucide-react';

const MyTicket = () => {
   const [identifier, setIdentifier] = useState('');
   const [loading, setLoading] = useState(false);
   const [result, setResult] = useState(null);
   const [error, setError] = useState('');

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setError('');
      setResult(null);

      try {
         const response = await fetch('/.netlify/functions/check-ticket', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: identifier })
            // Currently assuming email, phone logic can be added if needed based on input
         });

         if (!response.ok) {
            throw new Error('Ticket not found or network error.');
         }

         const data = await response.json();
         // KonfHub might return an array or object. Assuming object or first item.
         // If data is array and empty -> assume not found
         if (Array.isArray(data) && data.length === 0) {
            throw new Error('No ticket found for this email.');
         }

         setResult(Array.isArray(data) ? data[0] : data);

      } catch (err) {
         setError(err.message || 'Something went wrong. Please try again.');
      } finally {
         setLoading(false);
      }
   };

   return (
      <section className="py-16 md:py-24 bg-zinc-900/30 border-t border-white/5 relative overflow-hidden">
         <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="text-center mb-12">
               <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
                  Already Registered?
               </h3>
               <p className="text-gray-400 max-w-xl mx-auto">
                  Enter your registered email address to view your ticket status and booking details.
               </p>
            </div>

            <div className="max-w-md mx-auto">
               <form onSubmit={handleSubmit} className="relative mb-8">
                  <input
                     type="email"
                     placeholder="Enter your email address"
                     value={identifier}
                     onChange={(e) => setIdentifier(e.target.value)}
                     className="w-full bg-black/50 border border-white/10 rounded-lg px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors pl-12"
                     required
                  />
                  <Ticket className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />

                  <button
                     type="submit"
                     disabled={loading}
                     className="absolute right-2 top-2 bottom-2 bg-orange-600 hover:bg-orange-500 text-white px-6 rounded-md font-bold uppercase tracking-wider text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                  >
                     {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Check'}
                  </button>
               </form>

               <AnimatePresence mode="wait">
                  {error && (
                     <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-lg flex items-center gap-3"
                     >
                        <XCircle className="w-5 h-5 flex-shrink-0" />
                        <p className="text-sm">{error}</p>
                     </motion.div>
                  )}

                  {result && (
                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-gradient-to-br from-zinc-800 to-black border border-orange-500/30 rounded-xl p-6 shadow-2xl relative overflow-hidden group"
                     >
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                           <Ticket className="w-32 h-32 text-orange-500 transform rotate-12 translate-x-8 -translate-y-8" />
                        </div>

                        <div className="relative z-10">
                           <div className="flex items-start justify-between mb-6">
                              <div>
                                 <h4 className="text-xl font-bold text-white mb-1">{result.attendee_name || 'Attendee'}</h4>
                                 <p className="text-orange-500 text-sm font-rajdhani uppercase tracking-wider">
                                    {result.ticket_name || 'General Admission'}
                                 </p>
                              </div>
                              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-green-500/30">
                                 <CheckCircle className="w-3 h-3" />
                                 Confirmed
                              </div>
                           </div>

                           <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                              <div>
                                 <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Booking ID</span>
                                 <span className="text-white font-mono">{result.booking_id || 'N/A'}</span>
                              </div>
                              <div>
                                 <span className="block text-gray-500 text-xs uppercase tracking-wider mb-1">Date</span>
                                 <span className="text-white">March 18, 2026</span>
                              </div>
                           </div>

                           {/* QR Code Placeholder if actual image URL not available */}
                           {result.qr_code ? (
                              <div className="flex justify-center mb-6 bg-white p-2 rounded-lg w-fit mx-auto">
                                 <img src={result.qr_code} alt="Ticket QR" className="w-32 h-32" />
                              </div>
                           ) : (
                              <div className="text-center mb-6">
                                 <p className="text-xs text-gray-400 mb-2">QR Code sent to email</p>
                                 {/* Link to KonfHub portal if feasible */}
                              </div>
                           )}

                           <div className="flex justify-center">
                              <a
                                 href={`https://konfhub.com/orders/${result.booking_id}`} // Assuming this pattern works or linking to generic login
                                 target="_blank"
                                 rel="noopener noreferrer"
                                 className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors border-b border-transparent hover:border-orange-500 pb-0.5"
                              >
                                 View Full Ticket on KonfHub <ExternalLink className="w-3 h-3" />
                              </a>
                           </div>
                        </div>
                     </motion.div>
                  )}
               </AnimatePresence>
            </div>
         </div>
      </section>
   );
};

export default MyTicket;
