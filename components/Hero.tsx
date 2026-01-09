
import React from 'react';
import { motion } from 'framer-motion';
import { PROFILE_IMAGE_URL, NAME } from '../constants';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-32 pb-20 text-center relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 blur-[150px] rounded-full -z-10"></div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 mb-10 glass-card rounded-full border border-blue-500/30 text-blue-400 text-[11px] font-bold uppercase tracking-[0.25em] shadow-lg shadow-blue-500/10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span>
          </span>
          Currently Open for Projects
        </motion.div>
        
        <motion.div variants={itemVariants} className="relative mb-12 inline-block">
          {/* Animated Glow Behind Photo */}
          <div className="absolute -inset-1 flutter-gradient rounded-full blur opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-6 border border-dashed border-blue-500/20 rounded-full"
          />
          
          <div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full p-1.5 flutter-gradient shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#050507] p-1">
              <img 
                src={PROFILE_IMAGE_URL} 
                alt={NAME} 
                className="w-full h-full object-cover rounded-full transition-all duration-500 hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300';
                }}
              />
            </div>
          </div>

          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-6 top-2 glass-card p-2.5 rounded-2xl shadow-xl border-blue-500/20"
          >
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" className="w-9 h-9" alt="Flutter" />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-6 bottom-6 glass-card p-2.5 rounded-2xl shadow-xl border-blue-500/20"
          >
             <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" className="w-9 h-9" alt="Dart" />
          </motion.div>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-9xl font-extrabold mb-8 tracking-tighter leading-[0.95] max-w-5xl mx-auto"
        >
          Design <span className="text-gradient">Fast.</span> <br /> 
          Build <span className="text-gradient">Fluid.</span>
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl mx-auto text-slate-400 text-lg md:text-2xl mb-14 leading-relaxed font-light px-4"
        >
          {NAME} — Crafting pixel-perfect mobile experiences 
          with the power of Flutter and Dart.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-5 justify-center items-center"
        >
          <motion.a 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="#projects" 
            className="flutter-gradient px-10 py-5 rounded-2xl text-white font-bold shadow-2xl shadow-blue-500/30 flex items-center gap-3 group"
          >
            View My Work
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
          
          <motion.a 
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.08)' }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="px-10 py-5 rounded-2xl glass-card font-bold border border-white/10 flex items-center gap-3 transition-all backdrop-blur-xl"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-500 flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-blue-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
