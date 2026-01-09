
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import AIChatBot from './components/AIChatBot';
import { EXPERIENCES, BIOGRAPHY, PROFILE_IMAGE_URL, NAME, LINKEDIN_URL, GITHUB_URL, PHONE } from './constants';

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

  const whatsappNumber = PHONE.replace(/\D/g, '');

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
        <div className="mt-6 flex justify-center items-center gap-6">
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
        </div>
      </footer>

      <AIChatBot />
    </div>
  );
};

export default App;
