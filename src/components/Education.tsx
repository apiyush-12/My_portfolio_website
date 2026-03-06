import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export const Education: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <section id="education" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Education</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-4">
        {data.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="p-3 bg-white/5 rounded-xl h-fit hidden sm:block">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                <span className="text-sm font-mono text-gray-500 mt-1 sm:mt-0">{edu.dates}</span>
              </div>
              <div className="text-indigo-400 mb-2">{edu.area}</div>
              <div className="inline-block px-3 py-1 bg-white/5 rounded-lg text-sm font-medium text-gray-300 border border-white/10">
                {edu.score}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
