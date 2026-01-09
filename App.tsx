
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, input, textarea, [onClick]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-8 h-8 rounded-full border border-blue-500/50 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? 'rgba(2, 125, 253, 0.2)' : 'rgba(0,0,0,0)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="custom-cursor fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-blue-400 pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
};

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-blue-500/30 bg-[#050507]">
      <CustomCursor />
      <motion.div className="fixed top-0 left-0 right-0 h-1 flutter-gradient z-[100] origin-left" style={{ scaleX }} />

      <Navbar />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="py-24 px-6 max-w-7xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <motion.div whileHover={{ scale: 1.02 }} className="relative group">
                <div className="w-full h-[450px] rounded-3xl overflow-hidden glass-card">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                    alt="Ashikur Rahman" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 flutter-gradient rounded-full blur-3xl opacity-20 -z-10"></div>
              </motion.div>
              
              <div>
                <h2 className="text-3xl font-bold mb-2">About <span className="text-gradient">Ashikur Rahman</span></h2>
                <p className="text-blue-400 font-medium mb-6 uppercase tracking-widest text-sm">Professional Flutter Developer</p>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  I specialize in creating beautiful, cross-platform mobile applications using Flutter. 
                  My goal is to build digital experiences that are not only functional but also a joy to use. 
                  With a deep understanding of Dart and the Flutter ecosystem, I bring complex ideas to life.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { val: '3+', label: 'Years Exp.' },
                    { val: '20+', label: 'Projects' },
                    { val: 'Fast', label: 'Performance' },
                    { val: 'Clean', label: 'Codebase' }
                  ].map((stat, i) => (
                    <div key={i} className="p-4 glass-card rounded-2xl border border-white/5">
                      <p className="text-xl font-bold text-gradient">{stat.val}</p>
                      <p className="text-slate-500 text-xs uppercase font-semibold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center text-slate-500">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ashikur Rahman. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-6 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
          <a href="https://github.com/ashik116" target="_blank" rel="noreferrer">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
