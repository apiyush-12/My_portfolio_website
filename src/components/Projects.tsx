import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Code } from 'lucide-react';

export const Projects: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <section id="projects" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Projects</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden hover:bg-white/[0.04] transition-all"
          >
            {project.image && (
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-indigo-500/10 rounded-xl text-indigo-400">
                <Code className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                {project.dates}
              </span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              {project.title}
            </h3>
            
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {project.bullets[0]}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.split(', ').map((tech: string, j: number) => (
                <span key={j} className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-500/20">
                  {tech}
                </span>
              ))}
            </div>
            
            <a href={project.links} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors">
              View Project <ExternalLink className="w-4 h-4" />
            </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
