
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';
import { EXPERIENCES, BIOGRAPHY, PROFILE_IMAGE_URL, NAME } from './constants';

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

const ExperienceItem: React.FC<{ exp: typeof EXPERIENCES[0] }> = ({ exp }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="relative pl-8 pb-12 border-l-2 border-white/10 last:pb-0"
  >
    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full flutter-gradient ring-4 ring-[#050507]" />
    <span className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-1 block">{exp.period}</span>
    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
    <p className="text-white/60 text-sm font-medium mb-4">{exp.company}</p>
    <p className="text-slate-400 text-sm leading-relaxed max-w-2xl">{exp.description}</p>
  </motion.div>
);

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
        <Hero />

        <section id="about" className="py-32 px-6 scroll-mt-32">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass-card relative z-10 border border-white/10 p-2">
                <img 
                  src={PROFILE_IMAGE_URL} 
                  alt={NAME} 
                  className="w-full h-full object-cover rounded-2xl transition-all duration-700 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 flutter-gradient blur-[100px] opacity-20" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-600 blur-[100px] opacity-20" />
            </motion.div>

            <div>
              <h2 className="text-4xl font-bold mb-6">Building the <span className="text-gradient">Future of Mobile.</span></h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10">
                {BIOGRAPHY}
              </p>
              
              <div className="space-y-12">
                <h3 className="text-2xl font-bold border-b border-white/5 pb-4">Experience</h3>
                <div>
                  {EXPERIENCES.map((exp, i) => (
                    <ExperienceItem key={i} exp={exp} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Projects />
        <Skills />
        <Contact />
      </main>
      
      <footer className="py-12 border-t border-white/5 text-center text-slate-500">
        <p className="text-sm">&copy; {new Date().getFullYear()} {NAME}. All rights reserved.</p>
        <div className="mt-6 flex justify-center gap-6">
          <a href="https://github.com/Ashik116/Ashik.Portfolio1" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
