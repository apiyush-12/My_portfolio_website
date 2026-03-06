import React from 'react';
import { motion } from 'motion/react';

export const Skills: React.FC<{ data: any[] }> = ({ data }) => {
  return (
    <section id="skills" className="scroll-mt-24">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <h2 className="text-3xl font-display font-bold mb-2">Skills</h2>
        <div className="w-12 h-1 bg-indigo-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((skillGroup, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/[0.02] border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">{skillGroup.group}</h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((item: string, j: number) => (
                <span 
                  key={j} 
                  className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 hover:bg-white/10 hover:border-indigo-500/50 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
