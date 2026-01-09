
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-28">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
        <div className="h-1.5 w-20 flutter-gradient rounded-full"></div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card rounded-3xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 relative flex flex-col h-full"
          >
            <div className="h-56 overflow-hidden relative">
              <motion.img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center gap-4">
                <a href={project.githubLink} target="_blank" className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm hover:scale-105 transition-transform">GitHub Code</a>
                {project.demoLink && <a href={project.demoLink} target="_blank" className="px-6 py-2 flutter-gradient text-white font-bold rounded-full text-sm hover:scale-105 transition-transform">Live Demo</a>}
              </div>
            </div>
            
            <div className="p-8 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                {project.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
