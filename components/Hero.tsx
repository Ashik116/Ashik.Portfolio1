
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PROFILE_IMAGE_URL, NAME, RESUME_URL } from '../constants';

const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" as const } },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center relative overflow-hidden bg-[#050507]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] bg-cyan-500/10 blur-[100px] rounded-full"></div>
      </div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-12 glass-card rounded-full border border-blue-500/20 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/5"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for New Opportunities
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative mb-14 inline-block group">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" as const }}
            className="absolute -inset-8 border border-dashed border-white/5 rounded-full pointer-events-none"
          />
          
          <div className="absolute -inset-2 flutter-gradient rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse"></div>
          
          <div className="relative w-44 h-44 md:w-60 md:h-60 rounded-full p-1 flutter-gradient shadow-[0_0_50px_rgba(2,125,253,0.3)]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#0a0a0c] p-1 ring-4 ring-black/50">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt={NAME} 
                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400';
                }}
              />
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
            className="absolute -right-4 top-4 glass-card p-3 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/40 transition-colors"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Flutter" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" as const, delay: 1 }}
            className="absolute -left-4 bottom-8 glass-card p-3 rounded-2xl shadow-2xl border border-white/10 hover:border-blue-500/40 transition-colors"
          >
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-8 h-8 md:w-10 md:h-10" alt="Dart" />
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tight leading-[0.9] max-w-5xl mx-auto"
        >
          Building <span className="text-gradient">Fast.</span> <br /> 
          Living <span className="text-gradient">Fluid.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl mb-14 leading-relaxed font-medium px-4 opacity-80"
        >
          I'm {NAME}, a Lead Flutter Developer focused on crafting high-performance, 
          pixel-perfect mobile applications.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <motion.a 
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects" 
            className="w-full sm:w-auto flutter-gradient px-8 py-5 rounded-2xl text-white font-black shadow-[0_20px_40px_rgba(2,125,253,0.3)] flex items-center justify-center gap-3 group"
          >
            Explore Projects
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            href={RESUME_URL}
            download
            className="w-full sm:w-auto px-8 py-5 rounded-2xl glass-card font-bold border border-blue-500/30 flex items-center justify-center gap-3 transition-all backdrop-blur-2xl text-blue-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download CV
          </motion.a>

          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
            whileTap={{ scale: 0.98 }}
            href="https://digitalpylot.io/team/md-ashikur-rahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-5 rounded-2xl glass-card font-bold border border-white/10 flex items-center justify-center gap-3 transition-all backdrop-blur-2xl"
          >
            Present Job
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-20"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
