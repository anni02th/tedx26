import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RopeDivider from './components/RopeDivider';
import About from './components/About';
import Countdown from './components/Countdown';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import PastEvents from './components/PastEvents';
import Footer from './components/Footer';
import StatsBar from './components/StatsBar';
import ScrollProgress from './components/ScrollProgress';
import ClickSpark from './components/ClickSpark';
import CustomCursor from './components/CustomCursor';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Committee from './components/Committee';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fallback: If video doesn't load or plays too long, stop loading after 8 seconds (adjust as needed)
    const fallbackTimer = setTimeout(() => {
      setLoading(false);
    }, 8000);
    return () => clearTimeout(fallbackTimer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center overflow-hidden">
        {/* Mobile Video */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          onEnded={() => setLoading(false)}
        >
          <source src="/load-mob.mp4" type="video/mp4" />
        </video>

        {/* Laptop/Desktop Video */}
        <video
          autoPlay
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
          onEnded={() => setLoading(false)}
        >
          <source src="/load-lap.mp4" type="video/mp4" />
        </video>
      </div>
    );
  }

  return (
    <Router>
      <div className="bg-black min-h-screen text-white overflow-x-hidden selection:bg-orange-500 selection:text-black">
        <ScrollProgress />
        <ClickSpark />
        <CustomCursor />

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <StatsBar />
                <RopeDivider />
                <About />
                <RopeDivider />
                <section id="timeline-countdown" className="py-10 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')]">
                  <Countdown />
                </section>
                <RopeDivider />
                <Speakers />
                <RopeDivider />
                <Timeline />
                <RopeDivider />
                <VideoSection />
                <RopeDivider />
                <PastEvents />
              </main>
              <Footer />
            </>
          } />

          <Route path="/committee" element={<Committee />} />
          <Route path="/ticketing" element={<Tickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
