import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';

export const Experience: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <section id="experience" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Experience</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-6">
        {data.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} index={i} />
        ))}
      </div>
    </section>
  );
};

const ExperienceCard: React.FC<{ exp: any; index: number }> = ({ exp, index }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden"
    >
      <div 
        className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-start gap-4">
          <div className="p-3 bg-white/5 rounded-xl hidden md:block">
            <Briefcase className="w-6 h-6 text-indigo-400" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
            <div className="text-indigo-400 font-medium mb-2">{exp.company}</div>
            <div className="flex flex-wrap gap-3 text-sm text-gray-400">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {exp.dates}</span>
              <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {exp.location}</span>
            </div>
          </div>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="p-2 bg-white/5 rounded-full self-start md:self-center"
        >
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 pt-0 border-t border-white/5">
              <ul className="space-y-3 mt-4">
                {exp.bullets.map((bullet: string, i: number) => {
                  // Highlight percentages
                  const parts = bullet.split(/(\d+\+?%)/);
                  return (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0"></span>
                      <span className="leading-relaxed">
                        {parts.map((part, j) => 
                          /(\d+\+?%)/.test(part) ? (
                            <span key={j} className="text-indigo-300 font-bold bg-indigo-500/10 px-1 rounded">{part}</span>
                          ) : (
                            part
                          )
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
