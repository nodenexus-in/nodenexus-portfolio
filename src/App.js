import React, { useEffect, useRef, useState } from 'react';
import Cursor     from './components/Cursor';
import Navbar     from './components/Navbar';
import Hero       from './components/Hero';
import About      from './components/About';
import Services   from './components/Services';
import Projects   from './components/Projects';
import Pricing    from './components/Pricing';
import Testimonials from './components/Testimonials';
import Process    from './components/Process';
import CTA        from './components/CTA';
import Footer     from './components/Footer';

export default function App() {
  // Scroll-reveal: add `.in` to every `.rv` element when it enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.rv').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <div className="dvd" />
        <Services />
        <div className="dvd" />
        <Projects />
        <Pricing />
        <div className="dvd" />
        <Testimonials />
        <div className="dvd" />
        <Process />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
