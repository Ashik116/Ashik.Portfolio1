
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 mx-auto max-w-7xl">
      <div className="glass-card px-6 py-4 rounded-2xl flex justify-between items-center shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 cursor-pointer" onClick={(e: any) => handleScroll(e, 'hero')}>
          <div className="w-8 h-8 flutter-gradient rounded-lg flex items-center justify-center font-bold text-white shadow-lg shadow-blue-500/20">A</div>
          <span className="font-bold text-xl tracking-tight">Ashik <span className="text-blue-500">Rahman</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {['about', 'projects', 'skills', 'contact'].map((item) => (
            <a 
              key={item}
              href={`#${item}`} 
              onClick={(e) => handleScroll(e, item)} 
              className="hover:text-blue-400 transition-colors capitalize"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="hidden md:block flutter-gradient px-5 py-2.5 rounded-xl text-white text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
          >
            Hire Me
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-24 left-4 right-4 glass-card rounded-2xl p-6 shadow-2xl border border-blue-500/20"
          >
            <div className="flex flex-col gap-6 text-center">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`} 
                  onClick={(e) => handleScroll(e, item)} 
                  className="text-lg font-medium hover:text-blue-400 transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => handleScroll(e, 'contact')}
                className="flutter-gradient py-3 rounded-xl text-white font-bold"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
